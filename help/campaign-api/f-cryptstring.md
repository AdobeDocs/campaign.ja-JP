---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '205'
ht-degree: 37%
---
# cryptString

> 警告 :
>
> この関数は完全に非推奨です。 詳しくは、この[&#x200B; ページ &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-classic/using/technotes/gcm-functions#deprecated-functions-headding-anchor-depracated-functions)を参照してください。

インスタンスのキーまたはその他のキーを使用して、文字列を暗号化します。

```text
cryptString (str [, key ] [, useSalt ])
```

## パラメーター

**str**&#x200B;暗号化する文字列。

**key** AES暗号化キーは、キーの長さが32の場合は64:256 ビット、キーの長さが24の場合は192 ビット、キーの長さが16の場合は128 ビット、キーが指定されていない場合は128 ビットでエンコードされます。

**useSalt** データの塩を使用して暗号化します。 デフォルトでは True です。

## 戻り値

暗号化された文字列を返します

## 備考

暗号化は、次の方法に従って行われます。

* Unicode 文字列は、UTF-8 文字列に変換されます。
* 最後にチェック文字が追加されます。
* この文字列は、null初期化ベクトルを使用した暗号ブロックチェーン（CBC）モードのAES アルゴリズムを使用して暗号化されます。 パラメーターとしてキーが指定されていない場合は、インスタンスキーが使用されます。
* 暗号化されたブロックは、Base 64 に変換されます。

復号は、[decryptString](f-decryptstring.md)関数を使用して実行されます。

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
