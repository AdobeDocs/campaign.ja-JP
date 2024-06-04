---
title: Campaign v8（コンソール）2023 リリースノート
description: Campaign v8 2023 リリースで記載される機能と改善点のリスト
feature: Release Notes
source-git-commit: 4fecae16b2db0f174de6d77acf5b846906073aeb
workflow-type: ht
source-wordcount: '381'
ht-degree: 100%

---

# 2024 リリースノート {#2024-rn}

このページには、**Campaign v8 2024 リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。


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

このリリースでは、次の問題が修正されています。

NEO-67892、NEO-67235、NEO-66797、NEO-66462、NEO-65091、NEO-65036、NEO-64984、NEO-64680、NEO-63973、NEO-63879、NEO-63815、NEO-63657、NEO-63539、NEO-63387、NEO-63294、NEO-63174、NEO-62964、NEO-62750、NEO-62686、NEO-62455、NEO-62406、NEO-61580、NEO-61199、NEO-60786、NEO-59544、NEO-59198、NEO-59059、NEO-58637、NEO-55197、NEO-52542、NEO-50488、NEO-47789