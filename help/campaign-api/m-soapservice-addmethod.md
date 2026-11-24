---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '353'
ht-degree: 7%
---
# addMethod

サービス上の関数を宣言します。

```text
addMethod (name, action, arguments, responses, requestNodeName, responseNodeName)
```

## パラメーター

**name** メソッドの名前。 これは、JavaScriptで公開される名前とSOAP メソッドの名前です。

**action** SOAP-Action パラメーター。

**arguments** ペアでグループ化された文字列のリストを含むテーブル形式の引数の宣言。 最初の文字列は引数の名前で、2番目の文字列はタイプに対応します：\[&quot;name1&quot;, &quot;type1&quot;, &quot;name2&quot;, &quot;type2&quot;, ...\]

**応答** ペアでグループ化された文字列のリストを含むテーブルの形式での戻り値の宣言：最初の文字列は引数の名前で、2番目の文字列はタイプに対応します：\[&quot;name1&quot;, &quot;type1&quot;, &quot;name2&quot;, &quot;type2&quot;, ..\]

**requestNodeName** メソッド名ではなく、SOAP クエリのXML ノードの名前を指定する文字列。

**responseNodeName** メソッド名の後にResponseが続く代わりに、SOAP レスポンスのXML ノードの名前を指定する文字列。

## 戻り値

なし。

## 備考

次のタイプがサポートされています。

* 文字列
* ブール値
* 長整数
* 短い
* バイト
* 浮動小数点数
* 倍精度浮動小数点数
* 日付
* 時間
* 日時
* NLDocument
* NLElement
* NLRawXML
* NLCollection

メソッドがサービスで宣言されると、これはサービスのメソッドとなり、メソッド名でメソッドを呼び出すことによって直接呼び出すことができます。 受信パラメーターで使用されるNLRawXML タイプは、引数を置き換えるためにXML ノード全体をコピーします。 戻り値の型として使用される場合は、SOAP応答の最初の子要素の全体が含まれます。 この使用は、SOAP応答に子要素が1つしかないことを意味します。 受信パラメーターで使用されるNLCollection タイプは、すべての子要素をコピーして引数を置き換えます。 これは、入力引数が変数パラメーターである場合に便利です。 これは戻り値のルートであるため、戻り値の型として使用され、SOAPの応答全体が含まれます。 エラーが発生した場合は、例外が発生します。 これが正しく形成されたSOAP エラーである場合、発生した例外にはsoapFault プロパティがあり、SOAP エラーのXML ノードが含まれています。 例：

```javascript
      var cnx = new HttpSoapConnection("http://localhost/nl/jsp/soaprouter.jsp", "utf-8", 0)
var session = new SoapService(cnx, "xtk:session")
session.addMethod("GetOption", "xtk:session#GetOption",
  ["token", "string", "name", "string"],
  ["value", "string", "type", "byte"])
try
{
var result  = session.GetOption("admin/", "NmsBroadcast_DefaultProvider")
var value   = result[0]
var type    = result[1]
logInfo("Value = " + value)
logInfo("Type = " + type)
}
catch( e )
{
  if( e.soapFault )
    logInfo("A SOAP Fault occured : " + e.soapFault.toXMLString());
  else
    logInfo("An error occured : " + e);
}
```

## 機能

**クラスのメソッド：** [SoapService](c-soapservice.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* 配信メッセージ
* タイポロジルール
* 読み込み
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
