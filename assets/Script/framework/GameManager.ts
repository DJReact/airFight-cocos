import { _decorator, Component, Node, Prefab, instantiate } from "cc";
import { Bullet } from "../bullet/Bullet";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  @property(Node)
  public playPlane: Node = null;
  @property(Prefab)
  public bullet01: Prefab = null;
  @property(Prefab)
  public bullet02: Prefab = null;
  @property(Prefab)
  public bullet03: Prefab = null;
  @property(Prefab)
  public bullet04: Prefab = null;
  @property(Prefab)
  public bullet05: Prefab = null;

  @property
  public shootTime = 0.1;
  @property
  public bulletSpeed = 1;

  @property(Node)
  // 子弹管理节点
  public bulletRoot: Node = null;
  // 私有
  private _currShootTime = 0;
  private _isShooting = false;

  _init() {
    this._currShootTime = this.shootTime;
  }

  public isShooting(value: boolean) {
    this._isShooting = value;
  }

  public createPlayerBullet() {
    const bullet = instantiate(this.bullet01);
    bullet.setParent(this.bulletRoot);
    let pos = this.playPlane.position;
    this.bulletRoot.setPosition(pos.x, pos.y, pos.z);
    // 加载脚本
    const bulletComp = bullet.getComponent(Bullet);
    bulletComp.speed = this.bulletSpeed;
  }
  // 开始
  start() {
    this._init();
  }
  // 更新
  update(time) {
    this._currShootTime += time;
    if (this._isShooting && this._currShootTime > this.shootTime) {
      this.createPlayerBullet();
      this._currShootTime = 0;
    }
  }
}
