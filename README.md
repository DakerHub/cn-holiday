# CN-HOLIDAY

> cn-holiday.js是一个基于国务院发布的每年的节假日的一个日期库，包含了对节假日（三倍工资），休息日（双倍工资）和工作日（包括国家规定调休）的查询api。

> 目前支持2011-2018年的节假日查询

## Installation

NPM:
```bash
$ npm install cn-holiday --save
```

## Getting Started

```javascript
import ch from 'cn-holiday'

ch.isHoliday('2018-10-1')
```

## API

* [isHoliday](#isholiday)
* [isWorkday](#isworkday)
* [isRestday](#isrestday)
* [getHolidaysBetween](#getholidaysbetween)

### isHoliday
> 判断一个日期是否为法定节假日
- date string|timestamp|Date 日期
- 返回：boolean
```javascript
ch.isHoliday('2018-5-1')
// true
```

### isWorkday
> 判断一个日期是否为工作日（包括法定调休）
- date string|timestamp|Date 日期
- 返回：boolean
```javascript
ch.isWorkday('2018-4-28')
// true
```

### isRestday
> 判断一个日期是否为法定休息日（除开正常双休）
- date string|timestamp|Date 日期
- 返回：boolean
```javascript
ch.isRestday('2018-4-30')
// true
```

### getHolidaysBetween
> 获取两个日期之间的所有法定节假日
- date1 string|timestamp|Date 日期1
- date2 string|timestamp|Date 日期2
- 返回：Array
```javascript
ch.getHolidaysBetween('2018-10-1', '2018-10-3')
// ['2018-10-01','2018-10-02','2018-10-03']
```

## License
MIT