import { _decorator, Component, Node, input, Input, EventTouch } from "cc";
import { GameManager } from "../framework/GameManager";
const { ccclass, property } = _decorator;

@ccclass("uiMain")
export class uiMain extends Component {
  @property
  public playerSpeed = 1;
  @property(Node)
  player: Node = null;
  // note
  @property(GameManager)
  public gameManager: GameManager = null;
  start() {
    this.node.on(Input.EventType.TOUCH_START, this._touchStart, this);
    this.node.on(Input.EventType.TOUCH_END, this._touchEnd, this);
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
  _touchStart(event: EventTouch) {
    this.gameManager.isShooting(true);
  }
  _touchEnd(event: EventTouch) {
    this.gameManager.isShooting(false);
  }
}
