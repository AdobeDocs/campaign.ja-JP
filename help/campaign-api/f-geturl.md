---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '109'
ht-degree: 15%
---
# getUrl

URLからテキストコンテンツを復元します。

```text
getUrl (url [, timeout ])
```

## パラメーター

**url**&#x200B;復元するページのアドレス。

**タイムアウト**&#x200B;接続タイムアウト。 指定された遅延内に接続を確立できない場合、エラーが発生し、スクリプトが中断されます。

## 戻り値

テキストページを含む文字列。

## 備考

返される文字列のエンコーディングは、応答で指定されたエンコーディングです（Content-Type）。 ダウンロード中にエラーが発生した場合、またはリターンコードが200 （OK）以外の場合は、エラーが発生し、実行されるスクリプトが中断されます。 例：

```javascript
      var content = getUrl("http://www.google.com/index.html")
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
