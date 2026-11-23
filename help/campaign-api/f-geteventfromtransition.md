---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '44'
ht-degree: 6%
---
# getEventFromTransition

特定の遷移を実行する最後のイベントを返します。

```text
getEventFromTransition (transitionName)
```

## パラメーター

**transitionName** トランジションの内部名。

## 戻り値

指定されたトランジションまたはnullを受けた最後のイベント。 オブジェクトは、「xtk:workflowEvent」スキーマのエンティティに対応しています。

## 機能

**次の場所で利用できます：**

* ワークフロー
