---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '92'
ht-degree: 3%
---
# アイコンボックス

複数のページ選択を有効にするアイコンのリスト。

![Iconbox コントロール &#x200B;](assets/iconbox.05daa4bf.png)

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**name – 文字列** コンテナ ID。

**padding-left - integer** コンテナの左側のピクセル内のスペース。

**padding-right - integer** コンテナの右側のピクセル内のスペース。

**padding-top - integer** コンテナの上のピクセル内のスペース。

**padding-bottom - integer** コンテナの下のピクセル内のスペース。

**パディング – 整数** コンテナの周囲のピクセル内のスペース。

**readOnly - ブール値** コントロールとそのすべての子孫に読み取り専用を強制します。

## 備考

各コンテナサブ要素は、ページを表します。 例：

```xml
<container name="iconbox" type="iconbox">
   <container colcount="3" label="Header">
     ...
   </container>
   <container img="ncm:ctprop.bmp" label="Intro">
     ...
   </container>
   <container img="ncm:subsection.bmp" label="Event">
     ...
   </container>
   <container img="ncm:book.bmp" label="Selection">
     ...
   </container>
   <container img="nms:contacts.bmp" label="Services">
     ...
   </container>
   <container img="nms:contacts.bmp" label="Mail footer ">
     ...
   </container>
 </container>
```
