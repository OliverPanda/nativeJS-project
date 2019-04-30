var inherit = (function(){
  var F = function(){};       //  将F当作私有变量
  return function (Target, Origin){
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constuctor = Target;
    Target.prototype.uber = Origin.prototype;
  }
}())