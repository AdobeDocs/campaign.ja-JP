---
title: Campaign API のステージングメカニズム
description: Campaign API のステージングメカニズム
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 96693af9-50db-4298-ae02-c238d35e52b4
source-git-commit: 9e07353859e63b71abb61526f40675f18837bc59
workflow-type: tm+mt
source-wordcount: '311'
ht-degree: 100%

---

# Campaign API のステージングメカニズム

Campaign Cloud データベースでは、パフォーマンス（待ち時間および同時実行性）に関し、単一呼び出しのブラストはお勧めしません。 バッチ操作は常に推奨されます。 パフォーマンスを向上させるために、取得 API はローカルデータベースにリダイレクトされます。

一部の組み込みスキーマでは、デフォルトで、Campaign のステージング機能が有効になっています。任意のカスタムスキーマで有効にすることもできます。要約すると、次のようなステージングメカニズムです。

* データスキーマ構造がローカルのステージングテーブルにレプリケートされます。
* 取得用の新しい API は、ステージングテーブルに直接送られます。 [詳細情報](new-apis.md)
* スケジュールされたワークフローを 1 時間ごとにトリガーし、データをクラウドデータベースに同期します。 [詳細](../config/replication.md)

一部の組み込みスキーマ（nmsSubscriptionRcp、nmsAppSubscriptionRcp、nmsRecipient など）は、デフォルトによりステージ化されます。

Campaign Classic v7 API は引き続き使用できますが、この新しいステージングメカニズムのメリットは得られません。API 呼び出しは、直接クラウドデータベースに送られます。 アドビでは、Campaign クラウドデータベースの全体的な負荷と待ち時間を減らすために、新しいステージングメカニズムをできる限り使用することをお勧めします。

>[!CAUTION]
>
>* この新しいメカニズムにより、購読の登録と解除、モバイル登録のデータ同期は、**非同期**&#x200B;になりました。
>
>* ステージングは、Cloud Database に格納されたスキーマにのみ適用されます。レプリケートされたスキーマのステージングを有効にしないでください。ローカルスキーマでステージングを有効にしないでください。ステージングスキーマでステージングを有効にしないでください
>


## 実装手順{#implement-staging}

Campaign のステージングメカニズムを特定のテーブルに実装するには、次の手順に従います。

1. Campaign クラウドデータベースでサンプルのカスタムスキーマを作成します。 この段階では、ステージングは有効になっていません。

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

   ![](../assets/do-not-localize/glass.png) カスタムスキーマの作成の詳細については、[このページ](create-schema.md)を参照してください。

1. データベース構造を保存して更新します。[詳細情報](update-database-structure.md)

1. **autoStg=&quot;true&quot;** パラメーターを追加して、スキーマ定義のステージングメカニズムを有効にします。

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

1. データベース構造を更新します。ステージングテーブルが、Campaign ローカルデータベースに作成されます。
