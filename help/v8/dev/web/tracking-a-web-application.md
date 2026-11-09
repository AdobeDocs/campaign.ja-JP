---
product: campaign
title: web アプリケーションへの訪問のトラッキング
description: web アプリケーションへの訪問のトラッキング
feature: Web Apps, Reporting, Monitoring
version: Campaign v8, Campaign Classic v7
exl-id: 07bd36ce-c701-4998-974f-81fd4fac22a0
TQID: 'https://experienceleague.adobe.com/TtUrQKKVdMc4ZttsgFG9ly8hTCdqCnb3bMm2Tn3E6ww'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: c309ee4e-82e4-4f7e-b608-ef345678c34e
    internal-label: Dynamic reporting
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: f391046b-0cf3-4e76-bd3b-97fe06654506
    internal-label: Web Apps
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
  - id: d7be2b01-dc9c-40f7-aace-a151707504ed
    internal-label: Landing pages
  - id: b3a4149f-2b3a-44d1-894e-e3ac4c77fb47
    internal-label: Reporting interface
  - id: e519a22f-a06a-42fc-9d09-d78a3ab2c434
    internal-label: Monitoring guidelines
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
source-git-commit: 2ac66c0844ec361de9a1658f666c190fcfac8ffa
workflow-type: tm+mt
source-wordcount: '405'
ht-degree: 100%
---
# web アプリケーションへの訪問のトラッキング{#tracking-a-web-application}



Adobe Campaign では、トラッキングタグを挿入することで、web アプリケーションページへの訪問をトラッキングおよび測定できます。 この機能は、すべての web アプリケーションタイプ（フォーム、web ページなど）で使用できます。

そのため、複数のナビゲーションパスを定義して、成功を評価できます。 復元したデータは、各アプリケーションのレポートで使用できます。

このバージョンの主な強化点を次に示します。

* ナビゲーションパスの定義を簡単にするために、複数のトラッキングタグを同じページに挿入可能（例：購入、購読、戻るなど）
* Web アプリケーションダッシュボードでの、異なるページのナビゲーションパスおよびトラッキングタグの表示

  ![](assets/trackers_1.png)

* 完全なトラッキングレポートの生成

  ![](assets/trackers_5.png)

  主な指標を次に示します。

  * **コンバージョン率**：ナビゲーションパスのすべてのステップを表示した人の数
  * **バウンス率**：最初のステップのみ表示した人の数
  * **コンバージョンファネル**：各ステップ間の損失率

  さらに、**扇形**&#x200B;グラフ（円グラフ）に、そのソースに応じた母集団が表示されます。

## トラフィックソースの識別 {#identifying-the-traffic-source}

Web アプリケーションにアクセスする訪問者がどこから来たかを識別するには、次の 2 つの異なる手法を使用できます。

1. Web アプリケーションページへのアクセス権を付与するための特別な配信を送信。この場合、トラフィックソースは、この配信です。
1. Web アプリケーションを専用のトラフィックソースと関連付け。この場合、外部の「トラフィックソース」タイプの配信である必要があります。 Web アプリケーションプロパティから、またはターゲットマッピングから、選択できます。

   ![](assets/trackers_6.png)

Web アプリケーションのトラフィックソースを識別するために、Adobe Campaign は引き続き次の情報を探します。

1. ソース配信識別子（存在する場合）（nlId cookie）
1. Web アプリケーションプロパティで定義された、外部配信の識別子（存在する場合）
1. ターゲットマッピングで定義された、外部配信の識別子（存在する場合）

>[!NOTE]
>
>匿名トラッキングは、Campaign のインストール時にデプロイメントウィザードでこのオプションが有効になっている場合にのみ使用できます。

## デジタルコンテンツエディター（DCE）で設計された web アプリケーション {#web-applications-designed-with-digital-content-editor--dce-}

Web アプリケーションが HTML コンテンツエディター - **デジタルコンテンツエディター（DCE）** - を使用して作成されている場合、トラッキングタグは、エディターの「**[!UICONTROL プロパティ]**」タブで挿入されます。 デジタルコンテンツエディター（DCE）について詳しくは、[この節](about-campaign-html-editor.md)を参照してください。

![](assets/trackers_2.png)

Web インターフェイスを使用する場合、トラッキングタグは、ページプロパティから挿入される必要があります。

![](assets/trackers_3.png)

**[!UICONTROL ブロックを表示]**&#x200B;アイコンを使用すると、そのページに定義されたトラッキングタグの数を表示できます。

![](assets/trackers_4.png)
