---
solution: Campaign v8
product: Adobe Campaign
title: Campaignのセキュリティのベストプラクティス
description: Campaignのセキュリティのベストプラクティスの概要
source-git-commit: 69d69c909e6b17ca3f5fb18d6680aa51d0d701cf
workflow-type: tm+mt
source-wordcount: '511'
ht-degree: 33%

---

# Campaignのセキュリティのベストプラクティス{#ac-security}

Adobeでは、デジタルエクスペリエンスのセキュリティを非常に重視しています。 セキュリティ対策は、社内のソフトウェア開発および運用プロセスとツールに深く根ざしており、社内の部門間チームがインシデントを防ぎ、検出し、適切な方法で対応するために厳格に従っています。

さらに、パートナー、リーディング研究者、セキュリティ研究機関、その他の業界団体との連携により、最新の脅威や脆弱性を常に把握し、提供する製品やサービスに高度なセキュリティ技術を定期的に取り入れています。

## プライバシー

プライバシー設定と強化は、セキュリティを最適化するうえで重要な要素です。プライバシーに関して従うべきベストプラクティスを以下に示します。

* HTTPではなくHTTPSを使用して、顧客の個人情報(PI)をProtectする
* [PIビューの制限](../dev/restrict-pi-view.md)を使用して、プライバシーを保護し、データの誤用を防ぎます
* 暗号化されたパスワードが制限されていることを確認します。
* ミラーページや Web アプリケーションのように、個人情報を含む可能性があるページを保護します。

:speech_balloon:管理対象Cloud Servicesのユーザーとして、Adobeはお客様と連携し、お客様の環境にこれらの設定を実装します。

## パーソナライゼーション

コンテンツにパーソナライズされたリンクを追加する場合、潜在的なセキュリティギャップを回避するために、URL のホスト名部分にパーソナライゼーションを含めないようにしてください。 次の例は、すべてのURL属性&lt;`a href="">`または`<img src="">`で使用しないでください。

* `<%= url >`
* `https://<%= url >`
* `https://<%= domain >/path`
* `https://<%= sub-domain >.domain.tld/path`
* `https://sub.domain<%= main domain %>/path`

## データの制限

権限レベルの低い認証ユーザーは暗号化されたパスワードにアクセスできないようにする必要があります。それには、主に次の2つの方法があります。パスワードフィールドのみ、またはエンティティ全体へのアクセスを制限します。

この制限を適用すると、パスワードフィールドを削除できますが、外部アカウントはすべてのユーザー向けのインターフェイスからアクセス可能なままになります。 詳しくは、[このページ](../dev/restrict-pi-view.md)を参照してください。

1. **[!UICONTROL 管理]**／**[!UICONTROL 設定]**／**[!UICONTROL データスキーマ]**&#x200B;に移動します。

1. 新しい&#x200B;**[!UICONTROL スキーマの拡張]**&#x200B;を作成します。

1. **[!UICONTROL 外部アカウント]**（extAccount）を選択します。

1. 最後の画面で、新しいsrcSchemaを編集して、すべてのパスワードフィールドへのアクセスを制限できます。

   メイン要素(`<element name="extAccount" ... >`)は次のように置き換えることができます。

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

   拡張されたsrcSchemaは次のようになります。

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
   >`$(loginId) = 0 or $(login) = 'admin'`を`hasNamedRight('admin')`に置き換えて、管理者権限を持つすべてのユーザーにこれらのパスワードを表示させることができます。


## アクセス管理

アクセス管理は、セキュリティ強化の重要な要素です。ここでは、主なベストプラクティスを紹介します。

* 十分なセキュリティグループを作成する
* 各オペレーターのアクセス権が適切であることをチェックする
* 管理オペレーターを使用しないようにし、さらに管理グループのオペレーターが多くなりすぎないようにする

:[!DNL :arrow_upper_right:]:詳しくは、[Adobe Campaign Classic v7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/security-privacy/access-management.html?lang=en#webapp-operator)を参照してください。

## コーディングのガイドライン

Adobe Campaign（ワークフロー、JavaScript、JSSPなど）で開発する場合は、常に次のガイドラインに従います。

* **スクリプティング**：SQL 文は使用しないようにします。文字列連結ではなく、パラメーター化関数を使用します。使用する SQL 関数を許可リストに追加して、SQL インジェクションを回避します。

* **データモデルの保護**:ネームド権限を使用してオペレーターの操作を制限し、システムフィルターを追加する(sysFilter)

* **WebアプリケーションにCaptchaを追加します**。公開ランディングページと公開購読ページにcaptchaを追加します。

:[!DNL :arrow_upper_right:]:詳しくは、[Adobe Campaign Classic v7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/security-privacy/scripting-coding-guidelines.html?lang=en#installing-campaign-classic)を参照してください。
