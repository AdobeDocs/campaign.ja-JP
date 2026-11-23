---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '37'
ht-degree: 37%
---
# renameTo

ファイル名を変更します。

```text
renameTo (fileName)
```

## パラメーター

**fileName**&#x200B;新しいファイル名（フルパスである必要があります）。

## 戻り値

なし。

## 備考

例：

```javascript
var f = new File("c:/file.txt")
f.renameTo("c:/file2.txt")

var f2 = new File("c:/file.txt")
f2.renameTo("c:/dir/")
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
