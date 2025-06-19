---
title: カスタム外部チャネルの基本を学ぶ
description: Adobe Campaign Web でカスタム外部チャネル配信を作成して送信する方法を説明します
role: User
level: Beginner, Intermediate
exl-id: d2d92de6-3974-41c5-a0fd-09bbf6cf0020
source-git-commit: f94074d954137c4db39b2ef9f85141b79fe3356b
workflow-type: ht
source-wordcount: '268'
ht-degree: 100%

---

# カスタム外部チャネルの基本を学ぶ {#gs-custom-channel}

Adobe Campaign では、サードパーティと統合されたカスタム外部チャネルを作成できます。その後、これらのチャネルに基づいて配信を調整および実行できます。

配信の作成と送信は、クライアントコンソールと web UI の両方で実行できます。ただし、カスタム外部チャネルは、クライアントコンソールでのみ実行されます。

カスタム外部チャネルに基づいて配信を作成して送信する方法について詳しくは、この[ページ](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/gs-custom-channel.html?lang=ja)を参照してください。

クライアントコンソールで新しい外部カスタムチャネルを作成する手順は次のとおりです。

1. スキーマを設定します。[詳細情報](#configure-schema)
1. 新しい外部アカウントを作成します。[詳細情報](#create-ext-account)
1. 新しい配信テンプレートを作成します。[詳細情報](#create-template)

## スキーマの設定{#configure-schema}

まず、スキーマを設定して、使用可能なチャネルのリストに新しいチャネルを追加する必要があります。

1. Campaign エクスプローラーから、**管理**／**設定**／**データスキーマ**&#x200B;を選択します。

1. 新しいチャネルで messageType 定義済みリストを拡張するスキーマ拡張を作成します。

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

1. Campaign エクスプローラーから、**管理**／**プラットフォーム**／**外部アカウント**&#x200B;を選択します。

1. 新しい外部アカウントを作成します。

1. チャネルを選択して、配信モードを&#x200B;**外部**&#x200B;に変更します。

   ![](assets/cus-ext-account.png){zoomable="yes"}

## 新しい配信テンプレートの作成{#create-template}

次に、新しいチャネルに関連付ける新しいテンプレートを作成します。

1. Campaign エクスプローラーから、**リソース**／**テンプレート**／**配信テンプレート**&#x200B;を選択します。

1. 新しいテンプレートを作成します。

1. 「**プロパティ**」をクリックし、適切なフォルダーとルーティングを選択します。

   ![](assets/cus-template.png){zoomable="yes"}

新しいチャネルが使用できるようになりました。このチャネルに基づいて配信を作成および実行できます。
