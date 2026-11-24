---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '155'
ht-degree: 9%
---
# onLog

ジャーナルに書き込まれたメッセージのインターセプト関数を追加または削除します

```text
onLog ( [function ])
```

## パラメーター

**function**&#x200B;追加するインターセプト関数。 このパラメーターが省略された場合、最後に追加された関数が削除されます。

## 戻り値

なし。

## 備考

最後に追加された関数が最初に呼び出されます。 関数は、引数として次のプロパティを持つオブジェクトを取り込みます。

* type （数値） – メッセージタイプ（0=エラー、1=警告、2=情報、3=ステータス、4=詳細）
* code （Number） – エラーコード （エラーでない場合は0です）
* オブジェクト（文字列） – メッセージにリンクされたオブジェクト（未使用）
* message （String） – メッセージ

関数はブール値を返す必要があります。 値trueは、次のインターセプト関数がメッセージを受信することを防ぎます。 この関数は、再エントリから保護されます。ジャーナル自体に書き込んだメッセージを傍受することはありません。 例：

```javascript
var file = new File("c:/temp/log.txt")
file.open("w")

// Add a new log handler
application.onLog(function(log) {
  file.writeln(log.type.toString() + " " + log.message)
  return true
})

logInfo("This is an information message")
logWarning("This is a warning")

// Remove the log handler
application.onLog()

// This message won't be caught
logInfo("Finished.")

file.close()
```

## 機能

**クラスのメソッド：** [&#x200B; アプリケーション &#x200B;](c-application.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
