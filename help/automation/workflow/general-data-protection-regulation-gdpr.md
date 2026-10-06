---
product: campaign
title: プライバシーデータ保護規則ワークフロー
description: プライバシーデータ保護規則ワークフローの詳細を説明します
role: User
version: Campaign v8, Campaign Classic v7
feature: Workflows, Privacy
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
  - id: a7760dfc-5c44-4d77-bb68-c50b1e265c93
    internal-label: Security and privacy
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: ac9c0a9c-8a76-4419-bd64-9c34c5782666
    internal-label: Privacy
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '109'
ht-degree: 100%
---

# プライバシーデータ保護規則{#general-data-protection-regulation-gdpr}


以下に説明するワークフローは、デフォルトで&#x200B;**プライバシーデータ保護規則**&#x200B;モジュールと共にインストールされます。 このモジュールについて詳しくは、この[記事](https://helpx.adobe.com/jp/campaign/kb/acc-privacy.html)を参照してください。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">プライバシーリクエストを収集</span> <br /> </td> 
   <td> <span class="uicontrol">collectPrivacyRequests</span> <br /> </td> 
   <td> このワークフローでは、Adobe Campaign に保存されている受信者のデータを生成し、プライバシーリクエストの画面でダウンロードできるようにします。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">プライバシーリクエストデータを削除</span> <br /> </td> 
   <td> <span class="uicontrol">deletePrivacyRequestsData</span> <br /> </td> 
   <td> このワークフローでは、Adobe Campaign に保存されている受信者のデータを削除します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">プライバシーリクエストのクリーンアップ</span> <br /> </td> 
   <td> <span class="uicontrol">cleanupPrivacyRequests</span> <br /> </td> 
   <td> このワークフローでは、90 日より古いアクセス要求ファイルが消去されます。<br /> </td> 
  </tr> 
 </tbody> 
</table>

