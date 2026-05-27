---
title: プロファイルとオーディエンスの基本を学ぶ
description: Campaign でプロファイルとオーディエンスを作成および管理する方法を学ぶ
feature: Audiences, Profiles
role: User
level: Beginner
exl-id: 43483085-8aa6-47e6-89e7-9211e37beaa4
version: Campaign v8, Campaign Classic v7
TQID: https://experienceleague.adobe.com/rk1-Q8Ghg8L8jSqGNvTRYY0alwUry6l8lPv-GROTfFQ
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: afa4204e-6d08-4e29-bc35-26aafb656d48
subfeature_v2: id: d6330382-c886-4f7a-a4f7-74e3f36c0d9cid: f529d0bd-1401-4c88-9833-43228cc1d40f
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
level_v2: id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2: id: e0eb8757-182f-49f3-94a4-1587d16f5094
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 346
ht-degree: 100%

---

# プロファイルとオーディエンスの基本を学ぶ{#gs-profiles-and-audiences}

プロファイルは、Campaign データベースに格納される連絡先です。顧客、サービスの購読者、見込み客などが含まれます。 プロファイルを取得して、このようなデータベースを構築するメカニズムとして、web フォームによるオンライン収集、テキストファイルの手動または自動インポート、会社のデータベースまたは他の情報システムを使用したレプリケーションなどがあります。 Adobe Campaign を利用すると、マーケティング履歴、購入情報、好み、CRM データ、関連する個人情報などを統合されたビューに組み込んで分析し、アクションを起こすことができま プロファイルには、個人のターゲティング、選定、トラッキングなどに必要な情報がすべて含まれています。

プロファイルは、**nmsRecipient** テーブルまたは外部テーブル内のレコードで、すべてのプロファイル属性（名、姓、メールアドレス、Cookie ID、顧客 ID、モバイル識別情報、特定のチャネルに関連するその他の情報など）が保存されます。 受信者テーブルにリンクされるその他のテーブルには、プロファイルに関連付けられたデータが含まれます。例えば、受信者に送信されたすべての配信記録を含む、配信ログテーブルなどです。 ビルトインのプロファイルと受信者テーブルについての詳細は、[この節](../dev/datamodel.md#ootb-profiles)を参照してください。

![](assets/recipients-in-explorer.png)

Adobe Campaign では、**受信者**&#x200B;とは、配信（メール、SMS など）の送信対象となるデフォルトのプロファイルのことです。

データベースに保存された受信者データを使用すると、特定の配信を受け取るターゲットをフィルタリングしたり、配信コンテンツにパーソナライズデータを追加したりできます。 データベースには、他のタイプのプロファイルも含まれています。 それらのプロファイルは用途が異なります。 例えば、シードプロファイルは、配信を最終的なターゲットに送信する前のテスト用に作成されます。

Adobe Campaign にプロファイルデータを入力するには、次の方法を使用できます。

* CRM システムやフラットファイルなどの外部データソースから[データファイルをインポートする](../start/import.md)
* 顧客が自分で情報を入力し、自分自身のプロファイルを作成できる [web フォームの作成](../dev/webapps.md)
* プロファイルが格納されている[外部データベースへのマッピング](../connect/fda.md)
* 次のように、クライアントコンソールにプロファイルを手動で入力します。

![](assets/create-profile.png)

インポートしたら、オーディエンスを作成してメッセージを送信できます。 オーディエンスの作成方法について詳しくは、[この節](create-audiences.md)を参照してください。