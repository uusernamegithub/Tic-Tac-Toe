let boxes=document.querySelectorAll(".b");
let resetbtn=document.querySelector("#reset");
let winner=document.querySelector("#before");
let turn_X=true;
let winning_patterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn_X==true)
            {
                box.innerText="X";
                turn_X=false;
            }
            else
            {
                box.innerText="O";
                turn_X=true;
            }
            box.disabled=true;
            if(checkwinner(boxes)==true)
                {   
                    disable_boxes();
                    winner.setAttribute("id","declaring");
                    if(turn_X==true)
                        {   
                            declaring.innerText+="  O ";
                        }
                        else{
                            declaring.innerText+="  X ";
                        }
                    
                }
    })
})

resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
      })
      declaring.innerText="Winner Of the Game  : ";
      winner.setAttribute("id","before");
})

const checkwinner=(boxes)=>{
   for(let i=0;i<winning_patterns.length;i++)
    {
        let val1=boxes[winning_patterns[i][0]].innerText;
        let val2=boxes[winning_patterns[i][1]].innerText;
        let val3=boxes[winning_patterns[i][2]].innerText;
        if(val1!="" && val2!="" && val3!="")
            {
                if(val1===val2 && val2===val3)
                    {
                        return true;
                    }
            }
    }
    return false;
}

const disable_boxes=()=>
    {
        boxes.forEach((box)=>{
          box.disabled=true;
        })
    }