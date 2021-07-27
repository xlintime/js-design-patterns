Function.prototype.before = function (beforeFn) {
  let self = this; // 调用的函数
  return function () {
    beforeFn.apply(this, arguments); // this window
    return self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  let self = this;
  return function () {
    const ret = self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  };
};

const beforeCall = function(value){
  console.log('before'+value)
}

const afterCall = function(value){
  console.log('after'+value)
}

const normal=function(value){
  console.log('normal'+value)
}

normal.before(beforeCall).after(afterCall)(111)