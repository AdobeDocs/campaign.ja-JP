---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '112'
ht-degree: 3%
---
# 待機

シグナルを待つ。

```text
wait (timeout)
```

## パラメーター

**タイムアウト**&#x200B;待機時間（ミリ秒単位）。

## 戻り値

待機時間の有効期限が切れる前に信号を受信した場合にtrueに設定するブール値。

## 備考

シグナルは、[Wakeup](sm-workflow-wakeup.md)および[WakeupTask](sm-workflow-wakeuptask.md) SOAP メソッドによって発行されます。 使用されるプロトコル（UDP）は、メッセージの受信を保証するものではありません。 この信号は、操作をより速く実行する場合にのみ役立ちます。 警告：このシグナルは、サブワークフローでは受信されません。 例：典型的な使用例を以下に示します。ループは、キュー（poll （））からの操作を処理し、各操作の間に一定の時間を待機します。 ワークフロー休止を強制するために、さらに遅延が追加されます。

```javascript
var lifetime = 30 * 60 * 1000 // 30 minutes
var frequency = 30 * 1000 // 30 seconds
var start = new Date().getTime()
while( new Date().getTime() - start < lifetime )
{
  poll()
  task.wait(frequency)
}
 
```

## 機能

**クラスのメソッド：** [WorkflowTask](c-workflowtask.md)

**次の場所で利用できます：**

* ワークフロー
