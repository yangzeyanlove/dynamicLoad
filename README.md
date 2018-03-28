# dynamicLoad

#### 如何使用
import dynamicLoad from './dynamicLoad.js'

1. 加载css
```javascript
dynamicLoad.loadStyle('a.css')
dynamicLoad.loadStyle(['a.css', 'b.css'])
```

2. 加载JavaScript
```javascript
dynamicLoad.loadScript([
  'a.js',
  'b.js'
], function () {
  // do something ...
})
```
