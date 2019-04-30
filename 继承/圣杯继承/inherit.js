function inherit(Target, Origin){
  function F() {};
  F.prototype = Origin.prototype;
  Target.prototype = new F();
  Target.prototype.constuctor = Target;  // constuctor归位
  Target.prototype.uber = Origin.prototype; // 信息储备，想知道继承自谁，先记录下来
}