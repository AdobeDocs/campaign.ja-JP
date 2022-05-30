---
title: データモデルのベストプラクティス
description: Adobe Campaign データモデル拡張のベストプラクティスを説明します
exl-id: bdd5e993-0ce9-49a8-a618-ab0ff3796d49
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: tm+mt
source-wordcount: '2722'
ht-degree: 97%

---

# データモデルのベストプラクティス{#data-model-best-practices}

このドキュメントでは、Adobe Campaign データモデルを設計する際の主な推奨事項の概要を説明します。

Adobe Campaign システムは非常に柔軟性が高く、初期の実装をさらに拡張可能です。 可能性は無限です。とはいえ、賢明な判断を下し、データモデルの設計を開始する前に強力な基盤を構築しておくことが不可欠です。

Campaign のビルトインテーブルとそれらの相互関係について詳しくは、[この](datamodel.md)を参照してください。

![](../assets/do-not-localize/glass.png) キャンペーンスキーマの概要については、[この節](schemas.md)を参照してください。

![](../assets/do-not-localize/glass.png)Adobe Campaign データベースの概念的データモデルを拡張するための拡張スキーマの設定方法については、[このページ](extend-schema.md)を参照してください。

## データモデルアーキテクチャ {#data-model-architecture}

Adobe Campaign は強力なクロスチャネルキャンペーン管理システムであり、オンラインとオフラインのマーケティング戦略を融合して、パーソナライズされた顧客体験を作成できます。

### 顧客中心のアプローチ {#customer-centric-approach}

ほとんどのメールサービスプロバイダーは、リスト中心アプローチを使用して顧客と通信していますが、Adobe Campaign は、リレーショナルデータベースに基づいて、顧客と顧客の属性を幅広く視野に入れて活用しています。

各テーブルの記述にアクセスするには、**[!UICONTROL 管理／設定／データスキーマ]**&#x200B;に移動し、リストからリソースを選択して「**[!UICONTROL ドキュメント]**」タブをクリックします。


