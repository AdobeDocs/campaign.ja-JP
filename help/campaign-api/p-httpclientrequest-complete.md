---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '108'
ht-degree: 12%
---
# 完了

非同期クエリが終了したときに呼び出す関数。

```text
complete
```

## 備考

関数は3つの引数を受け入れる必要があります。

* クエリ
* コンテキスト
* ステータス：「成功」、「エラー」または「タイムアウト」

「成功」ステータスは、応答が受信されたことを意味しますが、応答には任意のコード（200、404、503など）を含めることができます。 「エラー」ステータスは、誤って構造化された応答の通信の中断を示している可能性があります。 「タイムアウト」ステータスとは、接続が確立できなかったか、設定された期限内に応答が受信されなかったことを意味します。 例：

```javascript
http.complete = function(req, context, status)
{
  if( status == "success" )
    logInfo("Response code = " + req.response.code)
}
```

## 機能

**クラスのプロパティ：** [HttpClientRequest](c-httpclientrequest.md)

**読み取り専用：**

いいえ

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
