
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

const Chain=function(fn){
  this.fn=fn;
  this.successor=null;
}
Chain.prototype.setSuccessor=function(successor){
  console.log("successor-->",successor)
    this.successor=successor; // 这里return 没有什么用
   console.log("this.successor-->",this)
}
Chain.prototype.passRequest=function(){
  let ret=this.fn.apply(this,arguments);
  if(ret==='next'){
  return this.successor&&this.successor.passRequest.apply(this.successor,arguments);

  }
  return ret;

}

let chainOrder500=new Chain(order500);
let chainOrder200=new Chain(order200);
let chainOrder=new Chain(order);

chainOrder500.setSuccessor(chainOrder200);
chainOrder200.setSuccessor(chainOrder);
chainOrder500.passRequest(200)