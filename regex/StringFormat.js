let _date='20180423230356';
/**
 * Format the given string to date display.
 */
function formatStr(str){
    return str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3 $4:$5:$6")
}
formatStr(_date);
//Returns '2018-04-23 23:03:56'

/**
 * Another way to format the string.
 */
function formatStr(str, type){
  let i = 0, _type = type || "xxxx-xx-xx xx:xx:xx";
  return _type.replace(/x/g, ()=> str[i++]);
}
//Returns '2018-04-23 23:03:56'

//The above function uses ES5 arrow function: it equals to the function below:
function formatStr(str,type){
    let i = 0,_type = type||"xxxx-xx-xx xx:xx:xx";
    return _type .replace(/x/g, function() {return str[i++]})
}

//String.replace(oldValue/regex, newValue) in JavaScript
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");
//The second parameter can also be a function that returns new value.
let str = "Mr Blue has a blue house and a blue car";
let res = str.replace(/blue|house|car/gi, function (x) {
    return x.toUpperCase();
});
//Returns 'Mr BLUE has a BLUE HOUSE and a BLUE CAR.'
