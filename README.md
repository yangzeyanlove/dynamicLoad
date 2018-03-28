# dynamicLoad

#### 如何使用

1. 加载css
```javascript
import dynamicLoad from './dynamicLoad.js'

dynamicLoad.loadStyle('a.css')
dynamicLoad.loadStyle(['a.css', 'b.css'])
```

2. 加载JavaScript
```javascript
import dynamicLoad from './dynamicLoad.js'

dynamicLoad.loadScript([
  'a.js',
  'b.js'
], function () {
  // do something ...
})
```
