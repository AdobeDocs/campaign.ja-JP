var loop = 1;
var startLine = 0;
var lineCount = 5000;
var processedDeliveries = 0;
var heraldDeliveries = 0;
var alreadyPatchedDeliveries = 0;
var patchedDeliveries = 0;
var notPatchedDeliveries = 0;
this.mode = (["dry", "run"].indexOf(application.arg) > 0) ? application.arg : "dry";
if (this.mode === "dry") {
  logInfo("Dry run: no update will be performed on the database.");
} else {
  logInfo("Updates will be performed on the database.");
}

while (true) {
  var xmlQuery = <queryDef schema="nms:delivery" operation="select" startLine={startLine} lineCount={lineCount}>
                    <select>
                      <node expr="@id"/>
                      <node expr="@label"/>
                      <node expr="@internalName"/>
                      <node expr="@isModel"/>
                    </select>
                    <where>
                      <condition boolOperator="AND" expr="@messageType = 42"/>
                      <condition boolOperator="AND" expr="@state = 0"/>
                              <condition boolOperator="AND" expr="@deleteStatus = 0"/>
                    </where>
                    <orderBy>
                      <node expr="@id"/>
                    </orderBy>
                  </queryDef>;

  var deliveryList = xtk.queryDef.create(xmlQuery).ExecuteQuery();
  for each(var delivery in deliveryList) {
    // update counter
    processedDeliveries++;
    var strData = sqlGetMemo("SELECT mData FROM NmsDelivery WHERE iDeliveryId = " + delivery.@id );
    logInfo("Processing delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");

    // do not process Herald deliveries / delivery templates as they are not concerned by the migration
    const heraldRegExp = /(launchApp.[appId|keyType]*)/g;
    const heraldMatch = strData.match(heraldRegExp);
    if (heraldMatch !== null) {
      if( delivery.@isModel == 0 ) {
        logInfo("Ignoring Herald delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
      } else {
        logInfo("Ignoring Herald delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
      }
      // update counter
      heraldDeliveries++;
      continue;
    }

    // do not process already patched deliveries / delivery templates
    const patchedRegExp = /(mobileApp.fcmProtocol)/g;
    const pathedMatch = strData.match(patchedRegExp);
    if (pathedMatch !== null) {
      if( delivery.@isModel == 0 ) {
        logInfo("Ignoring already patched delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
      } else {
        logInfo("Ignoring already patched delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
      }
      // update counter
      alreadyPatchedDeliveries++;
      continue;
    }

    // Let's check multi-line form...
    const delRegExp = /(%[\r\n|\r|\n]*?  if\( appSubscription\.mobileApp\.label!='' && appSubscription\.mobileApp\.)(img)([\s\S]*?)(String\(message\.delivery\.idTracking\))/gm;
    const delSubst = "$1img!='' && appSubscription.mobileApp.fcmProtocol!='' && \n      ( ( appSubscription.mobileApp.senderId!='' && appSubscription.mobileApp.password!='' ) || \n        ( appSubscription.mobileApp.fcmProjectId!='' && appSubscription.mobileApp.fcmPrivateKey!='' && appSubscription.mobileApp.fcmClientEmail!='' ) )  &&  \n        $4";
    const strData1 = strData.replace(delRegExp, delSubst);
    if (strData1 !== strData) {
      if (this.mode === "run") {
        if( delivery.@isModel == 0 ) {
          logInfo("Updating androidCheckParams for delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
        } else {
          logInfo("Updating androidCheckParams for delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
        }
        sqlExec("UPDATE NmsDelivery SET mData = $(m) WHERE iDeliveryId = " + delivery.@id, strData1);
      } else {
        if( delivery.@isModel == 0 ) {
          logInfo("Dry run: Would update androidCheckParams for delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
        } else {
          logInfo("Dry run: Would update androidCheckParams for delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
        }
      }
      // update counter
      patchedDeliveries++;
    } else {
      // Let's check multi-line (rtEvent)...
      const delRtRegExp = /(%[\r\n|\r|\n]*?      if\( rtEvent\.mobileApp\.label!='' && rtEvent\.mobileApp\.)(img)([\s\S]*?)(String\(message\.delivery\.idTracking\))/g;
      const delRtSubst = "$1img!='' && rtEvent.mobileApp.fcmProtocol!='' && \n          ( ( rtEvent.mobileApp.senderId!='' && rtEvent.mobileApp.password!='' ) || \n            ( rtEvent.mobileApp.fcmProjectId!='' && rtEvent.mobileApp.fcmPrivateKey!='' && rtEvent.mobileApp.fcmClientEmail!='' ) )  &&  \n            $4";
      const strData1b = strData.replace(delRtRegExp, delRtSubst);
      if (strData1b !== strData) {
        if (this.mode === "run") {
          if( delivery.@isModel == 0 ) {
            logInfo("Updating androidCheckParams for rt delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
          } else {
            logInfo("Updating androidCheckParams for rt delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
          }
          sqlExec("UPDATE NmsDelivery SET mData = $(m) WHERE iDeliveryId = " + delivery.@id, strData1b);
        } else {
          if( delivery.@isModel == 0 ) {
            logInfo("Dry run: Would update androidCheckParams for rt delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
          } else {
            logInfo("Dry run: Would update androidCheckParams for rt delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
          }
        }
        // update counter
        patchedDeliveries++;
      } else {
        // Let's check single-line form...
        const delTemplateRegExp = /(%[ ]*?if\( appSubscription\.mobileApp\.label!='' && appSubscription\.mobileApp\.)(img)([\s\S]*?)(String\(message\.delivery\.idTracking\))/g;
        const delTemplateSubst = "$1img!='' && appSubscription.mobileApp.fcmProtocol!='' && (( appSubscription.mobileApp.senderId!='' && appSubscription.mobileApp.password!='' ) || ( appSubscription.mobileApp.fcmProjectId!='' && appSubscription.mobileApp.fcmPrivateKey!='' && appSubscription.mobileApp.fcmClientEmail!='' ) )  &&  $4";
        const strData2 = strData.replace(delTemplateRegExp, delTemplateSubst);
        if (strData2 !== strData) {
          if (this.mode === "run") {
            if( delivery.@isModel == 0 ) {
              logInfo("Updating androidCheckParams for delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
            } else {
              logInfo("Updating androidCheckParams for delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
            }
            sqlExec("UPDATE NmsDelivery SET mData = $(m) WHERE iDeliveryId = " + delivery.@id, strData2);
          } else {
            if( delivery.@isModel == 0 ) {
              logInfo("Dry run: Would update androidCheckParams for delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
            } else {
              logInfo("Dry run: Would update androidCheckParams for delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
            }
          }
          // update counter
          patchedDeliveries++;
        } else {
          // Let's check single-line (rtEvent)...
          const delRtTemplateRegExp = /(%[ ]*?if\( rtEvent\.mobileApp\.label!='' && rtEvent\.mobileApp\.)(img)([\s\S]*?)(String\(message\.delivery\.idTracking\))/g;
          const delRtTemplateSubst = "$1img!='' && rtEvent.mobileApp.fcmProtocol!='' && ( ( rtEvent.mobileApp.senderId!='' && rtEvent.mobileApp.password!='' ) || ( rtEvent.mobileApp.fcmProjectId!='' && rtEvent.mobileApp.fcmPrivateKey!='' && rtEvent.mobileApp.fcmClientEmail!='' ) )  && $4";
          const strData2b = strData.replace(delRtTemplateRegExp, delRtTemplateSubst);
          if (strData2b !== strData) {
            if (this.mode === "run") {
              if( delivery.@isModel == 0 ) {
                logInfo("Updating androidCheckParams for rt delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
              } else {
                logInfo("Updating androidCheckParams for rt delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
              }
              sqlExec("UPDATE NmsDelivery SET mData = $(m) WHERE iDeliveryId = " + delivery.@id, strData2b);
            } else {
              if( delivery.@isModel == 0 ) {
                logInfo("Dry run: Would update androidCheckParams for rt delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
              } else {
                logInfo("Dry run: Would update androidCheckParams for rt delivery template (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
              }
            }
            // update counter
            patchedDeliveries++;
          } else {
            logInfo("No patchable androidCheckParams formula for delivery (id:" + delivery.@id + ",  label:'" + delivery.@label + "', name:'" + delivery.@internalName + "')");
            // update counter
            notPatchedDeliveries++;
          }
        }
      }
    }
  }

  if (deliveryList.*.length() < lineCount) {
    // last batch
    break;
  } else {
    // prepare next round
    startLine = startLine + lineCount;
    logInfo("Batch number " + loop + " of " + lineCount + " deliverie(s) or delivery template(s) processed: moving to the next one");
    loop++;
  }
}

if (processedDeliveries != 0) {
  logInfo("Summary (" + processedDeliveries + " processed deliverie(s) or delivery template(s)):");
  if (notPatchedDeliveries != 0) {
    logWarning("- " + notPatchedDeliveries + " had not patchable androidCheckParams formula!");
  }
  if (patchedDeliveries != 0) {
    logInfo("- " + patchedDeliveries + " had androidCheckParams formula patched.");
  }
  if (alreadyPatchedDeliveries != 0) {
    logInfo("- " + alreadyPatchedDeliveries + " ignored as alreading having androidCheckParams formula patched.");
  }
  if (heraldDeliveries != 0) {
    logInfo("- " + heraldDeliveries + " ignored as processed through Herald.");
  }
} else {
  logInfo("No delivery or delivery template had androidCheckParams formula patched.");
}
