---
title: Adobe Experience Cloudソリューションとオーディエンスを共有する
description: オーディエンスをAdobe Experience Cloudソリューションと共有する方法を説明します
feature: Subscriptions
role: User
level: Beginner
hide: true
hidefromtoc: true
source-git-commit: ec46a6f41d640b11306a88d6a966f81f8c2e43e0
workflow-type: tm+mt
source-wordcount: '275'
ht-degree: 69%

---

# Adobe Experience Cloudソリューションとオーディエンスを共有する{#shared-audiences}


オプション 1:AEP ソースと宛先

オプション 2:Adobe担当者/AAM

統合可能な **Adobe Campaign** と **People コアサービス** Adobe Audience Manager 統合すると、次のことが可能になります。

* 共有されたオーディエンスまたはセグメントを、他の Adobe Experience Cloud ソリューションから Adobe Campaign にインポートします。オーディエンスは Adobe Campaign のリストを使用してインポートできます。

* Adobe Experience Cloud 共有オーディエンスのフォームでリストをエクスポートします。これらのオーディエンスは、お使いの他の Adobe Experience Cloud ソリューションで使用できます。オーディエンスは、ワークフローでターゲティングした後、専用の&#x200B;**[!UICONTROL 共有オーディエンスの更新]**&#x200B;アクティビティを使用してエクスポートできます。

この統合では、2 つのタイプの Adobe Experience Cloud ID をサポートしています。

* **訪問者 ID**：このタイプの識別子は、Adobe Experience Cloud の訪問者を Adobe Campaign 受信者に紐付けします。
* **宣言済み ID**：このタイプの識別子は、すべてのタイプのデータを Adobe Campaign データベース内の要素に紐付けします。Adobe Campaign では、事前定義された紐付けキーとして示されます。

   >[!NOTE]
   >
   > 宣言済み ID データソースも People コアサービス統合で使用できるようになりました。 
   >
   >People コアサービス統合を使用していて、Audience Manager 統合を追加する場合は、Adobe Audience Manager コンテキストでこの宣言済み ID データソースに移行する際に収集された ID 同期がすべて失われないように、Adobe Audience Manager コンサルタントの支援が必要です。

詳しくは、

[https://experienceleague.adobe.com/docs/experience-cloud-kcs/kbarticles/KA-16471.html?lang=en](https://experienceleague.adobe.com/docs/experience-cloud-kcs/kbarticles/KA-16471.html?lang=en)

[https://experienceleague.adobe.com/docs/core-services/interface/services/audiences/audience-library.html?lang=en](https://experienceleague.adobe.com/docs/core-services/interface/services/audiences/audience-library.html?lang=en)
