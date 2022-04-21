// 玩家、子弹、敌人统一管理
import { _decorator, Component, Node, Prefab, instantiate, math } from "cc";
import { Bullet } from "../bullet/Bullet";
import { EnemyPlane } from "../plane/EnemyPlane";
import { Constant } from "./Constant";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  @property(Node)
  // 玩家
  public playPlane: Node = null;
  @property(Prefab)
  // 子弹
  public bullet01: Prefab = null;
  @property(Prefab)
  public bullet02: Prefab = null;
  @property(Prefab)
  public bullet03: Prefab = null;
  @property(Prefab)
  public bullet04: Prefab = null;
  @property(Prefab)
  public bullet05: Prefab = null;

  // 设置子弹射击速度
  @property
  public shootTime = 0.1;
  // 设置子弹速度
  @property
  public bulletSpeed = 1;
  // 设置子弹管理节点
  @property(Node)
  public bulletRoot: Node = null;

  // 敌人
  @property(Prefab)
  public enemy01: Prefab = null;
  @property(Prefab)
  public enemy02: Prefab = null;
  @property
  public createEnemyTime = 1;
  @property
  public enemy1Speed = 0.5;
  @property
  public enemy2Speed = 0.7;
  // 私有
  private _currShootTime = 0;
  private _isShooting = false;
  // 敌人
  private _currCreateEnemyTime = 0;
  private _combinationInterval = Constant.Combination.Plan1;

  private _init() {
    this._currShootTime = this.shootTime;
    this._changePlaneMode();
  }

  private _changePlaneMode() {
    this.schedule(this._modeChange, 10, 3);
  }
  // 计数
  private _modeChange() {
    this._combinationInterval++;
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

  public createEnemyPlane() {
    const whileEnemy = math.randomRangeInt(1, 3);
    let prefab: Prefab = null;
    let speed = 0;
    if (whileEnemy === Constant.EnemyType.TYPE1) {
      prefab = this.enemy01;
      speed = this.enemy1Speed;
    } else {
      prefab = this.enemy02;
      speed = this.enemy2Speed;
    }
    // 新增节点
    const enemy = instantiate(prefab);
    // 添加到gameManager父节点下
    enemy.setParent(this.node);
    // 获取它身上的组件
    const enemyComp = enemy.getComponent(EnemyPlane);
    enemyComp.show(speed);
    let x = math.randomRangeInt(-25, 25);
    enemy.setPosition(x, 0, -50);
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

    if (this._combinationInterval === Constant.Combination.Plan1) {
      this._currCreateEnemyTime += time;
      if (this._currCreateEnemyTime > this.createEnemyTime) {
        this.createEnemyPlane();
        this._currCreateEnemyTime = 0;
      }
    } else if (this._combinationInterval === Constant.Combination.Plan2) {
    }
  }
}
