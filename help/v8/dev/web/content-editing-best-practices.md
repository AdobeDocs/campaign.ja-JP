---
product: campaign
title: コンテンツ編集のベストプラクティス
description: コンテンツ編集のベストプラクティス
feature: Web Apps, Web Forms, Landing Pages, Email Design
version: Campaign v8, Campaign Classic v7
exl-id: c1eccb48-59bf-412f-9c18-9cda2a022096
TQID: 'https://experienceleague.adobe.com/9ei3-06pNnCbg0airicWrcVLosdZLvuq7RCUrEfHxGc'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: b631758a-142d-425f-b9aa-f756d85cb979
    internal-label: Campaign Email Designer
subfeature_v2:
  - id: f391046b-0cf3-4e76-bd3b-97fe06654506
    internal-label: Web Apps
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
  - id: d7be2b01-dc9c-40f7-aace-a151707504ed
    internal-label: Landing pages
  - id: c8da4fdd-eb94-4751-a43c-f82733fb2d6e
    internal-label: Email design
topic_v2:
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
source-git-commit: 2ac66c0844ec361de9a1658f666c190fcfac8ffa
workflow-type: tm+mt
source-wordcount: '562'
ht-degree: 100%
---
# コンテンツ編集のベストプラクティス{#content-editing-best-practices}



エディターの最適な操作のために、次のガイドラインを確認することをお勧めします。

* Adobe Campaign で **HTML ページテンプレートをインポートする**&#x200B;前に、様々なブラウザーでテンプレートを開いて適切に表示されることを確認してください。
* HTML ページに **JavaScript スクリプト**&#x200B;が含まれている場合、エディターの外部で&#x200B;**エラーなしで**&#x200B;実行する必要があります。
* テンプレートを作成する場合、`<input>` タグに「**type**」属性を追加することをお勧めします。 この情報はエディターで処理され、Web アプリケーションを設定する際に、ユーザーがデータベースのフィールドをフォームのフィールドにリンクするのに便利です。

  テンプレート内の HTML コードの例：

  ```
  <input id="email" type="email" name="email"/>
  ```

  「**type**」属性は、次のフォームのインターフェイスに表示されます。

  ![](assets/dce_sidebar_inputtypechanges.png)

  「type」属性の公式なリストについては、[この Web サイト](https://www.w3schools.com/tags/att_input_type.asp)を参照してください。

* DCE での終了ページのシミュレーションの手順：

  ![](assets/dce_enchainement.png)

* ページに 1 組の `<body> </body>` のみ存在することを確認してください。
* CSS または JS ファイルがアップロードされても、.zip ファイルに含まれる画像はアップロードされません。 したがって、CSS に存在するこれらの画像への参照は更新されません。

## コンテンツエディターでサポートされるフォーマット {#content-editor-supported-formats}

デジタルコンテンツエディターは、HTML 形式をサポートします。いつでも&#x200B;**ソース**&#x200B;モードに切り替えることができます。

デジタルコンテンツエディターのインポート機能は、次のサポートされる形式で、次のように動作します。

* CSS：.zip ファイルに含まれる画像はインポートされません。 CSS のこれらの画像への参照は、更新されません。
* JS：.zip ファイルに含まれる画像はインポートされません。 JS に含まれているこれらの画像への参照は更新されません。
* IFrame：リンクされたページは、インポートされません。
* ランディングページおよび Web アプリ： **form** タグが見つからない場合、警告が表示されます。 `<form> </form>` が常にメッセージ本文に存在する必要があります。

デジタルコンテンツエディターは、次のコードページの編集もサポートします。

* iso-8859-1
* iso-8859-2
* utf-7
* utf-8（BOM を使用する場合に推奨）
* iso-8859-15
* us-ascii
* shift jis
* iso-2022-jp
* big-5
* euc-kr
* utf-16

>[!NOTE]
>
>HTML コードページは、meta タグ（HTML 4 または HTML 5）または BOM で定義されている必要があります。 使用可能なコードページがない場合、ファイルを latin1 で開きます。

## HTML コンテンツのステータス {#html-content-statuses}

エディターの上部のセクションには、コンテンツのステータスに関するメッセージが表示されます。 メッセージのカラーコードを次に示します。

* **グレーのメッセージ**：情報メッセージ。エディターでアクションを実行する必要はありません。
* **青いメッセージ**：編集されるコンテンツに関連する情報メッセージ。
* **黄色いメッセージ**：ユーザーの代わりにアクションが必要な警告またはエラーメッセージ。

### Web アプリケーション編集時のメッセージのリスト {#list-of-messages-when-editing-a-web-application}

* HTML コンテンツは機能しています。
* この Web アプリケーションはパブリッシュされていないので、オンラインでアクセスできません。
* Web アプリケーションがオンラインです。変更を適用するには、再度パブリッシュする必要があります。
* ページコンテンツが機能しません。 HTML フォーム（`<form>`）を含める必要があります。
* 設定する入力ゾーンまたはボタンがありません。
* 次のページへのトランジションを有効にするには、現在のページ上のボタンまたはリンクに「次のページ」アクションをリンクする必要があります。

### 配信編集時のメッセージのリスト {#list-of-messages-when-editing-a-delivery}

* 配信コンテンツは機能しています。
* まだ、n フィールドまたはパーソナライゼーションブロックを設定する必要があります。
* 配信コンテンツの準備が整いました。変更を適用するには、再度分析を実行する必要があります。
* 配信の送信準備が整いました。
