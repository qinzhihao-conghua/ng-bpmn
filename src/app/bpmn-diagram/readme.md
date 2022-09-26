## 每个组件对应的节点

```javascript
export const NodeName = {
  'bpmn:Process': '流程',
  'bpmn:StartEvent': '开始事件',
  'bpmn:IntermediateThrowEvent': '中间事件',
  'bpmn:Task': '任务',
  'bpmn:SendTask': '发送任务',
  'bpmn:ReceiveTask': '接收任务',
  'bpmn:UserTask': '用户任务',
  'bpmn:ManualTask': '手工任务',
  'bpmn:BusinessRuleTask': '业务规则任务',
  'bpmn:ServiceTask': '服务任务',
  'bpmn:ScriptTask': '脚本任务',
  'bpmn:EndEvent': '结束事件',
  'bpmn:SequenceFlow': '流程线',
  'bpmn:ExclusiveGateway': '互斥网关',
  'bpmn:ParallelGateway': '并行网关',
  'bpmn:InclusiveGateway': '相容网关',
  'bpmn:ComplexGateway': '复杂网关',
  'bpmn:EventBasedGateway': '事件网关',
  'bpmn:SubProcess': '子流程',
  'bpmn:DataObjectReference': '数据对象',
  'bpmn:DataStoreReference': '数据存储',
  'bpmn:Participant': '扩展流程',
  'bpmn:Group': '分组'
}
```