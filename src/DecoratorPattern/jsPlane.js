const plane={
  fire:function(){
    console.log("111")
  }
}

const missileDecotator=function(){
  console.log("222")
}

const atomDecotator=function(){
  console.log("333")
}

let originFire=plane.fire // 保存引用

plane.fire=function(){
  originFire();
  missileDecotator()
}
const missileFire=plane.fire

plane.fire=function(){
  missileFire();
  atomDecotator()
}

plane.fire()