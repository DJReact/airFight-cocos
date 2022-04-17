import { _decorator, Component, Node, input, Input, EventTouch } from "cc";
const { ccclass, property } = _decorator;

@ccclass("uiMain")
export class uiMain extends Component {
  @property
  public playerSpeed = 1;
  @property(Node)
  player: Node = null;
  start() {
    //  节点监听
    this.node.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
  }
  // 玩家移动
  _touchMove(event: EventTouch) {
    //  获得上次触摸的距离
    const delta = event.getDelta();
    let pos = this.player.position;
    this.player.setPosition(
      pos.x + 0.01 * this.playerSpeed * delta.x,
      pos.y,
      pos.z - 0.01 * this.playerSpeed * delta.y
    );
  }
}
