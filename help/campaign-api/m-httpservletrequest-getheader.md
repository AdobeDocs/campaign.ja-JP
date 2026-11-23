---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '30'
ht-degree: 16%
---
# getHeader

クエリヘッダーで定義された属性を返します。

```text
getHeader (name)
```

## パラメーター

**name** ヘッダーの属性の名前。

## 戻り値

なし。

## 備考

例：

```javascript
Host: <%= request.getHeader("host") %>
```

## 機能

**クラスのメソッド：** [HttpServletRequest](c-httpservletrequest.md)

**次の場所で利用できます：**

* JSSP
* Web アプリ
