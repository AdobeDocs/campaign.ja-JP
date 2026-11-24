---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '54'
ht-degree: 29%
---
# generateRegisterHookScript

「appSubscriptionRcp」の「登録」イベント時に呼び出される拡張スクリプトを生成します。

```text
String JSScriptStr = generateRegisterHookScript ( XML additionalXmlNodes )
```

## パラメーター

追加パラメーターとターゲットマッピングフィールド間のリンクを含む&#x200B;**additionalXmlNodes** XML ノード。

## 戻り値

追加のパラメーターをターゲットマッピングのフィールドにリンクできるようにする&#x200B;**JSScriptStr** JS スクリプト。

## 機能

**スキーマ：** [nms:mobileApp](s-nms-mobileapp.md)

**静的：**

はい
