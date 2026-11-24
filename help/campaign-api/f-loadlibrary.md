---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '104'
ht-degree: 15%
---
# loadLibrary

JavaScript ライブラリを読み込みます。

```text
loadLibrary (filename [, boolean ])
```

## パラメーター

**filename** ロードするJavaScript ライブラリの名前。

**ブール値**&#x200B;読み込みキャッシュを有効または無効にします。 デフォルトではtrueです。

> 注：パラメーターがfalseに設定されている場合、loadLibrary呼び出しの前にlogon （）関数を使用してoperatorとして認証する必要があります。

## 戻り値

なし。

## 備考

キャッシュはデフォルトで有効になっています。 キャッシュが無効になっている場合、データベースは呼び出しごとにクエリされます。 このクエリでは、最新バージョンのライブラリを読み込むことができます。 例：loadLibrary （&#39;xtk:shared/nl.js&#39;）

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* 配信メッセージ
* タイポロジルール
* 読み込み
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
