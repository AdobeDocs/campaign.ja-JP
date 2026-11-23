---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '54'
ht-degree: 35%
---
# escapeXmlStr

文字列をXML形式に変換します。

```text
escapeXmlStr (value)
```

## パラメーター

変換する&#x200B;**value**&#x200B;文字列。

## 戻り値

変換後の文字列。

## 備考

この関数は、&amp;、&lt;、>、\\&quot;文字を対応するエスケープシーケンスに変換します。

* &amp;
* &lt; &lt;
* > >
* &quot; &amp;quot;

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
