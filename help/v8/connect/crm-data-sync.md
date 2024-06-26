---
title: CRM コネクタのデータ同期
description: Campaign と CRM の間のデータ管理
feature: Salesforce Integration, Microsoft CRM Integration
role: Admin
level: Beginner
exl-id: 2a7ae88e-d47f-416b-84cd-986ab9be6aef
source-git-commit: e45799f0f3849d53d2c5f593bc02954b3a55fc28
workflow-type: ht
source-wordcount: '1402'
ht-degree: 100%

---

# Campaign と CRM の間のデータ同期 {#data-synchronization}

Adobe Campaign と CRM 間のデータ同期は、**CRM コネクタ**&#x200B;ワークフローアクティビティで管理されます。

Microsoft Dynamics データを Adobe Campaign にインポートするには、次のタイプのワークフローを作成します。

![](assets/ms-dyn-wf.png)

このワークフローでは、Microsoft Dynamics 経由で連絡先がインポートされ、それらが既存の Adobe Campaign データと同期され、重複する連絡先が削除され、Adobe Campaign データベースが更新されます。

**[!UICONTROL CRM コネクタ]**&#x200B;アクティビティは、データを同期するように設定する必要があります。

![](assets/crm-connector-ms-dyn.png)

このアクティビティを使用すると、次のことができます。

