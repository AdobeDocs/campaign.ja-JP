---
title: デフォルトの受信者テーブルの変更
description: カスタム受信者テーブルの使い方を学ぶ
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 0b71c76b-03d9-4023-84fc-3ecc0df9261b
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: tm+mt
source-wordcount: '136'
ht-degree: 100%

---

# カスタム受信者テーブルの使用{#gs-ac-custom-recipient}

Adobe Campaign には、ビルトインのプロファイルテーブル **nmsRecipient** が付属しています。このテーブルには、拡張が容易な定義済みのフィールドとテーブルが多数含まれています。このテーブルについて詳しくは、[このページ](datamodel.md#ootb-profiles)を参照してください。

ビルトインのテーブル拡張機能には柔軟性がありますが、使用しないフィールドやリンクを削除することはできません。 そのため、Campaign のビルトイン受信者テーブルの構造とデータモデルが大幅に異なる場合や、プロファイル数が多い場合は、カスタム受信者テーブルの使用が適している可能性があります。ただし、この方法を実装する際には注意が必要です。

![](../assets/do-not-localize/book.png) カスタム受信者テーブルを使用するようにインスタンスを設定する方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/use-a-custom-recipient-table/about-custom-recipient-table.html?lang=ja){target=&quot;_blank&quot;}を参照してください。