---
source-git-commit: 3319b56a62aa8a8364c7f2f85bc81708a66a5978
workflow-type: tm+mt
source-wordcount: '77'
ht-degree: 20%
---
# 不明化

整数を文字列に難読化します。 元の値は、[unobfuscate](f-unobfuscate.md)を呼び出すことで復元できます。

```text
obfuscate (value [, size ] [, version ])
```

## パラメーター

**value**&#x200B;難読化する整数。

**size**&#x200B;難読化による文字列のサイズ。 6 ～ 10の整数。 デフォルトでは6です。

**version**&#x200B;適用する難読化バージョン。 デフォルトでは0です。

## 戻り値

難読化された整数を表す文字列。

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
