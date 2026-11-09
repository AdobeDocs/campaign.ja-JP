---
product: campaign
title: コンテンツエディターのインターフェイス
description: コンテンツエディターのインターフェイス
feature: Web Apps, Web Forms, Landing Pages, Email Design
version: Campaign v8, Campaign Classic v7
exl-id: cb76f3dc-7f3a-49de-89cb-c106865ecb17
TQID: 'https://experienceleague.adobe.com/azxivK9YlO8E7jQzYWJX-8BechsrZiY51DNy2q6n8bw'
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
source-git-commit: 2ac66c0844ec361de9a1658f666c190fcfac8ffa
workflow-type: tm+mt
source-wordcount: '542'
ht-degree: 100%
---
# コンテンツエディターのインターフェイス{#content-editor-interface}



## 編集ウィンドウ {#editing-window}

DCE 編集ウィンドウは、3 つの異なるセクションに分類されます。 これらにより、コンテンツのステータスを表示、修正および確認できます。

![](assets/dce_decoupe_window_nb.png)

1. **上部**&#x200B;のセクションは、ユーザーに対するメッセージの表示領域です。 これらのメッセージは、Web アプリケーションのステータスや作成される配信、およびコンテンツに関連する警告やエラーメッセージを示します。 詳しくは、[HTML コンテンツのステータス](content-editing-best-practices.md#html-content-statuses)を参照してください。
1. ウィンドウの&#x200B;**左側**&#x200B;のセクションは、コンテンツを編集するための領域です。 この領域から、ポップアップツールバーを使用して直接コンテンツを操作できます（画像へのリンクの挿入、フォントの変更、フィールドの削除など）。詳しくは、 [フォームの編集](editing-content.md#editing-forms)を参照してください。
1. ウィンドウの&#x200B;**右側**&#x200B;のセクションは、コントロールパネル領域です。 この領域は、エディターの様々なオプション、特にページ見出しの設定に関するものとブロックの全般的なオプションをグループ化します（境界線の追加、データベースフィールドと入力ゾーンのリンク、web ページのプロパティへのアクセスなど）。詳しくは、[グローバルオプション](#global-options)および[コンテンツの編集](editing-content.md)の節を参照してください。

## グローバルオプション {#global-options}

エディターの右上のオプションを使用すると、グローバルオプションにアクセスできます。現在作成されているコンテンツを制御できます。

![](assets/dce_global_options.png)

4 つのアイコンがあります。

![](assets/dce_icons_sidebar.png)

* **ブロックを表示／非表示**&#x200B;アイコンを使用すると、コンテンツブロック（`<div>` HTML タグに対応）の周りに青い枠を表示できます。

* **別のコンテンツを選択**&#x200B;アイコンを使用すると、ユーザーは新しいコンテンツをテンプレート（既存のテンプレートまたは標準のテンプレート）から読み込むことができます。

  ![](assets/dce_popup_templatechoice.png)

  >[!CAUTION]
  >
  >選択したコンテンツが現在のコンテンツを置き換えます。

* **テンプレートとして保存**&#x200B;アイコンを使用すると、現在のコンテンツをテンプレートとして保存できます。 テンプレートのラベルおよび内部名を入力する必要があります。 テンプレートは、**[!UICONTROL リソース／テンプレート／コンテンツテンプレート]**&#x200B;ノードに格納されます。

  ![](assets/dce_popup_savetemplate.png)

  保存すれば、テンプレートは使用でき、新しいコンテンツを作成する際に選択できます。

  ![](assets/dce_create_fromtemplate.png)

* **ページのプロパティ**&#x200B;アイコンを使用すると、HTML ページの上部でコンテンツ情報を選択できます。

  ![](assets/dce_popup_headerhtml.png)

  >[!NOTE]
  >
  >この情報は、ページの **`<title>`** および **`<meta>`** HTML タグに対応します。
  >
  >キーワードは、コンマで区切る必要があります。

## ブロックオプション {#block-options}

エディターの右側のセクションは、コンテンツに作用するメインオプションをグループ化します。 これらのオプションを表示するには、ブロックを選択する必要があります。これらのオプションの特性は、選択したブロックによって異なります。

![](assets/dce_right_section.png)

次の操作をおこなうことができます。

* 1 つまたは複数のブロックの表示を決定（[表示条件の定義](editing-content.md#defining-a-visibility-condition)を参照）
* 境界線とフレームを定義（[境界線と背景の追加](editing-content.md#adding-a-border-and-background)を参照）
* 画像の属性（サイズ、キャプション）を定義（[画像プロパティの編集](editing-content.md#editing-image-properties)を参照）
* データベースをフォーム要素（入力ゾーン、チェックボックス）にリンク（[フォームのデータプロパティの変更](editing-content.md#changing-the-data-properties-for-a-form)を参照）
* フォームの一部を必須にする（[フォームのデータプロパティの変更](editing-content.md#changing-the-data-properties-for-a-form)を参照）
* ボタンのアクションを定義（[ボタンへのアクションの追加](editing-content.md#adding-an-action-to-a-button)を参照）

## コンテンツツールバー {#content-toolbar}

ツールバーは、選択したブロックに応じて異なる機能を表示する、DCE インターフェイスの&#x200B;**ポップアップ要素**&#x200B;です。

>[!CAUTION]
>
>特定のツールバー機能を使用すると、HTML コンテンツを書式設定できます。 ただし、ページに CSS スタイルシートが含まれる場合、スタイルシートからの&#x200B;**指示**&#x200B;が、ツールバーで指定された指示よりも&#x200B;**優先**&#x200B;されることがあります。
