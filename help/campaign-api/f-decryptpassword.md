---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '80'
ht-degree: 45%
---
# decryptPassword

> 警告 :
>
> このドキュメントは更新されました。 詳しくは、この[&#x200B; ページ &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-classic/using/technotes/gcm-functions#decryptpassword-headding-anchor-decryptpassword-javascript)を参照してください。

外部アカウントに保存されているパスワードを復号化します。

```text
decryptPassword (str)
```

## パラメーター

**str**&#x200B;暗号化された文字列。

## 戻り値

プレーンテキストのパスワードを返します。

## 備考

この関数は、ワークフロー、web アプリケーション、レポート、配信では呼び出すことができません。 JSSP または SOAP 呼び出し実装では、呼び出すことができます。 例：

```javascript
          function nms_extAccount_LogonToRemoteInstance(remoteInstanceUrl, login, encryptedPassword) {
          var cnx = null, sessionService = null;
          try
              {
                  var cnx = new HttpSoapConnection(remoteInstanceUrl + '/nl/jsp/soaprouter.jsp', 'utf-8', 0);
                  sessionService = new SoapService(cnx, 'xtk:session');
                  sessionService.addMethod("Logon", "xtk:session#Logon",
                      ["token", "string", "login", "string", "password", "string", "parameters", "NLElement"],
                      ["sessionToken", "string", "sessionInfo", "NLElement", "securityToken", "string"]);
                  return sessionService.Logon("", login, decryptPassword(encryptedPassword), <parameters/>);
              }
          catch( e ) {
          logError(e);
          }
          finally {
          if( sessionService ) sessionService.dispose();
          if( cnx ) cnx.dispose();
          }
          })
      
```

## 機能

**次の場所で利用できます：**

* SOAP メソッド
