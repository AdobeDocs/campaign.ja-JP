---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '165'
ht-degree: 9%
---
# 待機

非同期クエリのリストが終了するまで待機します。

```text
wait (requests,waitAll)
```

## パラメーター

**リクエスト** クエリのテーブル。

**waitAll** ブール値（デフォルトではtrue）、クエリリストのすべてのリクエストが完了するのを待ちます。 falseに設定すると、少なくとも1つのリクエストが完了すると、関数はリスニングループから外れます。

## 戻り値

なし。

## 備考

関数はクエリには適用されませんが、HttpClientRequest binの関数です。 例：

```javascript
var req = new HttpClientRequest("http://www.adobe.com/")
req.complete = function(req, context, status) { logInfo(status) }
req.execute(false, true)

HttpClientRequest.wait( [req] )
```

クエリは、非同期であり、[execute](m-httpclientrequest-execute.md)呼び出しで例外が発生しなかった場合にのみ、リストに追加できます。 クエリが完了すると、リストから自動的に削除されます。 つまり、関数がコントロールを返す場合、パラメーターとして渡されたテーブルは空になります。 リストは[complete](p-httpclientrequest-complete.md)関数で変更できます。例えば、新しいクエリを開始してリストに追加できます。

## 機能

**クラスのメソッド：** [HttpClientRequest](c-httpclientrequest.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
