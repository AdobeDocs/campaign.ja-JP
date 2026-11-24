---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '68'
ht-degree: 33%
---
# BuildPreviewFromId

配信するコンテンツまたは出力ファイルのラインのプレビューを作成しました (外部モード)。

```text
[ XML preview, XML queryResult ] = BuildPreviewFromId ( Number deliveryId, XML params ) const
```

## パラメーター

**deliveryId**&#x200B;配信ID。

**params**&#x200B;受信者のフィルタリング条件（@filter = &#39;@id = 5673&#39;）、コンテンツ識別子（@content = &#39;html&#39;、&#39;text&#39;、&#39;sms&#39;、&#39;webContent1&#39;、&#39;outputFile&#39;...）、@targetPart = 1345686..

## 戻り値

**preview**&#x200B;生成されたプレビューのすべてのパラメーターを返します。

**queryResult**&#x200B;は、プレビューを計算するために読み込まれたデータを返します。

## 例

```javascript
var res = nms.delivery.BuildPreviewFromId(
                           deliveryId,
                           {params: {content: "html", filter: "@id=1234"}})
var preview     = res[0]
var queryResult = res[1]
```

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
