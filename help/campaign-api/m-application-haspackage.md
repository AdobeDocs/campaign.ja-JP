---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '42'
ht-degree: 33%
---
# hasPackage

パッケージがインストールされているかどうかをテストします。

```text
hasPackage (name)
```

## パラメーター

**name** パッケージのフルネーム。

## 戻り値

パッケージがインストールされている場合はTrueです。

## 備考

例：

```javascript
var hasMRM = application.hasPackage("nms:mrm")
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
