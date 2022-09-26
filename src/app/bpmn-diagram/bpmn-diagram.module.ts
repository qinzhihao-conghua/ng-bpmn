import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRuleTaskComponent } from './business-rule-task/business-rule-task.component';
import { ComplexGatewayComponent } from './complex-gateway/complex-gateway.component';
import { EndEventComponent } from './end-event/end-event.component';
import { EventBasedGatewayComponent } from './event-based-gateway/event-based-gateway.component';
import { ExclusiveGatewayComponent } from './exclusive-gateway/exclusive-gateway.component';
import { InclusiveGatewayComponent } from './inclusive-gateway/inclusive-gateway.component';
import { IntermediateThrowEventComponent } from './intermediate-throw-event/intermediate-throw-event.component';
import { ManualTaskComponent } from './manual-task/manual-task.component';
import { ParallelGatewayComponent } from './parallel-gateway/parallel-gateway.component';
import { ProcessComponent } from './process/process.component';
import { ReceiveTaskComponent } from './receive-task/receive-task.component';
import { ScriptTaskComponent } from './script-task/script-task.component';
import { SendTaskComponent } from './send-task/send-task.component';
import { SequenceFlowComponent } from './sequence-flow/sequence-flow.component';
import { ServiceTaskComponent } from './service-task/service-task.component';
import { StartEventComponent } from './start-event/start-event.component';
import { TaskComponent } from './task/task.component';
import { UserTaskComponent } from './user-task/user-task.component';
import { BpmnDiagramComponent } from './bpmn-diagram.component';
import { NzButtonModule, NzFormModule, NzIconModule, NzInputModule, NzSelectModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubProcessComponent } from './sub-process/sub-process.component';
import { GroupComponent } from './group/group.component';
import { DataObjectReferenceComponent } from './data-object-reference/data-object-reference.component';
import { DataStoreReferenceComponent } from './data-store-reference/data-store-reference.component';
import { ParticipantComponent } from './participant/participant.component';


@NgModule({
  declarations: [
    BpmnDiagramComponent,
    TaskComponent,
    ProcessComponent,
    StartEventComponent,
    IntermediateThrowEventComponent,
    SendTaskComponent,
    ReceiveTaskComponent,
    UserTaskComponent,
    ManualTaskComponent,
    BusinessRuleTaskComponent,
    ServiceTaskComponent,
    ScriptTaskComponent,
    EndEventComponent,
    SequenceFlowComponent,
    ExclusiveGatewayComponent,
    ParallelGatewayComponent,
    InclusiveGatewayComponent,
    ComplexGatewayComponent,
    EventBasedGatewayComponent,
    SubProcessComponent,
    GroupComponent,
    DataObjectReferenceComponent,
    DataStoreReferenceComponent,
    ParticipantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
  ],
  exports: [
    BpmnDiagramComponent
  ]
})
export class BpmnDiagramModule { }
