---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '93'
ht-degree: 16%
---
# 作成

特定のスキーマに対応する新しいエンティティを作成します。

```text
create ( [content ])
```

## パラメーター

**content**&#x200B;作成するエンティティのXMLに対応するオプションの文字列。

## 戻り値

JavaScript オブジェクトの形式でエンティティを返します。

## 備考

createはグローバル関数ではなく、スキーマメソッドです。 呼び出すには、目的のスキーマで接頭辞を付ける必要があります。 次に例を示します。

```javascript
var recipient = NLWS.nmsRecipient.create(
      {recipient: {
        email: "support@adobe.com", 
        lastName: "Adobe", 
        firstName: "Support"}})
recipient.save()
```

ドキュメントは自動的にデータベースに保存されません。 エンティティで⌐⌐[save （） &#x200B;](m-entity-save.md) メソッドを使用する必要があります。

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
