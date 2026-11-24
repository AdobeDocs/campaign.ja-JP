---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '51'
ht-degree: 33%
---
# sha1

MemoryBuffer コンテンツのSHA-1署名を計算します。

```text
sha1 ()
```

## パラメーター

なし。

## 戻り値

SHA-1署名の16進数表現である文字列。

## 備考

例：

```javascript
var memBuf = new MemoryBuffer();
memBuf.fromString("Hello world", "utf-8");
logInfo(memBuf.sha1()); // Writes down  => 7b502c3a1f48c8609ae212cdfb639dee39673f5e
```

## 機能

**クラスのメソッド：** [MemoryBuffer](c-memorybuffer.md)

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
