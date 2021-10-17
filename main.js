function colorOf(r,g,b){
  //code here
  let re = convert(r);
  let gr = convert(g);
  let bl = convert(b);
  let color = '#' + re + gr + bl;
 
  return color;
}

function convert(color){
  var color1 = color.toString(16);
  if(color1.length === 1){
    color1 = "0"+color1;
  }
  return color1;
}
