const container = document.querySelector(".activity-window");
const enter = document.querySelector("button");
const inputBar = document.querySelector("input");



enter.addEventListener("click",()=>{
  const text = document.createElement("li");
  text.className = "task";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.style.marginBottom = "5px";
  deleteBtn.className = "deleteButton";
  text.innerHTML= inputBar.value;
  container.appendChild(text);
  text.appendChild(deleteBtn);


  deleteBtn.addEventListener("click",()=>{
    container.removeChild(text);
  })

  text.addEventListener("click",()=>{
    text.className = "correction";
    deleteBtn.style.backgroundColor = "green";
    deleteBtn.innerHTML = "completed";
  })

})

