// 枚举
import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

// 不用继承component、因为不是组件
export class Constant {
  // 敌机类型
  public static EnemyType = {
    TYPE1: 1,
    TYPE2: 2,
  };
  // 敌机组合
  public static Combination = {
    Plan1: 1,
    Plan2: 2,
    Plan3: 3,
  };
}
