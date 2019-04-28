# yao-stringutils

字符串处理工具，诸如'contains', 'toLength', 'getLeft', 'getLeftOuter', 'getRight', 'getRightOuter', 'getSection', 'getSectionOuter'……函数。
持续更新中……

```
npm install yao-stringutils
```

## 引入模块
```
const { StringUtils, bindStringPrototype }  = require('yao-stringutils');
```

## StringUtils

```
console.log('=== toString(obj) =========================================')
console.log('toString', StringUtils.toString(undefined))
console.log('toString', StringUtils.toString(null))
console.log('toString', StringUtils.toString(NaN))
console.log('toString', StringUtils.toString(NaN, { _NaN_: 'NaN' }))
console.log('toString', StringUtils.toString(false))
console.log('toString', StringUtils.toString(true))
console.log('toString', StringUtils.toString([]))
console.log('toString', StringUtils.toString({}))
console.log()

console.log('=== contains(str, substr) =========================================')
console.log('contains', StringUtils.contains(undefined, ''))
console.log('contains', StringUtils.contains(null, ''))
console.log('contains', StringUtils.contains(NaN, ''))
console.log('contains', StringUtils.contains(false, ''))
console.log('contains', StringUtils.contains('abc', ''))
console.log('contains', StringUtils.contains('abc', 'b'))
console.log()

console.log('=== isEmpty(obj) =========================================')
console.log('isEmpty', StringUtils.isEmpty(undefined))
console.log('isEmpty', StringUtils.isEmpty(null))
console.log('isEmpty', StringUtils.isEmpty(NaN))
console.log('isEmpty', StringUtils.isEmpty(false))
console.log('isEmpty', StringUtils.isEmpty(true))
console.log('isEmpty', StringUtils.isEmpty([]))
console.log('isEmpty', StringUtils.isEmpty({}))
console.log()

console.log('=== isTrimEmpty(obj) =========================================')
console.log('isTrimEmpty', StringUtils.isTrimEmpty(undefined))
console.log('isTrimEmpty', StringUtils.isTrimEmpty(null))
console.log('isTrimEmpty', StringUtils.isTrimEmpty(NaN))
console.log('isTrimEmpty', StringUtils.isTrimEmpty(false))
console.log('isTrimEmpty', StringUtils.isTrimEmpty(true))
console.log('isTrimEmpty', StringUtils.isTrimEmpty([]))
console.log('isTrimEmpty', StringUtils.isTrimEmpty({}))
console.log()

console.log('=== allNotEmpty(arr) =========================================')
console.log('allNotEmpty', StringUtils.allNotEmpty(undefined))
console.log('allNotEmpty', StringUtils.allNotEmpty(null))
console.log('allNotEmpty', StringUtils.allNotEmpty(NaN))
console.log('allNotEmpty', StringUtils.allNotEmpty([]))
console.log('allNotEmpty', StringUtils.allNotEmpty(''))
console.log('allNotEmpty', StringUtils.allNotEmpty(['a', 'b']))
console.log('allNotEmpty', StringUtils.allNotEmpty(['a', 'b', ' ']))
console.log('allNotEmpty', StringUtils.allNotEmpty(['a', 'b', '']))
console.log('allNotEmpty', StringUtils.allNotEmpty(['a', 'b', null]))
console.log()

console.log('=== allNotTrimEmpty(arr) =========================================')
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty(undefined))
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty(null))
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty(NaN))
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty([]))
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty(''))
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty(['a', 'b']))
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty(['a', 'b', ' ']))
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty(['a', 'b', '']))
console.log('allNotTrimEmpty', StringUtils.allNotTrimEmpty(['a', 'b', null]))
console.log()

console.log('=== toLength(str, len, options) =========================================')
console.log('toLength', '|', StringUtils.toLength('abc', 8), '|')
console.log('toLength', '|', StringUtils.toLength('abcdefghijk', 8), '|')
console.log('toLength', '|', StringUtils.toLength('abc', 8, { align: -1 }), '|')
console.log('toLength', '|', StringUtils.toLength('abc', 8, { align: 0 }), '|')
console.log('toLength', '|', StringUtils.toLength('abc', 8, { align: 1 }), '|')
console.log('toLength', '|', StringUtils.toLength('abc', 8, { align: -1, filler: '-' }), '|')
console.log('toLength', '|', StringUtils.toLength('abc', 8, { align: 0, filler: '-' }), '|')
console.log('toLength', '|', StringUtils.toLength('abc', 8, { align: 1, filler: '-' }), '|')
console.log('toLength', '|', StringUtils.toLength('abcdefghijk', 8, { ellipsis: '' }), '|')
console.log('toLength', '|', StringUtils.toLength('abcdefghijk', 8, { ellipsis: '.' }), '|')
console.log('toLength', '|', StringUtils.toLength('abcdefghijk', 8, { ellipsis: '..' }), '|')
console.log('toLength', '|', StringUtils.toLength('abcdefghijk', 8, { ellipsis: '...' }), '|')
console.log()

console.log('=== getLeft(str, pos) =========================================')
console.log('getLeft', StringUtils.getLeft('aaa|bbb|ccc|ddd|eee', '|'))
console.log('getLeft', StringUtils.getLeft('aaa', '|'))
console.log('getLeft', StringUtils.getLeft(null, '|'))
console.log('getLeft', StringUtils.getLeft('aaa', null))
console.log('getLeft', StringUtils.getLeft('aaa', ''))
console.log()

console.log('=== getLeftOuter(str, pos) =========================================')
console.log('getLeftOuter', StringUtils.getLeftOuter('aaa|bbb|ccc|ddd|eee', '|'))
console.log('getLeftOuter', StringUtils.getLeftOuter('aaa', '|'))
console.log('getLeftOuter', StringUtils.getLeftOuter(null, '|'))
console.log('getLeftOuter', StringUtils.getLeftOuter('aaa', null))
console.log('getLeftOuter', StringUtils.getLeftOuter('aaa', ''))
console.log()

console.log('=== getRight(str, pos) =========================================')
console.log('getRight', StringUtils.getRight('aaa|bbb|ccc|ddd|eee', '|'))
console.log('getRight', StringUtils.getRight('aaa', '|'))
console.log('getRight', StringUtils.getRight(null, '|'))
console.log('getRight', StringUtils.getRight('aaa', null))
console.log('getRight', StringUtils.getRight('aaa', ''))
console.log()

console.log('=== getRightOuter(str, pos) =========================================')
console.log('getRightOuter', StringUtils.getRightOuter('aaa|bbb|ccc|ddd|eee', '|'))
console.log('getRightOuter', StringUtils.getRightOuter('aaa', '|'))
console.log('getRightOuter', StringUtils.getRightOuter(null, '|'))
console.log('getRightOuter', StringUtils.getRightOuter('aaa', null))
console.log('getRightOuter', StringUtils.getRightOuter('aaa', ''))
console.log()

console.log('=== getSection(str, left, right) =========================================')
console.log('getSection', StringUtils.getSection('aaa|bbb|ccc|ddd|eee', '|', '|'))
console.log('getSection', StringUtils.getSection('aaa', '|', '|'))
console.log('getSection', StringUtils.getSection(null, '|', '|'))
console.log('getSection', StringUtils.getSection(undefined, '|', '|'))
console.log('getSection', StringUtils.getSection('aaa|bbb|ccc|ddd|eee', '|', null))
console.log('getSection', StringUtils.getSection('aaa|bbb|ccc|ddd|eee', null, '|'))
console.log('getSection', StringUtils.getSection('aaa|bbb|ccc|ddd|eee', '|', ''))
console.log('getSection', StringUtils.getSection('aaa|bbb|ccc|ddd|eee', '', '|'))
console.log('getSection', StringUtils.getSection('aaa|bbb|ccc|ddd|eee', '', ''))
console.log()

console.log('=== getSectionOuter(str, left, right) =========================================')
console.log('getSectionOuter', StringUtils.getSectionOuter('aaa|bbb|ccc|ddd|eee', '|', '|'))
console.log('getSectionOuter', StringUtils.getSectionOuter('aaa', '|', '|'))
console.log('getSectionOuter', StringUtils.getSectionOuter(null, '|', '|'))
console.log('getSectionOuter', StringUtils.getSectionOuter(undefined, '|', '|'))
console.log('getSectionOuter', StringUtils.getSectionOuter('aaa|bbb|ccc|ddd|eee', '|', null))
console.log('getSectionOuter', StringUtils.getSectionOuter('aaa|bbb|ccc|ddd|eee', null, '|'))
console.log('getSectionOuter', StringUtils.getSectionOuter('aaa|bbb|ccc|ddd|eee', '|', ''))
console.log('getSectionOuter', StringUtils.getSectionOuter('aaa|bbb|ccc|ddd|eee', '', '|'))
console.log('getSectionOuter', StringUtils.getSectionOuter('aaa|bbb|ccc|ddd|eee', '', ''))
console.log()
```
输出
```
=== toString(obj) =========================================
toString 
toString 
toString 
toString NaN
toString false
toString true
toString 
toString [object Object]

=== contains(str, substr) =========================================
contains false
contains false
contains true
contains true
contains true
contains true

=== isEmpty(obj) =========================================
isEmpty true
isEmpty true
isEmpty true
isEmpty false
isEmpty false
isEmpty true
isEmpty false

=== isTrimEmpty(obj) =========================================
isTrimEmpty true
isTrimEmpty true
isTrimEmpty true
isTrimEmpty false
isTrimEmpty false
isTrimEmpty true
isTrimEmpty false

=== allNotEmpty(arr) =========================================
allNotEmpty false
allNotEmpty false
allNotEmpty false
allNotEmpty false
allNotEmpty false
allNotEmpty true
allNotEmpty true
allNotEmpty false
allNotEmpty false

=== allNotTrimEmpty(arr) =========================================
allNotTrimEmpty false
allNotTrimEmpty false
allNotTrimEmpty false
allNotTrimEmpty false
allNotTrimEmpty false
allNotTrimEmpty true
allNotTrimEmpty false
allNotTrimEmpty false
allNotTrimEmpty false

=== toLength(str, len, options) =========================================
toLength | abc      |
toLength | abcde... |
toLength | abc      |
toLength |   abc    |
toLength |      abc |
toLength | abc----- |
toLength | --abc--- |
toLength | -----abc |
toLength | abcdefgh |
toLength | abcdefg. |
toLength | abcdef.. |
toLength | abcde... |

=== getLeft(str, pos) =========================================
getLeft aaa
getLeft null
getLeft null
getLeft null
getLeft aaa

=== getLeftOuter(str, pos) =========================================
getLeftOuter aaa|bbb|ccc|ddd
getLeftOuter null
getLeftOuter null
getLeftOuter null
getLeftOuter aaa

=== getRight(str, pos) =========================================
getRight eee
getRight null
getRight null
getRight null
getRight aaa

=== getRightOuter(str, pos) =========================================
getRightOuter bbb|ccc|ddd|eee
getRightOuter null
getRightOuter null
getRightOuter null
getRightOuter aaa

=== getSection(str, left, right) =========================================
getSection bbb
getSection null
getSection null
getSection undefined
getSection null
getSection null
getSection bbb|ccc|ddd|eee
getSection aaa
getSection aaa|bbb|ccc|ddd|eee

=== getSectionOuter(str, left, right) =========================================
getSectionOuter bbb|ccc|ddd
getSectionOuter null
getSectionOuter null
getSectionOuter undefined
getSectionOuter null
getSectionOuter null
getSectionOuter bbb|ccc|ddd|eee
getSectionOuter aaa|bbb|ccc|ddd
getSectionOuter aaa|bbb|ccc|ddd|eee
```

