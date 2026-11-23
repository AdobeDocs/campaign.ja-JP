---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '78'
ht-degree: 21%
---
# digestStrSha1

> 警告 :
>
> この機能を利用して、個人情報に基づくハッシュを作成することはできません。

文字列のSHA-1 ハッシュを計算します。 文字列は、計算の前にUTF-8で自動的にエンコードされます。

```text
digestStrSha1 (string)
```

## パラメーター

**文字列** ハッシュを計算する文字列。

## 戻り値

パラメーターとして渡された文字列のSHA-1 ハッシュ。

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
