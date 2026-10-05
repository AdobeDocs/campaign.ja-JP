---
title: Campaign スキーマのフィルタリング
description: Campaign スキーマのフィルタリング方法を学ぶ
feature: Schema Extension
role: Developer
level: Intermediate, Experienced
exl-id: e8ad021c-ce2e-4a74-b9bf-a989d8879fd1
TQID: 'https://experienceleague.adobe.com/2T0OxjyVTM9-lzsOfcaqv81YVtVvrNpprpyC0VLoWgU'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: b82389f8-9b5e-4083-8e3b-3cef299fb8b9
    internal-label: Schemas
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: e3988c18-3cfa-4f16-b812-ac2d2b1056fa
    internal-label: Permissions
  - id: a72a22e0-8c8d-4019-ba42-3f2644aa91a3
    internal-label: Schema extension
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '401'
ht-degree: 84%
---
# フィルタースキーマ{#filter-schemas}

## システムフィルター {#system-filters}

権限に応じて、特定のユーザーに対するスキーマアクセスをフィルタリングできます。 システムフィルターを使用すると、スキーマで詳しく説明されているエンティティの読み取りおよび書き込み権限を、**readAccess** および **writeAccess** パラメーターを使用して管理できます。

>[!NOTE]
>
>この制限は、技術者以外のユーザーにのみ適用されます。関連する権限を持つ、またはワークフローを使用するテクニカルユーザーは、データを取得および更新できます。

* **readAccess**：スキーマデータへの読み取り専用アクセスを提供します。

  **警告** - リンクされたすべてのテーブルに同じ制限を設定する必要があります。 この設定は、パフォーマンスに影響を与える可能性があります。

* **writeAccess**：スキーマデータへの書き込みアクセスを提供します。

これらのフィルターは、スキーマのメイン&#x200B;**要素**&#x200B;レベルで入力し、次の例に示すように、アクセスを制限するために形成できます。

* 書き込み権限の制限

  ここでは、フィルターを使用して、管理権限を持たないオペレーターのスキーマに対する書き込み権限を無効にします。 つまり、このスキーマで記述されたエンティティに対する書き込み権限を持つのは管理者だけです。

  ```
  <sysFilter name="writeAccess">      
   <condition enabledIf="hasNamedRight('admin')=false" expr="FALSE"/>    
  </sysFilter>
  ```

* 読み取りおよび書き込み権限の制限：

  ここでは、すべてのオペレーターに対して、スキーマに対する読み取りと書き込みの両方の権限を許可しないためにフィルターを使用しています。 式「$（loginId）!=0」で表される&#x200B;**internal** アカウントのみが、これらの権限を持ちます。

  ```
  <sysFilter name="readAccess"> 
   <condition enabledIf="$(loginId)!=0" expr="FALSE"/>
  </sysFilter>
  
  <sysFilter name="writeAccess">  
   <condition enabledIf="$(loginId)!=0" expr="FALSE"/>
  </sysFilter>
  ```

  条件の定義に使用できる **expr** 属性値は、TRUE または FALSE です。

>[!NOTE]
>
>フィルターを指定しない場合、すべてのオペレーターはスキーマに対する読み取りおよび書き込み権限を持ちます。

## ビルトインのスキーマの保護

デフォルトでは、ビルトインのスキーマは、管理権限を持つオペレーターの書き込み権限でのみアクセスできます。

* ncm:publishing
* nl:monitoring
* nms:calendar
* xtk:builder
* xtk:connections
* xtk:dbInit
* xtk:entityBackupNew
* xtk:entityBackupOriginal
* xtk:entityOriginal
* xtk:form
* xtk:funcList
* xtk:fusion
* xtk:image
* xtk:javascript
* xtk:jssp
* xtk:jst
* xtk:navtree
* xtk:operatorGroup
* xtk:package
* xtk:queryDef
* xtk:resourceMenu
* xtk:rights
* xtk:schema
* xtk:scriptContext
* xtk:specFile
* xtk:sql
* xtk:sqlSchema
* xtk:srcSchema
* xtk:strings
* xtk:xslt

>[!CAUTION]
>
>**xtk:sessionInfo** スキーマの読み取り権限と書き込み権限には、Adobe Campaign インスタンスの内部アカウントのみがアクセスできます。

## ビルトインのスキーマのシステムフィルターの変更

ビルトインのスキーマは、古いバージョンとの互換性の問題を回避するために保護されています。 アドビでは、最適なセキュリティを確保するために、デフォルトのスキーマパラメーターを変更しないことをお勧めします。

ただし、特定のコンテキストでは、ビルトインのスキーマのシステムフィルターの変更が必要になる場合があります。 手順は次のとおりです。

1. ビルトインのスキーマの拡張機能を作成するか、既存の拡張機能を開きます。
1. メイン要素の子要素 **`<sysfilter name="<filter name>" _operation="delete"/>`** を追加し、ビルトインスキーマ内の同じ要素のフィルターを無視します。
1. [システムフィルター](#system-filters)の節で説明しているように、新しいフィルターを追加できます。
