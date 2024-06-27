在父元素中定义：
```css
style{
    display: grid;
    grid-template-column: 1fr 1fr 1fr OR repeat(3 , 1fr ) OR repeat(auto-fill , 200px);
    grid-template-row: 1fr 1fr 1fr OR repeat(3 , 1fr) OR repeat(auto-fill , 200px);
    grid-gap : 10px;
}
```

在子元素中定义**第一行 第一列**如下：
```css
style {
    grid-row: 1;
    grid-column: 1; 
}
```
在子元素中定义**第1行 第1 到 3 列**如下：
```css
style {
    grid-row: 1; 
    grid-column: 1 / 4 ;
}
```
**注意** 1 到 3列表示为  1/ 4 ,含头不含尾。