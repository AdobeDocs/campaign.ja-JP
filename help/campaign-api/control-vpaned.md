---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '108'
ht-degree: 1%
---
# VPaned

複数のコンテナを水平方向に配置します。

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

各サブエレメントはコンテナである必要があります。 各サブコンテナは、width-percent プロパティを使用することで、使用する全幅の割合を指定できます。 例：

```xml
<container type="vpaned">
  <container label="Group 1" width-percent="25"/>
    <input .../>
  </container>
  <container label="Group 2" width-percent="75"/>
    <input .../>
  </container>
</container>
```
