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
        <div class="todo">${inputField.value}</div>
        <button type="button" class="remove">削除</button>
    </div>
    `
    const removeBtn = document.querySelectorAll(".remove")
    console.log(removeBtn);
    const content = document.querySelectorAll(".content")
    console.log(content);
    content.forEach((i,e)=>{
        removeBtn.forEach((index,element)=>{
            
        })
    })
})

