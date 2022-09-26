import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-store-reference',
  templateUrl: './data-store-reference.component.html',
  styleUrls: ['./data-store-reference.component.scss']
})
export class DataStoreReferenceComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  @Input() modeler;// 建模器
  @Input() element;// 选中的节点
  @Input() nodeData;// 解析好的数据


  validateForm: FormGroup;

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.nodeData && changes.nodeData.currentValue) {
      this.validateForm = this.fb.group({
        id: [this.nodeData.id, [Validators.required]],
        name: [this.nodeData.name, [Validators.required]],
        desc: [this.nodeData.documentation, [Validators.required]],
        assignee: [this.nodeData.assignee]
      });
    }
  }

  /**
   * 设置节点属性
   * @param itemName 表单控件名称
   * @param value 值
   */
  formItemChange(itemName: string, value: string) {
    const modeling = this.modeler.get('modeling')
    if (itemName === 'name') {
      modeling.updateLabel(this.element, value)
    } else if (itemName === 'id') {
      modeling.updateProperties(this.element, { id: value })
    } else if (itemName === 'desc') {
      if (!value) {
        modeling.updateProperties(this.element, { documentation: [] })
        return
      }
      const documentationElement = this.modeler.get('moddle').create('bpmn:Documentation', { text: value })
      modeling.updateProperties(this.element, { documentation: [documentationElement] })
    } else {
      let obj = {};
      obj[`activiti:${itemName}`] = value;
      modeling.updateProperties(this.element, obj)
    }
  }

}
