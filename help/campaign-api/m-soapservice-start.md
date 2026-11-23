---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '117'
ht-degree: 14%
---
# 開始

非同期モードでクエリを起動します。

```text
start (context, name, ...)
```

## パラメーター

**context** [complete](p-soapservice-complete.md)関数に転送されるすべてのユーザーパラメーター。

**name**&#x200B;呼び出すメソッドの名前。

**...**&#x200B;関数パラメーター。

## 戻り値

作成されたクエリ。 このオブジェクトにはプロパティまたは関数がありません。操作が終了するまで待機できる[wait](m-soapservice-wait.md)関数に便利です。

## 備考

サービス接続は非同期である必要があります。 接続がブロックされている場合は、例外が発生します。 接続で別のクエリが現在実行されている場合、クエリを実行できません。 この場合、例外が発生します。

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
