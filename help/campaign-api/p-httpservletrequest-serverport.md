---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '44'
ht-degree: 9%
---
# serverPort

サーバーへの接続に使用するポート番号を返します。

```text
serverPort
```

## 備考

例：次のURLのserverPort:

```javascript
http://adobe.com/jp:8080/nms/test.jst
```

次の文字列を返します。

```javascript
8080
```

次のURLのserverPort:

```javascript
http://adobe.com/nms/test.jst
```

次の文字列を返します。

```javascript
80
```

## 機能

**クラスのプロパティ：** [HttpServletRequest](c-httpservletrequest.md)

**読み取り専用：**

はい

**次の場所で利用できます：**

* JSSP
* Web アプリ
