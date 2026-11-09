---
product: campaign
title: 調査の基本を学ぶ
description: Campaign の調査の基礎知識
feature: Surveys
version: Campaign v8, Campaign Classic v7
exl-id: 7061a4f1-006f-4f19-8761-918d8930d885
TQID: 'https://experienceleague.adobe.com/VU7basdMR9txUIDVWMgoun9mMhAYlpqq2Uc57qtebo0'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: 71b1c383-45b9-57e0-b8cd-ea2e98a01a26
    internal-label: Surveys
subfeature_v2:
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
source-git-commit: aa436bfd174075f7ed3e144ea0b16832b6b811ff
workflow-type: tm+mt
source-wordcount: '620'
ht-degree: 87%
---
# 調査の基本を学ぶ{#about-surveys}

>[!AVAILABILITY]
>
>調査は、[Campaign FFDA デプロイメント ](../../architecture/enterprise-deployment.md)では利用できません。

Adobe Campaign には、web アプリケーションを定義および公開するためのグラフィカルモジュールが含まれています。 これは、エクストラネット上の編集フォームや、テーブル、グラフ、入力フォームなど、データベースのデータを含んだ通知フォームのページを作成するのに使用します。この機能を使用すると、ユーザーが情報を検索または入力できる web ページをデザインし配信できます。



オプションの&#x200B;**調査**&#x200B;アドオンを使用すると、新しいタイプの web アプリケーションを作成して、プロファイル情報を追加または修正するフォーム、情報サービスを購読または購読解除するフォーム、コンテストにエントリーするフォームなど、オンラインアンケートを作成および管理できます。 回答が収集されると、データベースまたはローカル変数に格納されます。 データモデルは、アンケートの回答を使用して動的に拡張できます。 結果をリアルタイムに表示したり、回答をフィルターしたり、専用のグラフを使用してそれらを分析したりできます。

この章では、**調査**、フィールドとページの管理、ストレージモードとレコードの作成と管理の方法について詳しく説明します。

初めての調査の作成方法については、[このページ](getting-started-with-surveys.md)を参照してください。

>[!NOTE]
>
>* 標準 web フォームの作成手順について詳しくは、[このドキュメント](https://experienceleague.adobe.com/en/docs/campaign-classic/using/designing-content/web-forms/about-web-forms){target="_blank"}を参照してください。
>
>* Web アプリケーション管理について詳しくは、[このドキュメント](https://experienceleague.adobe.com/en/docs/campaign-classic/using/designing-content/web-applications/about-web-applications){target="_blank"}を参照してください。 詳しくは、この章を参照してください。

## 機能の範囲 {#campaign-surveys-scope}

Adobe Campaign では、[web アプリケーション](https://experienceleague.adobe.com/en/docs/campaign-classic/using/designing-content/web-forms/about-web-forms){target="_blank"}を使用して以下を行います。

* 複数ページのフォームの作成
* 統合翻訳ツールによる多言語フォームの管理
* グラフィカルインターフェイス、複数列のページレイアウトの管理
* パーソナライゼーションの追加とフィールド位置の定義
* 回答に応じた調査フィールドの条件付き表示
* ページの条件付き表示
* 想定されるデータのタイプ（数値、メールアドレス、日付など）および必須フィールドに応じた、 承認前の情報の確認
* メールの招待状／通知の送信
* エラーページと終了ページのパーソナライズ
* フォームへの画像、ビデオ、ハイパーテキストリンク、Captcha などの追加

オプションの調査作成モジュールには、使いやすい UI と次の追加機能が用意されています。

* データベースの動的な拡張：初期のデータモデルに含まれていない回答の作成。 [詳細情報](managing-answers.md#storing-collected-answers)。
* スコア管理。 [詳細情報](managing-answers.md#score-management)。
* 質問のランダム表示 [詳細情報](building-a-survey.md#adding-questions)。
* 回答のリアルタイムトラッキング [詳細情報](publish-track-and-use-collected-data.md#response-tracking)。
* 専用レポートの生成。 [詳細情報](publish-track-and-use-collected-data.md#reports-on-surveys)。


## 実装手順 {#surveys-implementation-steps}

次の手順に従って、調査を作成および配信し、その結果を処理します。

1. 調査のページおよびそのコンテンツ（入力フィールド、ドロップダウンリスト、質問など）を作成します。
1. 回答の保存方法を定義します。 既にデータベースにあるデータをフォームにプリロードするために、データのプリロード手順を挿入できます。 テストボックスを追加することもできます。
1. 調査をパブリッシュしてから受信者に配信します（例：配信または Web サイトにリンクを含める）。
1. 回答を監視し、レポートを表示します。

これらの手順の設定と順番について詳しくは、[このドキュメント](https://experienceleague.adobe.com/en/docs/campaign-classic/using/designing-content/web-forms/about-web-forms){target="_blank"}を参照してください。 この章では、調査に固有の設定についてのみ詳しく説明します。

>[!CAUTION]
>
>プライバシー保護のために、すべての外部リソースに対して HTTPS を使用することをお勧めします。

## 設定 {#settings}

デフォルトでは、調査は Adobe Campaign ツリーの&#x200B;**[!UICONTROL リソース／オンライン／Web アプリケーション]**&#x200B;ノードに格納されます。

設定は、次のフォルダーに格納されます。

* **[!UICONTROL 管理／設定／フォームのレンダリング]**：Web フォームプレゼンテーションのレンダリングテンプレートが含まれます（アプリケーションおよび調査）。
* **[!UICONTROL リソース／テンプレート／Web アプリケーションテンプレート]**：フォームテンプレートが含まれます。 フォームを作成するには、テンプレートから開始する必要があります。

>[!NOTE]
>
>設定の詳細については、[このドキュメント](https://experienceleague.adobe.com/en/docs/campaign-classic/using/designing-content/web-forms/about-web-forms){target="_blank"}を参照してください。
