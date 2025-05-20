---
title: カスタム外部チャネルの基本を学ぶ
description: Adobe Campaign web を使用してカスタムの外部チャネル配信を作成し、送信する方法について説明します
role: User
level: Beginner, Intermediate
source-git-commit: 4ba419c52d6804e4f25f88990c226081ef0a06e6
workflow-type: tm+mt
source-wordcount: '268'
ht-degree: 4%

---


# カスタム外部チャネルの基本を学ぶ {#gs-custom-channel}

Adobe Campaignでは、サードパーティと統合されたカスタムの外部チャネルを作成できます。 その後、これらのチャネルに基づいて配信を調整および実行できます。

配信の作成と送信は、クライアントコンソールと web UI の両方で実行できます。 ただし、カスタム外部チャネルは、クライアントコンソールでのみ実行されます。

カスタム外部チャネルに基づいて配信を作成して送信する方法については、この [ ページ ](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/gs-custom-channel.html) を参照してください。

クライアントコンソールで新しい外部カスタムチャネルを作成する手順を次に示します。

1. スキーマを設定します [ 詳細情報 ](#configure-schema)。
1. 新しい外部アカウントを作成します [ 詳細情報 ](#create-ext-account)。
1. 新しい配信テンプレートの作成 [ 詳細を表示 ](#create-template)

## スキーマの設定{#configure-schema}

まず、利用可能なチャネルのリストに新しいチャネルを追加するようにスキーマを設定する必要があります。

1. Campaign エクスプローラーから、**管理**/**設定**/**データスキーマ** を選択します。

1. スキーマ拡張を作成して、新しいチャネルで messageType 列挙を拡張します。

   例：

   ```
   <enumeration basetype="byte" default="mail" label="Channel" name="messageType">
   <value desc="My Webpush" img="ncm:channels.png" label="My Webpush" name="webpush"
          value="122"/>
   </enumeration>
   ```

   ![](assets/cus-schema.png){zoomable="yes"}

## 新しい外部アカウントの作成{#create-ext-account}

次に、新しいルーティング外部アカウントを作成する必要があります。

1. Campaign エクスプローラーから、**管理**/**プラットフォーム**/**外部アカウント** を選択します。

1. 新しい外部アカウントを作成します。

1. チャネルを選択し、配信モードを **外部** に変更します。

   ![](assets/cus-ext-account.png){zoomable="yes"}

## 新しい配信テンプレートの作成{#create-template}

次に、新しいチャネルに関連付けられた新しいテンプレートを作成します。

1. Campaign エクスプローラーから、**リソース**/**テンプレート**/**配信テンプレート** を選択します。

1. 新しいテンプレートを作成します。

1. **プロパティ** をクリックし、適切なフォルダーとルーティングを選択します。

   ![](assets/cus-template.png){zoomable="yes"}

これで、新しいチャネルを使用できるようになります。 このチャネルに基づいて配信を作成および実行できます。


