# ng国际化

## 引入@angular/localize
```
ng add @angular/localize
```

## 在需要进行国家化的地方使用$localize 函数
```
<h1>{{ $localize`:@@welcome-message:Welcome to my app!` }}</h1>
```
## 提取需要国际化的文本到 locale目录下。
```
ng extract-i18n --output-path src/locale
```

## 添加其他语言 
用xlf编辑器编辑locale下的生成文本，加入其他需要的语言。

## 在angular.JSON中配置目标语言
```
"i18n": {
  "sourceLocale": "en-US",
  "locales": {
    "zh-CN": "src/locale/messages.zh-CN.xlf",
    "fr-FR": "src/locale/messages.fr-FR.xlf"
  }
}
```
## 测试
```
ng serve --configuration=zh-CN
```
