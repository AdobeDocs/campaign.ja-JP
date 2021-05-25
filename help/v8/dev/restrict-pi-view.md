---
solution: Campaign v8
product: Adobe Campaign
title: PIビューを制限
description: PIビューを制限する方法を説明します
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '395'
ht-degree: 0%

---

# PIビューを制限{#restricting-pii-view}

## 概要 {#overview}

マーケティングユーザーがデータレコードにアクセスできる必要があるが、名、姓、Eメールアドレスなど、受信者の個人情報(PI)を表示したくない場合は、以下のガイドラインに従ってプライバシーを保護し、通常のキャンペーンオペレーターがデータを悪用します。

## 実装 {#implementation}

任意の要素または属性に適用できる特定の属性がスキーマに追加された場合、既存の属性&#x200B;**[!UICONTROL visibleIf]**&#x200B;を補完します。 この属性は次のとおりです。**[!UICONTROL accessibleIf]**&#x200B;を参照してください。 現在のユーザーコンテキストに関連するXTK式を含める場合、例えば、 **[!UICONTROL HasNamedRight]**&#x200B;や&#x200B;**[!UICONTROL $(login)]**&#x200B;を利用できます。

次に、この使用方法を示す受信者スキーマ拡張の例を示します。

```
<srcSchema desc="Recipient table (profiles" entitySchema="xtk:srcSchema" extendedSchema="xxl:nmsRecipientXl"
           img="nms:recipient.png" label="Recipients" labelSingular="Recipient"
           name="recipient" namespace="sec" xtkschema="xtk:srcSchema">
  <element desc="Recipient table (profiles" img="xxl:recipient.png" label="Recipients"
           labelSingular="Recipient" name="recipient">
    <attribute name="firstName" accessibleIf="$(login)=='admin'"/>
    <attribute name="lastName" visibleIf="$(login)=='admin'"/>
    <attribute name="email" accessibleIf="$(login)=='admin'"/>
  </element>
</srcSchema>
```

主なプロパティは次のとおりです。

* **[!UICONTROL visibleIf]** :は、メタデータのフィールドを非表示にするので、スキーマビュー、列選択、式ビルダー内ではフィールドにアクセスできません。ただし、式にフィールド名を手動で入力した場合、値が表示されるので、データは非表示にはなりません。
* **[!UICONTROL accessibleIf]** :は、結果クエリのデータを非表示（空の値に置き換えます）にします。visibleIfが空の場合は、 **[!UICONTROL accessibleIf]**&#x200B;と同じ式が返されます。

Campaignでこの属性を使用すると、次のような結果が生じます。

* コンソールの汎用クエリエディターを使用してデータが表示されない
* 概要リストとレコードリスト（コンソール）にデータが表示されなくなります。
* 詳細表示では、データは読み取り専用になります。
* データは、フィルター内でのみ使用できます（つまり、ディコトミー戦略を使用して、値を推測できます）。
* 制限付きフィールドを使用して作成された式は、次のように制限されます。lower(@email)は、@emailと同じようにアクセス可能になります。
* ワークフローでは、制限された列をトランジションの追加の列としてターゲット母集団に追加できますが、Adobe Campaignユーザーは引き続きアクセスできません。
* ターゲット母集団をグループ（リスト）に格納する場合、格納されるフィールドの特性はデータのソースと同じになります。
* デフォルトでは、JSコードからデータにアクセスできません。

## 推奨事項 {#recommendations}

各配信で、Eメールアドレスが&#x200B;**[!UICONTROL broadLog]**&#x200B;テーブルと&#x200B;**[!UICONTROL forecastLog]**&#x200B;テーブルにコピーされます。そのため、これらのフィールドも保護する必要があります。

以下に、これを実装するログテーブル拡張の例を示します。

```
<srcSchema entitySchema="xtk:srcSchema" extendedSchema="nms:broadLogRcp" img="nms:broadLog.png"
           label="Recipient delivery logs" labelSingular="Recipient delivery log"
           name="broadLogRcp" namespace="sec" xtkschema="xtk:srcSchema">
  <element img="nms:broadLog.png" label="Recipient delivery logs" labelSingular="Recipient delivery log"
           name="broadLogRcp">
    <attribute accessibleIf="$(login)=='admin'" name="address"/>
  </element>
</srcSchema>
<srcSchema desc="Delivery messages being prepared." entitySchema="xtk:srcSchema"
           extendedSchema="nms:tmpBroadcast" img="" label="Messages being prepared"
           labelSingular="Message" name="tmpBroadcast" namespace="sec" xtkschema="xtk:srcSchema">
  <element desc="Delivery messages being prepared." label="Messages being prepared"
           labelSingular="Message" name="tmpBroadcast">
    <attribute accessibleIf="$(login)=='admin'" name="address"/>
  </element>
</srcSchema>
<srcSchema entitySchema="xtk:srcSchema" extendedSchema="nms:excludeLogRcp" img="nms:excludeLog.png"
           label="Recipient exclusion logs" labelSingular="Recipient exclusion log"
           name="excludeLogRcp" namespace="sec" xtkschema="xtk:srcSchema">
  <element img="nms:excludeLog.png" label="Recipient exclusion logs" labelSingular="Recipient exclusion log"
           name="excludeLogRcp">
    <attribute accessibleIf="$(login)=='admin'" name="address"/>
  </element>
</srcSchema>
```

>[!CAUTION]
>
>この制限は、技術以外のユーザーにのみ適用され、データを分離しません。関連する権限を持つ技術ユーザーは、データを取得できます。
