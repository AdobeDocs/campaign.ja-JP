---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '39'
ht-degree: 35%
---
# writeln

ファイルにテキスト行を書き込みます。

```text
writeln (line)
```

## パラメーター

**line**&#x200B;書き込むテキスト行。

## 戻り値

なし。

## 備考

例：

```javascript
var f = new File("c:/file.txt")
f.open("a")
f.writeln("line 1")
f.writeln("line 2")
f.close()
```

## 機能

**クラスのメソッド：** [ ファイル ](c-file.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
