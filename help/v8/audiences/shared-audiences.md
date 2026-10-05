---
title: Adobe Experience Cloud ソリューションを使用してオーディエンスを共有
description: Adobe Experience Cloud  ソリューションを使用してオーディエンスを共有する方法を学ぶ
feature: Audiences, Profiles
role: User
level: Beginner
hide: true
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: afa4204e-6d08-4e29-bc35-26aafb656d48
    internal-label: Profiles and audiences
subfeature_v2:
  - id: d6330382-c886-4f7a-a4f7-74e3f36c0d9c
    internal-label: Audiences
  - id: f529d0bd-1401-4c88-9833-43228cc1d40f
    internal-label: Profiles
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '263'
ht-degree: 95%
---
# Adobe Experience Cloud ソリューションを使用してオーディエンスを共有{#shared-audiences}

オプション 1：AEP ソースと宛先

オプション 2：Adobe People／AAM

**Adobe Campaign** と **People コアサービス**&#x200B;または Adobe Audience Manager を統合できます。 次のことが可能になります。

* 共有されたオーディエンスまたはセグメントを、他の Adobe Experience Cloud ソリューションから Adobe Campaign にインポートします。 オーディエンスは Adobe Campaign のリストを使用してインポートできます。

* Adobe Experience Cloud 共有オーディエンスのフォームでリストをエクスポートします。 これらのオーディエンスは、お使いの他の Adobe Experience Cloud ソリューションで使用できます。 オーディエンスは、ワークフローでターゲティングした後、専用の&#x200B;**[!UICONTROL 共有オーディエンスの更新]**&#x200B;アクティビティを使用してエクスポートできます。

この統合では、2 つのタイプの Adobe Experience Cloud ID をサポートしています。

* **訪問者 ID**：この識別子は、Adobe Experience Cloud の訪問者を Adobe Campaign 受信者に紐付けします。
* **宣言済み ID**：この識別子は、すべてのタイプのデータを Adobe Campaign データベース内の要素に紐付けします。 Adobe Campaign の事前定義済みの紐付けキーです。

  >[!NOTE]
  >
  > 宣言済み ID データソースも人物コアサービス統合で使用できます。
  >
  >人物コアサービス統合を使用していて、Audience Manager 統合を追加する場合は、Adobe Audience Manager コンテキストでこの宣言済み ID データソースに移行する際に収集された ID 同期がすべて失われないように、Adobe Audience Manager コンサルタントの支援が必要です。

詳しくは、次を参照してください。

[Adobe Audience Manager ナレッジベース ](https://experienceleague.adobe.com/docs/experience-cloud-kcs/kbarticles/KA-16471.html?lang=ja){target="_blank"}。

[Adobe Experience Cloud中央インターフェイス コンポーネントガイド ](https://experienceleague.adobe.com/docs/core-services/interface/services/audiences/audience-library.html?lang=ja){target="_blank"}。
