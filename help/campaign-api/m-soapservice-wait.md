---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '113'
ht-degree: 15%
---
# 待機

非同期SOAP クエリのリストの終了を待ちます。

```text
wait (requests)
```

## パラメーター

**リクエスト** クエリのテーブル。

## 戻り値

なし。

## 備考

この関数はサービスには適用されませんが、SoapService binの関数です。 例：

```javascript
...
var req = service.start(1234, "GetOption", sessionToken, "XtkDatabaseId")

// Do some stuff here

// Wait until the end of the request
SoapService.wait( [req] )
```

クエリが完了すると、リストから自動的に削除されます。 つまり、関数がコントロールを返す場合、パラメーターとして渡されたテーブルは空になります。 リストは[complete](p-soapservice-complete.md)関数で変更できます。例えば、新しいクエリを開始してリストに追加できます。

## 機能

**クラスのメソッド：** [SoapService](c-soapservice.md)

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
