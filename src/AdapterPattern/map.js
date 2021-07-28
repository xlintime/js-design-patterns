const googleMap=()=>{
  show:()=>{
    console.log("show googleMap")
  }
}

const baiduMap=()=>{
  display:()=>{ //假如百度地图的展示方法不是 show，是 display
    console.log("show googleMap")
  }
}

const baiduMapAdapter=()=>{
  show:()=>{
    return baiduMap.display()
  }
}

renderMap(googleMap)
renderMap(baiduMapAdapter)