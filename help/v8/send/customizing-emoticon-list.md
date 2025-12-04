---
product: campaign
title: 顔文字リストのカスタマイズ
description: Adobe Campaign を使用するときに顔文字リストをカスタマイズする方法を説明します。
feature: Email, Push
role: User, Developer
version: Campaign v8, Campaign Classic v7
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '472'
ht-degree: 96%

---

# 顔文字リストのカスタマイズ {#customize-emoticons}

ポップアップに表示される顔文字リストは、リストに値を表示して、特定のフィールドに対するユーザーの選択肢を制限できる列挙によって決まります。
顔文字のリスト順序はカスタマイズでき、リストに他の顔文字を追加することもできます。

顔文字は、メールとプッシュでのみ使用できます。詳しくは、この[節](defining-the-email-content.md#inserting-emoticons)を参照してください。


## 新しい顔文字の追加 {#add-new-emoticon}

>[!CAUTION]
>
>顔文字リストは 81 個を超えるエントリを表示できません。

1. この[ページ](https://unicode.org/emoji/charts/full-emoji-list.html)から、追加する新しい顔文字を選択します。ブラウザーや OS など、様々なプラットフォームと互換性がある必要があります。

1. **[!UICONTROL エクスプローラー]**&#x200B;から、**[!UICONTROL 管理]**／**[!UICONTROL プラットフォーム]**／**[!UICONTROL 列挙]**&#x200B;の順に選択し、**[!UICONTROL 顔文字リスト]**&#x200B;の標準の列挙をクリックします。

   >[!NOTE]
   >
   >標準の列挙は、Adobe Campaign Classic コンソールの管理者のみが管理できます。

   ![](assets/emoticon_1.png)

1. 「**[!UICONTROL 追加]**」をクリックします。

1. 次のフィールドを入力します。

   * **[!UICONTROL U+]**：新しい顔文字のコード。この[ページ](https://unicode.org/emoji/charts/full-emoji-list.html)には、顔文字のコードのリストがあります。
互換性の問題を回避するために、ブラウザーおよび各オペレーションシステムでサポートされる顔文字を選択することをお勧めします。

   * **[!UICONTROL ラベル]**：新しい顔文字のラベル。

   ![](assets/emoticon_5.png)

1. 設定が完了したら、「**[!UICONTROL OK]**」をクリックし、「**[!UICONTROL 保存]**」をクリックします。
新しい顔文字が自動的にストアに配置されます。

1. 配信の&#x200B;**[!UICONTROL 顔文字を挿入]**&#x200B;ウィンドウに表示するには、新しく作成した顔文字をダブルクリックして選択します。

1. 新しい顔文字を表示する順序を「**[!UICONTROL 表示順]**」ドロップダウンで選択します。割り当て済みの表示順を選択すると、既存の顔文字が自動的にストアに移動されます。

   <br>この例では、表示順番 61 を選択します。つまり、既にこの順序が設定されているエントリは自動的にストアに移動され、列挙リストで新しいエントリに置き換えられます。

   ![](assets/emoticon_2.png)

1. これで、新しい顔文字が&#x200B;**[!UICONTROL 顔文字を挿入リスト]**（標準の列挙）に追加されました。**[!UICONTROL 表示順]**&#x200B;はいつでも変更できます。また、不要になった顔文字はストアに移動できます。

1. 変更を有効にするには、Adobe Campaign Classic から切断してから再接続します。新しい顔文字が&#x200B;**[!UICONTROL 顔文字を挿入]**&#x200B;ポップアップウィンドウに表示されない場合は、キャッシュをクリアする必要がある可能性があります。それには、**[!UICONTROL ファイル／ローカルキャッシュをクリア]**&#x200B;メニューを使用します。

1. 新しい顔文字は、前の手順で設定したように、配信の&#x200B;**[!UICONTROL 顔文字を挿入]**&#x200B;ポップアップウィンドウの 61 番目の位置で確認できます。配信での顔文字の使用方法について詳しくは、この [&#x200B; 節 &#x200B;](defining-the-email-content.md#inserting-emoticons) を参照してください。

   ![](assets/emoticon_4.png)

1. 次の顔文字が&#x200B;**[!UICONTROL 顔文字を挿入]**&#x200B;ポップアップウィンドウに表示される場合は、設定が正しくありません。**[!UICONTROL 顔文字リスト]**&#x200B;で、**[!UICONTROL U+]** コードまたは&#x200B;**[!UICONTROL 表示順]**&#x200B;が正しいかどうかを確認します。

   ![](assets/emoticon_6.png)
