---
title: Campaign スキーマのフィルタリング
description: Campaign スキーマのフィルタリング方法を説明します
source-git-commit: e0faeda87d5b84309524a72d9f021c381ac4619e
workflow-type: tm+mt
source-wordcount: '424'
ht-degree: 1%

---

# フィルタースキーマ{#filter-schemas}

## システムフィルター {#system-filters}

権限に応じて、特定のユーザーに対するスキーマアクセスをフィルタリングできます。 システムフィルターを使用すると、スキーマで詳しく説明されているエンティティの読み取りおよび書き込み権限を、**readAccess** および **writeAccess** パラメーターを使用して管理できます。

>[!NOTE]
>
>この制限は、技術者以外のユーザーにのみ適用されます。関連する権限を持つテクニカルユーザーや、ワークフローを使用して、データを取得および更新できます。

* **readAccess**:は、スキーマデータへの読み取り専用アクセスを提供します。

   **警告**  — リンクされたすべてのテーブルに同じ制限を設定する必要があります。この設定は、パフォーマンスに影響を与える可能性があります。

* **writeAccess**:は、スキーマデータへの書き込みアクセスを提供します。

これらのフィルタは、スキーマのメインの **要素** レベルで入力し、次の例に示すように、アクセスを制限するために形成できます。

* WRITE 権限の制限

   ここでは、フィルターを使用して、ADMINISTRATION 権限を持たないオペレーターのスキーマに対する WRITE 権限を無効にします。 つまり、このスキーマで記述されたエンティティに対する書き込み権限を持つのは管理者だけです。

   ```
   <sysFilter name="writeAccess">      
    <condition enabledIf="hasNamedRight('admin')=false" expr="FALSE"/>    
   </sysFilter>
   ```

* 読み取りおよび書き込み権限の制限：

   ここでは、フィルターを使用して、すべてのオペレーターに対して、スキーマに対する読み取りと書き込みの両方の権限を許可しません。 式「$(loginId)」で表される **内部** アカウントのみ！=0&quot;の場合は、これらの権限を持ちます。

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

## Protectの組み込みスキーマ

デフォルトでは、組み込みスキーマは、管理権限を持つオペレーターの書き込み権限でのみアクセスできます。

* ncm：公開
* nl：監視
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
>**xtk:sessionInfo** スキーマの読み取りおよび書き込み権限は、Adobe Campaignインスタンスの内部アカウントからのみアクセスできます。

## 組み込みスキーマのシステムフィルターの変更

組み込みスキーマは、古いバージョンとの互換性の問題を回避するために保護されています。 Adobeでは、最適なセキュリティを確保するために、デフォルトのスキーマパラメーターを変更しないことをお勧めします。

ただし、特定のコンテキストでは、組み込みスキーマのシステムフィルターの変更が必要になる場合があります。 手順は次のとおりです。

1. 組み込みスキーマの拡張機能を作成するか、既存の拡張機能を開きます。
1. 組み込みスキーマ内の同じ下のフィルターを無視する子要素 **`<sysfilter name="<filter name>" _operation="delete"/>`** をメイン要素に追加します。
1. [ システムフィルター ](#system-filters) の節で説明しているように、新しいフィルターを追加できます。
