
const Plane=function(){}

Plane.prototype.fire=function(){
  console.log("normal plane fire")
}

const MissileDecotator=function(plane){
  this.plane=plane;
}
MissileDecotator.prototype.fire=function(){
  this.plane.fire();
  console.log("missile plane fire")
}

const AtomDecotator=function(){
  this.plane=plane;
}
AtomDecotator.prototype.fire=function(){
  this.plane.fire();
  console.log("atom plane fire")
}

let plane=new Plane();
 plane=new MissileDecotator(plane);
 plane=new AtomDecotator(plane);
 plane.fire();