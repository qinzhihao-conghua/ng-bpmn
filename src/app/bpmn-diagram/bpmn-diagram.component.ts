import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import customTranslate from 'src/assets/customTranslate';
import BpmData from './bpm-data';
import { commonParse, userTaskParse } from './parse-element';

// import * as activitiModdleDescriptor from 'src/assets/activiti.json'


@Component({
  selector: 'app-bpmn-diagram',
  templateUrl: './bpmn-diagram.component.html',
  styleUrls: ['./bpmn-diagram.component.scss']
})
export class BpmnDiagramComponent implements OnInit {

  constructor(
    private https: HttpClient
  ) { }
  @ViewChild('ref', { static: true }) private el: ElementRef;

  modeler: Modeler;
  zoom = 1;
  element;// 节点元素
  testValue = null;

  nodeType: string = null;
  nodeData = null;

  ngOnInit() {
  }

  ngAfterViewInit() {
    // 生成实例
    this.modeler = new Modeler({
      container: '#demo',//容器
      width: '100%',//画板的大小
      height: '100%',
      propertiesPanel: {
        // parent: '#properties'
      },
      additionalModules: [
        // BpmnPropertiesPanelModule,//右侧全部工具栏
        // BpmnPropertiesProviderModule,//右侧属性栏
        { translate: ['value', customTranslate] },// 汉化
        // paletteProvider, //左侧裁剪后工具栏
        // contextPadProvider //点击节点出现的PadProvider裁剪
        // 以下属性放开即可生效，可以根据实际情况来
        // {
        //   // 禁用滚轮滚动
        //   zoomScroll: ["value", ""],
        //   // 禁止拖动线
        //   bendpoints: ["value", ""],
        //   // 禁用左侧面板
        //   paletteProvider: ["value", ""],
        //   // 禁止点击节点出现contextPad，即节点编辑面板
        //   contextPadProvider: ["value", ""],
        //   // 禁止双击节点出现label编辑框
        //   labelEditingProvider: ["value", ""]
        // }
      ],
      keyboard: {
        bindTo: window // 键盘快捷键
      },
      moddleExtensions: {
        // flowable: flowableModdle
        // activiti: activitiModdleDescriptor
      }
    })
    // 获取全局modeling
    const modeling = this.modeler.get('modeling');

    this.loadDiagram(modeling);
  }

  nodeName() {
    if (this.element) {
      const bizObj = this.element.businessObject
      const type = bizObj.eventDefinitions
        ? bizObj.eventDefinitions[0].$type
        : bizObj.$type
      return NodeName[type] || type
    }
    return ''
  }
  /**
   * 更新节点属性
   * @param properties 
   */
  updateProperties(properties = {}) {
    const modeling = this.modeler.get('modeling')
    // modeling.updateLabel(this.element, this.testValue)
    modeling.updateProperties(this.element, properties)
  }
  // 此方法需与后台交互，回显的时候进行加载
  setColor(modeling) {
    // 获取到全部节点
    const allShapes = this.modeler.get("elementRegistry").getAll();
    const list = [];
    for (const i of allShapes) {
      list.push(i.type);
    }
    console.log(list);

    for (const i of allShapes) {
      if (i.type === 'bpmn:StartEvent') { // 开始图标
        modeling.setColor([i], { fill: '#FFFFFF' });
      } else if (i.type === 'bpmn:UserTask') { // 用户任务
        modeling.setColor([i], { fill: '#FFFFFF' });
      } else if (i.type === 'label') { // 文字
        modeling.setColor([i], { stroke: '#FFFFFF' });
      } else if (i.type === 'bpmn:SequenceFlow') { // 流程线
        modeling.setColor([i], { stroke: '#000' });
      } else if (i.type === 'bpmn:EndEvent') { // 结束图标
        modeling.setColor([i], { fill: '#FFFFFF' });
      }

    }
  }

