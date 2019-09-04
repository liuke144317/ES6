/*正则表达式拓展*/
// var s = 'aaa_aa_a';
/*+号是贪婪的*/
/*var regExp1 = /a+/g;
var regExp2 = /a+/y;
console.log('regExp1.exec(s)',regExp1.exec(s))
console.log('regExp1.exec(s)',regExp1.exec(s))
console.log('regExp1.exec(s)',regExp1.exec(s))*/

/*后行断言*/
/**
 * 要紧跟断言字符
 * @type {RegExp}
 */
/*var RE_DOLLAR_PREFIX = /(?<=\$)foo/g
console.log('$foo $foo foo'.replace(RE_DOLLAR_PREFIX, 'bar'));*/

// console.log(/(?<=(\d+)(\d+))$/.exec('1053'));

/**
 * 测试exec()方法
 */
// console.log((/(\d+)(\d+)/).exec('1053'))//第一个\d+是贪婪的，但是第二个\d+又是至少一个
// console.log((/\d+?/).exec('1053'))//非贪婪模式，从最少量匹配

/*正则表达式的具名组匹配结合解构赋值*/
/*let regExp = /(?<val1>\d+?)(?<val2>\d+)/
let arr = regExp.exec('123456')
let{groups:{val1,val2}} = arr;//有点生疏
console.log('arr,groups:',arr.groups);
console.log('val1',val1);
console.log('val2',val2);*/


/*
var regex = /t(e)(st(\d?))/g;
var string = 'test1test2test3';
var match;
while (match = regex.exec(string)) {
    console.log(match)
}
*/
/*match的使用*/
/*var regExp = /\d+/g
console.log('a1hhh2jjj3'.match(regExp))*/


