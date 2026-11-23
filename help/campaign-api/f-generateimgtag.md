---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '64'
ht-degree: 26%
---
# generateImgTag

パブリックリソースに基づくHTML &lt;img> タグの生成を有効にします。

```text
generateImgTag (ID)
```

## パラメーター

**ID**&#x200B;公開リソース ID

## 戻り値

パブリックリソース定義に含まれる画像のプロパティを含むHTML &lt;img> タグを返します。

## 備考

リソースはフロントタルサーバーで公開する必要があります。 例：

```xml
              <%= generateImgTag(content.@["banner-id"]) %>Code HTML généré :<img src="http://media.adobe.com/res/img/18cd386d9e8b7f35f3477ac6a9efd762.jpg" width="800" height="200" alt="My image"/>
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
