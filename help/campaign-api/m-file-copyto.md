---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '40'
ht-degree: 35%
---
# copyTo

ファイルをコピーします。

```text
copyTo (fileName)
```

## パラメーター

**fileName** ターゲットファイルまたはフォルダーの名前（フルパスである必要があります）。

## 戻り値

なし。

## 備考

例：

```javascript
var f = new File("c:/file.txt")
f.copyTo("c:/file2.txt")

var f2 = new File("c:/file.txt")
f2.copyTo("c:/dir/")
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
