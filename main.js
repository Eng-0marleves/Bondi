let switcher_list = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.querySelectorAll(".box-container"))

switcher_list.forEach((li) => { 
    li.addEventListener("click", ()=> {
        switcher_list.forEach((li) => { 
            li.classList.remove("active");
        })
        li.classList.add("active");
        imgs.forEach(ele => {
            ele.style.display = "none";    
        });
        document.querySelectorAll(li.dataset.cat).forEach((el) => { 
            el.style.display = "block"
         })
    })
})


let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `&copy; ${Year} - <span>omarleves Inc</span>`