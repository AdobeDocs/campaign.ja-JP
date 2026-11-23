---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '123'
ht-degree: 11%
---
# ヘッダー

HTTP応答のヘッダーのリストを名前でグループ化します。

```text
headers
```

## 備考

各ヘッダープロパティには、ヘッダーの名前と、この名前と各ヘッダーに一致するテーブルの値が含まれています。 この関数は、特定の名前の一意の値ではなく値のテーブルを返すため、[ ヘッダー](p-httpclientresponse-header.md)とは異なります。 これは、Accept-LanguageやSet-Cookieなど、複数回表示されるヘッダーに役立ちます。 HTTP応答にこの名前のヘッダーがない場合、関数は空のテーブルを返します。 例：

```javascript
      var http = new HttpClientRequest("http://www.google.com/")
http.execute()
var response = response
var cookies = response.headers["set-cookie"]
for each(var c in cookies)
{
  logInfo("Set-Cookie: " + c)
}
```

ヘッダープロパティは項目化できません。 プロパティ名では大文字と小文字は区別されません。

## 機能

**クラスのプロパティ：** [HttpClientResponse](c-httpclientresponse.md)

**読み取り専用：**

はい

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
