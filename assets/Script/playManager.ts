import {
  _decorator,
  Component,
  Node,
  EventTouch,
  systemEvent,
  SystemEvent,
  input,
  Input,
  Touch,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("playManager")
export class playManager extends Component {
  // 移动速度
  @property
  public speed = 1;
  start() {
    // 触摸中
    input.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
    // systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
  }

  _touchMove(event: EventTouch) {
    //  获得上次触摸的距离
    const delta = event.getDelta();
    let pos = this.node.position;
    this.node.setPosition(
      pos.x + 0.01 * this.speed * delta.x,
      pos.y,
      pos.z - 0.01 * this.speed * delta.y
    );
  }
}
