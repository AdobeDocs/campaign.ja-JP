---
title: Campaign スキーマの拡張
description: Campaign スキーマの拡張方法を学ぶ
feature: Schema Extension, Data Model
role: Developer
level: Intermediate, Experienced
exl-id: e4dcb228-0683-437a-88cd-bd7ed33da921
TQID: 'https://experienceleague.adobe.com/KxMO1S6yuFZUJAUIeSaF-J-s-SBLoODGWcOxImPONg0'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
  - id: b82389f8-9b5e-4083-8e3b-3cef299fb8b9
    internal-label: Schemas
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: a72a22e0-8c8d-4019-ba42-3f2644aa91a3
    internal-label: Schema extension
  - id: a1681cd8-6b2e-4955-9113-33b5f7a22b8c
    internal-label: Data model architecture
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '275'
ht-degree: 100%
---
# スキーマの拡張{#extend-schemas}

テクニカルユーザーは、既存のスキーマへの要素の追加、スキーマ内の要素の変更、要素の削除など、実装のニーズに合わせて Campaign データモデルをカスタマイズできます。

Campaign データモデルをカスタマイズする主な手順は次のとおりです。

1. 拡張スキーマの作成
1. Campaign データベースの更新
1. 入力フォームの適合

>[!CAUTION]
>ビルトインスキーマは直接変更できません。 ビルトインのスキーマを適合させる必要がある場合は、スキーマを拡張します。

Campaign のビルトインのテーブルとその連係について詳しくは、[このページ](datamodel.md)を参照してください。 [このページ](create-schema.md)で新しいスキーマを作成する際のレコメンデーションも参照してください。

スキーマを拡張するには、次の手順に従います。

1. エクスプローラーの&#x200B;**[!UICONTROL 管理／設定／データスキーマー]**&#x200B;フォルダーに移動します。
1. 「**新規**」ボタンをクリックし、「**[!UICONTROL 拡張スキーマを使用してテーブルのデータを拡張する]**」を選択します。

   ![](assets/extend-schema-option.png)

1. 拡張するビルトインスキーマを特定し、選択します。

   ![](assets/extend-schema-select.png)

   慣例に従い、拡張スキーマにビルトインスキーマと同じ名前を付け、カスタム名前空間を使用します。  一部の名前空間は社内専用であることに注意してください。 [詳細情報](schemas.md#reserved-namespaces)

   ![](assets/extend-schema-validate.png)

1. スキーマエディタで、コンテキストメニューを使用して必要な要素を追加し、保存します。

   ![](assets/extend-schema-edit.png)

   以下の例では、**MembershipYear** 属性を追加し、姓の長さの制限を設定して（この制限はデフォルト値を上書きします）、ビルトインスキーマから生年月日を削除します。

   ![](assets/extend-schema-sample.png)

   ```
   <srcSchema created="YYYY-MM-DD" desc="Recipient table" extendedSchema="nms:recipient"
           img="nms:recipient.png" label="Recipients" labelSingular="Recipient" lastModified="YYYY-MM-DD"
           mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:srcSchema">
    <element desc="Recipient table" img="nms:recipient.png" label="Recipients" labelSingular="Recipient" name="recipient">
       <attribute label="Member since" name="MembershipYear" type="long"/>
       <attribute length="50" name="lastName"/>
       <attribute _operation="delete" name="birthDate"/>
   </element>
   </srcSchema>
   ```

1. Campaign への接続を一旦解除してから再接続し、「**[!UICONTROL 構造]**」タブのスキーマ構造が更新されることを確認します。

   ![](assets/extend-schema-structure.png)

1. データベース構造を更新して、変更を適用します。 [詳細情報](update-database-structure.md)

1. データベースに変更が実装されたら、受信者入力フォームを適合させて、変更を表示することができます。 [詳細情報](forms.md)
