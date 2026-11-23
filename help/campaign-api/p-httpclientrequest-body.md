---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '98'
ht-degree: 14%
---
# 本文

HTTP クエリの本文。

```text
body
```

## 備考

クエリの本文に割り当てられたオブジェクトは、次のように処理されます。

* undefined, null, function：送信可能な要素とは見なされません。HTTP クエリの本文は空です。
* number、boolean、string、XML、Object: toString メソッドに基づいて文字列に変更され、HTTP ヘッダーのContent-typeに基づいてエンコードされます。
* [MemoryBuffer](c-memorybuffer.md)：内容は、変更なしでクエリの本文にコピーされます。

例：

```javascript
var query = "Select \"urn:schemas:calendar:uid\" " // etc...
var apptRequest =
  "<g:searchrequest xmlns:g="DAV:">\n" +
  "  <g:sql>\n" +
        query +
  "  </g:sql>\n" +
  "</g:searchrequest>"
http.body = apptRequest
    
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
