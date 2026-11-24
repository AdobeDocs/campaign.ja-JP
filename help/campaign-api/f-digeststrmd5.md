---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '77'
ht-degree: 22%
---
# digestStrMd5

> 警告 :
>
> この機能を利用して、個人情報に基づくハッシュを作成することはできません。

文字列のMD5 ハッシュ関数を計算します。 文字列は、計算の前にUTF-8で自動的にコーディングされます。

```text
digestStrMd5 (string)
```

## パラメーター

**文字列** ハッシュ関数を計算する文字列。

## 戻り値

パラメーターとして渡された文字列のMD5 ハッシュ。

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
