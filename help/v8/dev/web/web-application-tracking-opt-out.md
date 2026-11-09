---
product: campaign
title: Web アプリケーショントラッキングのオプトアウト
description: Web アプリケーショントラッキングのオプトアウト
feature: Web Apps
version: Campaign v8, Campaign Classic v7
exl-id: 4bff6b55-3335-433e-a2ff-5d8c83e8f0d3
TQID: 'https://experienceleague.adobe.com/-5Bp8qdxH8DTEJ0-NASuorQrjwDMUmvuhBNbW1alqyc'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a7760dfc-5c44-4d77-bb68-c50b1e265c93
    internal-label: Security and privacy
  - id: b12f6872-9271-4369-85e5-86969a0b99a2
    internal-label: APIs
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
subfeature_v2:
  - id: f391046b-0cf3-4e76-bd3b-97fe06654506
    internal-label: Web Apps
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
  - id: d7be2b01-dc9c-40f7-aace-a151707504ed
    internal-label: Landing pages
topic_v2:
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
source-git-commit: 2ac66c0844ec361de9a1658f666c190fcfac8ffa
workflow-type: tm+mt
source-wordcount: '710'
ht-degree: 100%
---
# Web アプリケーショントラッキングのオプトアウト{#web-application-tracking-opt-out}



Adobe Campaign では、Cookie または Web ビーコンによる行動のトラッキングからオプトアウトしたエンドユーザーの Web 行動のトラッキングを停止できます。 これには、エンドユーザーにその選択肢を提示するため、バナーを表示する機能が含まれています。このバナーは Web アプリケーションやランディングページに追加することができます。

エンドユーザーが cookie あるいは web ビーコンによる行動のトラッキングからオプトアウトした場合、その情報は JavaScript API で Adobe Campaign トラッキングサーバーに送信されます。 オプトアウトの選択肢を提示する前に、オプトインの選択肢をエンドユーザーに提示すること（あるいは他の法的条件）を義務付けている地域もあります。適用される法令を遵守してください。

