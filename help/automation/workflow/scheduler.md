---
product: campaign
title: スケジューラー
description: スケジューラーワークフローアクティビティの詳細を説明します
feature: Workflows
role: User
exl-id: ed70d2d3-251e-4ee8-84d4-73ad03e8dd35
source-git-commit: ba8cf031db178f6575104858340e16d4e7bd6a31
workflow-type: tm+mt
source-wordcount: '400'
ht-degree: 43%

---

# スケジューラー {#scheduler}



**スケジューラー**&#x200B;は、スケジュールで指定された時間にトランジションを有効化する永続的なタスクです。

「**[!UICONTROL スケジューラー]**」アクティビティは、予約済みの開始とみなされます。アクティビティのグラフ内の配置ルールは、「**[!UICONTROL 開始]**」アクティビティのルールと同じものです。このアクティビティはインバウンドトランジションを持つことはできません。

## ベストプラクティス {#best-practices}

**スケジューラーのタイミングを変更した後にワークフローを再起動する** - **[!UICONTROL スケジューラー]** アクティビティのスケジュールされた時間を変更する場合、ワークフローを再起動することが重要です。 これにより、更新された時間にワークフローが実行されるようになります。 再起動しない場合、ワークフローは古いスケジュールに従って引き続き実行されます。

**スケジューラーの頻度を制限** - 15 分ごとよりも頻繁に実行するようにワークフローをスケジュールしないでください。 これらを頻繁に実行すると、システムのパフォーマンスが低下し、データベースの輻輳が発生する可能性があります。

**ブランチごとに 1 つのスケジューラーを使用** - ワークフローの各ブランチには、**[!UICONTROL スケジューラー]** アクティビティを 1 つだけ含める必要があります。 ワークフローでアクティビティを使用するためのベストプラクティスについて詳しくは、[ ワークフローのベストプラクティスのページ ](workflow-best-practices.md#using-activities) を参照してください。

**ワークフローの同時実行の防止** - ワークフローがスケジューラーによってトリガーされる場合は、ワークフローの複数のインスタンスが同時に実行される可能性があることに注意してください。 例えば、スケジューラーが 1 時間ごとにワークフローをトリガーする際、ワークフローの実行に 1 時間以上かかる場合は、実行が重複することになります。これを回避するには、複数の同時実行を防ぐためにチェックを設定することを検討します。 [ 複数のワークフローの同時実行を防ぐ方法を説明します ](monitor-workflow-execution.md#preventing-simultaneous-multiple-executions)。

**遅延トランジションのアカウント** - ワークフローが長時間実行されるタスク（インポートなど）を実行している場合や、wfserver モジュールが一時的に停止されている場合、スケジューラーによってトリガーされたトランジションは遅延する場合があります。 これを軽減するには、スケジューラーのアクティブ化時間を制限して、定義された時間枠内でタスクが確実に実行されるようにします。

## 「スケジューラー」アクティビティの設定  {#configuring-scheduler-activity}

スケジューラーは、トランジションの有効化スケジュールを定義します。設定するには、グラフィックオブジェクトをダブルクリックして、「**[!UICONTROL 変更...]**」をクリックします。

![](assets/s_user_segmentation_scheduler.png)

ウィザードを使用して、アクティビティの頻度と有効期限を定義できます。設定手順は、以下のとおりです。

1. 有効化の頻度を選択し、「**[!UICONTROL 次へ]**」をクリックします。

   ![](assets/s_user_segmentation_scheduler2.png)

1. 有効化する時間と曜日を指定します。この手順のパラメーターは、前の手順で選択した頻度によって決まります。アクティビティを 1 日に何度も起動するように選択した場合、設定は以下のようになります。

   ![](assets/s_user_segmentation_scheduler3.png)

1. スケジュールの有効期限を定義するか、実行回数を指定します。

   ![](assets/s_user_segmentation_scheduler4.png)

1. 設定を確認して、「**[!UICONTROL 完了]**」をクリックして保存します。

   ![](assets/s_user_segmentation_scheduler5.png)
