---
title: ミラーページへのリンクを追加
description: ミラーページへのリンクを追加および管理する方法を説明します
feature: Email
role: User
level: Beginner
source-git-commit: 2a2887fcd476566d2105edd9824feba4c1caca8a
workflow-type: tm+mt
source-wordcount: '454'
ht-degree: 0%

---

# ミラーページへのリンク{#mirror-page}

## ミラーページについて{#about-mirror-page}

ミラーページは、E メールのオンラインバージョンです。

ほとんどの電子メールクライアントは問題なく画像をレンダリングしますが、一部のプリセットはセキュリティ上の理由から画像を表示できない場合があります。 ユーザーは、例えば、レンダリングの問題や壊れた画像が受信ボックスで表示されようとした場合に、E メールのミラーページを参照できます。 アクセシビリティ上の理由からオンラインバージョンを提供したり、ソーシャル共有を促進したりすることもお勧めします。

Adobe Campaignで生成されるミラーページには、すべてのパーソナライゼーションデータが含まれています。

![ミラーリンクのサンプル](assets/mirror-page-link.png){width="600" align="left"}

## ミラーページへのリンクを追加{#link-to-mirror-page}

ミラーページへのリンクを挿入することをお勧めします。 このリンクには、「このメールをブラウザーに表示」や「このオンラインを読む」などがあります。 多くの場合、電子メールのヘッダーまたはフッターに配置されています。

Adobe Campaignでは、専用の **パーソナライゼーションブロック**. 組み込み **ミラーページへのリンク** パーソナライゼーションブロックは、メールコンテンツに次のコードを挿入します。 `<%@ include view='MirrorPage' %>`.

![](assets/mirror-page-insert.png){width="800" align="left"}


<!--For more on personalization blocks insertion, refer to [Personalization blocks](personalization-blocks.md).-->

## ミラーページの生成{#mirror-page-generation}

E メールコンテンツが空でない場合、およびミラーページへのリンク（別名ミラーリンク）が含まれている場合、デフォルトでは、ミラーページはAdobe Campaignによって自動的に生成されます。

E メールミラーページの生成モードを制御できます。 オプションは配信プロパティで使用できます。 次のオプションにアクセスするには：

1. 次を参照： **[!UICONTROL 有効性]** 」タブをクリックします。
1. 内 **ミラーページの管理** セクションで、 **[!UICONTROL モード]** 」ドロップダウンリストに表示されます。

![](assets/mirror-page-generation.png){width="800" align="left"}

デフォルトのモードに加えて、次のオプションを使用できます。

* **[!UICONTROL ミラーページを強制的に生成]**:このモードを使用すると、配信にミラーページへのリンクが挿入されていない場合でもミラーページを生成できます。
* **[!UICONTROL ミラーページを生成しない]**:このモードを使用すると、配信にリンクが存在する場合でもミラーページが生成されないようにすることができます。
* **[!UICONTROL メッセージ識別子のみを使用してアクセス可能なミラーページを生成します]**:e メールコンテンツにミラーページのリンクがない場合、以下に説明するように、配信ログウィンドウでミラーページのコンテンツにアクセスできるようにするには、このオプションを使用します。

## 受信者のミラーページを確認{#mirror-page-access}

パーソナライゼーションデータを使用して、配信の特定の受信者のミラーページのコンテンツにアクセスできます。

このミラーページにアクセスするには：

1. 配信が送信されたら、その配信を開き、その配信を参照します **[!UICONTROL 配信]** タブをクリックします。

1. 受信者を選択し、 **[!UICONTROL このメッセージのミラーページを表示…]** リンク。

   ![](assets/mirror-page-display.png){width="800" align="left"}

   ミラーページは、選択した受信者のパーソナライゼーションデータと共に、専用の画面に表示されます。
