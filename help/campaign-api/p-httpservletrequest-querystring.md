---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '36'
ht-degree: 11%
---
# queryString

クエリのURLのうち、パラメーターに一致する部分を返します。

```text
queryString
```

## 備考

例：次のURLのqueryString:

```javascript
      http://adobe.com/nms/test.jst?id=1234&param=dummy#aFragment
```

次の文字列を返します。

```javascript
id=1234&param=dummy
```

## 機能

**クラスのプロパティ：** [HttpServletRequest](c-httpservletrequest.md)

**読み取り専用：**

はい

**次の場所で利用できます：**

* JSSP
* Web アプリ
