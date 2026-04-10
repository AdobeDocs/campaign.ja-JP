---
product: campaign
title: Technote - Adobe Campaignでの非対称暗号化と復号
description: テクニカルノート - Adobe Campaignでの非対称暗号化と復号
hide: true
exl-id: 6ee8b05b-2a46-4adf-a036-82fdd4809d0d
source-git-commit: e3a234c7a29795c2a09fba9063ce17f0a573ab46
workflow-type: tm+mt
source-wordcount: '142'
ht-degree: 2%

---

# Technote: Adobe Campaignでの非対称暗号化と復号 {#asymetric-encryption}

公開鍵暗号化、または非対称暗号化は、関連する鍵のペアを使用する暗号化システムのフィールドです。 各キーペアは、**公開鍵**&#x200B;と、対応する&#x200B;**秘密鍵**&#x200B;で構成されます。

* **公開鍵**&#x200B;はオープンに共有され、データの暗号化に使用されます。

* **秘密鍵**&#x200B;は秘密に保たれ、データの復号に使用されます。

このアプローチにより、誰かが公開鍵を持っていても、秘密鍵なしではメッセージを復号化できなくなります。 機密性、認証、完全性などの主要なセキュリティ機能を提供します。

Adobe Campaign v8.8.3以降、暗号化と復号化のために2つの新しいJavascript関数が追加されています。

* 公開鍵を使用した暗号化：`rsaPublicEncrypt(data, base64EncodedPublicKey, useOAEPpadding)`

* 秘密鍵を使用した復号：`rsaPrivateDecrypt(encryptedData, base64EncodedPrivateKey, useOAEPpadding)`


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

**追加リソース**

* [&#x200B; [!DNL Campaign] APIの使用を開始](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/developer/api){target="_blank"}
* [Campaign JSAPI ドキュメント &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/p-1.html?lang=ja){target="_blank"}
