---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '105'
ht-degree: 15%
---
# hmac

バッファのMD5、SHA-1またはSHA-256 ハッシュを計算します。

```text
hmac (key [, algo ])
```

## パラメーター

**key** バッファー形式のキー。

使用する&#x200B;**algo** ハッシュ型。 指定できる値は、「MD5」、「SHA1」、「SHA256」です。 大文字と小文字は区別されません。したがって、値は小文字または大文字で入力できます。 デフォルトでは、パラメーターが指定されていない場合、「SHA1」の値が選択されます。

## 戻り値

バッファーのハッシュ MD5、SHA-1またはSHA-256 （選択したハッシュタイプに従います）。

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
