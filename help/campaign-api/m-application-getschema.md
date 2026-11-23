---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '103'
ht-degree: 13%
---
# getSchema

Adobe Campaign スキーマへのマッピングを返します。スキーマが存在しない場合はnullを返します。

```text
getSchema (name [, checkIfUpdated ])
```

## パラメーター

**name**&#x200B;完全なスキーマ名

**checkIfUpdated** スキーマがキャッシュ内で更新されたかどうかを確認します。 スキーマが既にスクリプト内でインスタンス化されている場合は、影響はありません。

## 戻り値

スキーママッピング（[ スキーマ ](c-schema.md) オブジェクトを参照）またはメソッドが例外を起動しても、スキーマが名前と一致しません。

## 備考

スクリプト内でインスタンス化されたすべてのスキーマは、スクリプトの最後までメモリに割り当てられたままです。 例：

```javascript
      var schema = application.getSchema("nms:recipient")
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
