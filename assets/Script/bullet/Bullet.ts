import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Bullet")
export class Bullet extends Component {
  @property
  public speed = 1;
  update() {
    const pos = this.node.position;
    // 每帧向前移动
    let moveLength = pos.z - this.speed;
    this.node.setPosition(pos.x, pos.y, moveLength);
  }
}
