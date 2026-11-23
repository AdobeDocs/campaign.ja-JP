---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '145'
ht-degree: 3%
---
# generateTrackingTag

Web トラッキング用のJavaScript タグが自動的に生成されます。

```text
generateTrackingTag (request [, tagid ] [, folder ])
```

## パラメーター

**request** HttpServletRequest オブジェクト

**tagid** パーソナライズされたタグ IDの名前を表す文字列。 空の場合、関数はパス名に基づいてタグを生成します。

**folder** フォルダーの内部名を表す文字列。 空の場合、タグはデフォルトのディレクトリ（web トラッキングタグ）に作成されます。

## 戻り値

含めるJavaScript コードを含む文字列。

## 備考

生成されたタグは、web アプリの名前、html ページ、コントローラ、またはより一般的に言えば、タグ IDが入力されていない場合のパス名に基づいています。 最後のパラメーターは、タグの宛先フォルダーを指定します。 関数を呼び出すには、リクエストオブジェクトを引数として渡します。 関数がhtml コードを生成するので、&lt;%==の使用に注意してください。 例：

```xml
              <%== generateTrackingTag(request, request.getParameter('art'), request.getParameter('cat')) %>
```

## 機能

**次の場所で利用できます：**

* JSSP
* Web アプリ
