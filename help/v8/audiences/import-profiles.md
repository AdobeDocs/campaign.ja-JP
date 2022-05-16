---
title: Campaign でのプロファイルのインポート
description: ' Campaign で連絡先をインポートする方法を説明します。'
feature: Audiences, Profiles
role: Data Engineer
level: Beginner
exl-id: b6a5083f-2b5a-4f5b-ad30-d91363752896
source-git-commit: d2f4e54b0c37cc019061dd3a7b7048cd80876ac0
workflow-type: tm+mt
source-wordcount: '307'
ht-degree: 100%

---

# ファイルからのプロファイルのインポート{#create-profiles}

Campaign データベースにデータを入力するには、[プロファイルを手動で追加](create-profiles.md)を行うか、以下に説明するようにプロファイルをインポートします。インポートしたファイルを使用して連絡先データを更新することもできます。

## ワークフローでのプロファイルの読み込み {#import-profiles-with-a-wf}

ワークフローは、一部のインポート処理を自動化する有効な手段になります。データをローカルファイルからインポートするか、SFTP からインポートするかに関係なく、ワークフローを使用してデータ管理手順を標準化することができます。

### リストからのデータの使用：リスト読み込み {#data-from-read-list}

データをファイルに準備および構造化して、ワークフローでインポートします。

ワークフローでのリスト読み込みアクティビティの使用について詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/read-list.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

### ファイルからのデータの読み込み {#data-from-a-file}

ワークフロー内で処理されるデータは、Adobe Campaign にインポートできるように、構造化ファイルから抽出することができます。

データ読み込みアクティビティの説明については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/data-loading--file-.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

データを収集したら、ワークフローで配信の拡充やデータベースの更新などに使用できます。詳しくは、[Campaign Classic v7 ドキュメント]https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/how-to-use-workflow-data.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

## 1 回限りのインポート{#import-jobs}

Adobe Campaign には、一般的なインポート機能が用意されています。これにより、例えば、ターゲット母集団の一部になる顧客や見込み客のリストを抽出したり、外部ファイルからデータをデータベースに入力したりすることができます。

一般的なインポートは、Adobe Campaign ホームページの&#x200B;**[!UICONTROL プロファイルとターゲット／ジョブ]**&#x200B;メニューから管理されます。

![](assets/new-import-job.png)

一般的なインポートの実行手順について詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/about-generic-imports-exports.html?lang=ja){target=&quot;_blank&quot;}を参照してください。
