---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '64'
ht-degree: 20%
---
# 廃棄する

その接続にリンクされているすべてのリソースから接続を解放します。

```text
dispose ()
```

## パラメーター

なし。

## 戻り値

なし。

## 備考

[application.getConnection （） &#x200B;](m-application-getconnection.md) メソッドを使用して作成された接続は、スクリプトの最後で自動的に解放されます。 このメソッドの呼び出しは、長寿命のスクリプトに役立ちます。

## 機能

**クラスのメソッド：** [DBEngine](c-dbengine.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
