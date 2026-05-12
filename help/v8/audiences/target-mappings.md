---
title: ターゲットマッピングの操作
description: ターゲットマッピングの使用方法と作成方法について説明します
feature: Audiences, Profiles
role: User, Developer
level: Beginner, Intermediate
exl-id: 5256fc15-1878-4064-9c75-7876a3826b83
TQID: https://experienceleague.adobe.com/ArJJi775HkzlpPOu-SoKg8UTcYTperTC1ySmXrHHpJg
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: b82389f8-9b5e-4083-8e3b-3cef299fb8b9
subfeature_v2: id: cfc95e9b-b035-4403-a6a9-b27a8a053a37
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
level_v2: id: b5a62a22-46f7-4f0d-b151-3fc640bef588id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2: id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 383
ht-degree: 100%

---

# ターゲットマッピングの操作{#gs-target-mappings}

メールと SMS 配信のデフォルトのターゲットは「**[!UICONTROL 受信者]**」です。 したがって、ターゲットマッピングには **nms:recipient** テーブルのフィールドが使用されます。

プッシュ通知の場合、デフォルトのターゲットマッピングは&#x200B;**サブスクライバーのアプリケーション（nms:appSubscriptionRcp）**&#x200B;であり、受信者のテーブルにリンクされています。

他のターゲットマッピングを配信に使用したり、新しいターゲットマッピングを作成したりできます。

## ビルトインのターゲットマッピング {#ootb-mappings}

Adobe Campaign には、次のビルトインのターゲットマッピングが用意されています。

| 名前 | 用途 | スキーマ |
|---|---|---|
| 受信者 | 受信者への配信（ビルトインの受信者テーブル） | nms:recipient |
| 訪問者 | 紹介（バイラルマーケティング）などの方法でプロファイルを収集した訪問者への配信 | mns:visitor |
| 購読 | ニュースレターなどの情報サービスを購読している受信者に対する配信 | nms:subscription |
| 訪問者の購読 | 情報サービスを購読している訪問者に対する配信 | nms:visitorSub |
| オペレーター | Adobe Campaign オペレーターに対する配信 | nms:operator |
| 外部ファイル | 配信に必要な情報をすべて含んだファイルを経由しての配信 | リンクされるスキーマなし、入力されるターゲットなし |
| サブスクライバーのアプリケーション | アプリケーションを購入している受信者に対する配信 | nms:appSubscriptionRcp |


## ターゲットマッピングの作成 {#new-mapping}

ターゲットマッピングを作成することもできます。 次の場合には、カスタムターゲットマッピングの追加が必要になる場合があります。

* カスタム受信者テーブルの使用
* ターゲットマッピング画面でのビルトインのターゲティングディメンションとは異なるフィルタリングディメンションの設定

カスタム受信者テーブルについて詳しくは、[このページ](../dev/custom-recipient.md)を参照してください。

Adobe Campaign ターゲットマッピング作成ウィザードを使用すると、カスタムターゲットマッピングを使用するために必要なすべてのスキーマを作成できます。

1. Adobe Campaign エクスプローラーから、**[!UICONTROL 管理]** `>` **[!UICONTROL キャンペーン管理]** `>` **[!UICONTROL ターゲットマッピング]**&#x200B;を参照します。

1. 新しいターゲットマッピングを作成し、カスタムスキーマをターゲティングディメンションとして選択します。

   ![](assets/new-target-mapping.png)


1. プロファイル情報が格納されるフィールド（姓、名、メール、住所など）を指定します。

   ![](assets/wf_new_mapping_define_join.png)

1. 拡張スキーマを識別しやすくするためのサフィックスなど、情報ストレージのパラメーターを指定します。

   ![](assets/wf_new_mapping_define_names.png)

   除外（**excludelog**）をメッセージ付き（**broadlog**）で格納するか、個々のテーブルに格納するかを選択できます。

   この配信マッピングのトラッキングを管理するかどうかを選択することもできます（**trackinglog**）。

1. 次に、考慮する拡張を選択します。 拡張機能のタイプは、Campaign の設定とアドオンに応じて異なります。

   ![](assets/wf_new_mapping_define_extensions.png)

   「**[!UICONTROL 保存]**」ボタンをクリックし、配信マッピングの作成を開始します。リンクされているすべてのテーブルは、選択したパラメーターに基づいて自動的に作成されます。
