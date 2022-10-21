const inputField = document.querySelector(".InputField")
console.log(inputField);

const addBtn = document.querySelector(".addBtn")
console.log(addBtn);

const contentWrap = document.querySelector(".contentWrap")
console.log(contentWrap);

const popUpFullScreenWrap = document.querySelector(".popUpFullScreenWrap")
const changeTaskDecisionBtn = document.querySelector(".changeTaskDecisionBtn")


addBtn.addEventListener("click",()=>{
    console.log(inputField.value);
    contentWrap.innerHTML += `
    <div class="content">
    <input type="checkbox" class="checkBox">
    <p class="task">${inputField.value}</p>
    <button type="button" class="remove">削除</button>
    <button type="button" class="changeTaskBtn">編集</button>
</div>
`
    const removeBtn = document.querySelectorAll(".remove")
    const content = document.querySelectorAll(".content")
    const checkBox = document.querySelectorAll(".checkBox")
    // const task = document.querySelectorAll(".task")
    const changeTaskBtn = document.querySelectorAll(".changeTaskBtn")

    checkBox.forEach((i,e)=>{
        i.addEventListener("click",()=>{
            if(i.checked){
                removeBtn.forEach((e,i)=>{
                    content.forEach((ele,index)=>{
                        e.addEventListener("click",()=>{
                            if(i == index){
                                ele.remove();
                            }
                        })
                    })
                })
            }else{
                console.log("no");
            }
        })
    })

    changeTaskBtn.forEach((e,i)=>{
        e.addEventListener("click",()=>{
            popUpFullScreenWrap.style.display = "block";
        })
    })
    
    changeTaskDecisionBtn.addEventListener("click",()=>{
        popUpFullScreenWrap.style.display = "none";
    })
})

