
const order500=(value)=>{
  if(value===500){
    console.log('500--->')
  }else{
    return 'next'
  }
}

const order200=(value)=>{
  if(value===200){
    console.log('200--->')
  }else{
    return 'next'
  }
}

const order=(value)=>{
  if(value!==200||value!==500){
    console.log('normal--->')
  }else{
    console.log('没有命中')
  }
}

// 如果没有到下一个 after，则返回当前函数
// 如果当前节点无法处理，需要能够返回一个可以继续执行的函数

Function.prototype.after=function(fn){
  let self=this; 
  return function(){
    console.log("self-->",self)
    console.log("this-->",this)
   let ret=self.apply(this,arguments);
   if(ret==='next'){
     return fn.apply(this,arguments);
   }
   return ret;
  }

}

let chainOrder = order500.after(order200).after(order);

// 调用
chainOrder(200);// 200--->


