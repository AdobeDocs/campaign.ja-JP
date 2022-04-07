---
title: Campaign スキーマの拡張
description: Campaign スキーマの拡張方法を学ぶ
exl-id: e4dcb228-0683-437a-88cd-bd7ed33da921
source-git-commit: 9e07353859e63b71abb61526f40675f18837bc59
workflow-type: tm+mt
source-wordcount: '269'
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

![](../assets/do-not-localize/glass.png)Campaign の組み込みテーブルとそのインタラクションについて詳しくは、[このページ](datamodel.md)を参照してください。[このページ](create-schema.md)で新しいスキーマを作成する際の推奨事項も参照してください。

スキーマを拡張するには、次の手順に従います。

1. エクスプローラーの&#x200B;**[!UICONTROL 管理／設定／データスキーマー]**&#x200B;フォルダーに移動します。
1. 「**新規**」ボタンをクリックし、「**[!UICONTROL 拡張スキーマを使用してテーブルのデータを拡張する]**」を選択します。

   ![](assets/extend-schema-option.png)

1. 拡張するビルトインスキーマを特定し、選択します。

   ![](assets/extend-schema-select.png)

   慣例に従い、拡張スキーマにビルトインスキーマと同じ名前を付け、カスタム名前空間を使用します。一部の名前空間は社内専用であることに注意してください。 [詳細](schemas.md#reserved-namespaces)

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
