---
product: campaign
title: テクニカルノート - Adobe Campaignでの非対称的な暗号化と復号化
description: テクニカルノート - Adobe Campaignでの非対称暗号化と復号化
hide: true
hidefromtoc: true
source-git-commit: 1d9d4111cde1e230220a04c8fd10a126116339ad
workflow-type: tm+mt
source-wordcount: '142'
ht-degree: 2%

---

# テクニカルノート：Adobe Campaignでの非対称暗号化と復号化 {#asymetric-encryption}

公開キー暗号化（非対称暗号化）は、関連するキーのペアを使用する暗号化システムの分野です。 各キーペアは、**公開鍵** とそれに対応する **秘密鍵** で構成されます。

* **公開鍵** は公開して共有され、データの暗号化に使用されます。

* **秘密鍵** は秘密に保たれ、データの復号化に使用されます。

このアプローチにより、公開鍵を持つユーザーでも、秘密鍵がないとメッセージを復号化できなくなります。 機密性、認証、整合性などの重要なセキュリティ機能を提供します。

Adobe Campaign v8.8.3 以降、暗号化と復号化のために 2 つの新しい JavaScript 関数が追加されています。

* 公開鍵を使用した暗号化：`rsaPublicEncrypt(data, base64EncodedPublicKey, useOAEPpadding)`

* 秘密鍵を使用した復号化：`rsaPrivateDecrypt(encryptedData, base64EncodedPrivateKey, useOAEPpadding)`


例：

```Java
// Encryption with PKCS#1 v1.5 padding (default)
var encrypted = rsaPublicEncrypt(
    "Secret message",
    "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0t..." // Base64 encoded public key
);
 
// Encryption with OAEP padding
var encryptedOAEP = rsaPublicEncrypt(
    "Secret message",
    "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0t...", // Base64 encoded public key
    true
);
 
// Decryption
var decrypted = rsaPrivateDecrypt(
    encrypted,
    "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVkt..." // Base64 encoded private key
);
```

**その他のリソース**

* [API の  [!DNL Campaign]  要 ](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/developer/api){target="_blank"}
* [Campaign JSAPI ドキュメント ](https://experienceleague.adobe.com/developer/campaign-api/api/p-1.html?lang=ja){target="_blank"}
