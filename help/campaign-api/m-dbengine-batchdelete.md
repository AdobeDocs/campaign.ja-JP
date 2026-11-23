---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '65'
ht-degree: 21%
---
# batchDelete

テーブルのレコードをパケットごとに削除します。

```text
batchDelete (table, pk [, where ])
```

## パラメーター

テーブルの&#x200B;**テーブル** SQL名。

**pk** フィールド名がプライマリキーとして使用されています。

**where** SQL レコード フィルタリング条件。

## 戻り値

なし。

## 備考

例：

```javascript
      engine.batchDelete("NmsRecipient", "iRecipientId", "sName IS NULL")
```

この関数を使用するには、演算子に「sql」権限が必要です。そうでない場合は例外が発生します。

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
