---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '104'
ht-degree: 13%
---
# onTrace

トレース メッセージのインターセプト関数を追加または削除します。

```text
onTrace ( [function ])
```

## パラメーター

**function**&#x200B;追加するインターセプト関数。 このパラメーターが省略された場合、最後に追加された関数が削除されます。

## 戻り値

なし。

## 備考

関数は、引数として次のプロパティを持つオブジェクトを取り込みます。

* 重力（文字列） – メッセージの重大度（「error」、「warning」、「info」、「status」、「verbose」）
* type （String） – メッセージタイプ （&quot;log&quot;, &quot;wdbc&quot;など）
* message （String） – メッセージ

この関数は再エントリから保護されます。自身で作成したトレースメッセージはインターセプトされません。 例：

```javascript
var file = new File("c:/temp/trace.txt")
file.open("w")

// Add a new trace handler
application.onTrace(function(log) {
  file.writeln(log.gravity.toString() + " " + log.message)
  return true
})

logInfo("This is an information message")
logWarning("This is a warning")

// Remove the trace handler
application.onTrace()

file.close()
```

## 機能

**クラスのメソッド：** [ アプリケーション ](c-application.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