## bindStringPrototype()

```
console.log('=== bindStringPrototype() =========================================')
let methods = bindStringPrototype()
console.log('binded', methods.join(','));
console.log('contains'.toLength(20), '|', 'abc'.contains('b'))
console.log('toLength'.toLength(20), '|', 'abc'.toLength(8) + "|")
console.log('getRight'.toLength(20), '|', 'aaa|bbb|ccc|ddd|eee'.getRight('|'))
console.log('getRightOuter'.toLength(20), '|', 'aaa|bbb|ccc|ddd|eee'.getRightOuter('|'))
console.log('getLeft'.toLength(20), '|', 'aaa|bbb|ccc|ddd|eee'.getLeft('|'))
console.log('getLeftOuter'.toLength(20), '|', 'aaa|bbb|ccc|ddd|eee'.getLeftOuter('|'))
console.log('getSection'.toLength(20), '|', 'aaa|bbb|ccc|ddd|eee'.getSection('|', '|'))
console.log('getSectionOuter'.toLength(20), '|', 'aaa|bbb|ccc|ddd|eee'.getSectionOuter('|', '|'))
```
输出
```
=== bindStringPrototype() =========================================
binded contains,toLength,getLeft,getLeftOuter,getRight,getRightOuter,getSection,getSectionOuter
contains             | true
toLength             | abc     |
getRight             | eee
getRightOuter        | bbb|ccc|ddd|eee
getLeft              | aaa
getLeftOuter         | aaa|bbb|ccc|ddd
getSection           | bbb
getSectionOuter      | bbb|ccc|ddd
```