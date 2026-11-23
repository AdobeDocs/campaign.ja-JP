---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '226'
ht-degree: 7%
---
# アプリケーション（クラス）

このクラスには、アプリケーションサーバーの特定のプロパティへのアクセスを提供する単一のインスタンスがあります。 このシングルトンには、`application` グローバル変数からアクセスできます。

## メソッド

| メソッド | 説明 |
| --- | --- |
| [hasPackage](m-application-haspackage.md) | パッケージがインストールされているかどうかをテストします。 |
| [getSchema](m-application-getschema.md) | Adobe Campaign スキーマへのマッピングを返します。スキーマが存在しない場合はnullを返します。 |
| [getDBMSType](m-application-getdbmstype.md) | データベースのサーバータイプを返します。 |
| [getNewIds](m-application-getnewids.md) | 内部データベースキーのIDのリストを返します。 |
| [getConnection](m-application-getconnection.md) | データベースサーバーへの新しい接続を返します。 |
| [getTimezoneJson](m-application-gettimezonejson.md) | タイムゾーンのUNIX期間と比較して、UTC時間とその開始日との時間差のリストをJSON形式で表す文字列を返します。 |
| [onLog](m-application-onlog.md) | ジャーナルに書き込まれたメッセージのインターセプト関数を追加または削除します |
| [onTrace](m-application-ontrace.md) | トレース メッセージのインターセプト関数を追加または削除します。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [buildNumber](p-application-buildnumber.md) | アプリケーションサーバーのビルド番号を返します。 |
| [instanceName](p-application-instancename.md) | スクリプトが実行されるインスタンスの名前。 |
| [instanceVarDir](p-application-instancevardir.md) | スクリプトが実行されるインスタンスの「var」ディレクトリの完全パス。 |
| [instanceUploadDir](p-application-instanceuploaddir.md) | スクリプトが実行されるインスタンスの「アップロード」ディレクトリのフルパス。 |
| [演算子](p-application-operator.md) | 現在の演算子（名前、識別子、権限など）に関する情報を含むオブジェクトを返します。 |
| [ ロケール ](p-application-locale.md) | インスタンスのローカルに一致する文字列を返します。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
