---
title: Campaign セキュリティのベストプラクティス
description: Campaign セキュリティのベストプラクティスの概要
feature: Privacy, PI
role: Developer
level: Beginner, Intermediate, Experienced
exl-id: 1d593c8e-4b32-4902-93a7-7b18cef27cac
source-git-commit: 864f2179384d3e3cfcf310fcd04fe02240bfbefa
workflow-type: tm+mt
source-wordcount: '666'
ht-degree: 100%

---

# Campaign のセキュリティのベストプラクティス {#ac-security}

アドビでは、デジタルエクスペリエンスのセキュリティを非常に重要視しています。 セキュリティ対策は、社内のソフトウェア開発と運用プロセスおよびツールに深く根付いており、インシデントを適切な方法で防止、検出、対応するために、部門の枠を超えたチームが厳しくフォローしています。

さらに、パートナー、主要な研究者、セキュリティ研究機関、その他の業界団体との共同作業により、最新の脅威や脆弱性を常に把握し、オファーする製品やサービスに高度なセキュリティ技術を定期的に取り入れています。

## プライバシー

プライバシー設定と強化は、セキュリティを最適化するうえで重要な要素です。 プライバシーに関するベストプラクティスをいくつか示します。

* HTTP ではなく HTTPS を使用して、顧客の個人情報（PI）を保護する
* [PI 表示制限](../dev/restrict-pi-view.md)を使用して、プライバシーを保護し、データの誤用を防ぐ
* 暗号化されたパスワードが制限されていることを確認する
* ミラーページや Web アプリケーションなどのように、個人情報を含む可能性があるページを保護します。

![](../assets/do-not-localize/speech.png) Managed Cloud Services ユーザーの場合は、アドビはお客様と協力して、これらの設定をお客様の環境に実装します。


## アクセス管理

アクセス管理は、セキュリティ強化の重要な部分です。 ここでは、主なベストプラクティスを紹介します。

* 十分なセキュリティグループを作成する
* 各オペレーターのアクセス権が適切であることを確認する
* 管理オペレーターの使用を避け、管理グループのオペレーターが多くなりすぎないようにする

![](../assets/do-not-localize/book.png) 詳しくは、[Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/security-privacy/access-management.html?lang=ja#webapp-operator)を参照してください。{target="_blank"}

## コーディングのガイドライン

Adobe Campaign（ワークフロー、JavaScript、JSSP など）で開発する場合、常に次のガイドラインに従います。

* **スクリプティング**：SQL 文は使用しないようにします。文字列連結ではなく、パラメーター化関数を使用します。使用する SQL 関数を許可リストに追加して、SQL インジェクションを回避します。

* **データモデルの保護**：ネームド権限を使用してオペレーターのアクションを制限し、システムフィルター（sysFilter）を追加します

* **Web アプリケーションへの captcha の追加**：パブリックのランディングページと購読ページに captcha を追加します

![](../assets/do-not-localize/book.png) 詳しくは、[Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/security-privacy/scripting-coding-guidelines.html?lang=ja#installing-campaign-classic)を参照してください。{target="_blank"}


## パーソナライゼーション

コンテンツにパーソナライズされたリンクを追加する場合、潜在的なセキュリティギャップを回避するために、URL のホスト名部分にパーソナライゼーションを含めないようにしてください。 次の例は、すべての URL 属性 &lt;`a href="">` または `<img src="">` で使用しないでください。

* `<%= url >`
* `https://<%= url >`
* `https://<%= domain >/path`
* `https://<%= sub-domain >.domain.tld/path`
* `https://sub.domain<%= main domain %>/path`

## データの制限

権限レベルの低い認証ユーザーは暗号化されたパスワードにアクセスできないようにする必要があります。これには、主に 2 つの方法があります。パスワードフィールドのみへのアクセスを制限する方法と、エンティティ全体へのアクセスを制限する方法です。

この制限をおこなうと、パスワードフィールドを削除できますが、すべてのユーザーがインターフェイスから外部アカウントにアクセスできるようになります。 詳しくは、[このページ](../dev/restrict-pi-view.md)を参照してください。

1. **[!UICONTROL 管理]**／**[!UICONTROL 設定]**／**[!UICONTROL データスキーマ]**&#x200B;に移動します。

1. 新しい&#x200B;**[!UICONTROL スキーマの拡張]**&#x200B;を作成します。

1. **[!UICONTROL 外部アカウント]**（extAccount）を選択します。

1. 最後の画面で、新しい srcSchema を編集して、すべてのパスワードフィールドへのアクセスを制限できます。

   メイン要素（`<element name="extAccount" ... >`）は、次の方法で置き換えることができます。

   ```
   <element name="extAccount">
       <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="password"/>
       <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="clientSecret"/>
   
       <element name="s3Account">
           <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="awsSecret"/>
       </element>
       <element name="wapPush">
           <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="password"/>
           <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="clientSecret"/>
       </element>
       <element name="mms">
           <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="password"/>
           <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="clientSecret"/>
       </element>
   </element>
   ```

   したがって、拡張された srcSchema は次のようになります。

   ```
   <...>
       <element name="extAccount">
           <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="password"/>
           <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="clientSecret"/>
   
           <element name="s3Account">
               <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="awsSecret"/>
           </element>
           <element name="wapPush">
               <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="password"/>
               <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="clientSecret"/>
           </element>
           <element name="mms">
               <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="password"/>
               <attribute accessibleIf="$(loginId) = 0 or $(login) = 'admin'" name="clientSecret"/>
           </element>
       </element>
   <...> 
   ```

   >[!NOTE]
   >
   >`$(loginId) = 0 or $(login) = 'admin'` を `hasNamedRight('admin')` に置き換えて、管理者権限を持つすべてのユーザーにこれらのパスワードを表示させることができます。


## アクセス管理

アクセス管理は、セキュリティ強化の重要な部分です。 ここでは、主なベストプラクティスを紹介します。

* 十分なセキュリティグループを作成する
* 各オペレーターのアクセス権が適切であることを確認する
* 管理オペレーターの使用を避け、管理グループのオペレーターが多くなりすぎないようにする

![](../assets/do-not-localize/book.png) 詳しくは、[Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/security-privacy/access-management.html?lang=ja#webapp-operator)を参照してください。{target="_blank"}

## コーディングのガイドライン

Adobe Campaign（ワークフロー、JavaScript、JSSP など）で開発する場合、常に次のガイドラインに従います。

* **スクリプティング**：SQL 文は使用しないようにします。文字列連結ではなく、パラメーター化関数を使用します。使用する SQL 関数を許可リストに追加して、SQL インジェクションを回避します。

* **データモデルの保護**：ネームド権限を使用してオペレーターのアクションを制限し、システムフィルター（sysFilter）を追加します

* **Web アプリケーションへの captcha の追加**：パブリックのランディングページと購読ページに captcha を追加します

![](../assets/do-not-localize/book.png) 詳しくは、[Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/security-privacy/scripting-coding-guidelines.html?lang=ja#installing-campaign-classic)を参照してください。{target="_blank"}
