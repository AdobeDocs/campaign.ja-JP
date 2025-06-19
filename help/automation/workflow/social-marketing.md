---
product: campaign
title: ソーシャルマーケティング
description: ソーシャルマーケティングテクニカルワークフローの詳細を説明します
feature: Workflows
source-git-commit: 472c9d13ca68d19b71b1a2bc7b9526f84bed04c8
workflow-type: ht
source-wordcount: '138'
ht-degree: 100%

---


# ソーシャルマーケティング {#social-marketing}

以下に説明するワークフローは、デフォルトで&#x200B;**ソーシャルマーケティング**&#x200B;モジュールと共にインストールされます。このモジュールは、X（旧 Twitter）との統合を可能にします。


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

