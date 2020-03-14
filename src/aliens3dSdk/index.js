/*
 * @Author: g05047
 * @Date: 2020-03-14 15:45:39
 * @LastEditors: g05047
 * @LastEditTime: 2020-03-14 15:51:33
 * @Description: file content
 */
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
class Aliens3dMap extends mix() {
  constructor(props) {
    super(props);
  }
  // ...
}

export default Aliens3dMap;
