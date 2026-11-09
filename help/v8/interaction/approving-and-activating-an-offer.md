---
product: campaign
title: オファーの承認と有効化
description: オファーの承認と有効化
feature: Interaction, Offers
version: Campaign v8, Campaign Classic v7
audience: interaction
content-type: reference
topic-tags: managing-an-offer-catalog
exl-id: cf7649fe-f62a-4dfa-a19e-9c1ca545e3e3
TQID: 'https://experienceleague.adobe.com/f0zYxpc5-71Ci-4Q485v4rRdD1xHs6tKLkl7vrITMP0'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: b6fcaf36-3bc4-4604-94f3-81b5d3f41ecf
    internal-label: Offer Management
  - id: 65702805-0026-5ca1-843a-144fa79f0883
    internal-label: Interaction
  - id: ea08db70-4682-59a2-9408-9aedd9548e07
    internal-label: Offers
source-git-commit: 936b7519d13ab54d94df9305ef05d4ceb6d6742d
workflow-type: tm+mt
source-wordcount: '663'
ht-degree: 100%
---
# オファーの承認と有効化{#approving-and-activating-an-offer}



オファーコンテンツが完成したら、オファーを承認して、ライブ環境への複製と配信が実行されるようにする必要があります。 承認は、オファーのコンテンツおよび実施要件に関しておこなわれます。

オファーダッシュボード上のバナーには、そのオファーについて承認サイクルを実行する必要があるかどうかが示されます。

![](assets/offer_validate_001.png)

## オファーコンテンツの承認 {#approving-offer-content}

オファーコンテンツを承認することは、ライブ環境で利用可能にする表示域を選択することを意味します。

オファーのコンテンツは、スペースごとに表示域を 1 つ持っています。 各オファースペースには、独自の構造とレンダリング関数があるので、オファー表示域にも違いがあります。

利用可能な特定のスペースに対してオファーコンテンツを承認し、他のスペースに対しては却下することもできます。

>[!IMPORTANT]
>
>オファーのコンテンツおよび実施要件が承認されると、パブリッシュワークフロー（オファー通知）が自動的に実行されてオファーがライブ環境に移行し、すべての有効化されたスペース上で利用できるようになります。

オファーコンテンツを承認するには、次の手順に従います。

1. 「**[!UICONTROL 承認]**」ボタンをクリックし、ポップアップから&#x200B;**[!UICONTROL コンテンツを承認]**&#x200B;を選択します。

   ![](assets/offer_validate_002.png)

1. ドロップダウンリストを使用して、編集を続行する表示域を選択するか、ライブ環境にパブリッシュする表示域を選択して「**[!UICONTROL コンテンツの承認]**」をクリックします。

   ![](assets/offer_validate_003.png)

   オファーコンテンツが承認されると、オファーダッシュボードの表の情報が更新されます。

   ![](assets/offer_validate_004.png)

   >[!NOTE]
   >
   >**[!UICONTROL 承認コンテンツ]**&#x200B;という表示は、すべてのオファー表示域が有効で承認済みであることを意味しません。 すべてのオファーが有効になり承認されているかどうかに関わらず、コンテンツの承認プロセスが達成されたことを示しています。

## オファーの実施要件の承認 {#approving-offer-eligibility}

オファーの実施要件を承認することは、オファーに設定された、または親カテゴリに作成されたルールから継承された、オファーの重み付けと実施要件ルールを承認または却下することを意味します。

>[!IMPORTANT]
>
>オファーのコンテンツおよび実施要件が承認されると、パブリッシュワークフロー（オファー通知）が自動的に実行されてオファーがライブ環境に移行し、すべての有効化されたスペース上で利用できるようになります。

* 「**[!UICONTROL スケジュールおよび実施要件ルール]**」をクリックすると、すべてのルールを記載したリストが表示されます。

  ![](assets/offer_validate_005.png)

* 実施要件ルールを変更するには、「**[!UICONTROL 却下]**」をクリックし、「**[!UICONTROL 実施要件の承認]**」をクリックします。

  ![](assets/offer_validate_007.png)

  オファーダッシュボード上の様々なステータスが更新されます。

  ![](assets/offer_validate_006.png)

* オファーの実施要件を承認するには、「**[!UICONTROL 実施要件を承認]**」をクリックします。

  ![](assets/offer_validate_008.png)

  実施要件を承認し、必要に応じてコメントを追加してから、「**[!UICONTROL 実施要件の承認]**」をクリックします。

  ![](assets/offer_validate_009.png)

  オファーダッシュボード上の様々なステータスが更新されます。

  ![](assets/offer_validate_010.png)

## 承認トラッキング {#approval-tracking}

オファーダッシュボードでは、承認をトラッキングできます。 この機能にアクセスするには、「**[!UICONTROL ログを非表示 / 表示]**」をクリックします。

![](assets/offer_validate_012.png)

>[!NOTE]
>
>トラッキングは、オファーの「**[!UICONTROL 監査]**」タブでも、レビュー担当者の詳細なコメント付きで利用できます。

## 承認の再開 {#restart-the-approval}

承認が開始された後で、承認を再開できます。 それには、次の手順に従います。

1. オファーダッシュボードの「**[!UICONTROL 承認コンテンツ]**」をクリックします。
1. **[!UICONTROL 編集]**&#x200B;ウィンドウが表示されます。再開する承認処理を選択し、「**[!UICONTROL 承認を再初期化して再送信]**」をクリックします。
1. 「**[!UICONTROL OK]**」をクリックして確定します。

![](assets/offer_validate_013.png)

## オファーの公開 {#publishing-the-offer}

コンテンツと実施要件が両方とも承認されると、承認サイクルが完了した各オファーに対して自動実行されるワークフローによって、オファーがパブリッシュされます。 また、オファーカタログに含まれるスペースやカテゴリをデザイン環境からライブ環境に（必要に応じて）同期するために、**[!UICONTROL オファー通知]**&#x200B;ワークフローが 1 時間ごとに実行されます。

デザイン環境で利用可能なオファーのダッシュボードには、ライブ環境の対応するオファーの名前など、パブリッシュに関する情報が含まれます。

![](assets/offer_golive_001.png)

ライブ環境で利用可能なオファーを表示するには、オファーのラベルをクリックします。ライブオファーには、すべての関連情報を含むダッシュボードがあります。

![](assets/offer_golive_002.png)

## オファーの無効化 {#disabling-an-offer}

承認済みのオファーは無効化できます。

それには、オンラインになっているオファーまたはオンライン待ちオファーのダッシュボードに移動し、「**[!UICONTROL オファーを無効にする]**」をクリックします。

また、カテゴリの「**[!UICONTROL 実施要件]**」タブで「**[!UICONTROL 有効]**」ボックスをクリックして、直接カテゴリを無効にすることもできます。

>[!NOTE]
>
>デザイン環境でオファーを削除すると、そのオファーは、リンクされたオンライン環境で自動的に無効化されます。 提案の保持期間が過ぎると、無効化されているオファーはオンライン環境から削除されます。

![](assets/offer_preview_deactivate.png)
