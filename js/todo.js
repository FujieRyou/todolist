const inputField = document.querySelector(".InputField")
console.log(inputField);

const addBtn = document.querySelector(".addBtn")
console.log(addBtn);

const contentWrap = document.querySelector(".contentWrap")
console.log(contentWrap);


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
    const checkBox = document.querySelector(".checkBox")
    const task = document.querySelector(".task")
    checkBox.addEventListener("click",()=>{
        if(checkBox.checked){
            removeBtn.forEach((e,i)=>{
                content.forEach((ele,index)=>{
                    e.addEventListener("click",()=>{
                        if(i == index){
                            ele.remove();
                        }
                    })
                })
            })

        task.innerHTML = `<strike>${inputField.value}</strike>`
        }else{
            console.log("no");
        }
    })
    console.log(checkBox);

})

