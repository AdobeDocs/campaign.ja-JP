---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '199'
ht-degree: 7%
---
# execCommand

> 警告：この関数は、オンプレミス環境で使用できます。

コマンドを実行し、エラーコードと標準出力をキャプチャします。

```text
execCommand (command [, bNoThrow ])
```

## パラメーター

**command** パラメーターで実行するコマンド。

**bNoThrow** trueを指定すると、コマンドがゼロを返さない場合でも、出力とエラーコードを取得できます（デフォルトではfalse）。

## 戻り値

最初の要素がコマンドのリターンコードに対応するテーブルを返します（リターンコードが0と異なる場合は、異常があります）。2番目の要素は、生成された標準出力を含む文字列です。

## 備考

bNothrow オプションを指定しない場合、コマンドを実行できない場合やエラーが発生してコマンドを実行した場合は、例外が発生します。 bNoThrowがtrueに等しい場合、コマンドを実行できない場合にのみ例外が発生します。 この関数を使用するには、演算子に&#39;createProcess&#39;権限が必要です。そうでない場合は例外が発生します。 インストールに応じて、一部のコマンドはブロックリスト上に表示されます。 例：ln, dd, openssl, curl, wget, python, python3, perl, ruby, sh, bash, dash, zsh, base64, nlserver, node, phantomjs, java, awk, nc, telnet, ssh, scp, ftp

## 例

```text
var result = execCommand('gpg-exec.sh gpg --no-tty --yes -r CampaignOperations@adobe.com --encrypt "file_to_encrypt"', true);
```

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
