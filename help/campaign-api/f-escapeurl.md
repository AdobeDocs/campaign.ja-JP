---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '82'
ht-degree: 20%
---
# escapeUrl

文字列を変換してURLに挿入します。

```text
escapeUrl (value)
```

## パラメーター

変換する&#x200B;**value**&#x200B;文字列。

## 戻り値

変換後の文字列。

## 備考

この関数は、$-\_.\!\*&#39;（）,?/:@&amp;=以外の英数字以外の文字を、対応する16進数値に変換します。 この関数はRFC1738仕様に準拠しており、ISO-Latin文字のみをエンコードできます。 UTF-8文字をエンコードするには、encodeURIComponent （） JavaScript関数を使用します。 例：

```javascript
escapeUrl("a#value!")               // "a%23value!"
escapeUrl("Système d'exploitation") // "Syst%E8me%20d'exploitation"
```

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
