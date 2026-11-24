---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '60'
ht-degree: 21%
---
# fileGetTempName

一時ファイル名を生成します。

```text
fileGetTempName ( [directory ] [, prefix ] [, extension ])
```

## パラメーター

一時ファイルの&#x200B;**ディレクトリ** ディレクトリ。 空の場合は、システムで定義された一時ディレクトリを使用します。

**接頭辞**&#x200B;最大4文字の接頭辞。 空の場合は、tmp プレフィックスが使用されます。

**extension** ファイル拡張子。

## 戻り値

ファイルのフルネーム。

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
