const boxes = document.querySelectorAll("div");

console.log(``)

const randomColor = function (){
   
for(let i = 0; i<=boxes.length-1; i++){
    boxes[i].style.backgroundColor=`rgba(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`
    boxes[i].style.transform=`translate(${Math.ceil(Math.random()*50)}%,${Math.ceil(Math.random()*50)}%) scale(${Math.random()*1.5})` 

}
}

const getRandomColor = setInterval(randomColor,200)




// if(boxes[0].style.backgroundColor=="" ){        
//     boxes[0].style.backgroundColor="red";
//     boxes[3].style="background-color:white;"        
// }else if(boxes[0].style.backgroundColor=="red"){ 
//     boxes[0].style.backgroundColor="white";      
//     boxes[1].style.backgroundColor="red";
// }else if(boxes[1].style.backgroundColor=="red"){ 
//     boxes[1].style.backgroundColor="white";      
//     boxes[2].style.backgroundColor="red";
// }else if(boxes[2].style.backgroundColor=="red"){ 
//     boxes[2].style.backgroundColor="white";      
//     boxes[3].style.backgroundColor="red";        
// }else if(boxes[3].style.backgroundColor=="red"){ 
//    console.log("hello")       
//    boxes[0].style.backgroundColor="";
//     }  