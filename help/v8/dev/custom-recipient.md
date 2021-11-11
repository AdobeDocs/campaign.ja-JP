---
title: デフォルトの受信者テーブルの変更
description: カスタム受信者テーブルの使い方を学ぶ
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 0b71c76b-03d9-4023-84fc-3ecc0df9261b
source-git-commit: 7234ca65f785b005b11851a5cd88add8cddeff4f
workflow-type: ht
source-wordcount: '136'
ht-degree: 100%

---

# カスタム受信者テーブルの使用{#gs-ac-custom-recipient}

Adobe Campaign には、組み込みのプロファイルテーブル **nmsRecipient** が付属しています。このテーブルには、拡張が容易な定義済みのフィールドとテーブルが多数含まれています。このテーブルについて詳しくは、[このページ](datamodel.md#ootb-profiles)を参照してください。

組み込みのテーブル拡張機能には柔軟性がありますが、使用しないフィールドやリンクを削除することはできません。 そのため、Campaign に組み込まれた受信者テーブルの構造とデータモデルが大幅に異なる場合や、プロファイル数が多い場合は、カスタム受信者テーブルの使用が適している可能性があります。ただし、この方法を実装する際には注意が必要です。

![](../assets/do-not-localize/book.png) カスタム受信者テーブルを使用するようにインスタンスを設定する方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/use-a-custom-recipient-table/about-custom-recipient-table.html?lang=ja){target=&quot;_blank&quot;}を参照してください。