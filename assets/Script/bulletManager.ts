// 子弹控制
import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("bulletManager")
export class bulletManager extends Component {
  @property
  public speed = 1;
  start() {
    // [3]
  }
  update(time) {
    const pos = this.node.position;
    const moveLength = pos.z - this.speed;
    this.node.setPosition(pos.x, pos.y, moveLength);
  }
}
