---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '119'
ht-degree: 12%
---
# HttpClientResponse （クラス）

HTTP クエリへの応答を表すオブジェクト。

`response` プロパティによるHTTP クエリの実行後にのみ取得できます。

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [body](p-httpclientresponse-body.md) | MemoryBuffer オブジェクトの形式のHTTP応答の本文。 |
| [ コード ](p-httpclientresponse-code.md) | JavaScript整数の形式のHTTP レスポンスのリターンコード。 |
| [codePage](p-httpclientresponse-codepage.md) | 応答のcodePageの値。 HTTP応答の本文をデコードするために使用します。 |
| [ ヘッダー](p-httpclientresponse-header.md) | すべてのHTTP ヘッダーを含むオブジェクト。 |
| [ ヘッダー](p-httpclientresponse-headers.md) | HTTP応答のヘッダーのリストを名前でグループ化します。 |
| [ メッセージ ](p-httpclientresponse-message.md) | HTTP応答によって実行されるメッセージ。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
