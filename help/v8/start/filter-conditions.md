---
title: Campaign v8 でのクエリのデザイン
description: クエリの作成方法を学ぶ
feature: Query Editor
role: User
level: Beginner
version: Campaign v8, Campaign Classic v7
source-git-commit: 3a521f7006ca833af96f1ef5d5b369c2c0568635
workflow-type: tm+mt
source-wordcount: '3491'
ht-degree: 99%

---


# フィルター条件の定義{#filter-conditions}

クエリをデザインするには、クエリエディターでフィルター条件を選択する必要があります。 使用可能な機能とユースケースについて詳しくは、このページを参照してください。

## 演算子の選択 {#choose-operator}

フィルター条件内で、演算子を使用して 2 つの値をリンクする必要があります。

![](assets/query_editor_nveau_96.png)

次に、使用可能な演算子のリストを示します。

<table> 
 <thead> 
  <tr> 
   <th> 演算子<br /> </th> 
   <th> 目的<br /> </th> 
   <th> 例<br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> <span class="uicontrol">次と等しい</span> <br /> </td> 
   <td> 2 番目の「値」列に入力されたデータと同一の結果を返します。<br /> </td> 
   <td> <strong>姓（@lastName）が「佐藤」と等しい</strong>は、姓が佐藤の受信者のみを返します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">より大きい</span> <br /> </td> 
   <td> 入力された値より大きい値を返します。<br /> </td> 
   <td> <strong>年齢（@age）が 50 より大きい</strong>は、「50」より大きいすべての値（「51」、「52」など）を返します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">より小さい</span> <br /> </td> 
   <td> 入力された値より小さい値を返します。<br /> </td> 
   <td> <strong>作成日（@created）が「DaysAgo(100)」より小さい</strong>は、過去 100 日以内に作成されたすべての受信者を返します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次よりも大きいか等しい</span> <br /> </td> 
   <td> 入力された値より大きいか等しいすべての値を返します。<br /> </td> 
   <td> <strong>年齢（@age）が「30」よりも大きいか等しい</strong>は、30 歳以上のすべての受信者を返します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次よりも小さいか等しい</span> <br /> </td> 
   <td> 入力された値より小さいか等しいすべての値を返します。<br /> </td> 
   <td> <strong>年齢（@age）が「60」よりも小さいか等しい</strong>は、60 歳以下のすべての受信者を返します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次と等しくない</span> <br /> </td> 
   <td> 入力された値と等しくないすべての値を返します。<br /> </td> 
   <td> <strong>言語（@language）が「英語」と等しくない</strong>。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次で始まる</span> <br /> </td> 
   <td> 入力された値で始まる結果を返します。<br /> </td> 
   <td> <strong>アカウント番号（@account）が「32010」で始まる。</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次で始まらない</span> <br /> </td> 
   <td> 入力された値で始まらない結果を返します。<br /> </td> 
   <td> <strong>アカウント番号（@account）が「20」で始まらない</strong>。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次を含む</span> <br /> </td> 
   <td> 入力された値を含む結果を返します。<br /> </td> 
   <td> <strong>メールドメイン（@domain）が「mail」を含む</strong>は、「mail」を含むすべてのドメイン名を返します。したがって、「gmail.com」ドメインも返されます。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次を含まない</span> <br /> </td> 
   <td> 入力された値を含まない結果を返します。<br /> </td> 
   <td> <strong>メールドメイン（@domain）が「vo」を含まない</strong>。この場合、「vo」を含むドメイン名は返されません。結果には「Voila.jp」ドメイン名は表示されません。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次に類似</span> <br /> </td> 
   <td> 「<span class="uicontrol">次に類似</span>」は、「<span class="uicontrol">次を含む</span>」演算子と非常によく似ています。値に <span class="uicontrol">%</span> ワイルドカード文字を挿入できます。<br /> </td> 
   <td> <strong>姓（@lastName）が「Jon%s」に類似している</strong>。ここでは、オペレーターが「n」と「s」の間の欠落している英数字を忘れたので、ワイルドカード文字が「Jones」という名前を検索するための「ジョーカー」として使用されています。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次に類似しない</span> <br /> </td> 
   <td> 「<span class="uicontrol">次に類似</span>」と似ています。入力した値を収集しないようにすることができます。この演算子でも、入力した値に <span class="uicontrol">％</span> ワイルドカード文字が含まれている必要があります。<br /> </td> 
   <td> <strong>姓（@lastName）が「Smi%h」に類似していない</strong>。この場合、姓が「Smi%h」の受信者は返されません。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">空である</span> <br /> </td> 
   <td> この場合、検索する結果は、2 番目の「値」列にある空の値と一致します。<br /> </td> 
   <td> <strong>モバイル（@mobilePhone）が空である</strong>は、モバイル番号がないすべての受信者を返します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">空でない</span> <br /> </td> 
   <td> 「<span class="uicontrol">空である</span>」演算子の逆の機能です。2 番目の「値」列にあるデータを入力する必要はありません。<br /> </td> 
   <td> <strong>メール（@email）は空でない</strong>。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次に含まれる</span> <br /> </td> 
   <td> 指定された値に含まれる結果を返します。これらの値はコンマで区切る必要があります。<br /> </td> 
   <td> <strong>生年月日（@birthDate）が「1979/12/10, 1984/12/10」に含まれる</strong>は、これらの日付の間に生まれた受信者を返します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">次に含まれない</span> <br /> </td> 
   <td> 「<span class="uicontrol">次に含まれる</span>」演算子と同様に機能します。ここでは、入力された値に基づいて受信者を除外します。<br /> </td> 
   <td> <strong>生年月日（@birthDate）が「1972/12/10, 1984/12/10」に含まれない</strong>。前の例とは異なり、これらの日付の間に生まれた受信者は返されません。<br /> </td> 
  </tr> 
 </tbody> 
