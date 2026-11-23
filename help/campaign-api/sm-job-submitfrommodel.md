---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '51'
ht-degree: 17%
---
# SubmitFromModel

テンプレートからジョブを送信

```text
Number jobId = SubmitFromModel ( String schema, String where, String methodName, XML diff, Boolean async )
```

## パラメーター

**スキーマ** ジョブ テンプレート スキーマ

**where** テンプレート選択式

**methodName**&#x200B;呼び出すメソッドの名前

テンプレートに追加する&#x200B;**diff** XML コンテンツ

**非同期**&#x200B;非同期ジョブの送信を実行

## 戻り値

**jobId**&#x200B;作成したばかりのジョブの識別子

## 機能

**スキーマ：** [xtk:job](s-xtk-job.md)

**静的：**

はい
