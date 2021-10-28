---
title: Campaign のインタラクションアーキテクチャについて
description: Campaign インタラクションアーキテクチャの基本
feature: Overview
role: Data Engineer
level: Beginner
source-git-commit: 7234ca65f785b005b11851a5cd88add8cddeff4f
workflow-type: tm+mt
source-wordcount: '1328'
ht-degree: 67%

---

# Campaign のインタラクション環境とアーキテクチャについて

## 環境 {#environments}

オファーを管理する際に使用する各ターゲティングディメンション用に、次の2つの環境があります。

* A **デザイン** オファーマネージャーが、オファーの作成と分類、編集、承認プロセスの開始を処理して、オファーを使用できるようにする環境。 また、各カテゴリのルール、オファーを提示できるオファースペース、オファーの実施要件の定義に使用される事前定義済みフィルターも、この環境で定義されます。

   カテゴリは、オンライン環境に手動でパブリッシュすることもできます。

   オファーの承認プロセスの詳細 [この節](interaction-offer.md#approve-offers).

* A **live** デザイン環境からの承認済みオファーと、デザイン環境で設定された様々なオファースペース、フィルター、カテゴリおよびルールは、すべてこの環境にあります。 オファーエンジンの呼び出し中、エンジンは常にライブ環境からのオファーを使用します。

オファーは、承認プロセスで選択されたオファースペースにのみデプロイされます。そのため、ライブ状態のオファースペースで、オファーがライブ状態であっても利用できないことがあります。

## インバウンドおよびアウトバウンドインタラクション {#interaction-types}

Adobe Campaign Interaction モジュールは、次の 2 種類のインタラクションを提案します。

* **インバウンド** インタラクション。連絡先によって開始されます。 [詳細情報](interaction-present-offers.md)
* **送信** インタラクション。キャンペーン配信責任者によって開始されます。 [詳細情報](interaction-send-offers.md)

これら 2 種類のインタラクションは、 **単一モード** （オファーは 1 つの連絡先に対して計算されます）、または **バッチモード** （オファーは連絡先のセットに対して計算されます）。 通常、インバウンドインタラクションは単一モードで、また、アウトバウンドインタラクションはバッチモードで実行されますが、しかしながら、次のような場合には、ある種の例外が存在するかもしれません。 [トランザクションメッセージ](transactional.md) 例えば、アウトバウンドインタラクションが単一モードで実行される場合です。

（実行された設定に従って）オファーを提示できる、または提示する必要があるとすぐに、オファーエンジンが次の中間役割を果たします。連絡先に関して受け取ったデータと、アプリケーションで指定されたとおりに適用できる様々なルールを組み合わせて、連絡先に対する最適なオファーを自動的に計算します。

![](assets/architecture_interaction2.png)

## 分散アーキテクチャ

スケーラビリティをサポートし、インバウンドチャネルで24/7サービスを提供できるようにするには、 **インタラクション** モジュールは分散アーキテクチャで実装されます。 このタイプのアーキテクチャは、で既に使用されています [Message Center](../dev/architecture.md#transac-msg-archi) は複数のインスタンスで構成されます。

* アウトバウンドチャネル専用で、マーケティングおよび環境のデザインベースを含む、1 つまたは複数のコントロールインスタンス
* インバウンドチャネル専用の、1 つまたは複数の実行インスタンス

![](assets/interaction_powerbooster_schema.png)

コントロールインスタンスは、インバウンドチャネル専用で、カタログのオンラインバージョンを含みます。各実行インスタンスは独立しており、1 つの連絡先セグメント専用です（例：国ごとに 1 つの実行インスタンス）。オファーエンジンの呼び出しは、実行時に直接実行する必要があります（実行インスタンスごとに 1 つの特定の URL）。 インスタンス間の同期は自動ではないので、同じコンタクト先のインタラクションは、同じインスタンスを使用して送信される必要があります。

### 同期 {#synchronization}

オファーの同期は、パッケージで実行されます。実行インスタンスでは、すべてのカタログオブジェクトに、外部アカウント名のプレフィックスが付加されます。これは、同じ実行インスタンスで複数のコントロールインスタンス（例：開発用インスタンスと本番用インスタンス）をサポートできることを意味します。

>[!CAUTION]
>
>短くて明示的な内部名を使用します。

オファーは、自動的にデプロイされてから、実行インスタンスおよびコントロールインスタンスにパブリッシュされます。

デザイン環境で削除されたオファーは、すべてのオンラインインスタンスで無効化されます。不要になった提案やオファーは、パージ期間（各インスタンスのデプロイメントアシスタントで指定）およびスライド期間（受信提案のタイポロジルールで指定）の後、自動的に削除されます。

![](assets/interaction_powerbooster_schema2.png)

提案の同期用に、各環境および外部アカウントごとにワークフローが作成されます。同期の頻度は、環境ごと、外部アカウントごとに調整できます。

以下の同期メカニズムに注意する必要があります。

* 匿名環境から識別された環境へのフォールバック機能を使用する場合、それら 2 つの環境が同じ実行インスタンス上にある必要があります。
* 複数の実行インスタンス間の同期は、リアルタイムでは実行されません。同じコンタクト先のインタラクションは、同じインスタンスに送信される必要があります。コントロールインスタンスは、アウトバウンドチャネル（リアルタイムではない）専用である必要があります。
* マーケティングデータベースは、自動的には同期されません。重み付けや実施要件ルールで使用されるマーケティングデータは、実行インスタンスで複製される必要があります。このプロセスは標準では用意されていないので、統合期間中に開発する必要があります。
* 提案の同期は、FDA 接続によって排他的に実行されます。
* インタラクションと Message Center を同じインスタンス上で使用する場合は、どちらについても、同期は FDA プロトコルを使用しておこなわれます。

### パッケージ設定 {#packages-configuration}

**インタラクション**（オファー、提案、受信者など）に直接リンクされたあらゆるスキーマの拡張は、実行インスタンス上にデプロイする必要があります。

この **インタラクション** パッケージは、すべてのインスタンス（コントロールと実行）にインストールされます。 次の 2 つの追加パッケージを使用できます。1 つはコントロールインスタンス用のパッケージで、もう 1 つは実行インスタンス用のパッケージです。

>[!NOTE]
>
>パッケージをインストールする際、**nms:proposition** テーブルに含まれる **long** タイプのフィールド（提案 ID など）は、**int64** タイプのフィールドになります。このタイプのデータについて詳しくは、 [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/schema-structure.html?lang=en#mapping-the-types-of-adobe-campaign-dbms-data){target=&quot;_blank&quot;}。

データ保持期間は、インスタンスごとに ( **[!UICONTROL データのパージ]** 」ウィンドウが開きます )。 実行インスタンスでは、この期間が、タイポロジルールに必要な履歴深度（スライド期間）および計算される実施要件ルールに対応している必要があります。

コントロールインスタンス上で、次の手順を実行します。

1. 実行インスタンスごとに 1 つの外部アカウントを作成します。

   ![](assets/interaction_powerbooster1.png)

   * ラベルを入力し、短くて明示的な内部名を追加します。
   * 「**[!UICONTROL 実行インスタンス]**」を選択します。
   * 「**[!UICONTROL 有効]**」オプションをオンにします。
   * その実行インスタンス用の接続パラメーターを入力します。
   * すべての実行インスタンスは、ID にリンクされている必要があります。この ID は、「**[!UICONTROL 接続を初期化]**」ボタンをクリックすると割り当てられます。
   * 使用するアプリケーションのタイプとして、「**[!UICONTROL Message Center]**」と「**[!UICONTROL インタラクション]**」のどちらか、または両方を選択します。
   * 使用する FDA アカウントを入力します。オペレーターは、実行インスタンスで作成し、次のように、該当するインスタンスのデータベースの読み取り権限と書き込み権限を付与する必要があります。

      ```
      grant SELECT ON nmspropositionrcp, nmsoffer, nmsofferspace, xtkoption, xtkfolder TO user;
      grant DELETE, INSERT, UPDATE ON nmspropositionrcp TO user;
      ```
   >[!NOTE]
   >
   >コントロールインスタンスの IP アドレスは、実行インスタンスで承認されている必要があります。

1. 次のように環境を設定します。

   ![](assets/interaction_powerbooster2.png)

   * 実行インスタンスのリストを追加します。
   * インスタンスごとに、同期期間とフィルター条件（例：国ごと）を指定します。

      >[!NOTE]
      >
      >エラーが発生した場合は、同期ワークフローおよびオファー通知を確認してください。これらはアプリケーションのテクニカルワークフローにあります。

最適化のために、実行インスタンスでマーケティングデータベースの一部のみを複製する場合、その実行インスタンスで利用できるデータのみをユーザーに使用させるよう、環境にリンクした制約付きスキーマを指定できます。オファーの作成には、実行インスタンスでは利用できないデータも使用できます。それには、このルールをアウトバウンドチャネルのみに制限することで、他のチャネルに対しては無効にする必要があります（「**[!UICONTROL 次の場合に考慮]**」フィールド）。

![](assets/ita_filtering.png)

### メンテナンスオプション {#maintenance-options}

次に、コントロールインスタンスで使用できるメンテナンスオプションのリストを示します。

>[!CAUTION]
>
>これらのオプションは、特定のメンテナンス事例にのみ使用できます。

* **`NmsInteraction_LastOfferEnvSynch_<offerEnvId>_<executionInstanceId>`**：特定のインスタンスで環境が同期された直近の日付。
* **`NmsInteraction_LastPropositionSynch_<propositionSchema>_<executionInstanceIdSource>_<executionInstanceIdTarget>`**：特定のスキーマの提案があるインスタンスから別のインスタンスに同期された直近の日付。
* **`NmsInteraction_MapWorkflowId`**：生成されるすべての同期ワークフローのリストを含むオプション。

次のオプションは、実行インスタンスで使用できます。

**NmsExecutionInstanceId**：インスタンス ID を含むオプション。

### パッケージのインストール {#packages-installation}

以前に **インタラクション** パッケージの場合、移行は必要ありません。 デフォルトでは、パッケージがインストールされると、提案テーブルは 64 ビットになります。

>[!CAUTION]
>
>インスタンスの既存の提案の量によっては、この作業に時間がかかることがあります。

* インスタンスに提案がない、または非常に少ない場合、提案テーブルを手作業で修正する必要はありません。パッケージをインストールすると、修正が実行されます。
* インスタンスに多数の提案がある場合、コントロールパッケージをインストールして実行する前に提案テーブルの構造を変更しておくと、より確実です。アクティビティが少ない期間にクエリを実行することをお勧めします。

>[!NOTE]
>
>提案テーブルで特定の設定が実行されている場合、その状況に応じてクエリを変更してください。


次の 2 つの方法があります。

**作業用テーブル** （推奨）

```
CREATE TABLE NmsPropositionRcp_tmp AS SELECT * FROM nmspropositionrcp WHERE 0=1;
ALTER TABLE nmspropositionrcp_tmp
  ALTER COLUMN ipropositionid TYPE bigint,
  ALTER COLUMN iinteractionid TYPE bigint;
INSERT INTO nmspropositionrcp_tmp SELECT * FROM nmspropositionrcp;
DROP TABLE nmspropositionrcp;
CREATE INDEX proposition_id ON NmsPropositionRcp (ipropositionid);
CREATE INDEX nmspropositionrcp_deliveryid ON NmsPropositionRcp (ideliveryid);
CREATE INDEX nmspropositionrcp_lastmodified ON NmsPropositionRcp (tslastmodified);
CREATE INDEX nmspropositionrcp_offerid ON NmsPropositionRcp (iofferid);
CREATE INDEX nmspropositionrcp_offerspaceid ON NmsPropositionRcp (iofferspaceid);
CREATE INDEX nmspropositionrcp_recipientidid ON NmsPropositionRcp (irecipientid);
ALTER TABLE nmspropositionrcp_tmp RENAME TO nmspropositionrcp;
```

**テーブルの変更**

```
ALTER TABLE nmspropositionrcp
  ALTER COLUMN ipropositionid TYPE bigint,
  ALTER COLUMN iinteractionid TYPE bigint;
```
