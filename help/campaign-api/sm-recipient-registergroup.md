---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '27'
ht-degree: 37%
---
# RegisterGroup

リストに選択した受信者を追加

```text
RegisterGroup ( XML groupList, XML recipientList, Boolean register )
```

## パラメーター

**groupList** リスト

**recipientList**&#x200B;受信者リスト

**登録**&#x200B;受信者の登録/登録解除

## 戻り値

なし。

## 例

```javascript
//List
var entity = <entityList><key value="24447964"/>
              <where>
                <condition enabledIf="" expr="@id = 24447964"/>
              </where>
            </entityList>
 
//Recipient
var choice = <choiceList><key value="18995462"/>
              <where>
                <condition enabledIf="" expr="@id = 18995462"/>
              </where>
            </choiceList>
nms.recipient.RegisterGroup(entity,choice,true)
        
```

## 機能

**スキーマ：** [nms:recipient](s-nms-recipient.md)

**静的：**

はい
