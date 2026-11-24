---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '156'
ht-degree: 8%
---
# 実行

HTTP クエリを実行します。

```text
execute ( [hasProxy ] [, async ] [, reuseaddr ] [, context ] [, timeout ])
```

## パラメーター

**hasProxy** HTTP プロキシを使用する必要がある場合は、ブール値をtrueに設定します。 デフォルトではfalseに設定されています。

クエリが非同期の場合、**async** ブール値はtrueに設定されます。 デフォルトではfalseに設定されています。

**reuseaddr**&#x200B;基になるソケットでローカルアドレスの再利用を許可する必要がある場合は、ブール値をtrueに設定します。 デフォルトではfalseに設定されています。

**context** コンテキストは、非同期クエリの場合に[complete](p-httpclientrequest-complete.md)関数の2番目の引数に転送されるすべてのオブジェクトです。デフォルトではnullに設定されています。

**タイムアウト**&#x200B;非同期クエリの場合の最大待機時間（ミリ秒単位）です。 このパラメーターが定義されていない場合、待機時間は5分です。

## 戻り値

なし。

## 備考

HTTP接続が失敗した場合は、例外が発生します。 [response](p-httpclientrequest-response.md) プロパティは、実行関数の呼び出しに成功した後にのみ有効になります。 例：

```javascript
          
        var http = new HttpClientRequest("http://www.google.com")
        http.method = "GET"
        // Note: Here, http.response == undefined
        http.execute()
        var response = http.response
      
```

## 機能

**クラスのメソッド：** [HttpClientRequest](c-httpclientrequest.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
