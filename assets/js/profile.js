let asideElement = document.getElementsByTagName("aside")[0]
let asideIconElement = document.getElementById("aside-icon")
let open = "0px";
let close = "-300px";

asideIconElement.addEventListener("click",()=>{
    let current = asideElement.style.right 
    asideElement.style.right = current == open ? close : open
})