---
product: Adobe Campaign
title: キャンペーンAPIのステージングメカニズム
description: キャンペーンAPIのステージングメカニズム
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 5363950db5092bc7e0a72a0823db1132a17dda33
workflow-type: tm+mt
source-wordcount: '271'
ht-degree: 4%

---

# キャンペーンAPIのステージングメカニズム

Campaign Cloudデータベースを使用する場合、パフォーマンス（待ち時間および同時実行性）のため、単一呼び出しのブラストは推奨されません。 バッチ操作は常に推奨されます。 APIの最適なパフォーマンスを保証するために、CampaignはAPI呼び出しの処理をローカルデータベースレベルで継続します。

キャンペーンのステージングメカニズムは、組み込みテーブルとカスタムテーブルの両方で使用でき、次の利点があります。

* データスキーマ構造がローカルのステージングテーブルにレプリケートされます
* 取り込み用の新しいAPIは、ステージングテーブルに直接フローします。 [詳細情報](new-apis.md)
* スケジュールされたワークフローで、1時間ごとにトリガーし、データをクラウドデータベースに同期します。 [詳細情報](../config/replication.md)。

一部の組み込みスキーマは、デフォルトでステージングされます（nmsSubscriptionRcp、nmsAppSubscriptionRcp、nmsRecipientなど）。

Campaign Classicv7 APIは引き続き使用できますが、この新しいステージングメカニズムのメリットは得られません。API呼び出しは、に直接Cloudデータベースに送られます。 Adobeでは、Campaign Cloudデータベースの全体的な頻度と待ち時間を減らすために、できる限り新しいステージングメカニズムを使用することをお勧めします。

>[!CAUTION]
>
>この新しいメカニズムにより、購読、購読解除、モバイル登録のデータ同期は、**非同期**&#x200B;になりました。


## 実装手順{#implement-staging}

特定のテーブルにCampaignのステージングメカニズムを実装するには、次の手順に従います。

1. Campaign Cloudデータベースにサンプルのカスタムスキーマを作成します。 この手順では、ステージングは有効になっていません。

   ```
   <srcSchema _cs="Sample Table (dem)" created="YYYY-DD-MM"
           entitySchema="xtk:srcSchema" img="xtk:schema.png" label="Sample Table"
           lastModified="YYYY-DD-MM HH:MM:SS.TZ" mappingType="sql" md5="XXX"
           modifiedBy-id="0" name="sampleTable" namespace="dem" xtkschema="xtk:srcSchema">
   <element autopk="true" autouuid="true" dataSource="nms:extAccount:ffda" label="Sample Table"
           name="sampleTable">
       <attribute label="Test Col 1" length="255" name="testcol1" type="string"/>
       <attribute label="Test Col 2" length="255" name="testcol2" type="string"/>
   </element>
   </srcSchema>
   ```

   [!DNL :bulb:] カスタムスキーマの作成について詳しくは、このペ [ージを参照してください](create-schema.md)。

1. データベース構造を保存して更新します。  [詳細情報](update-database-structure.md)

1. **autoStg=&quot;true&quot;**&#x200B;パラメーターを追加して、スキーマ定義でステージングメカニズムを有効にします。

   ```
   <srcSchema _cs="Sample Table (dem)" "YYYY-DD-MM"
           entitySchema="xtk:srcSchema" img="xtk:schema.png" label="Sample Table"
           lastModified="YYYY-DD-MM HH:MM:SS.TZ" mappingType="sql" md5="XXX"
           modifiedBy-id="0" name="sampleTable" namespace="dem" xtkschema="xtk:srcSchema">
   <element autoStg="true" autopk="true" autouuid="true" dataSource="nms:extAccount:ffda" label="Sample Table"
           name="sampleTable">
       <attribute label="Test Col 1" length="255" name="testcol1" type="string"/>
       <attribute label="Test Col 2" length="255" name="testcol2" type="string"/>
   </element>
   </srcSchema>
   ```

1. 変更を保存します。 新しいステージングスキーマが使用可能になります。これは、初期スキーマのローカルコピーです。

   ![](assets/staging-mechanism.png)

1. データベース構造の更新. ステージングテーブルは、Campaignローカルデータベースに作成されます。
