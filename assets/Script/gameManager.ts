import { _decorator, Component, Node } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass("gameManage")
// executeInEditMode(true) 开发模式输出
export class gameManage extends Component {
  @property // 开放属性到面板
  public test = 3;
  start() {
    // [3]
  }

  // update (deltaTime: number) {
  //     // [4]
  // }
}
