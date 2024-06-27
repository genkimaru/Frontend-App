Angular 中组件的生命周期钩子方法按照执行顺序如下:

1. `ngOnChanges(changes: SimpleChanges)`: 
   - 在组件的输入属性值发生变化时被调用。
   - 首次调用是在 `ngOnInit` 之前。

2. `ngOnInit()`: 
   - 在组件初始化完成后被调用。
   - 仅在第一次调用 `ngOnChanges` 之后执行一次。

3. `ngDoCheck()`: 
   - 在每次change detection运行时被调用。
   - 可以用来实现自定义的change detection逻辑。

4. `ngAfterContentInit()`:
   - 在组件内容初始化完成后被调用。
   - 仅在第一次 `ngDoCheck` 之后执行一次。

5. `ngAfterContentChecked()`:
   - 在每次组件内容检查完成后被调用。
   - 在 `ngAfterContentInit` 之后以及每次 `ngDoCheck` 之后都会执行。

6. `ngAfterViewInit()`:
   - 在组件视图及其子视图初始化完成后被调用。
   - 仅在第一次 `ngAfterContentChecked` 之后执行一次。

7. `ngAfterViewChecked()`:
   - 在每次组件视图和子视图检查完成后被调用。
   - 在 `ngAfterViewInit` 之后以及每次 `ngAfterContentChecked` 之后都会执行。

8. `ngOnDestroy()`:
   - 在组件销毁前被调用。
   - 可以在此处清理资源、取消订阅等操作。

这些生命周期钩子方法可以让开发者在组件的不同生命周期阶段执行特定的逻辑,从而更好地控制组件的行为和状态。开发者可以根据需求选择性地实现这些钩子方法。