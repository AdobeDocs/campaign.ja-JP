---
product: campaign
title: 承認
description: 承認
feature: Workflows, Approvals
role: User
version: Campaign v8, Campaign Classic v7
exl-id: 9e57d21c-ce16-448d-97f1-8c6844acb37b
source-git-commit: 4cbccf1ad02af9133d51933e3e0d010b5c8c43bd
workflow-type: ht
source-wordcount: '569'
ht-degree: 100%

---

# 承認{#approval}



**承認**&#x200B;タスクは、オペレーターの関与を必要とします。オペレーターにはタスクが割り当てられ、メールメッセージ内にリンクされた Web ページを使用するか、コンソールを使用して回答できます。

## タスクの割り当て {#task-assignment}

デフォルトで、承認はオペレーターのグループに割り当てられます。このグループは、「ニュースレターコンテンツグループ」や「ニュースレターターゲットグループ」などのロールを表します。グループ内の各オペレーターが回答できますが、最初の回答だけが反映されます（複数の承認が存在する場合を除く）。

必要に応じて、承認タスクを 1 人のオペレーターに割り当てるか、フィルターによって定義されたオペレーターのセットに割り当てることができます。

* 1 人のオペレーターを選択するには、「**[!UICONTROL 割り当てタイプ]**」フィールドで「**[!UICONTROL オペレーター]**」値を選択し、「**[!UICONTROL 担当者]**」フィールドのドロップダウンリストから該当するオペレーターを選択します。

  ![](assets/s_advuser_validation_box_assign.png)

  >[!CAUTION]
  >
  >選ばれたオペレーターだけに、タスクの承認権限が与えられます。

* 承認オペレーターをフィルターするクエリを定義できます。それには、下図の例に示すように、「**[!UICONTROL 割り当てタイプ]**」フィールドで「**[!UICONTROL フィルター]**」値を選択し、「**[!UICONTROL 詳細設定パラメーター...]**」リンクをクリックして、フィルター条件を定義します。

  ![](assets/s_advuser_validation_box_filter.png)

単独承認の場合は、オペレーターの選択に対応するトランジションが有効化され、タスクが完了します。他のオペレーターは回答できません。

複数承認の場合、各オペレーターの選択に対応するトランジションが有効化されます。グループの全オペレーターが回答するか、タスクの期限が切れた時点でタスクが完了となります。

このアクティビティは処理をブロックしないので、回答を待機している間ワークフローは他のタスクを実行できます。

オペレーターは、自分に割り当てられたタスクをクライアントコンソールから承認できます。管理者権限を持つオペレーターは、任意のオペレーターに割り当てられたタスクの表示と削除ができますが、それらのタスクに回答することはできません。

アクティビティのタイトルまたはメッセージ本文を編集しても、現在のタスクに影響しませんが、一方で選択肢を変更した場合、現在のタスクに直接影響し、新しい選択肢のリストが自動的に継承されます。

**承認**&#x200B;タイプのタスクは、**[!UICONTROL 管理／プロダクション／自動作成オブジェクト／承認保留]**&#x200B;ノードからアクセス可能です。オペレーターは、このビューから直接承認フォームにアクセスできます。

![](assets/s_advuser_validation_from_console.png)

## プロパティ {#properties}

カスタマイズ変数は、レビュー担当者に送信するメッセージに使用でき、メッセージのタイトルまたは本文に挿入できます。

![](assets/edit_validation.png)

この「**[!UICONTROL タイトル]**」フィールドには、メッセージのタイトルが含まれます。これは、送信されたメールメッセージの件名です。タイトルおよびメッセージの本文は JavaScript テンプレートになっているので、ワークフローの状況に応じて計算される値が含まれます。

エディターの下部のセクションで、選択肢となる回答のリストを定義します。回答ごとに対応するトランジションがあります。名前は内部識別子、ラベルは選択肢のリストに表示される文字列です。

「**[!UICONTROL 詳細設定パラメーター...]**」リンクをクリックして、演算子の通知に使用する配信テンプレートを選択します。デフォルトテンプレート（内部名は&#39;notifyAssignee&#39;）は、タイトルとメッセージを取得し、回答に使用された Web ページへのリンクを追加します。

テンプレートを編集してメッセージのレイアウトをカスタマイズできますが、コピーを作成してもかまいません。ターゲットメカニズム（外部ファイル、ターゲットマッピング）は、通知を正しく処理するのに必要なので、編集できません。

承認の例については、[承認の定義](define-approvals.md)を参照してください。

## 出力パラメーター {#output-parameters}

* **[!UICONTROL 回答]**

  回答に関連するコメント

* **[!UICONTROL responseOperator]**

  回答したオペレーターの ID。このフィールドには数値が入りますが、**[!UICONTROL String]** フィールドです。
