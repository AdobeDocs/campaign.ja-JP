---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '238'
ht-degree: 3%
---
# HttpServletRequest （クラス）

サーブレットに転送されるクライアントのクエリを表します。

このアドレスの1つのインスタンスのみが`request`経由でアクセス可能です。 変数：

## メソッド

| メソッド | 説明 |
| --- | --- |
| [getHeader](m-httpservletrequest-getheader.md) | クエリヘッダーで定義された属性を返します。 |
| [getParameter](m-httpservletrequest-getparameter.md) | クエリパラメーターの値を返します。 |
| [getRemoteAddr](m-httpservletrequest-getremoteaddr.md) | リクエストを送信したクライアントまたは最後のプロキシのIP アドレスを返します。 |
| [getUTF8Parameter](m-httpservletrequest-getutf8parameter.md) | クエリのパラメーターの値（UTF-8でコード化）を返します。 |
| [getBodyAsString](m-httpservletrequest-getbodyasstring.md) | クエリコーディングを使用して、クエリの本文を文字列の形式で返します。 |
| [転送](m-httpservletrequest-forward.md) | クライアントを経由せずに、クエリを別のページにリダイレクトします。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [ パラメーター](p-httpservletrequest-parameters.md) | クエリパラメーターを返します。 |
| [cookie](p-httpservletrequest-cookies.md) | クエリのCookieを返します。 |
| [requestURI](p-httpservletrequest-requesturi.md) | クエリのURLを返します。 |
| [queryString](p-httpservletrequest-querystring.md) | クエリのURLのうち、パラメーターに一致する部分を返します。 |
| [ スキーム ](p-httpservletrequest-scheme.md) | 使用するプロトコルの名前（HTTP、HTTPSなど）を返します。 依頼する必要がありました。 |
| [serverName](p-httpservletrequest-servername.md) | クエリサーバーの名前を返します。 |
| [serverPort](p-httpservletrequest-serverport.md) | サーバーへの接続に使用するポート番号を返します。 |
| [serverURL](p-httpservletrequest-serverurl.md) | サーバーにアクセスするためのURLを返します。 |
| [servletPath](p-httpservletrequest-servletpath.md) | サーブレットに一致するクエリのURLのセクションを返します。 |
| [contextPath](p-httpservletrequest-contextpath.md) | コンテキストに一致するクエリのURLのセクションを返します。 |
| [pathInfo](p-httpservletrequest-pathinfo.md) | クエリのURLの追加情報を返します。 |
| [ メソッド ](p-httpservletrequest-method.md) | このクエリの呼び出しに使用されるHTTP メソッド（GET、HEAD、POSTなど）を含む文字列を返します。 |

## 機能

**次の場所で利用できます：**

* JSSP
* Web アプリ
