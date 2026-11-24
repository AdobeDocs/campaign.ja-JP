---
title: パーソナライゼーションの基本を学ぶ
description: メッセージコンテンツをパーソナライズする方法を学ぶ
feature: Personalization
role: User
level: Beginner
version: Campaign v8, Campaign Classic v7
exl-id: 1da45746-4d69-415b-a793-9a08ce80091d
TQID: 'https://experienceleague.adobe.com/G8-4BinRvCMosfdiTD6FuEztviEDn6ea8hKeQd8QVSA'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: 13af5358-448e-5a4a-850b-0db592bb0f8f
    internal-label: Personalization
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
source-git-commit: ba520da057d2568b2ef65042342301f5ad5eacd8
workflow-type: tm+mt
source-wordcount: '483'
ht-degree: 82%
---
# パーソナライゼーションの基本を学ぶ {#personalize-content}

すべてのマーケティングキャンペーンを最大限に活用するために、Adobe Campaign では、顧客のレベルに応じたカスタムコンテンツを配信する方法を提供します。 プロファイルデータにもとづいて、パーソナライゼーション機能を使用して、さまざまなグループや個人に合わせたカスタムエクスペリエンスを作成できます。保有しているデータと情報を活用して、特定の受信者ごとにメッセージを適応させることができます。 名前、興味、住んでいる場所、購入したものなど、様々な情報が考えられます。

Adobe Campaign では、パーソナライゼーションを簡素化します。単一の[メッセージテンプレート](create-templates.md)を使用して、受信者ごとにカスタマイズされた様々なタイプのコンテンツを表示できます。 購入確認や買い物かごの放棄に関するメールなどのトランザクションメッセージでは、単一のメールテンプレート内に各個人の製品リスト情報を含めます。


## パーソナライゼーション戦略 {#personalization-strategy}

Campaign を使用して動的コンテンツを作成し、パーソナライズされたメッセージを送信します。 パーソナライゼーション機能を組み合わせて、メッセージを改善し、カスタムなユーザーエクスペリエンスを実現することができます。

メッセージコンテンツは、次の方法でパーソナライズできます。

* 動的な&#x200B;**パーソナライゼーションフィールド**&#x200B;の挿入

  パーソナライゼーションフィールドは、メッセージの第 1 レベルのパーソナライゼーションに使用されます。 パーソナライゼーションエディターから、データベースで使用可能な任意のフィールドを選択できます。 配信の場合は、受信者、メッセージまたは配信に関連する任意のフィールドを選択できます。 これらのパーソナライゼーション属性は、メッセージの件名行や本文に挿入できます。 [詳細情報](personalization-fields.md)。

  &lt;%= recipient.location.city %> の構文は、受信者の市区町村をコンテンツに挿入します。

* 事前定義済みの&#x200B;**コンテンツブロック**&#x200B;の挿入

  Campaign には、配信に挿入できる特定のレンダリングを含んだ一連のパーソナライゼーションブロックが付属しています。 例えば、ロゴ、挨拶メッセージまたはメッセージのミラーページへのリンクを追加できます。 コンテンツブロックは、パーソナライゼーションエディターの専用エントリから使用できます。 [詳細情報](personalization-blocks.md)。

* **条件付きコンテンツ**&#x200B;の作成

  例えば、受信者のプロファイルに基づいて動的パーソナライゼーションを追加するための条件付きコンテンツを設定します。 特定の条件が成立した場合に、テキストブロックや画像を挿入できます。 [詳細情報](conditions.md)。

<!--
* Add **personalized offers**

    Insert personalized offers in your message content, depending on the recipient location, the current weather, or the last purchase order.
-->


## ガードレールとレコメンデーション{#perso-guardrails}

### パーソナライゼーションタイムアウト {#perso-timeout}

配信の保護を強化するために、パーソナライゼーションフェーズのタイムアウト期間を設定できます。

**[!UICONTROL 配信プロパティ]**&#x200B;の「**[!UICONTROL 配信]**」タブで、「**[!UICONTROL 最長パーソナライゼーション実行時間]**」オプションの最大値（秒）を選択します。

プレビュー中または送信中に、パーソナライゼーションフェーズがこのフィールドで設定した最大時間を超えると、エラーメッセージが表示されてプロセスは中止となり、配信は失敗します。

デフォルト値は 5 秒です。

このオプションを 0 に設定した場合、パーソナライゼーションフェーズに時間制限はなくなります。


### 内部変数{#internal-variables}

次に示す変数は内部変数です。これらをパーソナライゼーションに使用できますが、値は決して変更しないでください。**delivery**、**message**、**dataSource**、**targetData**、**provider**、**coupon**、**couponValue**、**proposition**。


## チュートリアルビデオ {#personalization-video}

様々な種類の動的コンテンツについて理解し、パーソナライゼーションブロックと条件付きステートメントを作成して配信に適用する方法を説明します。


>[!VIDEO](https://video.tv.adobe.com/v/3452865?captions=jpn&quality=12)
