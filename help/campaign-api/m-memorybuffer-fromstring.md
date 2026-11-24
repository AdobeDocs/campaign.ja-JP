---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '74'
ht-degree: 36%
---
# fromString

バッファに文字列の内容を読み込みます。

```text
fromString (string [, codepage ])
```

## パラメーター

**文字列**&#x200B;文字列。

**codepage** バッファー内の文字列をシリアル化するために使用されるコードページ。 このオプションのパラメーターでは、文字エンコーディングを指定できます。 次に例を示します。

* iso-8859-1
* utf-8
* utf-16
* us-ascii
* shift-jis
* euc-kr

## 戻り値

なし。

## 機能

**クラスのメソッド：** [MemoryBuffer](c-memorybuffer.md)

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
