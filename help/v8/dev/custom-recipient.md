---
title: デフォルトの受信者テーブルの変更
description: カスタム受信者テーブルの使い方を学ぶ
feature: Custom Resources, Profiles, Configuration
role: User, Developer
level: Intermediate, Experienced
exl-id: 0b71c76b-03d9-4023-84fc-3ecc0df9261b
TQID: https://experienceleague.adobe.com/W67Z2xVEBDpju5xlL2WiE5ZTzvrFmhuByMvfPb4x6nM
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 149
ht-degree: 88%

---

# カスタム受信者テーブルの使用{#gs-ac-custom-recipient}

Adobe Campaign には、ビルトインのプロファイルテーブル **nmsRecipient** が付属しています。 このテーブルには、拡張が容易な定義済みのフィールドとテーブルが多数含まれています。 このテーブルについて詳しくは、[このページ](datamodel.md#ootb-profiles)を参照してください。

ビルトインのテーブル拡張機能には柔軟性がありますが、使用しないフィールドやリンクを削除することはできません。 そのため、Campaign のビルトインの受信者テーブルの構造とデータモデルが大幅に異なる場合や、プロファイル数が多い場合は、カスタム受信者テーブルの使用が適している可能性があります。  ただし、この方法を実装する際には注意が必要です。

カスタム受信者テーブルを使用するようにインスタンスを設定する方法については、[Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/use-a-custom-recipient-table/about-custom-recipient-table.html?lang=ja){target="_blank"}を参照してください。