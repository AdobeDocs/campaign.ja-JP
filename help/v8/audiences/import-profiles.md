---
title: Campaign でのプロファイルのインポート
description: Campaign で連絡先をインポートする方法を説明します。
feature: Audiences, Profiles
role: User
level: Beginner
exl-id: b6a5083f-2b5a-4f5b-ad30-d91363752896
TQID: https://experienceleague.adobe.com/qoVtBCkTTk2DKaR605exVaJvjQ7kjKRoRg-9fJqdoo4
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2:
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 291
ht-degree: 95%

---

# ファイルからのプロファイルのインポート{#create-profiles}

Campaign データベースにデータを入力するには、[プロファイルを手動で追加](create-profiles.md)を行うか、以下に説明するようにプロファイルをインポートします。 インポートしたファイルを使用して連絡先データを更新することもできます。

## ワークフローでのプロファイルの読み込み {#import-profiles-with-a-wf}

ワークフローは、一部のインポート処理を自動化する有効な手段になります。 データをローカルファイルからインポートするか、SFTP からインポートするかに関係なく、ワークフローを使用してデータ管理手順を標準化することができます。

### リストからのデータの使用：リスト読み込み {#data-from-read-list}

データをファイルに準備および構造化して、ワークフローでインポートします。 [詳細情報](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/read-list.html?lang=ja){target="_blank"}。

### ファイルからのデータの読み込み {#data-from-a-file}

ワークフロー内で処理されるデータは、Adobe Campaign にインポートできるように、構造化ファイルから抽出することができます。 [詳細情報](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading--file-.html?lang=ja){target="_blank"}。

データを収集したら、ワークフローで配信の拡充やデータベースの更新などに使用できます。 詳しくは、[この節](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/use-workflow-data.html?lang=ja){target="_blank"}を参照してください。

## 1 回限りのインポート{#import-jobs}

Adobe Campaign には、一般的なインポート機能が用意されています。これにより、例えば、ターゲット母集団の一部になる顧客や見込み客のリストを抽出したり、外部ファイルからデータをデータベースに入力したりすることができます。

一般的なインポートは、Adobe Campaign ホームページの&#x200B;**[!UICONTROL プロファイルとターゲット／ジョブ]**&#x200B;メニューから管理されます。

![](assets/new-import-job.png)

汎用インポートを実行する手順については、[Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/about-generic-imports-exports.html?lang=ja){target="_blank"}を参照してください。
