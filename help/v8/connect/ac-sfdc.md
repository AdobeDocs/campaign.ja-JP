---
title: Campaign と SFDC の連携
description: Campaign と Salesforce.com の使用方法を説明します
feature: Overview
role: Data Engineer
level: Beginner
source-git-commit: d2f4e54b0c37cc019061dd3a7b7048cd80876ac0
workflow-type: tm+mt
source-wordcount: '372'
ht-degree: 31%

---

# Campaign と SFDC の連携{#crm-sfdc}

Campaign v8 をに接続するように Campaign CRM コネクタを設定する方法を説明します。 **Salesforce.com**.

設定が完了したら、専用のワークフローアクティビティでシステム間のデータ同期を実行します。 [詳細情報](crm-data-sync.md)。

>[!NOTE]
>
>サポートされる SFDC バージョンの詳細については、Campaign を参照してください。 [互換性マトリックス](../start/compatibility-matrix.md).


Salesforce データをAdobe Campaignにインポートおよびエクスポートするための専用の外部アカウントを設定するには、以下の手順に従います。

## 接続の作成{#new-sfdc-external-account}

まず、Salesforce 外部アカウントを作成する必要があります。

1. 次を参照： **[!UICONTROL 管理/プラットフォーム/外部アカウント]** Campaign エクスプローラーのノードに追加し、外部アカウントを作成します。
1. 選択 **[!UICONTROL Salesforce.com]** 外部アカウント **タイプ** 」セクションに入力します。
1. 接続を有効にするための設定を入力します。

   ![](assets/sfdc-external-account.png)

   Salesforce CRM 外部アカウントを Adobe Campaign で使用できるように設定するには、次の情報を提供する必要があります。

   * Salesforce ログインを **[!UICONTROL アカウント]** フィールドに入力します。
   * Salesforce パスワードを入力してください。
   * この **[!UICONTROL クライアント識別子]** フィールドに入力します。
   * Salesforce をコピー&amp;ペースト **[!UICONTROL セキュリティトークン]**
   * を選択します。 **[!UICONTROL API バージョン]**. サポートされる SFDC API のバージョンは Campaign に一覧表示されます [互換性マトリックス](../start/compatibility-matrix.md).

1. を選択します。 **有効にする** 「 」オプションを使用して Campaign でアカウントを有効化します。

>[!NOTE]
>
>設定を承認するには、Adobe Campaign コンソールからログオフし、再度ログオンする必要があります。

## 同期するテーブルを選択{#sfdc-create-tables}

同期するテーブルを設定できるようになりました。

1. 次をクリック： **[!UICONTROL Salesforce CRM 設定ウィザード…]**.
1. 同期するテーブルを選択し、プロセスを開始します。
1. **[!UICONTROL 管理／設定／データスキーマ]**&#x200B;ノードで、Adobe Campaign で生成されたスキーマを確認します。

   の例 **Salesforce** キャンペーンにインポートされたスキーマ：

   ![](assets/sfdc-schemas.png)

## 列挙の同期{#sfdc-enum-sync}

スキーマを作成したら、列挙を Salesforce から Adobe Campaign に自動的に同期することができます。

1. 次からアシスタントを開く：  **[!UICONTROL 列挙を同期しています…]** リンク。
1. Salesforce 列挙に対応するAdobe Campaign列挙を選択します。
Adobe Campaign の列挙のすべての値を CRM の値に置き換えることができます。そのためには、**[!UICONTROL 置換]**&#x200B;列の「**[!UICONTROL はい]**」を選択します。

   ![](assets/sfdc-enum.png)

1. クリック **[!UICONTROL 次へ]** その後 **[!UICONTROL 開始]** ：列挙のインポートを開始します。

1. 次を参照： **[!UICONTROL 管理/プラットフォーム/列挙]** 読み込まれた値を確認するノード。


Adobe Campaignと Salesforce.com が連携しました。 2 つのシステム間にデータの同期を設定できます。 

Adobe Campaignデータと SFDC 間でデータを同期するには、ワークフローを作成し、 **[!UICONTROL CRM コネクタ]** アクティビティ。

データの同期について詳しくは、[このページ](crm-data-sync.md)を参照してください。
