---
title: Adobe Campaign を使用したダイレクトメールの送信
description: Campaign におけるダイレクトメールの概要
feature: Direct Mail
role: User
level: Beginner
exl-id: ff2be012-72f3-428d-a973-196fea7ec4ab
source-git-commit: 5ab598d904bf900bcb4c01680e1b4730881ff8a5
workflow-type: tm+mt
source-wordcount: '392'
ht-degree: 100%

---

# ダイレクトメール配信の作成

ダイレクトメール配信では、ターゲット母集団に関するデータを含む抽出ファイルを生成できます。その後、このファイルを、ターゲット母集団にメッセージを配信するプロバイダーと共有できます。

ファイルを生成する手順は次のとおりです。

1. 配信の作成

   テンプレートに基づいてダイレクトメール配信を作成します。 **[!UICONTROL ダイレクトメールで配信（紙）]**&#x200B;ビルトインテンプレートを複製し、設定できます。

   詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-direct-mail/creating-a-direct-mail-delivery.html?lang=ja){target="_blank"}を参照してください

1. オーディエンスの定義

   受信者のプロファイルには、少なくとも受信者の名前と郵送先住所が登録されている必要があります。

   郵送先住所は、計算フィールドです。1 つのアドレスは、デフォルトで最大 6 つの行から構成されます。最初の行には名前の姓および名、続く数行には郵送先住所の番地など、最後の行には、郵便番号や市区町村が含まれます。デフォルトで計算済みの postalAddress フィールドの定義は、nms:recipient スキーマで確認できます。

   名前、郵便番号、市区町村フィールドが空でない場合、アドレスは完全に入力されているとみなされます。アドレスが不完全な受信者はダイレクトメールの配信から除外されます。

   詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-defining-the-target-population.html?lang=ja){target="_blank"}を参照してください

1. ファイルのコンテンツの定義

   抽出ウィザードを使用して、出力ファイルに書き出す情報（列）を定義します。

   詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-direct-mail/defining-the-direct-mail-content.html?lang=ja){target="_blank"}を参照してください

1. 配信の検証

   分析の結果と、出力ファイルのコンテンツをチェックします。

   詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-direct-mail/validating.html?lang=ja){target="_blank"}を参照してください

   マーケティングキャンペーンのコンテキストでは、抽出日に抽出ファイルが作成されます。 抽出したファイルのコンテンツを表示したり、ファイルを承認したり、形式を変更したり、必要に応じて抽出を再度開始したりできます。ファイルが承認されたら、通知メールを発送担当に送信できます。詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-approval.html?lang=ja)を参照してください。

1. 配信の開始

   抽出ファイルの検証が完了したら、「**配信を確定**」をクリックすると、配信の開始を確認するメッセージが表示されます。

   送信を確認すると、指定したファイルへのデータ抽出が開始されます。

   マーケティングキャンペーンのコンテキストでは、すべての承認が付与されると、特別なワークフローを使用して抽出ファイルが作成されます。このワークフローは、デフォルト設定では、ダイレクトメール配信が抽出保留中の場合に自動的に開始されます。詳しくは、[こちら](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-deliveries.html?lang=ja){target="_blank"}を参照してください。