</table>

## AND、OR、EXCEPT の使用 {#using-and--or--except}

複数のフィルター条件を使用するクエリでは、条件間のリンクを定義する必要があります。次の 3 つのリンクが使用可能です。

* 「**[!UICONTROL および]**」では、2 つのフィルター条件を組み合わせることができます。
* 「**[!UICONTROL または]**」では、別の選択肢を指定できます。
* 「**[!UICONTROL 例外]**」では、例外を定義できます。

デフォルトで表示されている「**[!UICONTROL および]**」をクリックし、ドロップダウンリストから選択します。

![](assets/query_condition_modif_01.png)

* **[!UICONTROL および]**：条件を追加し、オーバーフィルターが可能です。
* **[!UICONTROL または]**：条件を追加し、オーバーフィルターが可能です。

  次の例では、メールドメインに「orange.co.jp」が含まれているか、郵便番号が「123」で始まる受信者を検索できます。

  ![](assets/query_condition_modif_02.png)

* **[!UICONTROL 例外]**：2 つのフィルターがあり、最初のフィルターで値が返されない場合、このタイプのリンクでは例外が作成されます。

  次の例では、メールドメインに「orange.co.jp」が含まれている受信者が返されますが、受信者の姓が「田中」である場合を除きます。

  ![](assets/query_condition_modif_03.png)

次の例のフィルターでは、スペイン語を話す受信者、またはモバイル番号がある女性、またはアカウント番号がない受信者、および会社名が「N」の文字で始まる受信者が表示されます。

![](assets/query_editor_nveau_31.png)

## 条件の優先順位の設定 {#prioritizing-conditions}

この節では、ツールバーの青色の矢印を使用して条件を優先順位付けする方法について説明します。

* 右向き矢印を使用して、括弧レベルをフィルターに追加できます。
* 左向き矢印を使用して、選択した括弧レベルをフィルターから削除できます。

  ![](assets/query_condition_modif_04.png)

* 上下矢印を使用して、条件を移動することで実行順序を変更できます。

この例では、矢印を使用して括弧レベルを削除する方法を示します。まず、次のフィルター条件を作成します。**[!UICONTROL 市区町村が横浜市と等しい、または性別が男性と等しい、およびモバイルが指定されていない、またはアカウント番号が「95」で始まる、および会社名が「A」で始まる]**。

**[!UICONTROL 性別（@gender）が男性と等しい]**&#x200B;フィルター条件にカーソルを置き、**[!UICONTROL 括弧レベルを削除]**&#x200B;矢印をクリックします。

![](assets/query_editor_nveau_32.png)

「**[!UICONTROL 性別（@gender）が男性と等しい]**」条件が括弧の外に出されます。この条件は、「市区町村が横浜市と等しい」条件と同じレベルに移動しました。これらの条件は、「**[!UICONTROL および]**」でリンクされます。

## 抽出するデータの選択 {#selecting-data-to-extract}

使用可能フィールドはテーブルごとに異なります。すべてのフィールドは、**[!UICONTROL メイン要素]**&#x200B;と呼ばれるメインノードに保存されます。次の例では、使用可能フィールドは受信者テーブルにあります。フィールドは常にアルファベット順に表示されます。

選択したフィールドの詳細がウィンドウの下部に表示されます。例えば、「**[!UICONTROL メールドメイン]**」フィールドは「**[!UICONTROL SQL 計算フィールド]**」であり、拡張は&#x200B;**[!UICONTROL （@domain）]**&#x200B;です。

![](assets/query_editor_nveau_59.png)

>[!NOTE]
>
>使用可能フィールドを検索するには、**[!UICONTROL 検索]**&#x200B;ツールを使用します。

出力列に追加するには、使用可能フィールドをダブルクリックします。クエリの最後に、選択した各フィールドに&#x200B;**[!UICONTROL データのプレビュー]**&#x200B;ウィンドウで列が作成されます。

![](assets/query_editor_nveau_01.png)

詳細フィールドはデフォルトでは表示されません。すべてを表示するには、使用可能フィールドの右下隅で&#x200B;**[!UICONTROL 詳細フィールドを表示]**&#x200B;をクリックします。前のビューに戻るには、再度クリックします。

例えば、受信者テーブルで、詳細フィールドは「**ブール値 1**」、「**[!UICONTROL ブール値 2]**」、「**[!UICONTROL ブール値 3]**」、「**[!UICONTROL 「フォルダー」リンクの外部キー]**」などです。

次の例は、受信者テーブルの使用可能フィールドを示しています。

![](assets/query_editor_nveau_53.png)

フィールドの各種カテゴリ：

