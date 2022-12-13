---
product: campaign
title: プライバシーデータ保護規則ワークフロー
description: プライバシーデータ保護規則ワークフローの詳細を説明します
feature: Workflows, Privacy
source-git-commit: ac4d0d0c16f429ca0948a3c3257558c46700baeb
workflow-type: ht
source-wordcount: '0'
ht-degree: 100%

---


# プライバシーデータ保護規則{#general-data-protection-regulation-gdpr}


以下に説明するワークフローは、デフォルトで&#x200B;**プライバシーデータ保護規則**&#x200B;モジュールと共にインストールされます。このモジュールについて詳しくは、この[記事](https://helpx.adobe.com/jp/campaign/kb/acc-privacy.html)を参照してください。

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

