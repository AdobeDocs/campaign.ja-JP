---
title: パーソナライズされたリンクのトラッキング
description: メール内のパーソナライズされたリンクをトラッキングする方法
feature: Personalization
role: User
level: Beginner
exl-id: d0e00b40-e7dd-4484-b37c-fd3f3ac70fda
source-git-commit: 6e465ec24f72d0b30c4fc287da5d4c4bcaeda05b
workflow-type: tm+mt
source-wordcount: '637'
ht-degree: 50%

---

# パーソナライズされたリンクのトラッキング {#tracking-personalized-links}

パーソナライゼーションを含む電子メールコンテンツ内のリンクは、特定の構文を追跡する必要があります。

電子メールコンテンツ（HTMLまたはテキスト）でJavaScriptを使用すると、動的なコンテンツを生成して受信者に送信できますが、次の2つの制限があります。

* スクリプトはデータベースに直接アクセスできません（SQL関数とAPI関数は使用できません）。
* Adobe Campaignは、リンクをトラッキングできるように、URL を検出できる必要があります。

## 命令の前処理 {#pre-processing-instructions}

特定の前処理命令を追加して、URL のスクリプトを作成し、追跡することができます。 これらの手順は、JavaScriptで記述し、`<%@` から開始する必要があります。

例：

```
<%@ value object="myObject" xpath="@myField" %>
```

この命令は、`myField` オブジェクトから `myObject` フィールドの値を取得します。

## URL 検出 {#url-detection}

追跡検出のために、Adobe Campaignは[Tidy](https://www.html-tidy.org/)を埋め込んでHTMLソースを解析し、パターンを検出します。 コンテンツのすべてのURLをリストして、個別に追跡できるようにします。 Adobe Campaignは再度Tidyを使用して、URL(`http://myurl.com`)をAdobe Campaignリダイレクトサーバーを指すURLに置き換えます。

例えば、初期コンテンツでは、次のようになります。`http://myurl.com/a.php?name=<%=escapeUrl(recipient.lastName)%>`は、次の特定の受信者で置き換えられます。`http://emailing.customer.com/r/?id=h617791,71ffa3,71ffa8&p1=CustomerName`

場所：

* 「h」はHTMLコンテンツを表します（テキストコンテンツの場合は「t」）。
* 617791はメッセージID / broadLog ID（16進数）です。
* 71ffa3はNmsDelivery ID（16進数）です。
* 71ffa8は、NmsTrackingUrl ID（16進数）です。
* p1、p2などは、URLで置き換えるすべてのパラメータです。

### 検出されない例 {#non-detection-example}

`<%= getURL("http://mynewsletter.com") %>` は、Webページの実際のコンテンツを電子メールで受信者に送信します。ただし、どのリンクも追跡されません。 これは、MTAが送信前に各電子メールに対して`"<%=getURL(..."`を実行するためです。 この値は受信者ごとに異なる場合があるので、Adobe Campaignは追跡用のURLを知ることができず、タグIDを割り当てることができません。

ダウンロードするページがすべての受信者で同じ場合は、次を使用することをお勧めします。

```
<%@ include url="http://mynewsletter.com" %>
```

この場合、分析中、トラッキング検出前にページがダウンロードされます。 Adobe Campaignは、リンクを検出し、タグIDを割り当てて追跡できます。

### 推奨パターン {#recommended-pattern}

`<%@` の命令を処理した後、追跡する URL は次の構文になります。

```
<a href="http://myurl.com/a.php?param1=aaa&param2=<%=escapeUrl(recipient.xxx)%>&param3=<%=escapeUrl(recipient.xxx)%>">
```

>[!IMPORTANT]
>
>その他すべてのパターンはAdobeでサポートされていないので、セキュリティ上のギャップを防ぐために避ける必要があります。

## URL パラメーター {#url-parameters}

パーソナライズされた URL が正しくトラッキングされるようにするには、`escapeUrl()` 関数または URL のパラメーターに適したエンコーディングメソッドを使用する必要があります。

**例：**

```
<a href="http://myurl.com/a.php?name=<%=escapeUrl(recipient.lastName)%>">Click here</a>
```

これにより、パーソナライズされたパラメーターがAdobe Campaignで正しくエンコードおよびトラッキングされます。

## `<%@ foreach %>` でのループ {#foreach}

`<%@ foreach %>` 命令を使用すると、配信に読み込まれたオブジェクトの配列を繰り返し処理して、オブジェクトに関連する個々のリンクを追跡できます。

### 構文

```
<%@ foreach object="myObject" xpath="myLink" index="3" item="myItem" %>
  <!-- Content to repeat -->
<%@ end %>
```

**パラメーター：**

* **`object`**：開始するオブジェクトの名前（通常は追加のスクリプトオブジェクトですが、配信にすることもできます）
* **`xpath`** （任意）：ループするコレクションの XPath。 デフォルトは「。」で、オブジェクトがループする配列であることを意味します
* **`index`** （任意）:xpath が「。」でない場合 そして object は配列自体で、object の項目インデックスです（0 から始まります）
* **`item`** （任意）:foreach ループ内の `<%@ value %>` でアクセス可能な新しいオブジェクトの名前。 デフォルトは、スキーマのリンク名です

### 例

配信プロパティ／パーソナライゼーションで、記事の配列と、受信者と記事のリレーションテーブルを読み込みます。

これらの記事へのリンクを、個別のトラッキングと共に表示できます。

```
<%@ foreach object="articleList" item="article" %>
  <a href="http://example.com/article.jsp?id=<%@ value object="article" xpath="@id" %>">
    <%@ value object="article" xpath="@title" %>
  </a>
<%@ end %>
```

これにより、Adobe Campaignは、記事のリンクがクリックされた単なる追跡ではなく、各受信者がクリックした特定の記事を追跡できます。

## ベストプラクティス {#best-practices}

* 動的 URL パラメーターには常に `escapeUrl()` 関数を使用します
* コレクション内の個々の項目を追跡する必要がある場合は、`<%@ foreach %>` を使用します
* 配信を送信する前にトラッキングをテストし、すべてのリンクが正しく機能することを確認します
* パーソナライズされたリンクが配信コンテンツ内で正しい形式であることを確認します
* トラッキングログを調べ、パーソナライズされたパラメーターが正しくキャプチャされていることを確認します

## 関連トピック {#related-topics}

* [トラッキングするリンクの設定方法を学ぶ](tracked-links.md)
* [URL トラッキングオプションを設定する方法を学ぶ](url-tracking.md)
* [パーソナライゼーションフィールドの追加方法を学ぶ](personalization-fields.md)

