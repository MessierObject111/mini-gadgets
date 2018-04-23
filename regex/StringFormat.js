let _date='20180423230356';
function formatStr(str){
    return str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3 $4:$5:$6")
}
formatStr(_date);
//Returns '2018-04-23 23: 03:56'
