import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("movingSceneManager")
export class movingSceneManager extends Component {
  @property(Node)
  bg1: Node = null; // 背景1
  @property(Node)
  bg2: Node = null; // 背景2

  private _bgSpeed = 10;
  private _bgMovingRange = 90;
  start() {
    this._initPos();
  }
  update(time: number) {
    this._moveBg(time);
  }

  private _initPos() {
    this.bg1.setPosition(0, 0, 0);
    this.bg2.setPosition(0, 0, -90);
  }
  private _moveBg(time: number) {
    this.bg1.setPosition(0, 0, this.bg1.position.z + this._bgSpeed * time);
    this.bg2.setPosition(0, 0, this.bg2.position.z + this._bgSpeed * time);
    // 超出范围
    if (this.bg1.position.z > this._bgMovingRange) {
      this.bg1.setPosition(0, 0, this.bg2.position.z - this._bgMovingRange);
    } else if (this.bg2.position.z > this._bgMovingRange) {
      this.bg2.setPosition(0, 0, this.bg1.position.z - this._bgMovingRange);
    }
  }
}
