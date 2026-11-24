---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '58'
ht-degree: 29%
---
# getImageUrl

パブリックリソースアクセス URLの生成を有効にします

```text
getImageUrl (ID|internal name)
```

## パラメーター

**ID\|内部名** パブリックリソースのIDまたはリソースの内部名。

## 戻り値

パブリックリソースアクセス URLを返します。

## 備考

リソースはフロントタルサーバーで公開する必要があります。 例：

```xml
              <%= getImageUrl(content.@["banner-id"]) %>Code HTML généré :http://media.adobe.com/res/img/18cd386d9e8b7f35f3477ac6a9efd762.jpg
```

## 機能

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
