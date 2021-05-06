---
solution: Campaign Classic
product: campaign
title: デフォルトの受信者テーブルの変更
description: カスタム受信者テーブルの使い方
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 0b71c76b-03d9-4023-84fc-3ecc0df9261b
translation-type: tm+mt
source-git-commit: ca8d75825bcf73226f381b59825ee14afb1c1e15
workflow-type: tm+mt
source-wordcount: '275'
ht-degree: 2%

---

# カスタム受信者テーブルの使用{#gs-ac-custom-recipient}

Adobe Campaignには、組み込みのプロファイルテーブルが付属しています。**nmsRecipient**. この表には、簡単に拡張できる定義済みのフィールドとテーブルが多数あります。 この表の詳細については、[このページ](datamodel.md#ootb-profiles)を参照してください。

組み込みのテーブル拡張機能のオファーは柔軟性が高く、使用されていないフィールドやリンクを削除することはできません。 そのため、キャンペーンに組み込まれている受信者テーブル構造とデータモデルが大幅に異なる場合や、プロファイル数が多い場合は、カスタム受信者テーブルを使用する方法が有効です。  ただし、この方法を導入する際には、一定の予防策が必要です。

この機能により、Adobe Campaignは外部データベースからのデータを処理できます。このデータは、配信のプロファイルのセットとして使用されます。 このプロセスの実装には、次のような制限が含まれます。

* キャンペーンクラウドデータベースとの間で更新ストリームがありません：このテーブルのデータは、そのテーブルをホストするデータベースエンジンを介して直接更新できます。
* 既存のデータベースで動作するプロセスは、安定している必要があります。
* 非標準の構造を持つプロファイルデータベースの使用：単一のインスタンスを使用して、様々な構造を持つ様々なテーブルに保存されたプロファイルに配信できる可能性。

この節では、Adobe Campaign内の既存の表をマップするための重要なポイントと、任意の表に基づいて配信を実行するために適用される設定について説明します。 また、エンドユーザー向けのクエリーインターフェイスを設計する方法についても説明します。


>[!CAUTION]
>
>Adobe Campaignのカスタマイズは、エキスパートユーザーのみが予約しています。 画面とスキーマのデザインの原則に関する高度な知識が必要です。

ここで有効/無効とは何かを確認してください。https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/use-a-custom-recipient-table/about-custom-recipient-table.html?lang=en#configuring-campaign-classic