>[!NOTE]
>
>Adobe Campaign では、[カスタム受信者テーブル](custom-recipient.md)を作成できます。ただし、ほとんどの場合は、ビルトインの[受信者テーブル](datamodel.md#ootb-profiles)を利用することをお勧めします。このテーブルには、追加のテーブルや機能があらかじめ用意されています。


### Adobe Campaign 用データ {#data-for-campaign}

Adobe Campaign に送信すべきデータ マーケティングアクティビティに必要なデータを決定することがきわめて重要です。

>[!NOTE]
>
>Adobe Campaign はデータウェアハウスでもレポートツールでもありません。 可能性のある顧客とその関連情報をすべて Adobe Campaign にインポートしたり、レポートの作成にしか使用しないデータをインポートしたりしないように心がけます。

Adobe Campaign で必要な属性であるかどうかを判断するには、次のカテゴリのいずれかに該当するかどうかを確認します。

* **セグメント化**&#x200B;に使用する属性
* **データ管理プロセス**&#x200B;に使用する属性（集計計算など）
* **パーソナライゼーション**&#x200B;に使用する属性

これらのいずれにも該当しない場合、その属性は Adobe Campaign でまず必要にならないと思われます。

### データタイプの選択 {#data-types}

システムのアーキテクチャとパフォーマンスを適切な状態に保つには、次のベストプラクティスに従って Adobe Campaign のデータを設定します。

* 大きなテーブル内では、文字列フィールドまたは数値フィールドを挿入し、参照テーブルへのリンクを追加できます（値のリストを操作する場合）。
* **expr** 属性を使用すると、テーブル内の物理的な設定値ではなく、計算フィールドとしてスキーマ属性を定義できます。 異なる形式の情報（年齢と生年月日など）を扱うために、両方の値を格納する必要がなくなります。 これにより、フィールドの重複を避けることができます。 例えば、ドメインはメールフィールドに既に存在するので、受信者テーブルでドメインの式を使用できます。
* ただし、式の計算が複雑な場合は、**expr** 属性を使用しないでください。検索時に計算すると、クエリのパフォーマンスに影響を与える可能性があるからです。
* **XML** 型を使用すると、作成するフィールドの数を減らすことができます。ただし、データベース内で CLOB 列を使用するので、ディスク領域も消費します。また、結果的に複雑な SQL クエリになり、パフォーマンスに影響を与える可能性もあります。
* **文字列**&#x200B;フィールドの長さは、常に列で定義する必要があります。Adobe Campaign ではデフォルトの最大長は 16K ですが、サイズが短くなることがあらかじめわかっている場合は、フィールドの長さを短くすることをお勧めします。
* 参照元のシステム内のフィールドサイズが過大に見積もられていて、データはそれほど長くないことが確実な場合は、Adobe Campaign のフィールドを参照元のシステムのフィールドより短くしても構いません。 これにより、Adobe Campaign では短い文字列や小さい整数として扱うことができます。

### フィールドの選択 {#choice-of-fields}

ターゲティングやパーソナライゼーションに利用するフィールドは、テーブルに格納する必要があります。パーソナライズされたメール送信やクエリの条件に使用しないフィールドを格納すると、不必要にディスク領域を消費してしまいます。

### キーの選択 {#choice-of-keys}

ほとんどのテーブルでデフォルトにより定義されている **autouuid** と **autopk** に加えて、論理キーやビジネスキー（アカウント番号、クライアント番号など）を追加することを検討してください。後でデータのインポートや紐付け、データパッケージに使用できます。 詳細については、[識別子](#identifiers)を参照してください。

パフォーマンスを高めるには、効率的なキーが不可欠です。 Snowflake を使用すると、数値または文字列ベースのデータ型をテーブルのキーとして挿入できます。

>[!NOTE]
>
>この **autouuid** 属性のみが適用されます [エンタープライズ (FFDA) デプロイメント](../architecture/enterprise-deployment.md).

## 識別子 {#identifiers}

Adobe Campaign リソースには 3 つの識別情報があり、別の識別情報を追加することもできます。

これらの識別子とその目的を次の表に示します。

| 識別子 | 説明 | ベストプラクティス |
|--- |--- |--- |
| ID | <ul><li>ID は、Adobe Campaign テーブルの物理的なプライマリキーです。 ビルトインテーブルの場合、これは Universally Unique ID（UUID）です</li><li>この識別子は一意である必要があります。 </li><li>UUID は、スキーマ定義に表示できます。</li></ul> | <ul><li>自動生成された識別子は、ワークフローやパッケージ定義で参照として使用しないでください。</li><li>テーブルの ID は UUID で、このタイプは変更しないでください。</li></ul> |
| 名前（または内部名） | <ul><li>この情報は、テーブル内のレコードの一意の識別子です。 この値は、通常は生成された名前で手動で更新できます。</li><li>この識別子は、Adobe Campaign の別のインスタンスにデプロイされたときにその値を保持し、空にはしないでください。</li></ul> | <ul><li>オブジェクトをある環境から別の環境にデプロイする場合は、Adobe Campaign で生成されたレコード名を変更します。</li><li>オブジェクトに名前空間属性（*schema*&#x200B;など）がある場合、この共通の名前空間は、作成されたすべてのカスタムオブジェクトで活用されます。 *nms*、*xtk* など、一部の予約済み名前空間は使用できません。一部の名前空間は社内専用であることに注意してください。 [詳細情報](schemas.md#reserved-namespaces)。</li><li>オブジェクトに名前空間（*workflow* や *delivery* など）がない場合、この名前空間は内部名オブジェクトのプレフィックスとして追加されます（*namespaceMyObjectName*）。</li><li>スペース「 」、セミコロン「;」、ハイフン「-」などの特殊文字は使用しないでください。 これらの文字はすべて、アンダースコア「_」（許可されている文字）に置き換えられます。 例えば、「abc-def」と「abc:def」は「abc_def」として保存され、相互に上書きされます。</li></ul> |
| ラベル | <ul><li>ラベルは、Adobe Campaign 内のオブジェクトまたはレコードのビジネス識別子です。</li><li>このオブジェクトでは、スペースと特殊文字も使用できます。</li><li>レコードの一意性は保証されません。</li></ul> | <ul><li>オブジェクトラベルの構造を決定することをお勧めします。</li><li>これは、Adobe Campaign ユーザーにとって、レコードまたはオブジェクトを識別するための最も使いやすい解決策です。</li></ul> |

のコンテキストでは、 [エンタープライズ (FFDA) デプロイメント](../architecture/enterprise-deployment.md)の場合、Adobe Campaignのプライマリキーは、すべての組み込みテーブルの自動生成 UUID です。 UUID は、カスタムテーブルにも使用できます。[詳細](../architecture/keys.md)

ID の数が無限にある場合でも、最適なパフォーマンスを確保するために、データベースのサイズに注意してください。問題を防ぐために、インスタンスのパージ設定を必ず調整してください。 詳しくは、[この節](#data-retention)を参照してください。


## カスタム内部キー {#custom-internal-keys}

プライマリキーは、Adobe Campaign で作成されるすべてのテーブルに必要です。

ほとんどの組織は、外部システムからレコードを読み込んでいます。 受信者テーブルの物理キーは「id」属性ですが、さらにカスタムキーを特定することもできます。

このカスタムキーは、Adobe Campaign にフィードする外部システムの実際のレコードのプライマリキーです。

カスタムテーブルを作成する場合は、次の 2 つのオプションがあります。
* 自動生成されたキー（id）と内部キー（カスタム）の組み合わせ。 このオプションは、システムキーが複合キーであるか、整数ではない場合に役立ちます。 Snowflake では、整数または文字列ベースのキーを使用すると、大きなテーブルや他のテーブルと結合する際のパフォーマンスが向上します。
* プライマリキーを外部システムのプライマリキーとして使用します。 この解決策は、異なるシステム間で一貫したキーを使用してデータのインポートとエクスポートのアプローチを簡素化するので、通常は推奨されます。 キーの名前が「id」で、（自動生成でない）外部の値が入力されると想定される場合は、**Autouuid** を無効にしてください。

>[!CAUTION]
>
>* autouuid は、ワークフローで参照として使用しないでください。
> * この **autouuid** 属性のみが適用されます [エンタープライズ (FFDA) デプロイメント](../architecture/enterprise-deployment.md).
>


## リンクとカーディナリティ {#links-and-cardinality}

### リンク {#links}

大きなテーブルでは、「own」整合性に注意してください。 「own」整合性でワイドテーブルを持っているレコードを削除すると、インスタンスが停止する可能性があります。テーブルはロックされ、削除は 1 つずつ行われます。 したがって、大型の子テーブルには「neutral」整合性を使用することをお勧めします。

リンクを外部結合として宣言すると、パフォーマンスが悪くなります。ゼロ ID レコードは外部結合機能をエミュレートします。 のコンテキストでは、 [エンタープライズ (FFDA) デプロイメント](../architecture/enterprise-deployment.md)を使用する場合、リンクで **autouuid**.

ワークフロー内の任意のテーブルを結合できますが、リソース間の共通リンクをデータ構造の定義に直接定義することをお勧めします。

リンクは、テーブル内の実際のデータと整合するように定義する必要があります。 誤った定義は、レコードの予期しない複製など、リンクを介して取得したデータに影響を与える可能性があります。

リンクには、テーブル名と一致する名前を付けます。リンク名は遠隔テーブルの内容を理解するのに役立ちます。

「id」をサフィックスとして含む名前をリンクに付けないでください。 例えば、「transactionId」ではなく「transaction」という名前を付けます。

デフォルトでは、Adobe Campaign は外部テーブルのプライマリキーを使用してリンクを作成します。 わかりやすくするために、リンク定義で結合を明示的に定義することをお勧めします。

### カーディナリティ {#cardinality}

リンクを設計する場合は、1-1 関係が宣言されているときに、ターゲットレコードが一意になることを確認します。 そうでない場合は、結合の結果、1 つであるはずのレコードが複数返される可能性があります。 これにより、「クエリが想定以上の行を返す」場合、配信の準備中にエラーが発生します。 リンク名をターゲットスキーマと同じ名前に設定します。

(1) 側のスキーマにカーディナリティ(1-N) のリンクを定義します。 例えば、受信者 (1) - (N) トランザクションという関係は、トランザクションスキーマ内で定義してください。

デフォルトでは、リンクの逆カーディナリティは (N) なので注意してください。 リンク定義に revCardinality=&#39;single&#39; という属性を追加することで、リンク (1-1) を定義できます。

逆リンクをユーザーに表示しない場合は、リンク定義 revLink=&#39;_NONE_&#39; を使用して非表示にできます。 例えば、受信者から最後に完了したトランザクションへのリンクを定義する場合が、これに該当するユースケースです。 受信者から最後のトランザクションへのリンクのみ表示されればよく、トランザクションテーブルからの逆リンクを表示する必要はありません。

外部結合 (1-0..1) を実行するリンクは、システムのパフォーマンスに影響を与えるので、慎重に使用してください。

## データ保持 {#data-retention}

Adobe Campaign はデータウェアハウスでもレポートツールでもありません。 したがって、Adobe Campaign ソリューションの高いパフォーマンスを確保するには、データベースの増大を抑制する必要があります。 これを達成するには、以下のベストプラクティスが役に立ちます。

Campaign のビルトインログテーブルには保持期間がプリセットされており、通常はデータ保存期間が 6 か月以内に制限されています。

組み込みテーブルのデフォルトの保持期間は以下のとおりです。リテンションは実装時にアドビの技術管理者が設定します。値は顧客の要件に基づくため、実装環境によって異なる場合があります。

* **統合されたトラッキング**：1 年
* **配信ログ**：6 か月
* **トラッキングログ**：1 年
* **削除された配信**：1 週間
* **却下をインポート**：6 か月
* **訪問者プロファイル**：1 か月
* **オファーの提案**：1 年
* **イベント**：1 ヶ月
* **イベント処理の統計**：1 か月
* **アーカイブしたイベント**：1 年
* **無視されたパイプラインイベント**：1 か月

>[!CAUTION]
>
>カスタムテーブルは標準のクリーンアップ処理で削除されません。 この処理は初日には必要ないとしても、パフォーマンス上の問題を引き起こす可能性があるので、カスタムテーブルのパージ処理を作成することを忘れないでください。

Adobe Campaign 内のレコードの必要性を最小限に抑えるには、いくつかの解決策があります。
* Adobe Campaign 外部の Data Warehouse にデータをエクスポートする。
* 使用するデータ容量が小さいながらもマーケティング活動には十分な集計値を生成する。例えば、最後の購入を追跡することが目的であれば、Adobe Campaign の顧客トランザクション履歴をすべて残す必要はありません。

「deleteStatus」属性はスキーマで宣言できます。 レコードを削除済みとマークしてから、後でクリーンアップタスクで削除する方が効率的です。

![](../assets/do-not-localize/speech.png) Managed Cloud Services ユーザーとしてリテンションの詳細を確認する場合や、カスタムテーブルでリテンションを設定する必要がある場合は、アドビのコンサルタントまたは技術管理者にお問い合わせください。

## パフォーマンス {#performance}

常にパフォーマンスの向上を図るには、次のベストプラクティスに従います。

### 一般的な推奨事項 {#general-recommendations}

* クエリで「CONTAINS」などの演算子は使用しません。 フィルタリングしたい対象がはっきりしている場合は、「EQUAL TO」または他の特定のフィルター演算子を使用して同じ条件を適用します。
* インポートやエクスポートなどのプロセスは営業時間外に行われるようにします。
* 日常のすべてのアクティビティがわかるスケジュールがあることを確認して、そのスケジュールに従います。
* 日常的なプロセスの 1 つまたはいくつかが失敗し、その同じ日に実行する必要がある場合があります。手動でプロセスを開始する際は、システムのパフォーマンスに影響を与える可能性があるので、競合するプロセスが実行されていないことを確認します。
* インポートプロセスを実行中、または手動プロセスを実行したときに、日常的なキャンペーンが実行されていないことを確認します。
* すべての行にフィールドを複製するのではなく、参照テーブルを使用します。キーと値のペアを使用する場合は、数値キーを選択することをお勧めします。
* 短い文字列は引き続き使用できます。 参照テーブルが外部システムに配置されている場合、それを再利用すると、Adobe Campaign とのデータ統合が容易になります。

### 1 対多の関係 {#one-to-many-relationships}

* データ設計は使い勝手と機能性に影響を与えます。 1 対多の関係を多く持つデータモデルを設計すると、ユーザーがアプリケーション内で意味のあるロジックを作成するのが難しくなります。 マーケターが技術者でない場合は、1 対多のフィルターロジックを正しく理解して構築するのは困難なことがあります。
* 必須フィールドをすべて 1 つのテーブルにまとめておくと、クエリの作成が容易になります。 結合を回避できれば、テーブル間でいくつかのフィールドを複製することもパフォーマンス的には良い場合があります。
* オファーの重み付けの式や配信などのように、1 対多の関係を参照できないビルトイン機能もあります。

## 大きいテーブル {#large-tables}

Adobe Campaign は、サードパーティのデータベースエンジンを活用しています。 プロバイダーによっては、大きいテーブルに対するパフォーマンスを最適化するために、特定のデザインが必要になる場合があります。

大きいテーブルと複雑な結合を使用したデータモデルを設計する場合は、以下のような一般的なベストプラクティスに従う必要があります。

* 追加のカスタム受信者テーブルを使用する場合は、配信マッピングごとに専用のログテーブルを使用します。
* 列の数を減らします。特に、未使用の列を特定して削減します。
* 複雑な結合を回避して、データモデルのリレーションを最適化します。たとえば、複数の条件や複数の列に対する結合を回避します。
* 結合キーには、数値または文字列ベースの値を使用できます。
* ログを保持する深さをできる限り減らします。 深い履歴が必要な場合は、集計の計算やカスタムログテーブルの処理を行うと、大きな履歴を保存できます。

### テーブルのサイズ {#size-of-tables}

テーブルサイズは、レコード数とレコードあたりの列数の組み合わせです。 いずれも、クエリのパフォーマンスに影響を与える可能性があります。

* **小さいサイズ**&#x200B;のテーブルは、配信テーブルに似ています。
* **中程度のサイズ**&#x200B;のテーブルは、受信者テーブルと同じくらいのサイズです。 顧客 1 人につき 1 件のレコードがあります。
* **大きいサイズ**のテーブルは、広範ログテーブルに似ています。 1 人の顧客につき多くのレコードがあります。
例えば、データベースに 1,000 万人の受信者が含まれている場合、広範ログテーブルには 1 億件から 2 億件くらいのメッセージが格納され、配信テーブルには数千件のレコードが格納されます。

行数もパフォーマンスに影響します。 Adobe Campaign データベースは運用データベースであり、ターゲティングやパーソナライゼーションにあまり使用しない履歴データを格納するようには設計されていません。

行数の増加に伴うパフォーマンス上の問題を防ぐには、必要なレコードのみをデータベースに保存します。 その他のレコードは、サードパーティのデータウェアハウスにエクスポートし、Adobe Campaign 運用データベースから削除する必要があります。

テーブルサイズに関するベストプラクティスのいくつかを次に示します。

* フィールド数が少なく数値データが多い大きなテーブルを設計します。
* ブール値のような小さな数値を格納する場合は、大きな数値型の列を使用しません。
* 使用されていない列をテーブル定義から削除します。
* 履歴データや非アクティブなデータはエクスポートして消去し、Adobe Campaign データベースには保持しません。