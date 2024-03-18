---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
role: User
level: Beginner
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 3a63539bc6bb20fa79bdac76dd60efe7b232458b
workflow-type: ht
source-wordcount: '478'
ht-degree: 100%

---

# 最新リリース{#latest-release}

Adobe Campaign は定期的にアップデートされています。この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。アドビでは、すべてのお客様に最新バージョンにアップグレードすることを強くお勧めします。Campaign のバージョンと推奨事項について詳しくは、[このページ](upgrades.md)を参照してください。

Managed Cloud Services ユーザーの場合は、新しいバージョンが出るたびにアドビがインスタンスをアップグレードします。アドビがお客様にご連絡し、環境をアップグレードします。Campaign クライアントコンソールは、Campaign サーバーと&#x200B;**同じバージョンにアップグレードする必要があります**。クライアントコンソールのアップグレード方法について詳しくは、[こちらのページ](../start/connect.md#upgrade-ac-console)を参照してください。

また、[互換性マトリックス](compatibility-matrix.md)にリストされているシステムのサポートされている最新バージョンを使用していることも確認してください。


## リリース 8.6.2 {#release-8-6-2}

_2024年2月23日（PT）_

### 修正点 {#fixes-8-6-2}

このリリースでは次の問題が修正されています。

* ミッドソーシングインスタンスで発生するパフォーマンスの問題を修正しました（NEO-72595）。

## リリース 8.6.1 {#release-8-6-1}

_2024年2月14日（PT）_

### 新機能 {#new-8-6-1}

* このリリース以降、中央の Adobe Experience Cloud 環境を通じて、新しい **Campaign web ユーザーインターフェイス**&#x200B;にアクセスできるようになります。Experience Cloud は、アドビのデジタルマーケティングアプリケーション、製品、サービスの統合ファミリーです。直感的なインターフェイスから、クラウドアプリケーション、製品機能、サービスにすばやくアクセスできます。Adobe Experience Cloud に接続し、Adobe Campaign web インターフェイスにアクセスする方法については、[このページ](campaign-ui.md#ac-web-ui)を参照してください。


* Adobe Campaign v8 は、**Adobe Experience Manager as a Cloud Service** と統合され、オーサリングは Adobe Campaign web ユーザーインターフェイス経由でのみ利用可能になります。[詳細情報](../connect/ac-aem.md)

* これで、Adobe Experience Cloud との統合パッケージが Adobe Campaign インスタンスにインストールされている場合でも、**Adobe Experience Manager Assets ライブラリ**&#x200B;を Experience Cloud Assets と共に使用できます。[詳細情報](../connect/ac-aem.md#assets-library)

### 一般的な改善点 {#improvements-8-6-1}

* Campaign v8.6 では、**メール配信トラッキング指標**&#x200B;のスループットが向上しました。最適化されたプロセスにより、取り込みのトラッキングと計算時間が短縮され、配信の主要な指標をより迅速に確認できるようになります。


### 配信品質のアップデート {#deliverability-8-6-1}

* 2024年2月までに、Google または Yahoo! を通じて 5,000 件を超えるメールメッセージを送信する会社は、DMARC（Domain-based Message Authentication Reporting and Conformance）と呼ばれる認証テクノロジーの使用を開始する必要があります。Adobe Campaign で使用しているすべてのサブドメインに対して DMARC レコードが設定されていることを確認してください。[詳細情報](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/technotes/implement-dmarc.html?lang=ja){target="_blank"}

* 2024年6月1日（PT）以降、Google と Yahoo! は、送信者に対して、ワンクリックでの List-Unsubscribe への準拠を義務付ける予定です。Adobe Campaign では、このオプションをサポートするようになりました。[詳細情報](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/campaign/acc-technical-recommendations.html?lang=ja#one-click-list-unsubscribe){target="_blank"}


### 修正点 {#fixes-8-6-1}

このリリースでは、次の問題が修正されています：
NEO-67892、NEO-67235、NEO-66797、NEO-66462、NEO-65091、NEO-65036、NEO-64984、NEO-64680、NEO-63973、NEO-63879、NEO-63815、NEO-63657、NEO-63539、NEO-63387、NEO-63294、NEO-63174、NEO-62964、NEO-62750、NEO-62686、NEO-62455、NEO-62406、NEO-61580、NEO-61199、NEO-60786、NEO-59544、NEO-59198、NEO-59059、NEO-58637、NEO-55197、NEO-52542、NEO-50488、NEO-47789