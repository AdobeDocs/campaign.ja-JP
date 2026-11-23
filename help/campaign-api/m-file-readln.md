---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '50'
ht-degree: 28%
---
# 読み取り

テキストファイルの1行を読み込みます。

```text
readln ()
```

## パラメーター

なし。

## 戻り値

ファイルの次の行を含む文字列、またはファイルの末尾に達した場合は⌐null。

## 備考

例：

```javascript
var f = new File("c:/dummy.xml")
f.open("r", File.CODEPAGE_UTF8)
var line
while( line = f.readln() )
  logInfo(line)
f.close()
```

## 機能

**クラスのメソッド：** [&#x200B; ファイル &#x200B;](c-file.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
