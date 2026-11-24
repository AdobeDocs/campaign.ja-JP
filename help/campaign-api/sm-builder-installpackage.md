---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '38'
ht-degree: 18%
---
# InstallPackage

パッケージをインストールします。

```text
InstallPackage ( XML parameters )
```

## パラメーター

インポートするパッケージを含む&#x200B;**parameters** XML要素。

## 戻り値

なし。

## 備考

SpecFile.Generate （） メソッドによって生成されたパッケージは、ビルダー要素にカプセル化する必要があります。 例：

```javascript
var params =
  {builder:
    {package:
      { ... }
    }
  }

NLWS.xtkBuilder.InstallPackage(params)
```

## 機能

**スキーマ：** [xtk:builder](s-xtk-builder.md)

**静的：**

はい
