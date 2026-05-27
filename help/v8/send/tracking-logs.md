---
title: トラッキングログへのアクセス
description: トラッキングログにアクセスして解釈する方法を説明します
feature: Monitoring
role: User
level: Beginner
exl-id: df494786-5950-4646-aa9c-4dde45845057
TQID: https://experienceleague.adobe.com/yiuHvMtsmTULvX9X0ZjlMexNMsXpyGhkosOyMc-VoTs
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2:
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
subfeature_v2:
  - id: a39dbcf0-89cb-4765-9bcb-cf9dfbe2875f
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
  - id: d3cdead0-685a-4489-9250-4bb709942f66
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 360
ht-degree: 18%

---

# トラッキングログへのアクセス {#accessing-the-tracking-logs}

配信が送信され、トラッキングが有効化されると、**[!UICONTROL トラッキング]**&#x200B;テクニカルワークフローでトラッキングデータが取得されます。 デフォルトでは 1 時間ごとに取得されます。

## 受信者プロファイルでのトラッキングの表示 {#recipient-tracking}

次の例に示すように、この情報は、配信のターゲットとなっている受信者のプロファイルの「**[!UICONTROL トラッキング]**」タブに表示されます。

![](assets/s_ncs_user_select_tracking_tab_from_recipient.png)

このタブには、受信者によって追跡およびクリックされたすべてのURLが表示されます。次の項目を含みます。

* URLがクリックされました
* クリックの日時
* URLが見つかった配信
* その他の関連する追跡情報

この情報をフィルタリングおよび並べ替えて、受信者の行動を分析し、エンゲージメントパターンを特定できます。

## 配信でのトラッキングの表示 {#delivery-tracking}

トラッキング情報には、配信の「**[!UICONTROL トラッキング]**」タブからもアクセスできます。

![](assets/s_ncs_user_select_tracking_tab_from_del.png)

このタブでは、次を表示できます。

* **[!UICONTROL トラッキング統計]**：開封数、クリック数、その他のトラッキングイベントの概要を提供します
* **[!UICONTROL URLとクリックストリーム]**: クリックされたリンクと回数を表示します
* **[!UICONTROL ホットクリック]**：受信者がメッセージ内のどこをクリックしたかを視覚的に表示します
* **[!UICONTROL トラッキングログ]**：詳細な個別トラッキングレコードを提供

## トラッキングのトラブルシューティング {#troubleshooting}

>[!NOTE]
>
>配信の「**[!UICONTROL トラッキング]**」タブが表示されない場合は、トラッキングが有効化されていないことを意味します。 トラッキングの設定方法については、[この節](tracked-links.md)を参照してください。

### トラッキングのテクニカルワークフローを確認する {#check-tracking-workflow}

トラッキングデータを収集するには、トラッキング技術ワークフローを実行している必要があります。 トラッキング技術ワークフローは、**[!UICONTROL 管理/実稼動/技術ワークフロー]** フォルダーにあります。

ワークフローを検証するには：

1. **[!UICONTROL トラッキング]** ワークフローを開きます
1. 最終実行日を確認する
1. ワークフローログにエラーがないことを確認します

ワークフローが実行されていないか、エラーがある場合は、システム管理者にお問い合わせください。

## トラッキングデータの収集を検証

トラッキングが有効になっている配信を送信した後：

1. トラッキングワークフローが実行されるのを待ちます（デフォルトでは、1時間ごとに）
1. 配信を開き、**[!UICONTROL トラッキング]** タブに移動します
1. トラッキングデータが表示されていることを確認します
1. データが表示されない場合は、次の点を確認します。
   * 配信設定でトラッキングが有効になりました
   * トラッキングのテクニカルワークフローが実行されています
   * 受信者が電子メールを開き、リンクをクリックした

## 関連トピック {#related-topics}

* [トラッキング対象リンクを設定する方法を学ぶ](tracked-links.md)
* [トラッキングをテストする方法を学ぶ](testing-tracking.md)
* [トラッキングレポートについて](../reporting/delivery-reports.md#tracking-indicators)

