---
title: SMS の監視と追跡
description: SMS 配信の監視とトラッキングについて
feature: SMS
role: User
level: Beginner, Intermediate
version: Campaign v8, Campaign Classic v7
exl-id: 42be45db-3a90-4ad0-896d-f082afff1f8e
TQID: 'https://experienceleague.adobe.com/wETwv6lIEctnfT54WQjulzGxeCPo6lZDF-rxlwBtF4I'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
subfeature_v2:
  - id: b1bd1421-1927-4c59-9bc6-ce292360e43b
    internal-label: SMS Messaging
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
source-git-commit: c4f3ffbf421621fa15b1b4d56480bd0ff9304254
workflow-type: tm+mt
source-wordcount: '317'
ht-degree: 52%
---
# SMSの監視と追跡

マーケティング施策を効率的に進めるためには、SMS配信を監視することが重要です。

以下は、配信の送信後に何が起こるかを知る必要がある可能性です

## SMS配信ダッシュボードについて

配信ダッシュボードには、SMSに関する多くの情報が表示されます。

ダッシュボードにアクセスするには、配信リストで配信をダブルクリックします。

「**[!UICONTROL 概要]**」タブには、処理されたメッセージの数や成功の数などの主なデータが表示されます。

![SMS配信ダッシュボードの概要タブ。送信、処理済み、成功率、配信ステータス &#x200B;](assets/sms_summary.png){zoomable="yes"}に関するメッセージが表示されている

SMS の送信後は、配信のコンテンツに関する「**[!UICONTROL SMS]**」タブにアクセスして変更することはできなくなります。

「**[!UICONTROL 配信]**」タブには、配信ログに関する情報が表示されます。 連絡先アドレスごとに、SMS が送信されたかどうかを確認できます

![配信タブのログ リストは、連絡を受けたアドレスごとに、SMSが送信されたかどうかを示し、ステータスと理由を示します](assets/sms_deliverylogs.png){zoomable="yes"}

「**[!UICONTROL 除外]**」タブでは、一部のアドレスがターゲットから除外される理由の詳細を確認できます。

![配信タブの「除外」タブに、理由が無視されたアドレス（「アドレスをブロックリストに加える」や「ダブル」など）が表示される](assets/sms_exclusions.png){zoomable="yes"}

「**[!UICONTROL トラッキング]**」タブには、トラッキングに関する情報が表示されます。 以下は、SMS コンテンツで追跡されるURLの例です。

![SMS コンテンツからトラッキングされたURLをラベル、タイプ、ソース URLと共に表示するトラッキングタブ URLのリスト &#x200B;](assets/sms_trackinglogs.png){zoomable="yes"}

最後に、配信のローンチ中の詳細がすべて表示される「**[!UICONTROL 監査]**」タブを以下に示します。

![配信開始時に記録されたメッセージを一覧表示する監査タブのログ。日付とメッセージの列](assets/sms_audit.png){zoomable="yes"}

## SMS のエラーについて

SMS のエラーのタイプと理由はメールの場合と同じです。

詳しくは、[配信エラー](../delivery-failures.md)と、特に [SMS 強制隔離](../delivery-failures.md#sms-quarantines)を参照してください。
