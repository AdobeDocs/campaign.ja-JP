---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
role: User
level: Beginner
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 3b790305984436f1168f9c73aa09df509b2217f0
workflow-type: tm+mt
source-wordcount: '478'
ht-degree: 24%

---

# 最新リリース{#latest-release}

Adobe Campaign は定期的にアップデートされています。この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。Adobeでは、すべてのお客様に最新バージョンにアップグレードすることを強くお勧めします。 Campaign のバージョンと推奨事項の詳細を説明します [このページの](upgrades.md).

管理対象Cloud Serviceのユーザーは、新しいバージョンが追加されるたびに、Adobeによってインスタンスがアップグレードされます。 アドビがお客様にご連絡し、環境をアップグレードします。Campaign クライアントコンソール **は同じバージョンにアップグレードする必要があります** を Campaign サーバーとして設定します。 クライアントコンソールをアップグレードする方法については、こちらを参照してください。 [ページ](../start/connect.md#upgrade-ac-console).

また、[互換性マトリックス](compatibility-matrix.md)にリストされているシステムのサポートされている最新バージョンを使用していることも確認してください。


## リリース 8.6.2 {#release-8-6-2}

_2024 年 2 月 24 日_

### 修正点 {#fixes-8-6-2}

このリリースでは、次の問題が修正されました。

* ミッドソーシングインスタンスで発生する可能性があるパフォーマンスの問題を修正しました。(NEO-72595)

## リリース 8.6.1 {#release-8-6-1}

_2024 年 2 月 14 日_

### 新機能 {#new-8-6-1}

* このリリースから、新しい **Campaign Web ユーザーインターフェイス**：中央のAdobe Experience Cloud環境を通じて使用できます。 Experience Cloud は、アドビのデジタルマーケティングアプリケーション、製品、サービスの統合ファミリーです。直感的なインターフェイスから、クラウドアプリケーション、製品機能、サービスにすばやくアクセスできます。Adobe Experience Cloudに接続し、Adobe Campaign Web インターフェイスにアクセスする方法を説明します。 [このページの](campaign-ui.md#ac-web-ui).


* Adobe Campaign v8 との統合 **Adobe Experience Manager as a Cloud Service**&#x200B;に含まれ、 Adobe Campaign Web ユーザーインターフェイスからのみ利用できるオーサリング機能を備えています。 [詳細情報](../connect/ac-aem.md)

* これで、 **Adobe Experience Manager Assets Library** Adobe Experience Cloudとの統合パッケージがAdobe Campaignインスタンスにインストールされている場合でも、Experience CloudAssets と一緒に使用できます。 [詳細情報](../connect/ac-aem.md#assets-library)

### 一般的な機能強化 {#improvements-8-6-1}

* Campaign v8.6 では、のスループットが向上しました。 **メール配信トラッキング指標**. 最適化されたプロセスにより、取り込みのトラッキングと計算時間が短縮され、配信の主要指標をより迅速に確認できます。


### 配信品質の更新 {#deliverability-8-6-1}

* 2024 年 2 月までに、Googleまたは Yahoo! は、ドメインベースの Message Authentication Reporting and Conformance(DMARC) と呼ばれる認証テクノロジーを使用し始める必要があります。 Adobe Campaignで使用するすべてのサブドメインに対して DMARC レコードが設定されていることを確認します。 [詳細情報](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/technotes/implement-dmarc.html?lang=ja){target="_blank"}

* 2024 年 6 月 1 日より、Googleと Yahoo! 送信者がワンクリックリスト配信停止に準拠する必要があります。 Adobe Campaignは、このオプションをサポートするようになりました。 [詳細情報](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/campaign/acc-technical-recommendations.html#one-click-list-unsubscribe){target="_blank"}


### 修正点 {#fixes-8-6-1}

このリリースでは、NEO-67892、NEO-67235、NEO-66797、NEO-66462、NEO-65091、NEO-65036、NEO-64984、NEO-64680、NEO-63973、NEO-63815、NEO-63657、NEO-63539、NEO-, NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEO-NEOsupp