<table> 
 <thead> 
  <tr> 
   <th> アイコン<br /> </th> 
   <th> 説明<br /> </th> 
   <th> 例<br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> <img height="21px" src="assets/query_editor_nveau_47.png" /> </td> 
   <td> 単純フィールド<br /> </td> 
   <td> メール、性別など<br /> </td> 
  </tr> 
  <tr> 
   <td> <img height="21px" src="assets/query_editor_nveau_48.png" /> </td> 
   <td> プライマリキー.この SQL フィールドによって、テーブル内のレコードが識別されます。<br /> </td> 
   <td> 識別子受信者はプライマリキーであり、識別子は定義ごとに一意です。<br /> </td> 
  </tr> 
  <tr> 
   <td> <img height="21px" src="assets/query_editor_nveau_02.png" /> </td> 
   <td> 外部キー。別のテーブルへのリンクとして使用されます。<br /> </td> 
   <td> 受信者外部キー、サービス外部キーなど。<br /> </td> 
  </tr> 
  <tr> 
   <td> <img height="21px" src="assets/query_editor_nveau_46.png" /> </td> 
   <td> 計算フィールド。このタイプのフィールドは、リクエストに応じてデータベース内の値を使用して計算されます。<br /> </td> 
   <td> 年齢、メールドメインなど。<br /> </td> 
  </tr> 
  <tr> 
   <td> <img height="21px" src="assets/query_editor_nveau_49.png" /> </td> 
   <td> 長いテキストを含むフィールド。<br /> </td> 
   <td> コメント、住所全体など。<br /> </td> 
  </tr> 
  <tr> 
   <td> <img height="21px" src="assets/query_editor_nveau_50.png" /> </td> 
   <td> インデックス付きの SQL フィールド。<br /> </td> 
   <td> 姓名、ISO コードなど。<br /> </td> 
  </tr> 
 </tbody> 
</table>

テーブルおよびコレクション要素へのリンク：

<table> 
 <thead> 
  <tr> 
   <th> アイコン<br /> </th> 
   <th> 説明<br /> </th> 
   <th> 例<br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> <img height="21px" src="assets/query_editor_nveau_51.png" /> </td> 
   <td> 特定のテーブルへのリンク。これらは 1 対 1 タイプの関連付けと一致します。1 つのソーステーブルは、1 つのターゲットテーブルにのみ一致します。例えば、1 人の受信者は 1 つの国にのみリンクすることができます。<br /> </td> 
   <td> フォルダー、都道府県、国など。<br /> </td> 
  </tr> 
  <tr> 
   <td> <img height="21px" src="assets/query_editor_nveau_52.png" /> </td> 
   <td> 特定のテーブルのコレクション要素。これらは 1 対 N タイプの関連付けと一致します。1 つのソーステーブルは複数のターゲットテーブルと一致することができますが、1 つのターゲットテーブルは 1 つのソーステーブルとのみ一致することができます。例えば、1 人の受信者は「n」個の購読レターを購読することができます。<br /> </td> 
   <td> 購読、リスト、除外ログなど。<br /> </td> 
  </tr> 
 </tbody> 
</table>

>[!NOTE]
>
>* 式を編集する出力列を追加するには、**[!UICONTROL 追加]**&#x200B;ボタン（サイドアイコンバーの上部）を使用します。式の編集について詳しくは、[この節](#building-expressions)を参照してください。
>* 出力列を削除するには、赤い「x」（**削除**）をクリックします。
>* 出力列の順序を変更するには、矢印を使用します。
>* **[!UICONTROL 値の配分]**&#x200B;は、選択したフィールドの値の配分を表示する方法として機能します（例えば、受信者の市区町村、受信者の言語などにリンクした配信）。

## 計算フィールドの作成 {#creating-calculated-fields}

必要に応じて、データフォーマット中に列を追加します。計算フィールドによって、データのプレビューセクションに列が追加されます。**[!UICONTROL 計算フィールドを追加]**&#x200B;をクリックします。

![](assets/query_editor_nveau_43.png)

次の 4 つのタイプの計算フィールドがあります。

* **[!UICONTROL 固定文字列]**：一連の文字列を追加できます。

  ![](assets/query_editor_nveau_60.png)

* **[!UICONTROL JavaScript タグを含む文字列]**：一連の文字列と JavaScript ディレクティブを組み合わせた計算フィールドの値。

  ![](assets/query_editor_nveau_61.png)

* **[!UICONTROL JavaScript 式]**：計算フィールドの値は JavaScript 関数評価の結果です。返される値はタイプ指定できます（数値、日付など）。

  ![](assets/query_editor_nveau_62.png)

* **[!UICONTROL 列挙]**：このタイプのフィールドでは、いずれかの出力列の内容を新しい列で使用または変更できます。

  列のソース値を使用し、宛先値を割り当てることができます。この宛先値は新しい出力列に表示されます。

  「**[!UICONTROL 列挙]**」タイプ計算フィールドを追加する例は、[この節](../../automation/workflow/adding-enumeration-type-calculated-field.md)で確認できます。

  ![](assets/query_editor_nveau_63.png)

  「**[!UICONTROL 列挙]**」タイプ計算フィールドには、次の 4 つの条件を含めることができます。

   * 「**[!UICONTROL ソースの値を保持]**」では、ソース値が変更されずにターゲットに復元されます。
   * 「**[!UICONTROL 次の値を使用]**」では、定義されていないソース値に対してデフォルトの宛先値を入力できます。
   * 「**[!UICONTROL 警告を生成して続行]**」では、ソース値を変更できないことがユーザーに警告されます。
   * 「**[!UICONTROL エラーを生成してラインを却下]**」では、ラインの計算およびインポートが回避されます。