>[!NOTE]
>
>スクリプトを実行する場合は、[セキュリティおよびプライバシーチェックリスト](https://helpx.adobe.com/jp/campaign/kb/acc-security.html)に記載されているガイドラインに従ってください。

## バナーの設定 {#configuring-the-banner-}

Web アプリケーションまたはランディングページに表示するには、バナーを設定する必要があります。

Adobe Campaign は、サンプルバナーを提供します（ニーズに合わせて変更する必要があります）。 このバナーのバージョンは、コンテンツモデルフォルダー内のパーソナライゼーションブロックとして表示されます。 [Campaign v8 ドキュメント](https://experienceleague.adobe.com/docs/campaign/campaign-v8/send/personalize/personalization-blocks.html?lang=ja){target="_blank"}を参照してください。

>[!IMPORTANT]
>
>独自のバナーを作成するには、標準バナーをパーソナライズする必要があります。

バナーを有効化するには、Web アプリケーションプロパティを設定する必要があります。 [Web アプリケーションの設計](designing-a-web-application.md)の節を参照してください。

Web トラッキングが有効化されている場合、次の設定ができます。

* 「バナーがありません」
* 「各ページにバナーを手動設定」：このオプションを選択し、各ページのページプロパティでバナーを選択します。

  ![](assets/pageproperties.png)

* 「自動的にすべてのページにバナーを追加」：Web アプリケーションプロパティで直接バナーを選択します。

  ![](assets/optoutconfig.png)

>[!NOTE]
>
>同一の動作をする Web アプリケーションバージョン 5 の互換性モードが利用可能です。

標準バナーは次の構造になっています。

```
<div onClick="NL.ClientWebTracking.closeOptOutBanner(this);" id="defaultOptOutBanner">
  <p>Please insert your message here
   <a onClick="NL.ClientWebTracking.allow();" class="optout-accept">Accept</a>
   <a onClick="NL.ClientWebTracking.forbid();" class="optout-decline">Refuse</a>
  </p>
</div>
      
```

「**ここにメッセージを挿入してください**」の部分をトラッキング情報が含まれるブロックに置き換える必要があります。 この置き換えは、オプトアウトバナーに関する新たなパーソナライゼーションブロック内で実行する必要があります。

バナーは専用の CSS と共に提供されます。 ただし、Web ページを作成して設定する際に、スタイルを上書きできます。 [このページ](content-editor-interface.md)を参照してください。

## API を使用したオプトアウト cookie の設定 {#setting-the-opt-out-cookie-using-api}

Adobe Campaign は cookie 値の管理およびユーザー設定の取得に利用できる API を提供します。

cookie の名前は **acoptout** です。 共通の値は、以下のとおりです。

* 0：ユーザーが Web トラッキングを許可しました（デフォルト値）
* 1：ユーザーが Web トラッキングを禁止しました
* null：ユーザーは未選択ですが、デフォルト値として Web トラッキングが許可されています

バナーをカスタマイズするのに利用可能なクライアント側の API は以下のとおりです。

* **NL.ClientWebTracking.allow()**：Web トラッキングを許可するようオプトアウト Cookie の値を設定します。 Web トラッキングは、デフォルトで許可されています。
* **NL.ClientWebTracking.forbid()**：Web トラッキングを禁止するようオプトアウト Cookie の値を設定します。 Web トラッキングの禁止にはユーザーからのインプットが必要です。
* **NL.ClientWebTracking.closeOptOutBanner(bannerDomElt)**：許可または拒否ボタンをユーザーがクリックした後、オプトアウト Cookie バナーを閉じます （クリックイベントバブリング段階の間）。

  bannerDomElt {DOMElement} 削除しなければならない cookie バナーのルート DOM 要素

* **NL.ClientWebTracking.hasUserPrefs()**：ユーザーが web トラッキング設定の選択を行った場合に true を返します。
* **NL.ClientWebTracking.getUserPrefs()**：ユーザーの設定を定義するオプトアウト Cookie 値を返します。

JSSP を記述する必要がある場合、サーバー側 API を利用できます。

* **NL.ServerWebTracking.generateOptOutBanner(escapeJs)**：JSSP ページに挿入するオプトアウトバナーのマークアップを生成します。

  **escapeJs{Boolean}**：生成されたマークアップを JavaScript 内で使用するためにエスケープする必要がある場合、true にします。

  ページ内でプリントする必要があるオプトアウトバナーのマークアップの HTML を返します。

* **NL.ServerWebTracking._displayOptOutBanner()**

  オプトアウトバナーが管理者に選択された後で表示される必要がある場合に「true」を返します

  このコードは、管理者が Web オプトアウトバナーの使用を既に選択している場合に呼び出されます。

  バナーは、ユーザーがトラッキングを許可するか拒否するかをまだ選択していない場合に、表示されます。

* **NL.ServerWebTracking.renderOptOutBanner(escapeJs)**

  オプトアウトバナーのマークアップを JSSP ページに挿入することでレンダリングします。 &lt;% と %> 間の JSSP と同様に呼び出されます。

  **escapeJs{Boolean}**：生成されたマークアップを JavaScript 内で使用するためにエスケープする必要がある場合、true にします

JSSP の例：

```
<%@ page import="/nl/core/shared/nl.js" %>
<!doctype html>
<%
NL.require('/nl/core/shared/webTracking.js');
NL.client.require('/nl/core/shared/webTracking.js');
%>
<html>
<head>
<%==NL.client.deps()%>
</head>

<body>

<!-- TEST USING SERVER API IN JSSP -->
<% 
var webTracking = new NL.ServerWebTracking(request, 'optOutBanner');
webTracking.renderOptOutBanner();
%>

<!-- TEST USING SERVER API IN A SCRIPT -->
<!--
<% 
var webTracking = new NL.ServerWebTracking(request, 'optOutBanner');
%>
<script>var el = document.createElement('div'); el.innerHTML =  "<% webTracking.renderOptOutBanner(true); %>";document.body.appendChild(el);</script>
-->

<!-- TEST OF THE CLIENT API -->
<!--
<div onClick="NL.ClientWebTracking.closeOptOutBanner(this);" id="defaultOptOutBanner">
  <p>Please insert your message here
   <a onClick="NL.ClientWebTracking.allow();" class="optout-accept">Accept</a>
   <a onClick="NL.ClientWebTracking.forbid();" class="optout-decline">Refuse</a>
  </p>
</div>
-->
</body>
</html>
```
