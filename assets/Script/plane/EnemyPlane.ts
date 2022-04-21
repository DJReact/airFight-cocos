import { _decorator, Component, Node } from "cc";
import { Constant } from "../framework/Constant";
const { ccclass, property } = _decorator;

const OUTOFBOUNCE = 50;

@ccclass("EnemyPlane")
export class EnemyPlane extends Component {
  private _enemySpeed = 3;
  // 敌人类型

  start() {}

  update(deltaTime: number) {
    let pos = this.node.position;
    let movePos = pos.z + this._enemySpeed;
    this.node.setPosition(pos.x, pos.y, movePos);

    if (movePos >= OUTOFBOUNCE) {
      this.node.destroy();
    }
  }

  show(speed: number) {
    this._enemySpeed = speed;
  }
}