挿入したフィールドの詳細を表示するには、**[!UICONTROL 計算済みフィールドの詳細]**&#x200B;をクリックします。

この計算フィールドを削除するには、**[!UICONTROL 計算フィールドを削除]**&#x200B;のバツ印をクリックします。

![](assets/query_editor_nveau_58.png)

## 式の作成 {#building-expressions}

式編集ツールを使用すると、集計の計算、関数の生成または式を使用した数式の編集をおこなうことができます。

次の例は、プライマリキーに対してカウントを実行する方法を示しています。

次の手順に従います。

1. **[!UICONTROL 抽出するデータ]**&#x200B;ウィンドウで「**[!UICONTROL 追加]**」をクリックします。**[!UICONTROL 数式のタイプ]**&#x200B;ウィンドウで、式を入力する数式のタイプを選択します。

   「**[!UICONTROL フィールドのみ]**」、「**[!UICONTROL 集計]**」、「**[!UICONTROL 式]**」など、様々なタイプの数式を使用できます。

   「**[!UICONTROL 集計関数のプロセス]**」および「**[!UICONTROL カウント]**」を選択します。「**[!UICONTROL 次へ]**」をクリックします。

   ![](assets/query_editor_nveau_54.png)

1. プライマリキーが計算されます。

   ![](assets/query_editor_nveau_88.png)

次に、**[!UICONTROL 数式のタイプ]**&#x200B;ウィンドウで使用可能な選択肢の詳細な表示を示します。

![](assets/query_editor_nveau_05.png)

1. 「**[!UICONTROL 「フィールドのみ]****[!UICONTROL 」では、選択するフィールドウィンドウに戻ることができます。]**
1. 「**[!UICONTROL 集計]**」（「集計関数のプロセス」）。使用する集計の例は次のとおりです。

   * 「**[!UICONTROL カウント]**」では、プライマリキーカウントを実行できます。
   * 「**[!UICONTROL 合計]**」では、顧客による 1 年間のすべての購入を合計できます。
   * 「**[!UICONTROL 最大値]**」では、「n」製品を最も多く購入した顧客を検索できます。
   * 「**[!UICONTROL 最小値]**」では、顧客を並べ替え、最近オファーを購読した顧客を検索できます。
   * 「**[!UICONTROL 平均]**」。この関数では、受信者の平均年齢を計算できます。

     「**[!UICONTROL ユニーク]**」ボックスでは、列の一意のゼロ以外の値を収集できます。例えば、受信者のすべてのトラッキングログを収集し、すべて同じ受信者に関連するトラッキングログを値 1 に変更できます。

