---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '91'
ht-degree: 14%
---
# getDBMSType

データベースのサーバータイプを返します。

```text
getDBMSType ( [name ] [, checkIfUpdated ])
```

## パラメーター

**name** データソースの名前。

**checkIfUpdated** スキーマがキャッシュで更新されたことを確認します。 スキーマが既にスクリプト内でインスタンス化されている場合、影響はありません。

## 戻り値

データベースのサーバーのタイプを含むテキスト文字列。

## 備考

データソースが指定されていない場合、関数はデフォルトで「nms:default」を使用します。 データソースが存在する必要があります。存在しない場合は例外が発生します。

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