* CRM からのインポート - [詳細情報](#importing-from-the-crm)
* CRM へのエクスポート - [詳細情報](#exporting-to-the-crm)
* CRM で削除されたオブジェクトのインポート - [詳細情報](#importing-objects-deleted-in-the-crm)
* CRM 内のオブジェクトの削除 - [詳細情報](#deleting-objects-in-the-crm)

![](assets/crm-remote-op.png)

同期の設定対象となる CRM に対応する外部アカウントを選択し、同期するオブジェクト（アカウント、オポチュニティ、リード、連絡先など）を選択します。

![](assets/crm-remote-obj.png)

このアクティビティの設定は、実行するプロセスによって異なります。次に、様々な設定について詳しく説明します。

## CRM からのインポート {#importing-from-the-crm}

データを CRM 経由で Adobe Campaign にインポートするには、次のタイプのワークフローを作成する必要があります。

![](assets/crm-wf-import.png)

1. 「**[!UICONTROL CRM からインポート]**」操作を選択します。
1. 「**[!UICONTROL リモートオブジェクト]**」ドロップダウンリストから、インポートするオブジェクトを選択します。このオブジェクトは、コネクタの設定時に Adobe Campaign で作成されたテーブルのいずれかと一致します。
1. 「**[!UICONTROL リモートフィールド]**」セクションで、インポートするフィールドを入力します。

   フィールドを追加するには、ツールバーの「**[!UICONTROL 追加]**」ボタンをクリックし、「**[!UICONTROL 式を編集]**」アイコンをクリックします。

   必要に応じて、「**[!UICONTROL コンバージョン]**」列のドロップダウンリストを使用してデータフォーマットを変更します。使用可能なコンバージョンタイプについて詳しくは、この[節](#data-format)を参照してください。

   >[!CAUTION]
   >
   >CRM と Adobe Campaign のオブジェクトをリンクするには、CRM でのレコードの識別子が必須です。これは、ボックスが承認されると自動的に追加されます。
   >
   >増分データインポートの場合は、CRM 側での最終変更日も必須です。

1. 必要に応じて、インポートするデータをフィルターすることもできます。そのためには、「**[!UICONTROL フィルターを編集...]**」リンクをクリックします。

   次の例では、2021年11月1日以降にアクティビティが記録された連絡先のみが Adobe Campaign によってインポートされます。

   ![](assets/crm-task-import-filter.png)

   >[!CAUTION]
   >
   >データのフィルターモードに関連する制限について詳しくは、[この節](#filtering-data)を参照してください。

1. 「**[!UICONTROL 自動インデックスを使用...]**」オプションを使用すると、CRM と Adobe Campaign の間の増分オブジェクト同期を、日付と最終変更日に応じて自動的に管理できます。

   詳しくは、[この節](#variable-management)を参照してください。

### 変数の管理 {#variable-management}

「**[!UICONTROL 自動インデックス]**」オプションを有効にすると、前回のインポート以降に変更されたオブジェクトのみを収集できます。

![](assets/use-auto-index.png)

最後の同期の日付が、設定ウィンドウで指定したオプションに保存されます。デフォルトでは、**LASTIMPORT_&lt;%=instance.internalName%>_&lt;%=activityName%>** です。

>[!NOTE]
>
>このメモは、一般的な **[!UICONTROL CRM コネクタ]**&#x200B;アクティビティにのみ適用されます。他の CRM アクティビティの場合、プロセスは自動です。
>
>このオプションは、**[!UICONTROL 管理]**／**[!UICONTROL プラットフォーム]**／**[!UICONTROL オプション]**&#x200B;を使用して手動で作成および設定する必要があります。これはテキストオプションである必要があり、その値は **`yyyy/MM/dd hh:mm:ss`** 形式に一致する必要があります。
> 
>以降のインポートではこのオプションを手動で更新する必要があります。

最新の変更を識別するために考慮するリモート CRM フィールドを指定できます。

デフォルトでは、次のフィールドが（指定した順序で）使用されます。

* Microsoft Dynamics の場合：**modifiedon**。
* Salesforce.com の場合：**LastModifiedDate**、**SystemModstamp**。

「**[!UICONTROL 自動インデックス]**」オプションをオンにすると、**[!UICONTROL JavaScript コード]**&#x200B;タイプのアクティビティによって、同期ワークフローで使用できる 3 つの変数が生成されます。これらのアクティビティは、次のとおりです。

* **vars.crmOptionName**：最後のインポート日を含むオプションの名前。
* **vars.crmStartImport**：最後のデータインポートの開始日（この日を含む）。
* **vars.crmEndDate**：最後のデータインポートの終了日（この日を含まない）。

  >[!NOTE]
  >
  >これらの日付は、**`yyyy/MM/dd hh:mm:ss`** 形式で表示されます。

### データのフィルタリング {#filtering-data}

様々な CRM で効率的に操作を行うために、次のルールを使用してフィルターを作成する必要があります。

* 各フィルターレベルでは、1 つのタイプの演算子のみを使用できます。
* AND NOT 演算子はサポートされていません。
* 比較は、null 値（「空である」／「空でない」タイプ）または数値にのみ関係します。つまり、値（右側の列）が評価され、この評価の結果は数値である必要があります。したがって、JOIN タイプの比較はサポートされていません。
* 右側の列の値は、JavaScript で評価されます。
* JOIN 比較はサポートされていません。
* 左側の列の式は、フィールドである必要があります。複数の式の組み合わせ、数値などは使用できません。

### 並べ替え順 {#order-by}

Microsoft Dynamics および Salesforce.com では、インポートされるリモートフィールドを昇順または降順で並べ替えることができます。

そのためには、「**[!UICONTROL 並べ替え順]**」リンクをクリックし、列をリストに追加します。

リストでの列の順序が、並べ替え順です。

![](assets/crm-import-order.png)

### レコード識別 {#record-identification}

CRM に含まれる（フィルターされた可能性がある）要素をインポートするのではなく、ワークフローで事前に計算された母集団を使用できます。

そのためには、「**[!UICONTROL アップストリームを計算した母集団を使用]**」オプションを選択し、リモート識別子を含むフィールドを指定します。

次に、インポートするインバウンドの母集団のフィールドを次に示すように選択します。

![](assets/use-population-calc-upstream.png)

## CRM へのエクスポート {#exporting-to-the-crm}

Adobe Campaign のデータを CRM にエクスポートして、その内容全体を CRM データベースにコピーします。

データを CRM にエクスポートするには、次のタイプのワークフローを作成します。

![](assets/crm-export-diagram.png)

1. 「**[!UICONTROL CRM にエクスポート]**」操作を選択します。
1. 「**[!UICONTROL リモートオブジェクト]**」ドロップダウンリストに移動し、エクスポートするオブジェクトを選択します。このオブジェクトは、コネクタの設定時に Adobe Campaign で作成されたテーブルのいずれかと一致します。

   >[!CAUTION]
   >
   >**[!UICONTROL CRM コネクタ]**&#x200B;アクティビティのエクスポート機能では、CRM 側のフィールドを挿入または更新できます。CRM でのフィールド更新を有効にするには、リモートテーブルのプライマリキーを指定します。キーがない場合、データは更新ではなく、挿入されます。

1. より高速なエクスポートを実行する必要がある場合は、「**[!UICONTROL バッチでのエクスポート]**」オプションをオンにします。

   ![](assets/crm-export-batch.png)

1. 「**[!UICONTROL マッピング]**」セクションで、「**[!UICONTROL 新規]**」をクリックし、エクスポートされるフィールドと CRM でのそれらのマッピングを指定します。

   フィールドを追加するには、ツールバーの「**[!UICONTROL 追加]**」ボタンをクリックし、「**[!UICONTROL 式を編集]**」アイコンをクリックします。

   >[!NOTE]
   >
   >フィールドに一致が定義されていない場合、値は更新できません。これらは CRM に直接挿入されます。

   必要に応じて、「**[!UICONTROL コンバージョン]**」列のドロップダウンリストを使用してデータフォーマットを変更します。使用可能なコンバージョンタイプについて詳しくは、この[節](#data-format)を参照してください。

   >[!NOTE]
   >
   >エクスポートされるレコードのリストとエクスポートの結果は、ワークフローが終了または再開されるまでアクセス可能な一時ファイルに保存されます。これにより、エラーが発生した場合に、プロセスを安全に開始できます。

## その他の設定 {#additional-configurations}

### データフォーマット {#data-format}

CRM へのインポートまたは CRM からのインポート中にデータフォーマットを変換できます。

そのためには、適用する変換を対応する列で選択します。

![](assets/crm-task-import.png)

「**[!UICONTROL デフォルト]**」モードでは、自動データ変換が適用されます。ほとんどの場合、これはデータのコピー／貼り付けと同じです。ただし、タイムゾーン管理が適用されます。

その他の使用可能な変換は、次のとおりです。

* **[!UICONTROL 日付のみ]**：日付 + 時刻タイプのフィールドは削除されます。
* **[!UICONTROL 時間オフセットなし]**：デフォルトモードで適用されるタイムゾーン管理がキャンセルされます。
* **[!UICONTROL コピー／貼り付け]**：文字列などの生データが使用されます（変換なし）。

### エラー処理 {#error-processing}

データのインポートまたはエクスポートのフレームワーク内で、エラーおよび却下に対して特定のプロセスを適用できます。これを行うには、「**[!UICONTROL 動作]**」タブの「**[!UICONTROL ファイルで却下を保持]**」および「**[!UICONTROL エラーを処理]**」オプションをクリックします。

![](assets/crm-export-options.png)

これらのオプションは、関連する出力トランジションを追加します。

![](assets/crm-export-transitions.png)

次に、関連するアクティビティを挿入して、データを処理します。例えば、**待機**&#x200B;アクティビティを追加し、エラーの再試行をスケジュールします。

「**[!UICONTROL 却下]**」出力トランジションでは、エラーメッセージおよびコードに関連する特定の列を含む出力スキーマにアクセスできます。Salesforce.com の場合、この列は **errorSymbol**（エラーコードとは別のエラー記号）、**errorMessage**（エラーコンテキストの説明）です。

## CRM で削除されたオブジェクトのインポート {#importing-objects-deleted-in-the-crm}

CRM で削除されたオブジェクトを Adobe Campaign にインポートできます。

1. 「**[!UICONTROL CRM で削除されたオブジェクトをインポート]**」操作を選択します。
1. 「**[!UICONTROL リモートオブジェクト]**」ドロップダウンリストに移動し、プロセスの対象となるオブジェクトを選択します。このオブジェクトは、コネクタの設定時に Adobe Campaign で作成されたテーブルのいずれかと一致します。
1. 考慮する削除期間を&#x200B;**[!UICONTROL 開始日]**&#x200B;および&#x200B;**[!UICONTROL 終了日]**&#x200B;フィールドで指定します（日付を含む）。

   >[!CAUTION]
   >
   >削除期間は、CRM 固有の制限と一致している必要があります。例えば、Salesforce.com の場合、30 日以上前に削除された要素は復元できません。

## CRM 内のオブジェクトの削除 {#deleting-objects-in-the-crm}

CRM 側でオブジェクトを削除するには、削除するリモート要素のプライマリキーを指定します。

「**[!UICONTROL 行動]**」タブで、却下の処理を有効にすることができます。このオプションを使用すると、「**[!UICONTROL CRM コネクタ]**」アクティビティの 2 つ目の出力トランジションが生成されます。詳しくは、[エラー処理](#error-processing)を参照してください。
