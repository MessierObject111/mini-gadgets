//ES5
class ArrayUtils {
  removeDups (arr){
    var _arr = [], _arrayIds = [];
    for(var i=0; i<arr.length; i++){
      //If the element is new
      if(_arrayIds.indexOf(arr[i].id) === -1){
        _arr.push(arr[i]);
        _arrayIds.push(arra[i].id);
      }
      //If element already showed up before
      //Do nothing
    }
    return _arr;
  }
}
//Classic JavaScript
var ArrayUtils = function(){
  return {
    removeDups: function(arr){
      var _arr = [], _arrayIds = [];
      for(var i=0; i<arr.length; i++){
        //If the element is new
        if(_arrayIds.indexOf(arr[i].id) === -1){
          _arr.push(arr[i]);
          _arrayIds.push(arr[i].id);
        }
        //If element already showed up before
        //Do nothing
      }
      return _arr;
    }
  };
}();