1. 「**[!UICONTROL 式]**」では、**[!UICONTROL 式を編集]**&#x200B;ウィンドウを開きます。これにより、数字が非常に多く、入力エラーを起こしやすい電話番号を検出できます。

   ![](assets/query_editor_nveau_71.png)

   使用可能なすべての関数のリストについては、[関数のリスト](#list-of-functions)を参照してください。

## 関数のリスト {#list-of-functions}

「**[!UICONTROL 式]**」タイプの数式を選択すると、式を編集ウィンドウが表示されます。「**[!UICONTROL 集計]**」、「**[!UICONTROL 文字列]**」、「**[!UICONTROL 日付]**」、「**[!UICONTROL 数値]**」、「**[!UICONTROL 通貨]**」、「**[!UICONTROL ジオマーケティング]**」、「**[!UICONTROL ウィンドウイング関数]**」、「**[!UICONTROL その他]**」など、様々なカテゴリの関数を使用可能フィールドに関連付けることができます。

式エディターは次のように表示されます。

![](assets/filter-define-expression.png)

式エディターではデータベーステーブルのフィールドを選択し、高度な関数を追加できます。次の関数を使用できます。

**集計**

<table> 
 <tbody> 
  <tr> 
   <td> <strong>名前</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
   <td> <strong>構文</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Avg</strong><br /> </td> 
   <td> 数値タイプの列の平均を返します<br /> </td> 
   <td> Avg(&lt;値&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Count</strong><br /> </td> 
   <td> 列の null でない値をカウントします<br /> </td> 
   <td> Count(&lt;値&gt;)<br /></td>  
  </tr> 
  <tr> 
   <td> <strong>CountAll</strong><br /> </td> 
   <td> 返される値をカウントします（すべてのフィールド）<br /> </td> 
   <td> CountAll()<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Countdistinct</strong><br /> </td> 
   <td> 列の null でないユニーク値をカウントします<br /> </td> 
   <td> Countdistinct(&lt;値&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Max</strong><br /> </td> 
   <td> 数値、文字列または日付タイプの列の最大値を返します<br /> </td> 
   <td> Max(&lt;値&gt;)<br /></td>  
  </tr> 
  <tr> 
   <td> <strong>Min</strong><br /> </td> 
   <td> 数値、文字列または日付タイプの列の最小値を返します<br /> </td> 
   <td> Min(&lt;値&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>StdDev</strong><br /> </td> 
   <td> 数値、文字列または日付タイプの列の標準偏差を返します<br /> </td> 
   <td> StdDev(&lt;値&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Sum</strong><br /> </td> 
   <td> 数値、文字列または日付タイプの列の値の合計を返します<br /> </td> 
   <td> Sum(&lt;値&gt;)<br /></td> 
  </tr> 
 </tbody> 
</table>

**文字列**

<table> 
 <tbody> 
  <tr> 
   <td> <strong>名前</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
   <td> <strong>構文</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>AllNonNull2</strong><br /> </td> 
   <td> すべてのパラメーターが null でなく空でもないかどうかを示します<br /> </td> 
   <td> AllNonNull2(&lt;文字列&gt;, &lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>AllNonNull3</strong><br /> </td> 
   <td> すべてのパラメーターが null でなく空でもないかどうかを示します<br /> </td> 
   <td> AllNonNull3(&lt;文字列&gt;, &lt;文字列&gt;, &lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Ascii</strong><br /> </td> 
   <td> 文字列の最初の文字の ASCII 値を返します<br /> </td> 
   <td> Ascii(&lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Char</strong><br /> </td> 
   <td> ASCII コード「n」に対応する文字を返します<br /> </td> 
   <td> Char(&lt;数値&gt;)<br /></td>  
  </tr> 
  <tr> 
   <td> <strong>Charindex</strong><br /> </td> 
   <td> 文字列 1 における文字列 2 の位置を返します<br /> </td> 
   <td> Charindex(&lt;文字列&gt;, &lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>GetLine</strong><br /> </td> 
   <td> 文字列の n 番目（1 から n）のラインを返します<br /> </td> 
   <td> GetLine(&lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>IfEquals</strong><br /> </td> 
   <td> 最初の 2 つのパラメーターが等しい場合に、3 番目のパラメーターを返します。等しくない場合は、最後のパラメーターを返します<br /> </td> 
   <td> IfEquals(&lt;文字列&gt;, &lt;文字列&gt;, &lt;文字列&gt;, &lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>IsMemoNull</strong><br /> </td> 
   <td> パラメーターとして渡されたメモが null かどうかを示します<br /> </td> 
   <td> IsMemoNull(&lt;メモ&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>JuxtWords</strong><br /> </td> 
   <td> パラメーターとして渡された文字列を連結します。必要に応じて、文字列間にスペースを追加します.<br /> </td> 
   <td> JuxtWords(&lt;文字列&gt;, &lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>JuxtWords3</strong><br /> </td> 
   <td> パラメーターとして渡された文字列を連結します。必要に応じて、文字列間にスペースを追加します<br /> </td> 
   <td> JuxtWords3(&lt;文字列&gt;, &lt;文字列&gt;, &lt;文字列&gt;)<br /></td>  
  </tr> 
  <tr> 
   <td> <strong>LPad</strong><br /> </td> 
   <td> 左側の完成した文字列を返します<br /> </td> 
   <td> LPad(&lt;文字列&gt;, &lt;数値&gt;, &lt;文字&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Left</strong><br /> </td> 
   <td> 文字列の最初の n 文字を返します<br /> </td> 
   <td> Left(&lt;文字列&gt;, &lt;数値&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Length</strong><br /> </td> 
   <td> 文字列の長さを返します<br /> </td> 
   <td> Length(&lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Lower</strong><br /> </td> 
   <td> 文字列を小文字で返します<br /> </td> 
   <td> Lower(&lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Ltrim</strong><br /> </td> 
   <td> 文字列の左側の空白を削除します<br /> </td> 
   <td> Ltrim(&lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Md5Digest</strong><br /> </td> 
   <td> 文字列の MD5 キーの 16 進数表現を返します<br /> </td> 
   <td> Md5Digest(&lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>MemoContains</strong><br /> </td> 
   <td> パラメーターとして渡す文字列をメモに含めるかどうかを指定します<br /> </td> 
   <td> MemoContains(&lt;メモ&gt;、&lt;文字列&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>RPad</strong><br /> </td> 
   <td> 右側の完成した文字列を返します<br /> </td> 
   <td> RPad(&lt;文字列&gt;, &lt;数値&gt;, &lt;文字&gt;)<br /></td> 
  </tr> 
  <tr> 
   <td> <strong>Right</strong><br /> </td> 
   <td> 文字列の最後の n 文字を返します<br /> </td> 
   <td> Right(&lt;文字列&gt;)<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Rtrim</strong><br /> </td> 
   <td> 文字列の右側の空白を削除します<br /> </td> 
   <td> Rtrim(&lt;文字列&gt;)<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Smart</strong><br /> </td> 
   <td> 各単語の最初の文字を大文字にして文字列を返します<br /> </td> 
   <td> Smart(&lt;文字列&gt;)<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Substring</strong><br /> </td> 
   <td> 文字列の n1 文字目から始まる長さ n2 文字の部分文字列を抽出します<br /> </td> 
   <td> Substring(&lt;文字列&gt;, &lt;オフセット&gt;, &lt;長さ&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>ToString</strong><br /> </td> 
   <td> 数値を文字列に変換します<br /> </td> 
   <td> ToString(&lt;数値&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Upper</strong><br /> </td> 
   <td> 文字列を大文字で返します<br /> </td> 
   <td> Upper(&lt;文字列&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>VirtualLink</strong><br /> </td> 
   <td> 他の 2 つのパラメーターが等しい場合に、パラメーターとして渡されたリンクの外部キーを返します<br /> </td> 
   <td> VirtualLink(&lt;数値&gt;, &lt;数値&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>VirtualLinkStr</strong><br /> </td> 
   <td> 他の 2 つのパラメーターが等しい場合に、パラメーターとして渡されたリンクの外部（テキスト）キーを返します<br /> </td> 
   <td> VirtualLinkStr(&lt;文字列&gt;, &lt;数値&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>dataLength</strong><br /> </td> 
   <td> 文字列のサイズを返します<br /> </td> 
   <td> dataLength(&lt;文字列&gt;)<br /> </td>  
  </tr> 
 </tbody> 
</table>

**日付**

<table> 
 <tbody> 
  <tr> 
   <td> <strong>名前</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
   <td> <strong>構文</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>AddDays</strong><br /> </td> 
   <td> 日付に日数を追加します<br /> </td> 
   <td> AddDays(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>AddHours</strong><br /> </td> 
   <td> 日付に時間数を追加します<br /> </td> 
   <td> AddHours(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>AddMinutes</strong><br /> </td> 
   <td> 日付に分数を追加します<br /> </td> 
   <td> AddMinutes(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>AddMonths</strong><br /> </td> 
   <td> 日付に月数を追加します<br /> </td> 
   <td> AddMonths(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>AddSeconds</strong><br /> </td> 
   <td> 日付に秒数を追加します<br /> </td> 
   <td> AddSeconds(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>AddYears</strong><br /> </td> 
   <td> 日付に年数を追加します<br /> </td> 
   <td> AddYears(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>DateOnly</strong><br /> </td> 
   <td> 日付のみを返します（時刻は 0:00）*<br /> </td> 
   <td> DateOnly(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Day</strong><br /> </td> 
   <td> 日付の日を表す数を返します<br /> </td> 
   <td> Day(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>DayOfYear</strong><br /> </td> 
   <td> 日付の年の日数を返します<br /> </td> 
   <td> DayOfYear(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>DaysAgo</strong><br /> </td> 
   <td> 現在の日付 - n 日に対応する日付を返します<br /> </td> 
   <td> DaysAgo(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>DaysAgoInt</strong><br /> </td> 
   <td> 現在の日付 - n 日に対応する日付（整数 yyyymmdd）を返します<br /> </td> 
   <td> DaysAgoInt(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>DaysDiff</strong><br /> </td> 
   <td> 2 つの日付の間の日数を返します<br /> </td> 
   <td> DaysDiff(&lt;終了日&gt;, &lt;開始日&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>DaysOld</strong><br /> </td> 
   <td> 年齢（日数）を返します<br /> </td> 
   <td> DaysOld(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>GetDate</strong><br /> </td> 
   <td> サーバーの現在のシステム日付を返します<br /> </td> 
   <td> GetDate()<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Hour</strong><br /> </td> 
   <td> 日付の時間を返します<br /> </td> 
   <td> Hour(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>HoursDiff</strong><br /> </td> 
   <td> 2 つの日付の間の時間数を返します<br /> </td> 
   <td> HoursDiff(&lt;終了日&gt;, &lt;開始日&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Minute</strong><br /> </td> 
   <td> 日付の分を返します<br /> </td> 
   <td> Minute(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>MinutesDiff</strong><br /> </td> 
   <td> 2 つの日付の間の分数を返します<br /> </td> 
   <td> MinutesDiff(&lt;終了日&gt;, &lt;開始日&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Month</strong><br /> </td> 
   <td> 日付の月を表す数を返します<br /> </td> 
   <td> Month(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>MonthsAgo</strong><br /> </td> 
   <td> 現在の日付 - n ヶ月に対応する日付を返します<br /> </td> 
   <td> MonthsAgo(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>MonthsDiff</strong><br /> </td> 
   <td> 2 つの日付の間の月数を返します<br /> </td> 
   <td> MonthsDiff(&lt;終了日&gt;, &lt;開始日&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>MonthsOld</strong><br /> </td> 
   <td> 年齢（月数）を返します<br /> </td> 
   <td> MonthsOld(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Second</strong><br /> </td> 
   <td> 日付の秒を返します<br /> </td> 
   <td> Second(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>SecondsDiff</strong><br /> </td> 
   <td> 2 つの日付の間の秒数を返します<br /> </td> 
   <td> SecondsDiff(&lt;終了日&gt;, &lt;開始日&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>SubDays</strong><br /> </td> 
   <td> 日付から日数を引きます<br /> </td> 
   <td> SubDays(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>SubHours</strong><br /> </td> 
   <td> 日付から時間数を引きます<br /> </td> 
   <td> SubHours(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>SubMinutes</strong><br /> </td> 
   <td> 日付から分数を引きます<br /> </td> 
   <td> SubMinutes(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>SubMonths</strong><br /> </td> 
   <td> 日付から月数を引きます<br /> </td> 
   <td> SubMonths(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>SubSeconds</strong><br /> </td> 
   <td> 日付から秒数を引きます<br /> </td> 
   <td> SubSeconds(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>SubYears</strong><br /> </td> 
   <td> 日付から年数を引きます<br /> </td> 
   <td> SubYears(&lt;日付&gt;, &lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>ToDate</strong><br /> </td> 
   <td> 日付 + 時間を日付に変換します<br /> </td> 
   <td> ToDate(&lt;日付 + 時刻&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>ToDateTime</strong><br /> </td> 
   <td> 文字列を日付 + 時刻に変換します<br /> </td> 
   <td> ToDateTime(&lt;文字列&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>TruncDate</strong><br /> </td> 
   <td> 日付 + 時刻を最も近い秒に丸めます<br /> </td> 
   <td> TruncDate(@lastModified, &lt;秒数&gt;)<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>TruncDateTZ</strong><br /> </td> 
   <td> 日付と時刻を指定された精度（秒）に丸めます<br /> </td> 
   <td> TruncDateTZ(&lt;日付&gt;, &lt;秒数&gt;, &lt;タイムゾーン&gt;)<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>TruncQuarter</strong><br /> </td> 
   <td> 日付を四半期に丸めます<br /> </td> 
   <td> TruncQuarter(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>TruncTime</strong><br /> </td> 
   <td> 時刻部分を最も近い秒に丸めます<br /> </td> 
   <td> TruncTime(&lt;日付&gt;, &lt;秒数&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>TruncWeek</strong><br /> </td> 
   <td> 日付を週に丸めます<br /> </td> 
   <td> TruncWeek(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>TruncYear</strong><br /> </td> 
   <td> 日付 + 時刻をその年の 1 月 1 日に丸めます<br /> </td> 
   <td> TruncYear(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>TruncWeek</strong><br /> </td> 
   <td> 日付の週の日を表す数を返します<br /> </td> 
   <td> WeekDay(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Year</strong><br /> </td> 
   <td> 日付の年を表す数を返します<br /> </td> 
   <td> Year(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>YearAnd Month</strong><br /> </td> 
   <td> 日付の年と月を表す数を返します<br /> </td> 
   <td> YearAndMonth(&lt;日付&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>YearsDiff</strong><br /> </td> 
   <td> 2 つの日付の間の年数を返します<br /> </td> 
   <td> YearsDiff(&lt;終了日&gt;, &lt;開始日&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>YearsOld</strong><br /> </td> 
   <td> 満年齢を返します<br /> </td> 
   <td> YearsOld(&lt;日付&gt;)<br /> </td>  
  </tr> 
 </tbody> 
</table>

>[!NOTE]
>
>**Dateonly** 関数はオペレーターのタイムゾーンではなく、サーバーのタイムゾーンを考慮することに注意してください。

**数値**

<table> 
 <tbody> 
  <tr> 
   <td> <strong>名前</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
   <td> <strong>構文</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Abs</strong><br /> </td> 
   <td> 数値の絶対値を返します<br /> </td> 
   <td> Abs(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Ceil</strong><br /> </td> 
   <td> ある特定の数値以上の最小の整数を返します<br /> </td> 
   <td> Ceil(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Floor</strong><br /> </td> 
   <td> ある特定の数値以上の最大の整数を返します<br /> </td> 
   <td> Floor(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Greatest</strong><br /> </td> 
   <td> 2 つの数のうち大きい方を返します<br /> </td> 
   <td> Greatest(&lt;数値 1&gt;, &lt;数値 2&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Least</strong><br /> </td> 
   <td> 2 つの数のうち小さい方を返します<br /> </td> 
   <td> Least(&lt;数値 1&gt;, &lt;数値 2&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Mod</strong><br /> </td> 
   <td> 整数の割り算 n1 ÷ n2 の余りを返します<br /> </td> 
   <td> Mod(&lt;数値 1&gt;, &lt;数値 2&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Percent</strong><br /> </td> 
   <td> 割合で表される 2 つの数の比率を返します<br /> </td> 
   <td> Percent(&lt;数値 1&gt;, &lt;数値 2&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Random</strong><br /> </td> 
   <td> ランダムな値を返します<br /> </td> 
   <td> Random()<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Round</strong><br /> </td> 
   <td> 数値を n 桁に丸めます<br /> </td> 
   <td> Round(&lt;数値&gt;, &lt;小数点以下の桁数&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Sign</strong><br /> </td> 
   <td> 数値の符号を返します<br /> </td> 
   <td> Sign(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>ToDouble</strong><br /> </td> 
   <td> 整数を浮動小数に変換します<br /> </td> 
   <td> ToDouble(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>ToInt64</strong><br /> </td> 
   <td> 浮動小数を 64 ビットの整数に変換します<br /> </td> 
   <td> ToInt64(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>ToInteger</strong><br /> </td> 
   <td> 浮動小数を整数に変換します<br /> </td> 
   <td> ToInteger(&lt;数値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Trunc</strong><br /> </td> 
   <td> n1 を n2 の桁数に切り捨てます<br /> </td> 
   <td> Trunc(&lt;n1&gt;, &lt;n2&gt;)<br /> </td>  
  </tr> 
 </tbody> 
</table>

1. 通貨

<table> 
 <tbody> 
  <tr> 
   <td> <strong>名前</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
   <td> <strong>構文</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>ConvertCurrency</strong><br /> </td> 
   <td> 変換元通貨の金額を変換先通貨の金額に換算します<br /> </td> 
   <td> ConvertCurrency(&lt;金額&gt;, &lt;変換元通貨&gt;, &lt;変換先通貨&gt;, &lt;変換日&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>FormatCurrency</strong><br /> </td> 
   <td> 表示される金額を選択した通貨設定に基づいて書式設定します<br /> </td> 
   <td> FormatCurrency(&lt;金額&gt;, &lt;通貨&gt;)<br /> </td>  
  </tr> 
 </tbody> 
</table>

**Geomarketing**

<table> 
 <tbody> 
  <tr> 
   <td> <strong>名前</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
   <td> <strong>構文</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Distance</strong><br /> </td> 
   <td> 経度と緯度で定義された 2 つのポイントの距離を返します。<br /> </td> 
   <td> Distance(&lt;経度 A&gt;, &lt;緯度 A&gt;, &lt;経度 B&gt;, &lt;緯度 B&gt;)<br /> </td>  
  </tr> 
 </tbody> 
</table>

**その他**

<table> 
 <tbody> 
  <tr> 
   <td> <strong>名前</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
   <td> <strong>構文</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Case</strong><br /> </td> 
   <td> 条件が true の場合は値 1 を返します。そうでない場合は値 2 を返します<br /> </td> 
   <td> (When(&lt;条件&gt;, &lt;値 1&gt;), Else(&lt;値 2&gt;))<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>ClearBit</strong><br /> </td> 
   <td> 値のフラグを削除します<br /> </td> 
   <td> ClearBit(&lt;識別子&gt;, &lt;フラグ&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Coalesce</strong><br /> </td> 
   <td> 値 1 がゼロまたは null の場合は値 2 を返し、それ以外の場合は値 1 を返します<br /> </td> 
   <td> Coalesce(&lt;値 1&gt;, &lt;値 2&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Decode</strong><br /> </td> 
   <td> 値 1 = 値 2 の場合は値 3 を返します。そうでない場合は値 4 を返します<br /> </td> 
   <td> Decode(&lt;値 1&gt;, &lt;値 2&gt;, &lt;値 3&gt;, &lt;値 4&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Else</strong><br /> </td> 
   <td> 値 1 を返します（case 関数のパラメーターとしてのみ使用できます）<br /> </td> 
   <td> Else(&lt;値 1&gt;, &lt;値 2&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>GetEmailDomain</strong><br /> </td> 
   <td> メールアドレスからドメインを抽出します<br /> </td> 
   <td> GetEmailDomain(&lt;値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>GetMirrorURL</strong><br /> </td> 
   <td> ミラーページサーバーの URL を取得します<br /> </td> 
   <td> GetMirrorURL(&lt;値&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>Iif</strong><br /> </td> 
   <td> 式が true の場合は値 1 を返します。そうでない場合は値 2 を返します<br /> </td> 
   <td> Iif(&lt;条件&gt;, &lt;値 1&gt;, &lt;値 2&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>IsBitSet</strong><br /> </td> 
   <td> 値にフラグが含まれているかどうかを示します<br /> </td> 
   <td> IsBitSet(&lt;識別子&gt;, &lt;フラグ&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>IsEmptyString</strong><br /> </td> 
   <td> 文字列 1 が空の場合は値 2 を返し、それ以外の場合は値 3 を返します<br /> </td> 
   <td> IsEmptyString(&lt;値 1&gt;, &lt;値 2&gt;, &lt;値 3&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>NoNull</strong><br /> </td> 
   <td> 引数が NULL の場合は、空の文字列を返します<br /> </td> 
   <td> NoNull(&lt;値&gt;)<br /> </td>   
  </tr> 
  <tr> 
   <td> <strong>RowId</strong><br /> </td> 
   <td> ライン番号を返します<br /> </td> 
   <td> RowId<br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>SetBit</strong><br /> </td> 
   <td> 値に強制的にフラグを指定します<br /> </td> 
   <td> SetBit(&lt;識別子&gt;, &lt;フラグ&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>ToBoolean</strong><br /> </td> 
   <td> 数値をブール値に変換します<br /> </td> 
   <td> ToBoolean(&lt;数値&gt;)<br /> </td>   
  </tr> 
  <tr> 
   <td> <strong>When</strong><br /> </td> 
   <td> 式が true の場合は値 1 を返します。そうでない場合は値 2 を返します（case 関数のパラメーターとしてのみ使用できます）<br /> </td> 
   <td> When(&lt;条件&gt;, &lt;値 1&gt;)<br /> </td>  
  </tr> 
 </tbody> 
</table>

**ウィンドウイング関数**

<table> 
 <tbody> 
  <tr> 
   <td> <strong>名前</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
   <td> <strong>構文</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>Desc</strong><br /> </td> 
   <td> 降順ソートを適用します<br /> </td> 
   <td> Desc(&lt;値 1&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>OrderBy</strong><br /> </td> 
   <td> パーティション内の結果を並べ替えます<br /> </td> 
   <td> OrderBy(&lt;値 1&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>PartitionBy</strong><br /> </td> 
   <td> テーブルのクエリの結果を区分します<br /> </td> 
   <td> PartitionBy(&lt;値 1&gt;)<br /> </td>  
  </tr> 
  <tr> 
   <td> <strong>RowNum</strong><br /> </td> 
   <td> テーブルのパーティションと並べ替えシーケンスに基づいてライン番号を生成します<br /> </td> 
   <td> RowNum(PartitionBy(&lt;値 1&gt;), OrderBy(&lt;値 1&gt;))<br /> </td> 
  </tr> 
 </tbody> 
</table>
