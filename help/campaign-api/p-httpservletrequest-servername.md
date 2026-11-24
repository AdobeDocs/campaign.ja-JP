---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '32'
ht-degree: 12%
---
# serverName

クエリサーバーの名前を返します。

```text
serverName
```

## 備考

例：次のURLのserverName:

```javascript
      http://adobe.com/jp:8080/nms/test.jst?id=1234&param=dummy#aFragment
```

次の文字列を返します。

```javascript
adobe.com
```

## 機能

**クラスのプロパティ：** [HttpServletRequest](c-httpservletrequest.md)

**読み取り専用：**

はい

**次の場所で利用できます：**

* JSSP
* Web アプリ
