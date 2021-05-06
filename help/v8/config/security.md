---
solution: Campaign Classic
product: campaign
title: キャンペーンセキュリティのベストプラクティス
description: キャンペーンセキュリティのベストプラクティスの概要
translation-type: tm+mt
source-git-commit: c2d066ca2f935455861c3d6747c9805c847f2e0d
workflow-type: tm+mt
source-wordcount: '518'
ht-degree: 40%

---

# キャンペーンセキュリティのベストプラクティス{#ac-security}

Adobeでは、デジタルエクスペリエンスのセキュリティを非常に重視します。 セキュリティ対策は、社内のソフトウェア開発と運用プロセスおよびツールに強く反映されており、社内の部門間チームと厳密に従って、インシデントの発生の防止、検出、対応を適切な方法で行っています。

さらに、パートナー、主要な研究者、セキュリティ研究機関、その他の業界団体との共同作業により、最新の脅威や脆弱性について常に把握し、オファーする製品やサービスに高度なセキュリティテクニックを定期的に組み込んでいます。

## プライバシー

プライバシー設定と強化は、セキュリティを最適化するうえで重要な要素です。プライバシーに関するベストプラクティスをいくつか示します。

* HTTPではなくHTTPSを使用して、顧客の個人情報(PI)をProtectする
* [PI表示制限](../dev/restrict-pi-view.md)を使用してプライバシーを保護し、データの誤用を防止
* 暗号化されたパスワードが制限されていることを確認する
* ミラーページや Web アプリケーションのように、個人情報を含む可能性があるページを保護します。

:speech_balloon:管理対象Cloud Servicesユーザーとして、Adobeはお客様と協力して、お客様の環境にこれらの設定を実装します。

## パーソナライゼーション

コンテンツにパーソナライズされたリンクを追加する場合、潜在的なセキュリティギャップを回避するために、URL のホスト名部分にパーソナライゼーションを含めないようにしてください。 次の例は、すべてのURL属性&lt;`a href="">`または`<img src="">`で使用しないでください。

* `<%= url >`
* `https://<%= url >`
* `https://<%= domain >/path`
* `https://<%= sub-domain >.domain.tld/path`
* `https://sub.domain<%= main domain %>/path`

## データの制限

権限レベルの低い認証ユーザーは暗号化されたパスワードにアクセスできないようにする必要があります。これを実現するには、主に 2 つの方法があります。パスワードフィールドへのアクセスを制限する方法と、エンティティ全体へのアクセスを制限する方法です（ビルド 8770 以降が必要です）。

この制限をおこなうと、パスワードフィールドを削除する一方で、外部アカウントは全ユーザー向けのインターフェイスからアクセス可能にできます。詳しくは、[このページ](../dev/restrict-pi-view.md)を参照してください。

1. **[!UICONTROL 管理]**／**[!UICONTROL 設定]**／**[!UICONTROL データスキーマ]**&#x200B;に移動します。

1. 新しい&#x200B;**[!UICONTROL スキーマの拡張]**&#x200B;を作成します。

1. **[!UICONTROL 外部アカウント]**（extAccount）を選択します。

1. 最後の画面で、新しいsrcSchemaを編集して、すべてのパスワードフィールドへのアクセスを制限できます。

   メイン要素(`<element name="extAccount" ... >`)は、次の方法で置き換えることができます。

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
   <srcSchema _cs="External Accounts (cus)" created="2017-05-12 07:53:49.691Z" createdBy-id="0"
               desc="Definition of external accounts (Email, SMS...) used by the modules"
               entitySchema="xtk:srcSchema" extendedSchema="nms:extAccount" img="" label="External Accounts"
               labelSingular="External account" lastModified="2017-05-12 08:33:49.365Z"
               mappingType="sql" md5="E9BB0CD6A4375F500027C86EA854E101" modifiedBy-id="0"
               name="extAccount" namespace="cus" xtkschema="xtk:srcSchema">
       <createdBy _cs="Administrator (admin)"/>
       <modifiedBy _cs="Administrator (admin)"/>
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
   </srcSchema>    
   ```

   >[!NOTE]
   >
   >`$(loginId) = 0 or $(login) = 'admin'`を`hasNamedRight('admin')`で削除すると、管理者権限を持つすべてのユーザーにこれらのパスワードを表示できます。


## アクセス管理

アクセス管理は、セキュリティ強化の重要な要素です。ここでは、主なベストプラクティスを紹介します。

* 十分なセキュリティグループを作成する
* 各オペレーターのアクセス権が適切であることをチェックする
* 管理オペレーターを使用しないようにし、さらに管理グループのオペレーターが多くなりすぎないようにする

:arrow_upper_right:詳細は[Adobe Campaign Classicのドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/security-privacy/access-management.html?lang=en#webapp-operator)を参照

## コーディングのガイドライン

Adobe Campaign(ワークフロー、JavaScript、JSSPなど)で開発する場合は、次のガイドラインに従ってください。

* スクリプティング：SQL 文は使用しないようにします。文字列連結ではなく、パラメーター化関数を使用します。使用する SQL 関数を許可リストに追加して、SQL インジェクションを回避します。

* データモデルの保護：ネームド権限を使用して演算子のアクションを制限し、システム・フィルターを追加(sysFilter)

* webアプリケ追加ーションのcaptchas:公開ランディングページおよび購読ページにcaptchasを追加します。

:arrow_upper_right:詳細は[Adobe Campaign Classicのドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/security-privacy/scripting-coding-guidelines.html?lang=en#installing-campaign-classic)を参照
