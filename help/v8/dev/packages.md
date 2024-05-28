---
title: データパッケージの使用
description: データパッケージの使用
feature: Data Management, Package Export/Import
role: Developer
level: Intermediate, Experienced
source-git-commit: 933c266febdc293dccdf9b7383d94d7a5dce22bc
workflow-type: tm+mt
source-wordcount: '2020'
ht-degree: 50%

---

# データパッケージの使用{#data-packages}

## パッケージの概要 {#gs-data-packages}

データパッケージを使用すると、Platform のカスタム設定とデータを書き出して読み込むことができます。 パッケージには、フィルタリングの有無に関わらず、様々なタイプの設定やコンポーネントを含めることができます。

Campaign データパッケージでは、Adobe Campaign データベースのエンティティが XML ファイルに表示されます。 パッケージでは、各エンティティは、すべてのデータで表されます。

の原則 **データパッケージ** は、データ設定をエクスポートし、別のAdobe Campaign環境に統合することです。 この[節](#data-package-best-practices)では、一貫したデータパッケージのセットを維持する方法を説明します。

### パッケージの種類 {#types-of-packages}

Adobe Campaignでは、ユーザーパッケージ、プラットフォームパッケージ、管理パッケージの 3 種類のパッケージを使用できます。

* A **ユーザーパッケージ** エクスポートするエンティティのリストを選択できます。 このタイプのパッケージは、依存関係を管理し、エラーを確認します。
* A **プラットフォームパッケージ** 追加されたすべてのテクニカルリソース（非標準）を含む：スキーマ、JavaScript コードなど。
* An **管理パッケージ** 追加されたすべてのテンプレートとビジネスオブジェクト（非標準）を含む：テンプレート、ライブラリなど。

>[!CAUTION]
>
>この **platform** および **admin** パッケージには、書き出すエンティティの事前定義済みリストが含まれています。 個々のエンティティは、作成したパッケージに含まれる事前定義のリソースを削除するためのフィルター条件にリンクされています。

## データ構造 {#data-structure}

データパッケージは、の文法に準拠した構造化 XML 文書です。 **xrk:navtree** データスキーマ（以下の例のように）

```xml
<package>
  <entities schema="nms:recipient">
    <recipient email="john.smith@adobe.com" lastName="Smith" firstName="John">      
      <folder _operation="none" name="nmsRootFolder"/>      
      <company _operation="none" name="Adobe"/>
    </recipient>
  </entities>
  <entities schema="sfa:company">
    <company name="Adobe">
      <location city="London" zipCode="W11 2BQ"/>
    </company>
  </entities>
</package>
```

XML ドキュメントの先頭と末尾には必ず `<package>` 要素を記述します。任意 `<entities>` に続く要素は、ドキュメントタイプ別にデータを配布します。 An `<entities>` 要素には、に入力されたデータスキーマの形式でパッケージのデータが含まれます **スキーマ** 属性。 パッケージ内のデータには、例えば自動生成キー（**autopk** オプション）のような、ベース間の互換性がない内部キーが含まれていてはなりません。

この例では、の結合 `folder` および `company` リンクは、宛先テーブルのいわゆる「高レベル」キーに置き換えられました。

```xml
<recipient>
  <folder _operation="none" name="nmsRootFolder"/>
  <company _operation="none" name="Adobe"/>
</recipient>
```

この `operation` 値がの属性 `none` 調整リンクを定義します。

データパッケージは、任意のテキストエディターから手動で作成できます。 XML ドキュメントの構造がに準拠していることを確認する必要があります `xtk:navtree` データスキーマ。 クライアントコンソールには、データパッケージのエクスポートおよびインポートモジュールがあります。

## パッケージのエクスポート {#export-packages}

パッケージは次の 3 つの方法でエクスポートできます。

* の使用 **[!UICONTROL パッケージのエクスポート]** 1 つのパッケージ内の一連のオブジェクトを書き出すためのアシスタント。 [詳細情報](#export-a-set-of-objects-in-a-package)
* をエクスポートするには **単一オブジェクト**&#x200B;を選択し、右クリックして **[!UICONTROL アクション / パッケージでのエクスポート]**.
* の使用 **パッケージ定義** 後で書き出すオブジェクトをパッケージに追加するパッケージ構造を作成します。 [詳細情報](#manage-package-definitions)

パッケージをエクスポートしたら、そのパッケージと追加されたすべてのエンティティを別の Campaign インスタンスにインポートできます。

### パッケージに含まれる一連のオブジェクトのエクスポート {#export-a-set-of-objects-in-a-package}

データ・パッケージ内の一連のオブジェクトをエクスポートするには、次の手順に従います。

1. を使用して、パッケージエクスポートアシスタントに移動します。 **[!UICONTROL ツール /詳細/ パッケージをエクスポート…]** エクスプローラーのメニュー。
1. 「」を選択します [パッケージのタイプ](#types-of-packages).

   ![](assets/package_type.png)

1. 「」をクリックします **追加** ボタンをクリックして、パッケージとしてエクスポートするエンティティを選択します。

   >[!CAUTION]
   >
   >エクスポートの対象が&#x200B;**[!UICONTROL オファーカテゴリ]**、**[!UICONTROL オファー環境]**、**[!UICONTROL プログラム]**&#x200B;または&#x200B;**[!UICONTROL プラン]**&#x200B;タイプのフォルダーである場合は、**xtk:folder** を絶対に選択しないでください。選択するとデータの一部が失われることがあります。フォルダーに対応するエンティティ（オファーカテゴリには **nms:offerCategory**、オファー環境には **nms:offerEnv**、プログラムには **nms:program**、プランには **nms:plan**）を選択します。

   エンティティのエクスポート処理の流れは、依存関係メカニズムによってコントロールされます。詳しくは、[依存関係の管理](#managing-dependencies)を参照してください。

1. クリック **[!UICONTROL 次]** 抽出するドキュメントのタイプに基づいてフィルタークエリを定義します。 ここでは、データ抽出用のフィルタリング節を設定する必要があります。

   >[!NOTE]
   >
   >Query Editor については、[この節](../../automation/workflow/query.md)を参照してください。

1. クリック **[!UICONTROL 次]** 書き出されたデータの並べ替え順を選択します。

1. 抽出するデータをプレビューして、設定を確認します。

1. パッケージエクスポートアシスタントの最後のページでは、エクスポートを開始できます。 「**[!UICONTROL ファイル]**」フィールドで指定されたファイルにデータが格納されます。

### 依存関係の管理 {#manage-dependencies}

書き出し処理では、書き出された様々な要素間のリンクが追跡されます。 このメカニズムは次の 2 つのルールに基づいて機能します。

* を含むリンクにリンクされたオブジェクト `own` または `owncopy` 型の整合性は、エクスポートされたオブジェクトと同じパッケージでエクスポートされます。
* を含むリンクにリンクされたオブジェクト `neutral` または `define` 型の整合性（定義済みリンク）は個別にエクスポートする必要があります。

>[!NOTE]
>
>スキーマ要素にリンクされる整合性タイプは、で定義されます。 [このページ](database-links.md).

#### キャンペーンのエクスポート {#export-a-campaign}

キャンペーンのエクスポート方法の例を以下に示します。 エクスポートするマーケティングキャンペーンには、次のものが含まれます。
* a `MyTask`タスク
* a `campaignWorkflow` 次のフォルダーのワークフロー： **[!UICONTROL 管理/プロダクション/テクニカルワークフロー/キャンペーンプロセス/MyWorkflow]**.

タスクとワークフローは、一致するスキーマが次のリンクで接続されているので、キャンペーンと同じパッケージでエクスポートされます `own` integrity と入力します。

パッケージのコンテンツは次のとおりです。

```xml
<?xml version='1.0'?>
<package author="Administrator (admin)" buildNumber="7974" buildVersion="7.1" img=""
label="" name="" namespace="" vendor="">
 <desc></desc>
 <version buildDate="2013-01-09 10:30:18.954Z"/>
 <entities schema="nms:operation">
  <operation duration="432000" end="2013-01-14" internalName="OP1" label="MyCampaign"
  modelName="opEmpty" start="2013-01-09">
   <controlGroup>
    <where filteringSchema=""/>
   </controlGroup>
   <seedList>
    <where filteringSchema="nms:seedMember"></where>
    <seedMember internalName="SDM1"></seedMember>
   </seedList>
   <parameter useAsset="1" useBudget="1" useControlGroup="1" useDeliveryOutline="1"
   useDocument="1" useFCPValidation="0" useSeedMember="1" useTask="1"
   useValidation="1" useWorkflow="1"></parameter>
   <fcpSeed>
    <where filteringSchema="nms:seedMember"></where>
   </fcpSeed>
   <owner _operation="none" name="admin" type="0"/>
   <program _operation="none" name="nmsOperations"/>
   <task end="2013-01-17 10:07:51.000Z" label="MyTask" name="TSK2" start="2013-01-16 10:07:51.000Z"
   status="1">
    <owner _operation="none" name="admin" type="0"/>
    <operation _operation="none" internalName="OP1"/>
    <folder _operation="none" name="nmsTask"/>
   </task>
   <workflow internalName="WKF12" label="CampaignWorkflow" modelName="newOpEmpty"
   order="8982" scenario-cs="Notification of the workflow supervisor (notifySupervisor)"
   schema="nms:recipient">
    <scenario internalName="notifySupervisor"/>
    <desc></desc>
    <folder _operation="none" name="Folder4"/>
    <operation _operation="none" internalName="OP1"/>
   </workflow>
  </operation>
 </entities>
</package>   
```

パッケージタイプへの関連付けは、 `@pkgAdmin and @pkgPlatform` 属性。 どちらの属性にも、パッケージへの所属条件を定義する XTK 式が指定されます。

```xml
<element name="offerEnv" img="nms:offerEnv.png" 
template="xtk:folder" pkgAdmin="@id != 0">
```

最後に、 `@pkgStatus` 属性を使用すると、これらの要素または属性の書き出しルールを定義できます。 この属性の値に応じて、該当する要素または属性はエクスポートされるパッケージに含まれます。この属性に指定できる値は次の 3 種類です。

* `never`：フィールド/リンクを書き出さない
* `always`：このフィールドの書き出しを強制します
* `preCreate`：リンクエンティティの作成を許可します

>[!NOTE]
>
>この `preCreate` 値は、リンクタイプのイベントに対してのみ許可されます。 これにより、書き出されたパッケージにまだ読み込まれていないエンティティを作成または指定できます。

## パッケージ定義の管理 {#manage-package-definitions}

パッケージ定義では、パッケージ構造を作成し、エンティティを追加してから、単一のパッケージにエクスポートできます。その後、このパッケージと追加されたすべてのエンティティを他の Campaign インスタンスにインポートできます。

### パッケージ定義の作成 {#create-a-package-definition}

パッケージ定義には、**[!UICONTROL 管理／設定／パッケージ管理／パッケージ定義]**&#x200B;メニューからアクセスできます。

パッケージ定義を作成するには、「**[!UICONTROL 新規]**」ボタンをクリックし、パッケージ定義の一般情報を入力します。

![](assets/packagedefinition_create.png)

その後、パッケージ定義にエンティティを追加し、XML ファイルパッケージにエクスポートします。

**関連トピック：**

* [パッケージ定義へのエンティティの追加](#add-entities-to-a-package-definition)
* [パッケージ定義の生成に関する設定](#configure-package-definitions-generation)
* [パッケージ定義からのパッケージのエクスポート](#export-packages-from-a-package-definition)

### パッケージ定義へのエンティティの追加 {#add-entities-to-a-package-definition}

「**[!UICONTROL コンテンツ]**」タブで「**[!UICONTROL 追加]**」ボタンをクリックし、パッケージとしてエクスポートするエンティティを選択します。エンティティを選択する際のベストプラクティスについては、を参照してください。 [この節](#export-a-set-of-objects-in-a-package).

![](assets/packagedefinition_addentities.png)

エンティティは、インスタンス内の場所から直接パッケージ定義に追加できます。これをおこなうには、以下の手順に従います。

1. 目的のエンティティを右クリックして、**[!UICONTROL アクション／パッケージにエクスポート]**&#x200B;を選択します。

1. **[!UICONTROL パッケージ定義に追加]**&#x200B;を選択し、エンティティを追加するパッケージ定義を選択します。

1. エンティティをパッケージ定義に追加すると、そのエンティティがパッケージとしてエクスポートされます（[この節](#export-packages-from-a-package-definition)を参照）。

### パッケージ定義の生成の設定 {#configure-package-definitions-generation}

パッケージの生成は、パッケージ定義の「**[!UICONTROL コンテンツ]**」タブで設定できます。設定をおこなうには、「**[!UICONTROL 生成パラメーター]**」リンクをクリックします。

![](assets/packagedefinition_generationparameters.png)

* の使用 **[!UICONTROL 定義を含める]** パッケージ定義で現在使用されている定義を含めるオプション。
* の使用 **[!UICONTROL インストールスクリプトを含める]** パッケージの読み込み時に実行する javascript スクリプトを追加するオプション。 選択すると、パッケージ定義画面に「**[!UICONTROL スクリプト]**」タブが表示されます。
* の使用 **[!UICONTROL デフォルト値を含める]** すべてのエンティティの属性の値をパッケージに追加するオプション。

  長い書き出しを避けるために、このオプションはデフォルトでは選択されていません。 つまり、デフォルト値（スキーマで他の場合に定義されない場合は「空の文字列」、「0」、「false」）を持つエンティティの属性は、パッケージに追加されないので、書き出されません。

  >[!CAUTION]
  >
  >パッケージのインポート先のインスタンスに、パッケージと同じエンティティ（同じ外部 ID など）が含まれている場合は、そのエンティティの属性は更新されません。これは、以前のインスタンスの属性がデフォルト値を持つ場合に発生する可能性があります。これらの属性はパッケージに含まれないからです。 この場合は「**[!UICONTROL デフォルト値を含める]**」オプションを選択すると、元のインスタンスからすべての属性がパッケージにエクスポートされるので、複数のバージョンが結合されることはありません。

### パッケージ定義からのパッケージのエクスポート {#export-packages-from-a-package-definition}

パッケージ定義からパッケージをエクスポートするには、以下の手順に従います。

1. エクスポートするパッケージ定義を選択し、 **[!UICONTROL アクション]** ボタンをクリックし、を選択します。 **[!UICONTROL パッケージをエクスポート]**.
1. 書き出したファイルの名前と場所を確認します。
1. 「」をクリックします **[!UICONTROL 開始]** ボタンをクリックして、書き出しを開始します。

## パッケージのインポート {#import-packages}

メインメニューからパッケージインポートアシスタントにアクセスできます **[!UICONTROL ツール /詳細/ パッケージをインポート]** クライアントコンソールの。

### ファイルからのパッケージのインストール {#install-a-package-from-a-file}

既存のデータパッケージを読み込むには、次の手順に従います。

1. メインメニューから読み込みウィザードにアクセスする **[!UICONTROL ツール /詳細/ パッケージをインポート]** クライアントコンソールの。
1. XML ファイルを選択し、 **[!UICONTROL 開く]**.

インポートされるパッケージの内容が、エディターの中央部セクションに表示されます。

「**[!UICONTROL 次へ]**」、「**[!UICONTROL 開始]**」の順にクリックすると、インポートが開始されます。

### ビルトインパッケージのインストール {#install-a-standard-package}

ビルトインパッケージ（ 標準パッケージ）は、Adobe Campaignの設定時にインストールされます。 権限、デプロイメントモデル、製品の内容に応じて、新しい標準パッケージをインポートできます。

インストールできるパッケージを確認するには、ライセンス契約を参照してください。

## データパッケージのベストプラクティス {#data-package-best-practices}

この節では、プロジェクトの全期間にわたって一貫した方法でデータパッケージを編成する方法について説明します。


### バージョン

プラットフォームの同じバージョン内で必ず読み込む必要があります。 同じビルドを持つ 2 つのインスタンス間にパッケージをデプロイしていることを確認する必要があります。ビルドが異なる場合は、インポートを強制的に実行せず、最初にプラットフォームを必ず更新してください。

>[!IMPORTANT]
>
>異なるバージョン間のインポートは、アドビではサポートされていません。

スキーマとデータベースの構造に注意してください。スキーマを含むパッケージを読み込んだ後は、スキーマを生成する必要があります。

### パッケージの種類 {#package-types}

まず、様々なタイプのパッケージを定義します。次の 4 つのタイプのみが使用されます。

**エンティティ**

* スキーマ、フォーム、フォルダー、配信テンプレートなど、Adobe Campaign内のすべての「xtk」および「nms」固有の要素。
* エンティティは、「admin」要素と「platform」要素の両方と見なすことができます。
* Campaign インスタンスにアップロードする際に、パッケージに複数のエンティティを含めないでください。

新しいインスタンスに設定をデプロイする必要がある場合は、すべてのエンティティパッケージをインポートできます。

**機能**

このパッケージタイプには、以下が当てはまります。
* クライアントの要件や仕様に対応する。
* 1 つまたは複数の機能が含まれる。
* 他のパッケージを使用せずに機能を実行できるように、すべての依存関係を含める必要がある。

**キャンペーン**

このパッケージは必須ではありません。キャンペーンが機能として見なされる場合でも、すべてのキャンペーンに対して特定のタイプを作成すると便利です。

**アップデート**

設定が完了すると、1 つの機能を別の環境にエクスポートすることができます。例えば、開発環境からテスト環境にパッケージをエクスポートすることができます。このテストでは、欠陥が明らかになります。まず、開発環境で欠陥を修正する必要があります。次に、パッチをテストプラットフォームに適用する必要があります。

1 つ目の解決策は、機能全体を再度エクスポートすることです。ただし、リスク（不要な要素の更新）を回避するには、修正のみを含むパッケージを使用した方が安全です。

そのため、機能のエンティティタイプを 1 つだけ含む「アップデート」パッケージを作成することをお勧めします。

更新は修正になるだけでなく、エンティティ、機能、キャンペーンパッケージの新しい要素にもなります。パッケージ全体をデプロイしないようにするには、アップデートパッケージをエクスポートします。

### 命名規則 {#data-package-naming}

タイプが定義されたら、命名規則を指定する必要があります。Adobe Campaign では、パッケージ仕様のサブフォルダーを作成できません。パッケージ名を整理する最適な方法は、番号を使用することです。数値の接頭辞パッケージ名。

例えば、次の規則を使用できます。

* エンティティ：1 ～ 99
* 機能：100 ～ 199
* キャンペーン：200 ～ 299
* アップデート：5000 ～ 5999

#### エンティティパッケージの順序 {#entity-packages-order}

読み込みに役立つように、エンティティパッケージは、読み込む際と同様に順序付けする必要があります。

次に例を示します。

* 001 – スキーマ
* 002 – フォーム
* 003 – 画像
* その他

>[!NOTE]
>
>Formsは読み込むのみです **後** スキーマの更新。


#### パッケージドキュメント {#package-documentation}

パッケージを更新する場合、変更内容や理由（「新しいスキーマを追加」、「欠陥を修正」など）の詳細を説明するために、必ず説明フィールドにコメントを入れてください。

ベストプラクティスは、更新日を入力することです。

>[!IMPORTANT]
>
>説明フィールドには、2,000 文字まで入力できます。

