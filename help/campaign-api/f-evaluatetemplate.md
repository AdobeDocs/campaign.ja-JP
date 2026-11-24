---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '27'
ht-degree: 14%
---
# evaluateTemplate

JavaScript テンプレートを評価します（&lt;%= ... %>）。

```text
evaluateTemplate (template)
```

## パラメーター

**template**&#x200B;評価するテンプレート。

## 戻り値

&lt;%と%>の間の式を代入した後の文字列。

## 備考

例：

```javascript
      vars.filename = evaluateTemplate(activity.filename)
```

## 機能

**次の場所で利用できます：**

* ワークフロー
