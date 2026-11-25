---
product: campaign
title: コントロールルールの設定
description: コントロールルールの設定方法を説明します
feature: Typology Rules
version: Campaign v8, Campaign Classic v7
exl-id: 79e442ea-f856-41bf-b065-25cb2ad2c65b
TQID: 'https://experienceleague.adobe.com/xluD-4nygREOMWZyFT6OrenJvfvFVWTVf7i6-ZoYfTI'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: c858a28b-ea19-49b0-8d48-828717fad89c
    internal-label: Prepare and test messages
subfeature_v2:
  - id: e5fb657f-3c0a-4fcc-9980-3589a23ab4de
    internal-label: Typology rules
topic_v2:
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
source-git-commit: 8839c1717cb026a38987a745ffc080a79f344bce
workflow-type: tm+mt
source-wordcount: '486'
ht-degree: 80%
---
# コントロールルール{#control-rules}

コントロールルールを使用すると、配信を実行する前に、メッセージの有効性と品質（文字の表示、SMS のサイズ、アドレスの形式など）を確認することができます。

デフォルトのルールセットでは、一般的なチェックを実行できます。 以下のタイプのチェック（インターフェイスで太字で表示される）が用意されています。

* **[!UICONTROL オブジェクトの検証]**（メール）：送信者のオブジェクトやアドレスをチェックして、メールエージェントで問題を引き起こす可能性のある特殊文字が含まれていないことを確認します。
* **[!UICONTROL URL ラベルの検証]**（メール）：各トラッキング URL にラベルがあることを確認します。
* **[!UICONTROL URL の検証]**（メール）：トラッキング URL をチェックして、アンパサンド（&amp;）が含まれているかどうかを確認します。
* **[!UICONTROL メッセージサイズの検証]**（モバイル）：SMS メッセージのサイズを確認します。
* **[!UICONTROL 有効期間の検証]**（メール）：配信の有効期間をチェックして、すべてのメッセージを送信するのに十分な時間があることを確認します。
* **[!UICONTROL 配達確認のターゲットのサイズを検証]**（すべてのチャネル）：配達確認のターゲット母集団が 100 人を超える場合にエラーメッセージを生成します。
* **[!UICONTROL ウェーブスケジュールの検証]**（メール）：配信が複数のウェーブに分割されている場合、最後のウェーブが有効期間内に開始するよう予定されていることを確認します。
* **[!UICONTROL 講読解除リンクの検証]**（メール）：各コンテンツ（HTML またはテキスト）に購読解除（オプトアウト）用の URL が少なくとも 1 つ含まれていることを確認します。

## コントロールルールの作成 {#create-a-control-rule}

必要に応じて、新しいコントロールルールを作成することができます。 まず、**[!UICONTROL コントロール]**&#x200B;タイポロジルールを作成し、次に「**[!UICONTROL コード]**」タブに SQL 形式でコントロールの数式を入力します。

**例：**

次の例では、SMS オファーが 100 人を超える受信者に送信されないようにするルールを作成します。 このルールは、まずキャンペーンタイポロジにリンクされ、その後オファーを送信する SMS 配信にリンクされます。

次の手順に従います。

1. **[!UICONTROL コントロール]**&#x200B;タイポロジルールを作成します。 アラートレベルとして、「**[!UICONTROL 警告]**」を選択します。

   ![ タイポロジルール作成ダイアログ、一般タブ：ルールの種類、SMS チャネル、警告がハイライト表示されたレベル ドロップダウンを制御します。](assets/campaign_opt_create_control_01.png)

1. 「**[!UICONTROL コード]**」タブで、以下の図のように、しきい値を適用するスクリプトを入力します。

   配信ターゲットが100件を超えた場合に警告を記録するスクリプトが表示された![ タイポロジ ルール コード タブ。](assets/campaign_opt_create_control_02.png)

   このスクリプトは、配信ターゲットが 100 人を超えると、警告をトリガーします。

   ```
   if( delivery.FCP == false && delivery.properties.toDeliver > 100 ) { logWarning("Significant number of SMS to deliver (" + delivery.properties.toDeliver + "). Please make sure the target is correct.") return false; } return true
   ```

1. ルールをキャンペーンタイポロジにリンクし、該当する SMS 配信でこのタイポロジを参照します。

   ![配信プロパティ、タイポロジタブ：使用可能なタイポロジの中からタイポロジドロップダウンリストのモバイル（最大100）。](assets/campaign_opt_create_control_03.png)

1. 配信の分析時にルールが適用され、状況に応じて警告が生成されます。

   ルール +100 メッセージが問題を検出したという警告を示す![配信分析ログ。配信を確認してください。](assets/campaign_opt_create_control_04.png)

   ただし、このルールによって、配信が自動的に停止されることはありません。

   アラートレベルをさらに引き上げると、配信は開始されません。

   ![ レベル ドロップダウンが開き、「警告」ではなく「エラー」が選択されたタイポロジルールの「一般」タブ。](assets/campaign_opt_create_control_05.png)

   分析の最後に表示される「**[!UICONTROL 配信を確定]**」ボタンがクリックできなくなります。

   ![配信分析ログがエラーで終了し、「配信を確認」ボタンが無効になっています。](assets/campaign_opt_create_control_06.png)
