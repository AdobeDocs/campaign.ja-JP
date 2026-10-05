---
product: campaign
title: 受信ボックスレンダリングテクニカルワークフロー
description: ここでは、受信ボックスレンダリングパッケージと共にインストールされるテクニカルワークフローについて説明します。
feature: Workflows, Inbox Rendering
role: User, Admin
version: Campaign v8, Campaign Classic v7
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
  - id: c858a28b-ea19-49b0-8d48-828717fad89c
    internal-label: Prepare and test messages
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: 2317b1ea-6db4-58c7-851f-717a69c0f5c0
    internal-label: Inbox Rendering
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '64'
ht-degree: 100%
---

# 受信ボックスレンダリング（IR）{#inbox-rendering}



以下に説明するワークフローは、デフォルトで&#x200B;**受信ボックスレンダリング（IR）**&#x200B;モジュールと共にインストールされます。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>受信ボックスレンダリング用のシードネットワークを更新</strong><br /> </td> 
   <td> <span class="uicontrol">updateRenderingSeeds</span> <br /> </td> 
   <td> このワークフローは、<strong>deliverability.neolane.net</strong> の HTTPS ポートが開いている場合にのみ、受信ボックスレンダリングで使用されるメールアドレスを更新します。<br /> </td> 
  </tr> 
 </tbody> 
</table>

