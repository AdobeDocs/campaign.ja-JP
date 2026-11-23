---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '29'
ht-degree: 17%
---
# setContentType

応答のドキュメントタイプを変更します。

```text
setContentType (name)
```

## パラメーター

ドキュメントの&#x200B;**name** MIME タイプ。

## 戻り値

なし。

## 備考

例：

```javascript
      response.setContentType("text/html;charset=ISO-8859-1")
```

## 機能

**クラスのメソッド：** [HttpServletResponse](c-httpservletresponse.md)

**次の場所で利用できます：**

* JSSP
* Web アプリ
