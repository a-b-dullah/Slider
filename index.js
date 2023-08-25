// // let images=Array.from(document.querySelectorAll(".Slider img"))
// // let SlideCounter=images.length;
// // let Curont=1;
// // let Slide_Number=document.querySelector(".Slide_Number");
// // let prev=document.querySelector(".Slider_Controls .prev")
// // let next=document.querySelector(".Slider_Controls .next")
// // let indicators=document.querySelector(".indicators")
// // next.onclick=nextbutton
// // prev.onclick=PrevButton
// // let Creat=document.createElement('ul');
// // Creat.className="Creat"
// // for(let i=1;i<=SlideCounter;i++){
// //     let ulli=document.createElement('li');
// //     ulli.setAttribute("data_index",i)
// //     Creat.appendChild(ulli);
// //     let text=document.createTextNode(i);
// //     ulli.appendChild(text)
// // }
// // indicators.appendChild(Creat)
// // let ullis=Array.from(document.querySelectorAll(".indicators .Creat  li"))
// // for(let i=0;i<ullis.length;i++){
// //     ullis[i].onclick=function(){
// //        Curont=parseInt( ullis[i].getAttribute("data_index")) 
// //        theCheaker()
// //     }
// // }
// // theCheaker()
// // function nextbutton(){
// // if(Curont===SlideCounter){
// // return false
// // }else{
// //     Curont++  
// //     theCheaker()
// // }
// // }
// // function PrevButton(){
// //   if(Curont<=1){
// //         return false
// //   }else{
// //     Curont--
// //     theCheaker()
// //   }
// // }
// // function theCheaker(){
// //     Slide_Number.textContent='Slide'+ " "  +(Curont) +" "+'of the'+' '+(SlideCounter)
// //     remover()
// //     images[Curont-1].classList.add("active");
// //     Creat.children[Curont-1].classList.add("active")
// //     Dis()
// // }
// // function remover(){
// //      images.forEach(img=>{
// //         img.classList.remove('active')
// //      })
// //      ullis.forEach(function(li){
// //         li.classList.remove("active")
// //      })
// // }
// // function Dis(){
// //     if(Curont===1){
// //         prev.classList.add("displayed")
// //     }else{
// //         prev.classList.remove("displayed")
// //     }  
// //       if(Curont===SlideCounter){
// //         next.classList.add("displayed")
// //     }else{
// //         next.classList.remove("displayed")
// //     }
// // }

// // GET the Element
// let Slide_Number=document.querySelector(".Slide_Number");
// let images=Array.from(document.querySelectorAll(".Slider img"))
// let prev=document.querySelector(".Slider_Controls .prev");
// let indicators=document.querySelector(".Slider_Controls .indicators")
// let next=document.querySelector(".Slider_Controls .next");
// let Curont=1;
// let Slidelen=images.length;

// next.onclick=Next;
// prev.onclick=Prev;
// function Next(){

// if(Curont===Slidelen){
//     return false
// }else{
//     Curont++
//     theCheaker()
// }
// }
// function Prev(){
//     if(Curont<=1){
//         return false
//     }else{
//         Curont--
//         theCheaker()
//     }
    
// }
// // *************
// // Creat the ul 
// let ul=document.createElement("ul");
// ul.className='Items'
// for(let i=1;i<=Slidelen;i++){
// let li=document.createElement("li");
// li.setAttribute("data_Index",i);
// let text=document.createTextNode(i);
// li.appendChild(text);
// ul.appendChild(li)

// }indicators.appendChild(ul)

// let ullis=Array.from(document.querySelectorAll('.indicators .Items  li'))
// for(let i=0;i<ullis.length;i++){
//     ullis[i].onclick=function(){
//     Curont=parseInt(ullis[i].getAttribute("data_Index"))
//     theCheaker()
//     }
// }
// // *********
// // Start thg Function
// function theCheaker(){
//     Slide_Number.textContent=`Slide is ${Curont} of ${Slidelen} `
//     images.forEach((img)=>{
//         img.classList.remove('active')
//     })
//     ullis.forEach((li)=>{
//         li.classList.remove('active')
//     })
//     if(Curont===1){
//         prev.classList.add("displayed")
//     }else{
//         prev.classList.remove("displayed") 
//     }
//     if(Curont===Slidelen){
//         next.classList.add("displayed")
//     }else{
//         next.classList.remove("displayed")   
//     }
//     images[Curont-1].classList.add("active")
//     ul.children[Curont-1].classList.add("active")
// }
// theCheaker
// // End the Function









let Slide_Number=document.querySelector('.Slide_Number');
let imgs=Array.from(document.querySelectorAll("img"));
let Prev=document.querySelector(".Prev");
let CreeatUl=document.querySelector(".CreeatUl");
let next=document.querySelector(".Next");
let Curont=1;
let lengths=imgs.length;

// Creat the Ul

let ul=document.createElement("ul")
ul.className="Ul"
for(let i=1;i<=imgs.length;i++){
    let ulil=document.createElement("li");
    let text=document.createTextNode(i)
    ulil.setAttribute("data_Index",i)
    ulil.appendChild(text)
    ul.appendChild(ulil)
}
CreeatUl.appendChild(ul)
ul.children[Curont-1].classList.add("active")

let array=Array.from(document.querySelectorAll("Ul li"));
array.forEach(function(li){
    li.addEventListener('click',function(){
        Curont=parseInt(li.getAttribute('data_Index'))
        theCheaker()
    })
})

function theCheaker(){
    Slide_Number.textContent= `Slide is ${Curont} of ${lengths}`
    remove();
    imgs[Curont-1].classList.add("actvie")
    array[Curont-1].classList.add("active")
    if(Curont===1){
        Prev.classList.add('dis')
    }else{
        Prev.classList.remove('dis')
        
    }
    if(Curont===lengths){
        next.classList.add('dis')
    }else{
        next.classList.remove('dis')
        
    }

}
function remove(){
    imgs.forEach(function(img){
        img.classList.remove("actvie")
    })
    array.forEach(function(li){
            li.classList.remove("active")
        
    })

}
Prev.onclick=Prevr;
next.onclick=Nextr;

function Nextr(){
 
   if(Curont===lengths){
    return false
   }else{
    Curont++
    theCheaker()
   }
}

function Prevr(){
    if(Curont===1){
        return false
       }else{
        Curont--
        theCheaker()
       } 
}
theCheaker()


