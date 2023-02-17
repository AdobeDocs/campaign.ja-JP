---
title: Campaign SDKとアプリの統合
description: Campaign AndroidおよびiOS SDKをアプリケーションに統合する方法について学ぶ
version: v8
feature: Push
role: Admin, Developer
level: Intermediate, Experienced
exl-id: 31c13d7e-55d1-4fbb-82e0-5779a17d65ac
source-git-commit: 6464e1121b907f44db9c0c3add28b54486ecf834
workflow-type: ht
source-wordcount: '1283'
ht-degree: 100%

---

# Campaign SDKとアプリの統合 {#integrate-campaign-sdk}

iOS および Android 用の Campaign SDK を使用すると、モバイルアプリケーションを Adobe Campaign プラットフォームに簡単に統合できます。

Android および iOS でサポートされているバージョン、Campaign v8 用の Campaign SDK 互換バージョンは、[互換性マトリックス](../start/compatibility-matrix.md#MobileSDK)に記載されています。

>[!NOTE]
>
>Campaign 管理者は、[Experience Cloud ソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/jp/campaign.html)から Campaign SDK をダウンロードできます。 詳しくは、[Adobe カスタマーケア](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html)にお問い合わせください。


## 統合設定の宣言 {#declaring-integration-settings}

Campaign SDK をモバイルアプリケーションに統合するには、担当の管理者がデベロッパーに次の情報を提供する必要があります。

* **統合キー**：Adobe Campaign プラットフォームでモバイルアプリケーションを特定できるようにします。

   >[!NOTE]
   >
   >この統合キーは、Adobe Campaign コンソールのモバイルアプリケーション専用サービスの「**[!UICONTROL 情報]**」タブに入力されます。[Campaign Classic v7 のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application.html?lang=ja#creating-ios-app)を参照してください。

* **トラッキング URL**：Adobe Campaign トラッキングサーバーのアドレスと一致します。
* **マーケティング URL**：購読のコレクションを有効にします。

* **Android**：

   ```sql
   Neolane.getInstance().setIntegrationKey("your Adobe mobile app integration key");
   Neolane.getInstance().setMarketingHost("https://yourMarketingHost:yourMarketingPort/");
   Neolane.getInstance().setTrackingHost("https://yourTrackingHost:yourTrackingPort/"); 
   ```

* **iOS**：

   ```sql
   Neolane_SDK *nl = [Neolane_SDK getInstance];
   [nl setMarketingHost:strMktHost];
   [nl setTrackingHost:strTckHost];
   [nl setIntegrationKey:strIntegrationKey];
   ```

## Android SDK の統合

Android SDK は、JAVA で記述された jar ライブラリです。 Android 開発者は Adobe Campaign と統合し、新しいデバイスの登録、デバイスとユーザーのリンク、動作の追跡などを行うことができます。

このセクションでは、[Google Firebase Cloud Messaging（FCM）](https://firebase.google.com/docs/cloud-messaging/)を実装する Android アプリケーションで Android SDK を使用する方法について説明します。

>[!CAUTION]
>
> Campaign v8 の場合は、Campaign Android SDK v1.1.1 を使用します。

### FCM の設定

Android でプッシュ通知を使用するには、FCM アカウントを持ち、通知を受信するように Android アプリケーションを設定し、アプリケーションを FCM アカウントにリンクする必要があります。詳しくは、[Google ドキュメント](https://firebase.google.com/docs/cloud-messaging/)を参照してください。

AndroidプロジェクトにFirebaseを追加するには、[Googleドキュメント](https://firebase.google.com/docs/android/setup)を参照してください。

[Googleドキュメント](https://firebase.google.com/docs/android/setup)で、アプリケーションにFCMを実装する方法を説明します。

>[!NOTE]
>
> * 必ず google-services.json をダウンロードしてプロジェクトに追加してください。
>
> * `apiKey`は、この Android アプリケーションにリンクされている Adobe Campaign モバイルアプリケーションの `projectKey` セットと一致する必要があります。


### Android SDK の設定

1. **SDK の初期化**

   Android SDK を使用する前に、初期化する必要があります。 SDK の初期化は、アクティビティの `onCreate` 関数で実行できます。

   ```sql
   /** Called when the activity is first created. */
   @Override
   public void onCreate(Bundle savedInstanceState)
   {
       super.onCreate(savedInstanceState);
   
       // initialize Campaign SDK
       SharedPreferences settings = getSharedPreferences(YourApplicationActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
   
       Neolane.getInstance().setIntegrationKey(settings.getString(YourApplicationActivity.APPUUID_NAME, YourApplicationActivity.DFT_APPUUID));
       Neolane.getInstance().setMarketingHost(settings.getString(YourApplicationActivity.SOAPRT_NAME, YourApplicationActivity.DFT_SOAPRT));
       Neolane.getInstance().setTrackingHost(settings.getString(YourApplicationActivity.TRACKRT_NAME, YourApplicationActivity.DFT_TRACKRT));
       ...
   }
   ```

   `IntegrationKey` は、この Android アプリケーションにリンクされている Adobe Campaign モバイルアプリケーションの「IntegrationKey」セットと一致する必要があります。

1. **モバイルデバイスを Adobe Campaign サーバーに登録する**

   登録関数によってできることは次のとおりです。

   * 通知 ID またはプッシュ ID（iOS の deviceToken および Android の registrationID）を Adobe Campaign に送信します。
   * 紐付けキーまたは userKey（例えば E メールやアカウント番号）を復元します。

   アプリケーションの初期化時またはユーザーの操作時に、デバイスを Adobe Campaign に登録する必要があります。`registerDevice` メソッドを使用すると、簡単に実行できます。

   ```sql
   public void onClick(View v)
   {
   SharedPreferences settings = this.context.getSharedPreferences(YourApplicationActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
   EditText mailEdit = (EditText) this.context.findViewById(R.id.editText1);
   
   final String FCMRegistrationId = FirebaseInstanceId.getInstance().getToken();
   if (FCMRegistrationId != null)
       NeoTripActivity.registerOnNeolane(this.context, FCMRegistrationId, mailEdit.getText().toString());
   
   }
   ```

   YourApplicationActivity.java

   ```sql
   public static void registerOnNeolane(final Context ctx, String registrationId, String userKey)
   {
       NeolaneAsyncRunner neolaneAs = new NeolaneAsyncRunner(Neolane.getInstance());
       // Additional Subscription Parameters
       Map<String,Object> additionnalParam = new HashMap<String, Object>();
       additionnalParam.clear();
       SharedPreferences settings = ctx.getSharedPreferences(YourApplicationActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
       if (settings.getBoolean(YourApplicationActivity.SUBPARAMEN1_NAME, false))
       {
           additionnalParam.put(settings.getString(YourApplicationActivity.SUBPARAMNAME1_NAME, "") , settings.getString(YourApplicationActivity.SUBPARAMVALUE1_NAME, ""));   
       }
       if (settings.getBoolean(YourApplicationActivity.SUBPARAMEN2_NAME, false))
       {
           additionnalParam.put(settings.getString(YourApplicationActivity.SUBPARAMNAME2_NAME, "") , settings.getString(YourApplicationActivity.SUBPARAMVALUE2_NAME, ""));   
       }
       if ( additionnalParam.isEmpty() )
       {
           additionnalParam = null;
       }
       // Campaign Registration
       neolaneAs.registerDevice(registrationId, userKey, additionnalParam, ctx, new RequestListener() {
       public void onComplete(String e, Object obj)
       {
           Intent upd = new Intent();
           upd.setAction(BROADCAST_NEWREGISTER_ACTION);
           ctx.sendBroadcast(upd);
       }
   
       public void onNeolaneException(NeolaneException e, Object obj)
       {
           sendErrorMsg(e.getErrorString());
       }
   
       public void onIOException(IOException e, Object obj)
       {
           sendErrorMsg(e.getMessage());
       }
   
       public void sendErrorMsg(String err)
       {
           SharedPreferences.Editor edit = ctx.getSharedPreferences(YourApplicationActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE).edit();
           edit.putBoolean(YourApplicationActivity.REGISTRATION_ERROR_NEOLANE_KEYNAME, true);
           edit.commit();
           Intent toast = new Intent();
           toast.setAction(BROADCAST_TOAST_DISPLAY_TEXT);
           toast.putExtra("text", "An error happened, please register again (" + err + ")");
           ctx.sendBroadcast(toast);
       }
       });
   }
   ```

1. **ユーザーのモバイルデバイストークンが変更されたら Campaign に通知する**

   `onTokenRefresh` 関数を呼び出して Adobe Campaign にユーザーのモバイルデバイストークンの変更を通知する際には、`registerDevice` 関数を使用することをお勧めします。

   例：

   YourApplicationFirebaseInstanceIDService.java

   ```sql
   package com.android.YourApplication;
   
   import android.content.Context;
   import android.content.SharedPreferences;
   import android.util.Log;
   
   import com.google.firebase.iid.FirebaseInstanceId;
   import com.google.firebase.iid.FirebaseInstanceIdService;
   
   import static android.content.SharedPreferences.*;
   
   public class YourApplicationFirebaseInstanceIDService extends FirebaseInstanceIdService 
   {
       @Override
       public void onTokenRefresh() 
       {
       SharedPreferences settings = getSharedPreferences(YourApplicationActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
       if (!settings.getBoolean(YourApplicationActivity.USE_GCM, false))
           {
           String refreshedToken = FirebaseInstanceId.getInstance().getToken();
           String userKey = settings.getString(YourApplicationActivity.USERKEY_NAME, "");
           Editor edit = settings.edit();
           edit.putString(YourApplicationActivity.FCM_REGISTRATIONID_NAME, refreshedToken);
           edit.commit();
           YourApplicationActivity.registerOnNeolane(this, refreshedToken, userKey);
           }
       }
   }
   ```

1. **Firebase Messaging サービスの設定**

   `onMessageReceived` コールバックで `FirebaseMessagingService` を拡張して、メッセージを受信します。`onMessageReceived` コールバックが呼び出されたら、`notifyReceive` 関数を呼び出して、モバイルデバイスでの通知受信のトラッキングを有効にすることをお勧めします。Adobe Campaign では、この名前は **print** 通知になります。この関数は、OS に通知の表示をリクエストする直前に呼び出す必要があります。

   YourApplicationMessagingService.java

   ```sql
   package com.android.YourApplication;
   
   import android.content.Context;
   import android.content.SharedPreferences;
   import android.os.Bundle;
   import android.util.Log;
   
   import com.google.firebase.messaging.FirebaseMessagingService;
   import com.google.firebase.messaging.RemoteMessage;
   
   import java.util.Iterator;
   import java.util.Map;
   import java.util.Map.Entry;
   
   public class YourApplicationFirebaseMessagingService extends FirebaseMessagingService 
       {
       private static final String TAG = "MyFirebaseMsgService";
   
       @Override
       public void onMessageReceived(RemoteMessage message) 
           {
           Log.d(TAG, "Receive message from: " + message.getFrom());
           Map<String,String> payloadData = message.getData();
           final Bundle extras = new Bundle();
           final Iterator<Entry<String, String>> iter = payloadData.entrySet().iterator();
           while(iter.hasNext())
           {
           final Entry<String, String>  entry =iter.next();
           extras.putString(entry.getKey(), entry.getValue());
           }
   
           SharedPreferences settings = this.getSharedPreferences(YourApplicationActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
           String mesg = payloadData.get("_msg");
           String title = payloadData.get("title");
           String url = payloadData.get("url");
           String messageId = payloadData.get("_mId");
           String deliveryId = payloadData.get("_dId");
           YourApplicationActivity.handleNotification(this, mesg, title, url, messageId, deliveryId, extras);
           }
       }   
   ```


   ```sql
   public static void handleNotification(Context context, String message, String title, String url, String messageId, String deliveryId, Bundle extras)
   {
       if( message == null ) message = "No Content";
       if( title == null )   title = "No title";
       if( url == null )     url = "http://www.tripadvisor.fr";
       int iconId = R.drawable.notif_neotrip;
   
       // notify Adobe Campaign that a notification just arrived
       SharedPreferences settings = context.getSharedPreferences(NeoTripActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
       Neolane.getInstance().setIntegrationKey(settings.getString(NeoTripActivity.APPUUID_NAME, NeoTripActivity.DFT_APPUUID));
       Neolane.getInstance().setMarketingHost(settings.getString(NeoTripActivity.SOAPRT_NAME, NeoTripActivity.DFT_SOAPRT));
       Neolane.getInstance().setTrackingHost(settings.getString(NeoTripActivity.TRACKRT_NAME, NeoTripActivity.DFT_TRACKRT));
   
       NeolaneAsyncRunner nas = new NeolaneAsyncRunner(Neolane.getInstance());
       nas.notifyReceive(messageId, deliveryId, new NeolaneAsyncRunner.RequestListener() {
       public void onNeolaneException(NeolaneException arg0, Object arg1) {}
       public void onIOException(IOException arg0, Object arg1) {}
       public void onComplete(String arg0, Object arg1){}
       });
       if (yourApplication.isActivityVisible())
       {
       Log.i("INFO", "The application has the focus" );
       ...
       }
       else
       {
       // notification creation
       NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
       Notification notification;
   
       // Activity to start
       Intent notifIntent = new Intent(context.getApplicationContext(), NotificationActivity.class);
       notifIntent.putExtra("notificationText", message);
       notifIntent.putExtra(NotificationActivity.NOTIFICATION_URL_KEYNAME, url);
       notifIntent.putExtra("_dId", deliveryId);
       notifIntent.putExtra("_mId", messageId);
       notifIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
       PendingIntent contentIntent = PendingIntent.getActivity(context, 1, notifIntent, PendingIntent.FLAG_UPDATE_CURRENT);
   
       notification = new Notification.Builder(context)
               .setContentTitle(title)
               .setContentText(message)
               .setSmallIcon(iconId)
               .setContentIntent(contentIntent)
               .build();
   
       // launch the notification
       notification.flags |= Notification.FLAG_AUTO_CANCEL;
       notificationManager.notify(1234, notification);
       }
   }
   ```

1. **データメッセージの開封数のトラック**

   データメッセージの場合は、`notifyOpening` 関数を使用して、ユーザーが通知をクリックして開いたタイミングを追跡できます。通知アクティビティは、ユーザーが通知をクリックすると作成されます（`onMessageReceived` 関数の呼び出し時に作成される）。

   ```sql
   public class NotificationActivity extends Activity {
       public void onCreate(Bundle savedBundle) {
           [...]
           Bundle extra = getIntent().getExtras();
           if (extra != null) {
               // reinit the Campaign sdk
               SharedPreferences settings = getSharedPreferences(NeoTripActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
               Neolane.getInstance().setIntegrationKey(settings.getString(NeoTripActivity.APPUUID_NAME, NeoTripActivity.DFT_APPUUID));
               Neolane.getInstance().setMarketingHost(settings.getString(NeoTripActivity.SOAPRT_NAME, NeoTripActivity.DFT_SOAPRT));               
               Neolane.getInstance().setTrackingHost(settings.getString(NeoTripActivity.TRACKRT_NAME, NeoTripActivity.DFT_TRACKRT));
   
               // Get the messageId and the deliveryId to perform tracking
               String deliveryId = extra.getString("_dId");
               String messageId = extra.getString("_mId");
   
               if (deliveryId != null && messageId != null) 
               {
                   try {
                   Neolane.getInstance().notifyOpening(messageId, Integer.valueOf(deliveryId));
                   } catch (NeolaneException e) {
                   // ...
                   } catch (IOException e) {
                   // ...
                   }
               }
           }
       }
   }
   ```

1. **通知メッセージの開封数およびクリック数のトラック**

   通知メッセージの場合、開封／クリックの追跡は、次に示すように、アプリケーション起動アクティビティ内の `notifyOpening` 関数を使用しておこなう必要があります。

   ```sql
   /** Called when the activity is first created. */
   @Override
   public void onCreate(Bundle savedInstanceState)
   {
       super.onCreate(savedInstanceState);
   
       SharedPreferences settings = getSharedPreferences(NeoTripActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
   
       // initialize Campaign SDK
       Neolane.getInstance().setIntegrationKey(settings.getString(NeoTripActivity.APPUUID_NAME, NeoTripActivity.DFT_APPUUID));
       Neolane.getInstance().setMarketingHost(settings.getString(NeoTripActivity.SOAPRT_NAME, NeoTripActivity.DFT_SOAPRT));
       Neolane.getInstance().setTrackingHost(settings.getString(NeoTripActivity.TRACKRT_NAME, NeoTripActivity.DFT_TRACKRT));
   ...
   ...
   ...
   
       // Manage opening/receive tracking of message notification
       Intent intent = getIntent();
       Bundle data = intent.getExtras();
       String messageId = null, deliveryId = null;
       if( data != null ) {
       if (data.containsKey("_mId")) messageId = data.get("_mId").toString();
       if (data.containsKey("_dId")) deliveryId = data.get("_dId").toString();
       if ( messageId != null && deliveryId != null) {
           Log.i(TAG, "Notify opening from backgroun click_action");
           NeolaneAsyncRunner nas = new NeolaneAsyncRunner(Neolane.getInstance());
           nas.notifyOpening(messageId, deliveryId, new NeolaneAsyncRunner.RequestListener() {
           public void onNeolaneException(NeolaneException arg0, Object arg1) {
               toastMessage( "error", getString(R.string.open_track_sdk_error) + arg0.getErrorCode());
           }
           public void onIOException(IOException arg0, Object arg1) {
               toastMessage( "error", getString(R.string.open_track_io_error) +  arg0.getLocalizedMessage());
           }
           public void onComplete(String arg0, Object arg1) {
               toastMessage( "error", getString(R.string.open_track_ok));
           }
           });
           nas.notifyReceive(messageId, deliveryId, new NeolaneAsyncRunner.RequestListener() {
           public void onNeolaneException(NeolaneException arg0, Object arg1) {
               toastMessage( "error", getString(R.string.rec_track_sdk_error) + arg0.getErrorCode());
           }
           public void onIOException(IOException arg0, Object arg1) {
               toastMessage( "error", getString(R.string.rec_track_io_error) +  arg0.getLocalizedMessage());
           }
           public void onComplete(String arg0, Object arg1) {
               toastMessage( "error", getString(R.string.rec_track_ok));
           }
           });
       }
       }
   }
   ```

   >[!NOTE]
   >
   > ユーザーがターゲットアクティビティ内で `click_action` オプションを使用している場合は、同様の管理をおこなう必要があります。


1. **データメッセージのトラッキングの受信**

   データメッセージの場合、トラッキングは `onMessageReceived` 呼び出しレベルで受信されます。「notifyReceive」関数を呼び出す必要があります。

   YourApplicationMessagingService.java

   ```sql
   package com.android.YourApplication;
   
   import android.content.Context;
   import android.content.SharedPreferences;
   import android.os.Bundle;
   import android.util.Log;
   
   import com.google.firebase.messaging.FirebaseMessagingService;
   import com.google.firebase.messaging.RemoteMessage;
   
   import java.util.Iterator;
   import java.util.Map;
   import java.util.Map.Entry;
   
   
   public class YourApplicationFirebaseMessagingService extends FirebaseMessagingService {
   private static final String TAG = "MyFirebaseMsgService";
   
   @Override
   public void onMessageReceived(RemoteMessage message) 
       {
           Log.d(TAG, "Receive message from: " + message.getFrom());
           Map<String,String> payloadData = message.getData();
           final Bundle extras = new Bundle();
           final Iterator<Entry<String, String>> iter = payloadData.entrySet().iterator();
           while(iter.hasNext())
           {
           final Entry<String, String>  entry =iter.next();
           extras.putString(entry.getKey(), entry.getValue());
           }
   
           SharedPreferences settings = this.getSharedPreferences(YourApplicationActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
           String mesg = payloadData.get("_msg");
           String title = payloadData.get("title");
           String url = payloadData.get("url");
           String messageId = payloadData.get("_mId");
           String deliveryId = payloadData.get("_dId");
           YourApplicationActivity.handleNotification(this, mesg, title, url, messageId, deliveryId, extras);
       }
   }
   ```

   ```sql
   public static void handleNotification(Context context, String message, String title, String url, String messageId, String deliveryId, Bundle extras){
       .....
       .....
           // notify Campaign that a notification just arrived
           SharedPreferences settings = context.getSharedPreferences(NeoTripActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
           Neolane.getInstance().setIntegrationKey(settings.getString(NeoTripActivity.APPUUID_NAME, NeoTripActivity.DFT_APPUUID));
           Neolane.getInstance().setMarketingHost(settings.getString(NeoTripActivity.SOAPRT_NAME, NeoTripActivity.DFT_SOAPRT));
           Neolane.getInstance().setTrackingHost(settings.getString(NeoTripActivity.TRACKRT_NAME, NeoTripActivity.DFT_TRACKRT));
   
           NeolaneAsyncRunner nas = new NeolaneAsyncRunner(Neolane.getInstance());
           nas.notifyReceive(messageId, deliveryId, new NeolaneAsyncRunner.RequestListener() {
               public void onNeolaneException(NeolaneException arg0, Object arg1) {}
               public void onIOException(IOException arg0, Object arg1) {}
               public void onComplete(String arg0, Object arg1){}
       });
   }
   ```

1. **通知メッセージのトラッキングの受信**

   通知メッセージの場合、トラッキングの受信は次の 2 つのレベルで設定する必要があります。

   * `onMessageReceived` （アプリケーションがバックグラウンドにない場合）：実装は前の節で行われました
   * 起動アクティビティ（または `click_action` 関数を使用する場合はターゲット設定アクティビティ）の `onCreate`（アプリケーションがバックグラウンドになっていない）。

   開封数／クリック数のトラッキングと同時におこなう必要があります。

   ```sql
   /** Called when the activity is first created. */
       @Override
       public void onCreate(Bundle savedInstanceState)
       {
           super.onCreate(savedInstanceState);
   
           SharedPreferences settings = getSharedPreferences(NeoTripActivity.APPLICATION_PREF_NAME, Context.MODE_PRIVATE);
   
           // initialize Campaign SDK
           Neolane.getInstance().setIntegrationKey(settings.getString(NeoTripActivity.APPUUID_NAME, NeoTripActivity.DFT_APPUUID));
           Neolane.getInstance().setMarketingHost(settings.getString(NeoTripActivity.SOAPRT_NAME, NeoTripActivity.DFT_SOAPRT));
           Neolane.getInstance().setTrackingHost(settings.getString(NeoTripActivity.TRACKRT_NAME, NeoTripActivity.DFT_TRACKRT));
   ...
   ...
   ...
   
       // Manage opening/receive tracking of message notification
       Intent intent = getIntent();
       Bundle data = intent.getExtras();
       String messageId = null, deliveryId = null;
       if( data != null ) {
       if (data.containsKey("_mId")) messageId = data.get("_mId").toString();
       if (data.containsKey("_dId")) deliveryId = data.get("_dId").toString();
       if ( messageId != null && deliveryId != null) {
           Log.i(TAG, "Notify opening from backgroun click_action");
           NeolaneAsyncRunner nas = new NeolaneAsyncRunner(Neolane.getInstance());
           nas.notifyOpening(messageId, deliveryId, new NeolaneAsyncRunner.RequestListener() {
           public void onNeolaneException(NeolaneException arg0, Object arg1) {
               toastMessage( "error", getString(R.string.open_track_sdk_error) + arg0.getErrorCode());
           }
           public void onIOException(IOException arg0, Object arg1) {
               toastMessage( "error", getString(R.string.open_track_io_error) +  arg0.getLocalizedMessage());
           }
           public void onComplete(String arg0, Object arg1) {
               toastMessage( "error", getString(R.string.open_track_ok));
           }
           });
           nas.notifyReceive(messageId, deliveryId, new NeolaneAsyncRunner.RequestListener() {
           public void onNeolaneException(NeolaneException arg0, Object arg1) {
               toastMessage( "error", getString(R.string.rec_track_sdk_error) + arg0.getErrorCode());
           }
           public void onIOException(IOException arg0, Object arg1) {
               toastMessage( "error", getString(R.string.rec_track_io_error) +  arg0.getLocalizedMessage());
           }
           public void onComplete(String arg0, Object arg1) {
               toastMessage( "error", getString(R.string.rec_track_ok));
           }
           });
       }
       }
   }
   ```


## iOS SDK の統合

1. **モバイルデバイスを Adobe Campaign サーバーに登録する**

   登録関数によってできることは次のとおりです。

   * 通知 ID またはプッシュ ID（iOS の deviceToken および Android の registrationID）を Adobe Campaign に送信します。
   * 紐付けキーまたは userKey（例えば E メールやアカウント番号）を復元します。

   ```sql
   // Callback called on successful registration to the APNs
    - (void)application:(UIApplication*)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData*)deviceToken
   {
     // Pass the token to Adobe Campaign
     Neolane_SDK *nl = [Neolane_SDK getInstance];
     [nl registerDevice:tokenString:self.userKey:dic];
   }
   ```

1. **トラッキング関数の有効化**

   トラッキング関数を使用すると、通知が有効化されたタイミング（開封数）を追跡できます。

   ```sql
   (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)launchOptions
   fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
   {
   if( launchOptions ) { // Retrieve notification parameters here ... // Track application opening Neolane_SDK
   *nl = [Neolane_SDK getInstance]; [nl track:launchOptions:NL_TRACK_CLICK]; } 
   ...  
   completionHandler(UIBackgroundFetchResultNoData);
   }
   ```

1. **サイレント通知のトラッキング**

   iOS では、無音の通知（表示されることなくモバイルアプリケーションに直接送信される通知またはデータ）を送信できます。Adobe Campaign では、このような通知をトラッキングすることができます。

   無音の通知をトラッキングするには、以下の例に従います。

   ```sql
   // AppDelegate.m
   ...
   ...
   #import "AppDelegate.h"
   #import "Neolane_SDK.h"
   ...
   ...
   // Callback called when the application is already launched (whether the application is running foreground or background)
   - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)launchOptions fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
   {
   NSLog(@"IN didReceiveRemoteNotification:fetchCompletionHandler");
   if (launchOptions) NSLog(@"IN launchOptions: %@", [launchOptions description]);
   NSLog(@"Application state: %ld", (long)application.applicationState);
   
   // Silent Notification (specific case, can use NL_TRACK_RECEIVE as the user does not have click/open the notification)
   if ([launchOptions[@"aps"][@"content-available"] intValue] == 1 )
       {
   NSLog(@"Silent Push Notification");
   ...  
   ...
   //Call receive tracking
           Neolane_SDK *nl = [Neolane_SDK getInstance];
   [nl track:launchOptions:NL_TRACK_RECEIVE];
   
   completionHandler(UIBackgroundFetchResultNoData); //Do not show notification
   return;
   }  
   ...
   ...
           completionHandler(UIBackgroundFetchResultNoData);
   }
   ```

1. **登録ステータスの設定**

   このデリゲートプロトコルを使用すると、**registerDevice** 呼び出しの結果を取得し、これを使用して登録時にエラーが発生したかどうかを知ることができます。

   **registerDeviceStatus** プロトタイプ：

   ```sql
   - (void) registerDeviceStatus: (ACCRegisterDeviceStatus) status:(NSString *) errorReason;
   ```

   * **Status**：登録が成功したか、エラーが発生したかを知ることができます。

   * **ErrorReason**：発生したエラーに関する詳細情報を提供します。使用可能なエラーとその説明について詳しくは、以下の表を参照してください。

   | ステータス | 説明 | ErrorReason |
   | ---------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------- |
   | ACCRegisterDeviceStatusSuccess | 登録が成功しました | 空 |
   | ACCRegisterDeviceStatusFailureMarketingServerHostnameEmpty | ACC マーケティングサーバーのホスト名が空であるか、設定されていません。 | 空 |
   | ACCRegisterDeviceStatusFailureIntegrationKeyEmpty | 統合キーが空であるか、設定されていません。 | 空 |
   | ACCRegisterDeviceStatusFailureConnectionIssue | ACC との接続の問題 | （OS の現在の言語での）詳細情報 |
   | ACCRegisterDeviceStatusFailureUnknownUUID | 指定された UUID（統合キー）が不明です。 | 空 |
   | ACCRegisterDeviceStatusFailureUnexpectedError | 予期しないエラーが ACC サーバーに返されました。 | エラーメッセージが ACC に返されました。 |

   {style=&quot;table-layout:auto&quot;}

   **Neolane_SDKDelegate** プロトコルと **registerDeviceStatus** デリゲートの定義は次のとおりです。

   ```sql
   //  Neolane_SDK.h
   //  Campaign SDK
   ..
   .. 
   // Register Device Status Enum
   typedef NS_ENUM(NSUInteger, ACCRegisterDeviceStatus) {
   ACCRegisterDeviceStatusSuccess,                               // Resistration Succeed
   ACCRegisterDeviceStatusFailureMarketingServerHostnameEmpty,   // The Campaign marketing server hostname is Empty or not set
   ACCRegisterDeviceStatusFailureIntegrationKeyEmpty,            // The integration key is empty or not set
   ACCRegisterDeviceStatusFailureConnectionIssue,                // Connection issue with Campaign, more information in errorReason
   ACCRegisterDeviceStatusFailureUnknownUUID,                    // The provided UUID (integration key) is unknown
   ACCRegisterDeviceStatusFailureUnexpectedError                 // Unexpected error returned by Campaign server, more information in errorReason
   };
   // define the protocol for the registerDeviceStatus delegate
   @protocol Neolane_SDKDelegate <NSObject>
   @optional
   - (void) registerDeviceStatus: (ACCRegisterDeviceStatus) status :(NSString *) errorReason;
   @end
   @interface Neolane_SDK: NSObject {
   } 
   ...
   ...
   // registerDeviceStatus delegate
   @property (nonatomic, weak) id <Neolane_SDKDelegate> delegate;
   ...
   ...
   @end
   ```

   **RegisterDeviceStatus** デリゲートを実装するには、以下の手順を実行します。

   1. SDK の初期化中に **setDelegate** を実装します。

      ```sql
      // AppDelegate.m
      ...
      ... 
      - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
      {
      ...
      ...
          // Get the stored settings
      
          NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
          NSString *strMktHost = [defaults objectForKey:@"mktHost"];
          NSString *strTckHost = [defaults objectForKey:@"tckHost"];
          NSString *strIntegrationKey = [defaults objectForKey:@"integrationKey"];
          userKey = [defaults objectForKey:@"userKey"];
      
          // Configure Campaign SDK on first launch
          Neolane_SDK *nl = [Neolane_SDK getInstance];
          [nl setMarketingHost:strMktHost];
          [nl setTrackingHost:strTckHost];
          [nl setIntegrationKey:strIntegrationKey];
          [nl setDelegate:self];    // HERE
      ...
      ...
      }
      ```

   1. クラスの **@interface** にプロトコルを追加します。

      ```sql
      //  AppDelegate.h
      
      #import <UIKit/UIKit.h>
      #import <CoreLocation/CoreLocation.h>
      #import "Neolane_SDK.h"
      
      @class LandingPageViewController;
      
      @interface AppDelegate : UIResponder <UIApplicationDelegate, CLLocationManagerDelegate, Neolane_SDKDelegate> {
          CLLocationManager *locationManager;
          NSString *userKey;
          NSString *mktServerUrl;
          NSString *tckServerUrl;
          NSString *homeURL;
          NSString *strLandingPageUrl;
          NSTimer *timer;
      }
      ```

   1. **AppDelegate** にデリゲートを実装します。

      ```sql
      //  AppDelegate.m
      
      #import "AppDelegate.h"
      #import "Neolane_SDK.h"
      #import "LandingPageViewController.h"
      #import "RootViewController.h"
      ...
      ...
      - (void) registerDeviceStatus: (ACCRegisterDeviceStatus) status :(NSString *) errorReason
      {
          NSLog(@"registerStatus: %lu",status);
      
          if ( errorReason != nil )
              NSLog(@"errorReason: %@",errorReason);
      
          if( status == ACCRegisterDeviceStatusSuccess )
          {
              // Registration successful
              ...
              ...
          }
          else { // An error occurred
              NSString *message;
              switch ( status ){
                  case ACCRegisterDeviceStatusFailureUnknownUUID:
                      message = @"Unkown IntegrationKey (UUID)";
                      break;
                  case ACCRegisterDeviceStatusFailureMarketingServerHostnameEmpty:
                      message = @"Marketing URL not set or Empty";
                      break;
                  case ACCRegisterDeviceStatusFailureIntegrationKeyEmpty:
                      message = @"Integration Key not set or empty";
                      break;
                  case ACCRegisterDeviceStatusFailureConnectionIssue:
                      message = [NSString stringWithFormat:@"%@ %@",@"Connection issue:",errorReason];
                      break;
                  case ACCRegisterDeviceStatusFailureUnexpectedError:
                  default:
                      message = [NSString stringWithFormat:@"%@ %@",@"Unexpected Error",errorReason];
                      break;
              }
          ...
          ...
          }
      }
      @end
      ```


## 変数 {#variables}

変数によって、通知を受信した後のモバイルアプリケーションの動作を定義できます。これらの変数は、モバイルアプリケーションのコードと、Adobe Campaign コンソールの専用モバイルアプリケーションサービスの「**[!UICONTROL 変数]**」タブで定義する必要があります。

![](../assets/do-not-localize/book.png)詳しくは、モバイルアプリの **Campaign Classic v7 ドキュメント**&#x200B;の [iOS の設定手順](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application.html?lang=ja){target="_blank"} and [Configuration steps for Andoid](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application-android.html?lang=ja){target="_blank"}を参照してください。

次に、通知で追加された変数をモバイルアプリケーションで収集できるようにするコードの例を示します。この例では、「VAR」変数を使用しています。

* **Android**：

   ```sql
   public void onReceive(Context context, Intent intent) {
        ...
       String event = intent.getStringExtra("VAR");
        ...
   }
   ```

* **iOS**：

   ```sql
   - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
   {
       ....
       if( launchOptions )
       {
           // When application is not already launched, the notification data if any are stored in the key 'UIApplicationLaunchOptionsRemoteNotificationKey'
           NSDictionary *localLaunchOptions = [launchOptions objectForKey:@"UIApplicationLaunchOptionsRemoteNotificationKey"];
           if( localLaunchOptions )
           {
            ...
            [localLaunchOptions objectForKey:@"VAR"];
           ...
           }
      }
   }
   
   // Callback called when the application is already launched (whether the application is running foreground or background)
   - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)launchOptions
   {
       if( launchOptions )
       {
        ...
           [launchOptions objectForKey:@"VAR"];
       }
   }
   ```

>[!CAUTION]
>
>iOS と Android では通知のサイズが 4 KB に制限されているので、短い変数名を選択することをお勧めします。

## 通知サービス拡張 {#notification-service-extension}

**iOS の場合**

メディアは通知サービス拡張レベルでダウンロードする必要があります。

```sql
#import "NotificationService.h"

@interface NotificationService ()

@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);
@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;

@end

@implementation NotificationService

- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
    NSDictionary *userInfo = nil;
    NSString *url = nil;

    self.contentHandler = contentHandler;
    self.bestAttemptContent = [request.content mutableCopy];

    userInfo = request.content.userInfo;
    if ( userInfo != nil )
    {
        url = userInfo[@"mediaUrl"];  // Get the url of the media to download (Adobe Campaign additional variable)
    }
    ...
    // Perform the download to local storage
```

## 通知コンテンツ拡張 {#notification-content-extension}

**iOS の場合**

このレベルでは次の作業が必要です。

* Adobe Campaign が送信したカテゴリにコンテンツ拡張を関連付けます。

   モバイルアプリケーションで画像を表示できるようにするには、Adobe Campaign とモバイルアプリケーションでカテゴリの値を「画像」に設定し、通知拡張を作成して **UNNotificationExtensionCategory** パラメーターを「画像」に設定します。デバイスがプッシュ通知を受信した場合、定義されたカテゴリの値に従って拡張機能が呼び出されます。

* 通知レイアウトの定義

   関連するウィジェットでレイアウトを定義する必要があります。画像の場合、ウィジェットの名前は **UIImageView** です。

* メディアの表示

   メディアデータをウィジェットに送るためのコードを追加する必要があります。画像用のコードの例を次に示します。

   ```sql
   #import "NotificationViewController.h"
   #import <UserNotifications/UserNotifications.h>
   #import <UserNotificationsUI/UserNotificationsUI.h>
   
   @interface NotificationViewController () <UNNotificationContentExtension>
   
   @property (strong, nonatomic) IBOutlet UIImageView *imageView;
   @property (strong, nonatomic) IBOutlet UILabel *notifContent;
   @property (strong, nonatomic) IBOutlet UILabel *label;
   
   @end
   
   @implementation NotificationViewController
   
   - (void)viewDidLoad {
       [super viewDidLoad];
       // Do any required interface initialization here.
   }
   
   - (void)didReceiveNotification:(UNNotification *)notification {
       self.label.text = notification.request.content.title;
       self.notifContent.text = notification.request.content.body;
       UNNotificationAttachment *attachment = [notification.request.content.attachments objectAtIndex:0];
       if ([attachment.URL startAccessingSecurityScopedResource])
       {
         NSData * imageData = [[NSData alloc] initWithContentsOfURL:attachment.URL];
         self.imageView.image =[UIImage imageWithData: imageData];
         [attachment.URL stopAccessingSecurityScopedResource];
       }
   }
   @end
   ```
