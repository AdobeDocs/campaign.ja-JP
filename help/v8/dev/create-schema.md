---
solution: Campaign v8
product: Adobe Campaign
title: Campaignでの新しいスキーマの作成
description: Campaignで新しいスキーマを作成する方法を説明します
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '408'
ht-degree: 2%

---

# 新しいスキーマ{#create-new-schema}を作成します。

スキーマを編集、作成および設定するには、Adobe Campaignクライアントコンソールの&#x200B;**[!UICONTROL 管理/設定/データスキーマ]**&#x200B;ノードをクリックします。

>[!NOTE]
>
>組み込みデータスキーマは、Adobe Campaign Classicコンソールの管理者のみが削除できます。

![](assets/schema_navtree.png)

「**[!UICONTROL 編集]**」タブには、スキーマのXMLコンテンツが表示されます。

![](assets/schema_edition.png)

>[!NOTE]
>
>「名前」編集コントロールを使用して、名前と名前空間で構成されるスキーマキーを入力できます。 スキーマのルート要素の「name」属性と「namespace」属性は、スキーマのXML編集ゾーンで自動的に更新されます。 一部の名前空間は内部のみであることに注意してください。 [詳細情報](schemas.md#reserved-namespaces)。

「**[!UICONTROL プレビュー]**」タブでは、拡張スキーマが自動的に生成されます。

![](assets/schema_edition2.png)

>[!NOTE]
>
>ソーススキーマを保存すると、拡張スキーマの生成が自動的に開始されます。

スキーマの構造全体を確認する必要がある場合は、「**[!UICONTROL プレビュー]**」タブを使用できます。 スキーマが拡張されると、そのすべての拡張を視覚化できます。 補集合として、「**[!UICONTROL ドキュメント]**」タブには、すべてのスキーマの属性と要素と、そのプロパティ（SQLフィールド、タイプ/長さ、ラベル、説明）が表示されます。 「**[!UICONTROL ドキュメント]**」タブは、生成されたスキーマにのみ適用されます。

## 使用例：契約テーブル{#example--creating-a-contract-table}を作成します。

次の例では、データベース内に&#x200B;**contracts**&#x200B;の新しいテーブルを作成します。 この表には、契約ごとに、所有者および共同所有者の姓と名とEメールアドレスを保存できます。

これをおこなうには、テーブルのスキーマを作成し、対応するテーブルを生成するためにデータベース構造を更新する必要があります。 詳細な手順を以下に示します。

1. Adobe Campaignツリーの&#x200B;**[!UICONTROL 管理/設定/データスキーマ]**&#x200B;ノードを編集し、「**[!UICONTROL 新規]**」をクリックします。
1. 「**[!UICONTROL データテンプレートに新しいテーブルを作成]**」オプションを選択し、「**[!UICONTROL 次へ]**」をクリックします。

   ![](assets/create_new_schema.png)

1. テーブル名と名前空間を指定します。

   ![](assets/create_new_param.png)

   >[!NOTE]
   >
   >デフォルトでは、ユーザーが作成したスキーマは「cus」名前空間に保存されます。 詳しくは、[スキーマの識別](extend-schema.md#identification-of-a-schema)を参照してください。

1. テーブルのコンテンツを作成します。 専用のアシスタントを使用して、設定が欠落していないことを確認することをお勧めします。 追加するには、「****&#x200B;を挿入」ボタンをクリックし、追加する設定のタイプを選択します。

   ![](assets/create_new_content.png)

1. 契約表の設定を定義します。

   ```
   <srcSchema created="YYYY-MM-DD HH:MM:SS.TZ" desc="Active contracts" img="crm:crm/mscrm/mscrm_account_16x16.png"
           label="Contracts" labelSingular="Contract" lastModified="YYYY-MM-DD HH:MM:SS.TZ"
           mappingType="sql" name="Contracts" namespace="cus" xtkschema="xtk:srcSchema">
      <element dataSource="nms:extAccount:ffda" desc="Active contracts" img="crm:crm/mscrm/mscrm_account_16x16.png"
           label="Contracts" labelSingular="Contract" name="Contracts">
           <attribute name="holderName" label="Holder last name" type="string"/>
           <attribute name="holderFirstName" label="Holder first name" type="string"/>
           <attribute name="holderEmail" label="Holder email" type="string"/>
           <attribute name="co-holderName" label="Co-holder last name" type="string"/>           
           <attribute name="co-holderFirstName" label="Co-holder first name" type="string"/>           
           <attribute name="co-holderEmail" label="Co-holder email" type="string"/>    
           <attribute name="date" label="Subscription date" type="date"/>     
           <attribute name="noContract" label="Contract number" type="long"/> 
      </element>
   </srcSchema>
   ```

   契約列挙のタイプを追加します。

   ```
   <srcSchema created="AA-MM-DD HH:MM:SS.TZ" desc="Active contracts" img="crm:crm/mscrm/mscrm_account_16x16.png" label="Contracts" labelSingular="Contract" AA-MM-DD HH:MM:SS.TZ"mappingType="sql" name="Contracts" namespace="cus" xtkschema="xtk:srcSchema">
      <enumeration basetype="byte" name="typeContract">
         <value label="Home" name="home" value="0"/>
         <value label="Car" name="car" value="1"/>
         <value label="Health" name="health" value="2"/>
         <value label="Pension fund" name="pension fund" value="2"/>
      </enumeration>
      <element dataSource="nms:extAccount:ffda" desc="Active contracts" img="crm:crm/mscrm/mscrm_account_16x16.png"
           label="Contracts" labelSingular="Contract" name="Contracts">
           <attribute name="holderName" label="Holder last name" type="string"/>
           <attribute name="holderFirstName" label="Holder first name" type="string"/>
           <attribute name="holderEmail" label="Holder email" type="string"/>
           <attribute name="co-holderName" label="Co-holder last name" type="string"/>           
           <attribute name="co-holderFirstName" label="Co-holder first name" type="string"/>           
           <attribute name="co-holderEmail" label="Co-holder email" type="string"/>    
           <attribute name="date" label="Subscription date" type="date"/>     
           <attribute name="noContract" label="Contract number" type="long"/> 
      </element>
   </srcSchema>
   ```

1. スキーマを保存し、「**[!UICONTROL 構造]**」タブをクリックして構造を生成します。

   ![](assets/configuration_structure.png)

1. データベース構造を更新して、スキーマのリンク先となるテーブルを作成します。 詳しくは、[この節](update-database-structure.md)を参照してください。