  loadDiagram(modeling): void {
    // const url = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
    const url = 'assets/diagram.bpmn';
    this.https.get(url, {
      headers: { observe: 'response' },
      responseType: 'text'
    }).subscribe({
      next: res => {
        from(this.modeler.importXML(res) as Promise<{ warnings: Array<any> }>).subscribe(data => {
          // 屏幕自适应
          this.modeler.get("canvas").zoom('fit-viewport', 'auto');
          // 定义样式
          this.setColor(modeling);
          this.adjustPalette();
        })
      }
    })

    this.modeler.on('root.added', e => {
      if (e.element.type === 'bpmn:Process') {
        this.element = e.element;
        let cache = commonParse(this.element)
        cache = userTaskParse(cache)
        console.log('解析的属性', cache);
        this.nodeData = cache;
      }
    })

    this.modeler.on('element.click', e => {
      console.log('单击', e);
      this.element = e.element;
      let cache = commonParse(this.element)
      cache = userTaskParse(cache)
      console.log('解析的属性', cache);
      this.nodeData = cache;
    });

    // this.modeler.on('element.dblclick', e => {
    //   console.log("双击", e);
    // });

    // // 此方法慎用
    // this.modeler.on('element.changed', e => {
    //   console.log('修改', e);
    // });

    // this.modeler.on('shape.added', e => {
    //   console.log('图形增加', e);
    // });

    // // 增加连接线
    // this.modeler.on('connect.end', e => {
    //   console.log("增加连线", e);
    // });

    // // 删除连接线
    // this.modeler.on('connection.remove', e => {
    //   console.log("删除连线", e);
    // });

    // // 元素拖拽结束
    // this.modeler.on('drag.cleanup', e => {
    //   console.log("元素拖拽", e);
    // });

  }
  // 调整左侧工具栏排版
  adjustPalette() {
    try {
      // 获取 bpmn 设计器实例
      const canvas = document.getElementById('demo') as any;
      // 拿到工具面板
      const djsPalette = canvas.children[0].children[1].children[5]
      const djsPalStyle = {
        width: '130px',
        padding: '5px',
        background: 'white',
        left: '20px',
        borderRadius: 0
      }
      for (var key in djsPalStyle) {
        djsPalette.style[key] = djsPalStyle[key]
      }
      const palette = djsPalette.children[0]
      const allGroups = palette.children
      // allGroups[0].style['display'] = 'none'
      // 修改控件样式
      for (var gKey in allGroups) {
        const group = allGroups[gKey]
        for (var cKey in group.children) {
          const control = group.children[cKey]
          const controlStyle = {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            padding: '5px'
          }
          if (
            control.className &&
            control.dataset &&
            control.className.indexOf('entry') !== -1
          ) {
            const controlProps = new BpmData().getControl(control.dataset.action)
            control.innerHTML = `
              <div style='font-size: 14px;font-weight:500;margin-left:15px;'>
                ${controlProps['title']}
              </div>`
            for (var csKey in controlStyle) {
              control.style[csKey] = controlStyle[csKey]
            }
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  // 让图能自适应屏幕
  fitViewport() {
    this.zoom = this.modeler.get('canvas').zoom('fit-viewport')
    const bbox = (document.querySelector('.diagram-container .viewport') as any).getBBox()
    const currentViewbox = this.modeler.get('canvas').viewbox()
    const elementMid = {
      x: bbox.x + bbox.width / 2 - 65,
      y: bbox.y + bbox.height / 2
    }
    this.modeler.get('canvas').viewbox({
      x: elementMid.x - currentViewbox.width / 2,
      y: elementMid.y - currentViewbox.height / 2,
      width: currentViewbox.width,
      height: currentViewbox.height
    })
    this.zoom = bbox.width / currentViewbox.width * 1.8
  }
  // 放大缩小
  zoomViewport(zoomIn = true) {
    this.zoom = this.modeler.get('canvas').zoom()
    this.zoom += (zoomIn ? 0.1 : -0.1)
    this.modeler.get('canvas').zoom(this.zoom)
  }
  redo() {
    this.modeler.get('commandStack').redo()
  }
  undo() {
    this.modeler.get('commandStack').undo()
  }
  async createNewDiagram(xml?: string) {
    let xmlStr = `
    <?xml version="1.0" encoding="UTF-8"?>
    <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" 
      xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" 
      xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" 
      xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
      xmlns:activiti="http://activiti.org/bpmn" 
      targetNamespace="http://www.activiti.org/processdef">
      <process id="process_fqkrxujd" name="name_8tjfhiut">
        <startEvent id="startNode1" name="开始" />
      </process>
      <bpmndi:BPMNDiagram id="BPMNDiagram_flow">
        <bpmndi:BPMNPlane id="BPMNPlane_flow" bpmnElement="T-2d89e7a3-ba79-4abd-9f64-ea59621c258c">
          <bpmndi:BPMNShape id="BPMNShape_startNode1" bpmnElement="startNode1" bioc:stroke="">
            <omgdc:Bounds x="240" y="200" width="30" height="30" />
            <bpmndi:BPMNLabel>
              <omgdc:Bounds x="242" y="237" width="23" height="14" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
        </bpmndi:BPMNPlane>
      </bpmndi:BPMNDiagram>
    </definitions>
    `;
    if (xml) {
      xmlStr = xml;
    }
    try {
      await this.modeler.importXML(xmlStr)
      this.adjustPalette()
      this.fitViewport()
      // this.fillColor()
    } catch (err) {
      console.error(err.message, err.warnings)
    }
  }

  getProcess() {
    const element = this.getProcessElement()
    return {
      id: element.id,
      name: element.name,
    }
  }
  getProcessElement() {
    const rootElements = this.modeler.getDefinitions().rootElements
    for (let i = 0; i < rootElements.length; i++) {
      if (rootElements[i].$type === 'bpmn:Process') return rootElements[i]
    }
  }
  async saveXML(download = false) {
    try {
      const { xml } = await this.modeler.saveXML({ format: true })
      if (download) {
        this.downloadFile(`${this.getProcessElement().name}.bpmn.xml`, xml, 'application/xml')
      }
      return xml
    } catch (err) {
      console.log(err)
    }
  }
  async saveImg(type = 'svg', download = false) {
    try {
      const { svg } = await this.modeler.saveSVG({ format: true })
      if (download) {
        this.downloadFile(this.getProcessElement().name, svg, 'image/svg+xml')
      }
      return svg
    } catch (err) {
      console.log(err)
    }
  }
  async save() {
    const process = this.getProcess()
    const xml = await this.saveXML()
    const svg = await this.saveImg()
    const result = { process, xml, svg }
    console.log('----------', result);
  }
  openBpmn(file) {
    const reader = new FileReader()
    reader.readAsText(file.target.files[0], 'utf-8')
    reader.onload = () => {
      this.createNewDiagram(reader.result as any)
    }
    return false
  }
  downloadFile(filename, data, type) {
    let a = document.createElement('a')
    let url = window.URL.createObjectURL(new Blob([data], { type: type }))
    a.href = url
    a.download = filename
    a.click()
    window.URL.revokeObjectURL(url)
  }
}
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