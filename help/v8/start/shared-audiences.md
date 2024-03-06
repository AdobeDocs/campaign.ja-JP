---
title: Adobe Experience Cloud ソリューションを使用してオーディエンスを共有
description: Adobe Experience Cloud  ソリューションを使用してオーディエンスを共有する方法を学ぶ
feature: Audiences
role: User
level: Beginner
hide: true
hidefromtoc: true
exl-id: c4d30771-db5e-40be-8af6-50f0fab9f9af
source-git-commit: e0ec2940db3120dc8fbfd17dd2f5083bbf31232c
workflow-type: tm+mt
source-wordcount: '243'
ht-degree: 100%

---

# Adobe Experience Cloud ソリューションを使用してオーディエンスを共有{#shared-audiences}


オプション 1：AEP ソースと宛先

オプション 2：Adobe People／AAM

**Adobe Campaign** と **People コアサービス**&#x200B;または Adobe Audience Manager を統合できます。統合すると、次のことが可能になります。

* 共有されたオーディエンスまたはセグメントを、他の Adobe Experience Cloud ソリューションから Adobe Campaign にインポートします。オーディエンスは Adobe Campaign のリストを使用してインポートできます。

* Adobe Experience Cloud 共有オーディエンスのフォームでリストをエクスポートします。これらのオーディエンスは、お使いの他の Adobe Experience Cloud ソリューションで使用できます。オーディエンスは、ワークフローでターゲティングした後、専用の&#x200B;**[!UICONTROL 共有オーディエンスの更新]**&#x200B;アクティビティを使用してエクスポートできます。

この統合では、2 つのタイプの Adobe Experience Cloud ID をサポートしています。

* **訪問者 ID**：このタイプの識別子は、Adobe Experience Cloud の訪問者を Adobe Campaign 受信者に紐付けします。
* **宣言済み ID**：このタイプの識別子は、すべてのタイプのデータを Adobe Campaign データベース内の要素に紐付けします。Adobe Campaign では、事前定義された紐付けキーとして示されます。

  >[!NOTE]
  >
  > 宣言済み ID データソースも People コアサービス統合で使用できるようになりました。 
  >
  >人物コアサービス統合を使用していて、Audience Manager 統合を追加する場合は、Adobe Audience Manager コンテキストでこの宣言済み ID データソースに移行する際に収集された ID 同期がすべて失われないように、Adobe Audience Manager コンサルタントの支援が必要です。

詳しくは、次を参照してください。

[https://experienceleague.adobe.com/docs/experience-cloud-kcs/kbarticles/KA-16471.html?lang=ja](https://experienceleague.adobe.com/docs/experience-cloud-kcs/kbarticles/KA-16471.html?lang=ja)

[https://experienceleague.adobe.com/docs/core-services/interface/services/audiences/audience-library.html?lang=ja](https://experienceleague.adobe.com/docs/core-services/interface/services/audiences/audience-library.html?lang=ja)
