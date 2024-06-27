# angular 的优化

## ng问题的识别

通过 chrome devtool来观察组件在 检测变更 上花费的时间，更进一步，可以观察到某个组件的生命周期钩子所花费的时间。


## ng优化方法
### angular 的 zone polution 区域污染的问题
通常在使用有一些第三方的库的时候，会自动触发ng的自动变化检测，需要让其在ngZone之外运行，避免ng启动change detection机制

### 使用 管道 或者 memorization
* 将计算量大的过程移除到到管道，避免生命周期某个过程的计算速度很慢。从而影响到整个组件的渲染。
* 或者使用memorization来做缓存处理，加快计算过程。

##  某些组件为了减少不必要的重新渲染，可以设置组件为OnPush 
```
import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyComponent {}
```

当组件的**变更检测策略**设置为 `OnPush` 的时候， 则只有当组件的输入属性（Input）发生变化的时候，才进行组件重新渲染。从而可以避免对组件进行不必要的变更检查。


