---
product: campaign
title: web アプリケーションの翻訳
description: web アプリケーションの翻訳
feature: Web Apps
version: Campaign v8, Campaign Classic v7
exl-id: 82c5c610-8161-4686-aa79-1b690e763765
TQID: 'https://experienceleague.adobe.com/AVV-TybR3s6d68N7DS0TSKBN46-etor1Ezhlaah-MJs'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
subfeature_v2:
  - id: f391046b-0cf3-4e76-bd3b-97fe06654506
    internal-label: Web Apps
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
  - id: d7be2b01-dc9c-40f7-aace-a151707504ed
    internal-label: Landing pages
source-git-commit: 2ac66c0844ec361de9a1658f666c190fcfac8ffa
workflow-type: tm+mt
source-wordcount: '375'
ht-degree: 100%
---
# web アプリケーションの翻訳{#translating-a-web-application}



Adobe Campaign デジタルコンテンツエディター（DCE）で作成した Web アプリケーションページを翻訳できます。

Web アプリケーションの&#x200B;**[!UICONTROL プロパティ]**&#x200B;の「**[!UICONTROL ローカライゼーション]**」タブで少なくとも 1 つの追加言語を選択すると、DCE で編集したページに HTML コンテンツブロックを追加する際に、新しいオプションが利用できるようになります。

このオプションを使用すると、ブロックコンテンツを翻訳する必要があるかどうかを示すことができます。

翻訳される文字列は、アプリケーションの「**[!UICONTROL 翻訳]**」タブを使用して、Web アプリケーションの他の文字列と同じ方法で収集されます。 詳しくは、[このページ](translating-a-web-form.md)を参照してください。

翻訳する文字列にフラグを設定するには：

1. DCE で編集されたコンテンツページを Web アプリケーションで開きます。

   ![](assets/dce_translation_3.png)

1. HTML ブロックを選択します。
1. 右側のパラメーターブロックで、「**[!UICONTROL ローカライゼーション]**」オプションを使用すると、選択したブロックのコンテンツにフラグを設定できます。 デフォルトでは、ページタイトルのみが翻訳されます。

   ![](assets/dce_translation_1.png)

   >[!NOTE]
   >
   >文字列は、1,023 文字以下にする必要があります。

   3 つの特殊なケースがあります。

   * 選択したブロックに複数の文字列／ブロックが含まれる場合、翻訳する単一の文字列としてフラグされます。 そのため、文字列には、このブロック内の要素の HTML コードが含まれます。
   * 複数の文字列を含むブロックにフラグを設定する場合、それらの文字列のうち少なくとも 1 つに既にフラグが設定されていると、警告が表示されます。 独立した文字列からフラグを削除して、ブロック全体にフラグを追加できます。

     ![](assets/dce_translation_4.png)

   * 既にフラグが設定されたブロックに含まれている文字列からフラグを削除する場合、文字列翻訳オプションを直接修正することはできません。 ただし、変更するために、文字列を含むブロックにアクセスすることはできます。

     ![](assets/dce_translation_2.png)

1. 文字列のフラグ設定が終了したら、Web アプリケーションに戻って、「**[!UICONTROL 翻訳]**」タブを選択します。
1. 「**[!UICONTROL 翻訳する文字列を収集]**」を選択します。 DCE でフラグを設定した文字列は、Web アプリケーションの文字列に追加されます。

   >[!NOTE]
   >
   >文字列が収集されたら、DCE で翻訳フラグを削除しても、リストからは削除されません。 これにより、翻訳メモリに保持できます。

1. 文字列を翻訳して承認します。

   そうすると、Web アプリケーションの「**[!UICONTROL プレビュー]**」タブで目的の言語を選択することで、翻訳をプレビューできます。
