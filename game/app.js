
let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector("#resbtn");
let newbtnn=document.querySelector(".newbtn");
let msgcon=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");


 let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ];
   
   let turno=true;


   const resertgame=()=>{
    turno=true;
    enabelbox();
      msgcon.classList.add("hide");
    
   }

boxes.forEach((box)=>{
    box.addEventListener ("click", () => {
    console.log("box was clicked")
      if(turno){
        box.innerText="X";
        box.style.color="#FF6B35";
        turno=false;
      }  else{
        box.innerText="O";
        box.style.color="#3A86F";
        turno=true;
      }
      box.disabled = true;

      checkwinner();
   });
})
     const disabledboxes=()=>{
      for(let box of boxes){
        box.disabled= true;
      }
     }
        const enabelbox=()=>{
      for(let box of boxes){
        box.disabled= false;
        box.innerText="";
      }
     }




     const showWinner=(winner) =>{
      msg.innerText=`Congratulation, Winner is ${winner}`;
      msgcon.classList.remove("hide");
       disabledboxes();
     }



  const checkwinner= () =>{
    for(let pattern of arr)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner");
                showWinner(pos1);
            }
          }
        }
    }

newbtnn.addEventListener("click",resertgame);
resbtn.addEventListener("click",resertgame);
