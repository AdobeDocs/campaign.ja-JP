---
title: Campaign スキーマのフィルタリング
description: Campaign スキーマのフィルタリング方法を学ぶ
exl-id: e8ad021c-ce2e-4a74-b9bf-a989d8879fd1
source-git-commit: d2f4e54b0c37cc019061dd3a7b7048cd80876ac0
workflow-type: tm+mt
source-wordcount: '424'
ht-degree: 100%

---

# フィルタースキーマ{#filter-schemas}

## システムフィルター {#system-filters}

権限に応じて、特定のユーザーに対するスキーマアクセスをフィルタリングできます。システムフィルターを使用すると、スキーマで詳しく説明されているエンティティの読み取りおよび書き込み権限を、**readAccess** および **writeAccess** パラメーターを使用して管理できます。

>[!NOTE]
>
>この制限は、技術者以外のユーザーにのみ適用されます。関連する権限を持つ、またはワークフローを使用するテクニカルユーザーは、データを取得および更新できます。

* **readAccess**：スキーマデータへの読み取り専用アクセスを提供します。

   **警告** - リンクされたすべてのテーブルに同じ制限を設定する必要があります。この設定は、パフォーマンスに影響を与える可能性があります。

* **writeAccess**：スキーマデータへの書き込みアクセスを提供します。

これらのフィルターは、スキーマのメイン&#x200B;**要素**&#x200B;レベルで入力し、次の例に示すように、アクセスを制限するために形成できます。

* 書き込み権限の制限

   ここでは、フィルターを使用して、管理権限を持たないオペレーターのスキーマに対する書き込み権限を無効にします。つまり、このスキーマで記述されたエンティティに対する書き込み権限を持つのは管理者だけです。

   ```
   <sysFilter name="writeAccess">      
    <condition enabledIf="hasNamedRight('admin')=false" expr="FALSE"/>    
   </sysFilter>
   ```

* 読み取りおよび書き込み権限の制限：

   ここでは、すべてのオペレーターに対して、スキーマに対する読み取りと書き込みの両方の権限を許可しないためにフィルターを使用しています。**内部**&#x200B;アカウントのみ（式「$(loginId)!=0」で表される）が、これらの権限を持っています。

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

## 組み込みスキーマの保護

デフォルトでは、組み込みスキーマは、管理権限を持つオペレーターの書き込み権限でのみアクセスできます。

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
>**xtk:sessionInfo** スキーマの読み取りおよび書き込み権限は、Adobe Campaign インスタンスの内部アカウントからのみアクセスできます。

## 組み込みスキーマのシステムフィルターの変更

組み込みスキーマは、古いバージョンとの互換性の問題を回避するために保護されています。アドビでは、最適なセキュリティを確保するために、デフォルトのスキーマパラメーターを変更しないことをお勧めします。

ただし、特定のコンテキストでは、組み込みスキーマのシステムフィルターの変更が必要になる場合があります。手順は次のとおりです。

1. 組み込みスキーマの拡張機能を作成するか、既存の拡張機能を開きます。
1. メイン要素の子要素 **`<sysfilter name="<filter name>" _operation="delete"/>`** を追加し、ビルトインスキーマ内の同じ要素のフィルターを無視します。
1. [システムフィルター](#system-filters)の節で説明しているように、新しいフィルターを追加できます。
