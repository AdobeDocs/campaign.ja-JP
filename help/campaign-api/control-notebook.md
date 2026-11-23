---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '96'
ht-degree: 3%
---
# ノートブック

複数のページを表示するタブのリスト。

![&#x200B; ノートブック コントロール &#x200B;](assets/notebook.3b531a46.png)

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**name – 文字列** コンテナ ID。

**padding-left - integer** コンテナの左側のピクセル内のスペース。

**padding-right - integer** コンテナの右側のピクセル内のスペース。

**padding-top - integer** コンテナの上のピクセル内のスペース。

**padding-bottom - integer** コンテナの下のピクセル内のスペース。

**パディング – 整数** コンテナの周囲のピクセル内のスペース。

**readOnly - ブール値** コントロールとそのすべての子孫に読み取り専用を強制します。

**style - string** flat \| down \| up （デフォルト）。

## 備考

各サブ要素はページを表します。 例：

```xml
      <container colspan="2" style="down" type="notebook">
   <container label="Products">
     ...
   </container>

   <container colcount="3" xpath="link">
     ...
   </container>

   <container xpath="linkCollection">
     ...
   </container>
 </container>
```
