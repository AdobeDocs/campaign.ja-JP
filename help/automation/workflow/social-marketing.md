---
product: campaign
title: ソーシャルマーケティング
description: ソーシャルマーケティングテクニカルワークフローの詳細を説明します
feature: Workflows
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '138'
ht-degree: 100%
---

# ソーシャルマーケティング {#social-marketing}

以下に説明するワークフローは、デフォルトで&#x200B;**ソーシャルマーケティング**&#x200B;モジュールと共にインストールされます。 このモジュールは、X（旧 Twitter）との統合を可能にします。


>[!AVAILABILITY]
>
>`:warning:` Facebook を使用したソーシャルマーケティングは、Campaign Classic v7 でのみ使用できます。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">Twitter 統計の計算</span> <br /> </td> 
   <td> <span class="uicontrol">statsTwitter</span> <br /> </td> 
   <td> このワークフローでは、X（旧 Twitter）でのリツイートと訪問にリンクされた統計を計算します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">Twitter アカウントとの同期</span> <br /> </td> 
   <td> <span class="uicontrol">syncTwitter</span> <br /> </td> 
   <td> このワークフローでは、毎日午前 7 時に X のフォロワーを Adobe Campaign に読み込みます。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">Facebook 統計の計算（v7 のみ）</span> <br /> </td> 
   <td> <span class="uicontrol">statsFacebook</span> <br /> </td> 
   <td> Facebook ファンとのインタラクションにリンクされた統計情報を計算します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">Facebook ファンの同期（v7 のみ）</span> <br /> </td> 
   <td> <span class="uicontrol">syncFacebookFans</span> <br /> </td> 
   <td> 毎日午前 7 時に Facebook ファンを Adobe Campaign にインポートします。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">Facebook ページの同期（v7 のみ）</span> <br /> </td> 
   <td> <span class="uicontrol">syncFacebook</span> <br /> </td> 
   <td> 毎日午前 7 時に Facebook ページを Adobe Campaign と同期します。<br /> </td> 
  </tr> 
 </tbody> 
</table>

