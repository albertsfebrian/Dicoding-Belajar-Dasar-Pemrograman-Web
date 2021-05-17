function headerColorHandler(){
    let windowPosY = window.scrollY
    let headerElement = document.getElementById("navbar-basic-container")

    if(windowPosY > 50){
        headerElement.classList.remove("transparent")
        headerElement.classList.add("color")
    }
    else{
        headerElement.classList.remove("color")
        headerElement.classList.add("transparent")
    }
}

document.addEventListener("scroll",()=>{
    headerColorHandler();
})

headerColorHandler();