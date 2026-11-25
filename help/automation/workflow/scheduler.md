---
product: campaign
title: スケジューラー
description: スケジューラーワークフローアクティビティの詳細を説明します
feature: Workflows
role: User
version: Campaign v8, Campaign Classic v7
exl-id: ed70d2d3-251e-4ee8-84d4-73ad03e8dd35
TQID: 'https://experienceleague.adobe.com/QFp1owJ-ko4nfjjyAyc0pBWsWpMzSmjULhLziXQzWR0'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: e13b3537d149f2bdad7e9dd66768837e5c4b595b
workflow-type: tm+mt
source-wordcount: '480'
ht-degree: 76%
---
# スケジューラー {#scheduler}



**スケジューラー**&#x200B;は、スケジュールで指定された時間にトランジションを有効化する永続的なタスクです。

「**[!UICONTROL スケジューラー]**」アクティビティは、予約済みの開始とみなされます。 アクティビティのグラフ内の配置ルールは、「**[!UICONTROL 開始]**」アクティビティのルールと同じものです。 このアクティビティはインバウンドトランジションを持つことはできません。

## ベストプラクティス {#best-practices}

**スケジューラーのタイミングを変更した後、ワークフローを再開** - **[!UICONTROL スケジューラー]**&#x200B;アクティビティのスケジュールされた時間を変更する際は、ワークフローを再開することが重要です。 これにより、ワークフローは更新した時間に実行されます。 再開しないと、ワークフローは古いスケジュールに従って引き続き実行されます。

**スケジューラーの頻度を制限** - ワークフローが15 分間隔よりも頻繁に実行するようにスケジュールされないようにします。 実行頻度が増えると、システムのパフォーマンスが低下し、データベースの輻輳が発生する可能性があります。

**分岐ごとに 1 つのスケジューラーを使用** - ワークフローの各分岐には、**[!UICONTROL スケジューラー]**&#x200B;アクティビティを 1 つのみ設定する必要があります。 ワークフローでアクティビティを使用する際のベストプラクティスについて詳しくは、[ワークフローのベストプラクティスページ](workflow-best-practices.md#using-activities)を参照してください。

**ワークフローの同時実行を防止** - ワークフローがスケジューラーによってトリガーされる場合、ワークフローの複数のインスタンスが同時に実行される可能性があります。 例えば、スケジューラーが1時間ごとにワークフローをトリガーするが、ワークフローの実行に1時間以上かかる場合、実行が重複する可能性があります。これを回避するには、複数の同時実行を防ぐためのチェックを設定することを検討してください。 [複数のワークフローの同時実行を防ぐ方法の詳細情報](monitor-workflow-execution.md#preventing-simultaneous-multiple-executions)

**遅延トランジションを考慮** - ワークフローが長時間実行タスク（インポートなど）を実行している場合や、wfserver モジュールが一時的に停止している場合、スケジューラーによってトリガーされるトランジションが遅延する可能性があります。 これを軽減するには、スケジューラーのアクティブ化時間を制限し、定義された時間枠内でタスクが実行されるようにします。

## 「スケジューラー」アクティビティの設定 {#configuring-scheduler-activity}

スケジューラーは、トランジションの有効化スケジュールを定義します。 設定するには、グラフィックオブジェクトをダブルクリックして、「**[!UICONTROL 変更...]**」をクリックします。

![実行頻度を定義するために使用される「変更」ボタンを含むスケジューラーアクティビティダイアログ ](assets/s_user_segmentation_scheduler.png)

ウィザードを使用して、アクティビティの頻度と有効期限を定義できます。 設定手順は、以下のとおりです。

1. 有効化の頻度を選択し、「**[!UICONTROL 次へ]**」をクリックします。

   ![ スケジュール編集ウィザード、頻度タイプの選択：1日に数回、毎日、毎週、毎月、一度](assets/s_user_segmentation_scheduler2.png)

1. 有効化する時間と曜日を指定します。 この手順のパラメーターは、前の手順で選択した頻度によって決まります。 アクティビティを 1 日に何度も起動するように選択した場合、設定は以下のようになります。

   ![ スケジュール編集ウィザード、1日に何度も：選択した時間と曜日の選択での時間選択](assets/s_user_segmentation_scheduler3.png)

1. スケジュールの有効期限を定義するか、実行回数を指定します。

   ![ スケジュール編集ウィザード、有効期間：永続的な有効、有効な開始日と終了日、または最大反復回数](assets/s_user_segmentation_scheduler4.png)

1. 設定を確認して、「**[!UICONTROL 完了]**」をクリックして保存します。

   ![ スケジュール編集ウィザード、概要：スケジュールの説明と次の起動時間のリスト（終了ボタン付き） ](assets/s_user_segmentation_scheduler5.png)
