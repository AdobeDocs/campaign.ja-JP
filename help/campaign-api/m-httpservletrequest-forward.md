---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '75'
ht-degree: 5%
---
# 転送

クライアントを経由せずに、クエリを別のページにリダイレクトします。

```text
forward (location)
```

## パラメーター

**location** リダイレクト URL。

## 戻り値

なし。

## 備考

forwardを使用すると、クエリを別のリソースに転送する前に予備プロセスを実行して、応答の内容を生成できます。 転送呼び出しの前に、応答としてクライアントにデータを返す必要はありません。そうしないと、エラーが発生します。

## 機能

**クラスのメソッド：** [HttpServletRequest](c-httpservletrequest.md)

**次の場所で利用できます：**

* JSSP
* Web アプリ
