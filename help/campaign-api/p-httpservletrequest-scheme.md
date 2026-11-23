---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '39'
ht-degree: 10%
---
# スキーム

使用するプロトコルの名前（HTTP、HTTPSなど）を返します。 依頼する必要がありました。

```text
scheme
```

## 備考

例：次のURLのスキーム：

```javascript
      http://adobe.com:8080/nms/test.jst?id=1234&param=dummy#aFragment
```

次の文字列を返します。

```javascript
http
```

## 機能

**クラスのプロパティ：** [HttpServletRequest](c-httpservletrequest.md)

**読み取り専用：**

はい

**次の場所で利用できます：**

* JSSP
* Web アプリ
