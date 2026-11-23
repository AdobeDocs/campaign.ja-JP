---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '47'
ht-degree: 29%
---
# getCurrentDate

データベース・サーバの現在の日付を返します。

```text
getCurrentDate ()
```

## パラメーター

なし。

## 戻り値

データベースサーバーの現在の日付。

## 備考

例：

```javascript
      date = formatDate(getCurrentDate(),"%4Y/%2M/%2D %02H:%02N:%02S")
```

formatDate （）関数について詳しくは、[formatDate （date, format） &#x200B;](f-formatdate.md)を参照してください

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
