let destinationList = [
    {tagId:"bali",name: "Bali", duration: "5 Days 4 Nights",price:"Rp 1.560.000 / Orang" ,description: "Paket Tour Bali 3 hari 2 malam dengan Fasilitas Hotel Bintang 3. Mengunjungi wisata Penglipuran,Kintamani, Alas Arum Ubud, Pantai Kuta, Pantai Tanjung Benoa, Pantai Melasti, Pura Uluwatu, Pantai Jimbaran, Joger Shop, Krisna Oleh-oleh dan Beach Walk Mall"},
    {tagId:"yogya",name: "Yogyakarta", duration: "5 Days 4 Nights",price:"Rp 1.560.000 / Orang" ,description: "Paket Tour Bali 3 hari 2 malam dengan Fasilitas Hotel Bintang 3. Mengunjungi wisata Penglipuran,Kintamani, Alas Arum Ubud, Pantai Kuta, Pantai Tanjung Benoa, Pantai Melasti, Pura Uluwatu, Pantai Jimbaran, Joger Shop, Krisna Oleh-oleh dan Beach Walk Mall"},
    {tagId:"bandung",name: "Bandung", duration: "5 Days 4 Nights",price:"Rp 1.560.000 / Orang" ,description: "Paket Tour Bali 3 hari 2 malam dengan Fasilitas Hotel Bintang 3. Mengunjungi wisata Penglipuran,Kintamani, Alas Arum Ubud, Pantai Kuta, Pantai Tanjung Benoa, Pantai Melasti, Pura Uluwatu, Pantai Jimbaran, Joger Shop, Krisna Oleh-oleh dan Beach Walk Mall"}
]

let destinationElement = document.getElementById("destinasi-list")
let dropdownContainerElement = document.getElementById("dropdown")
let dropdownElement = null;
let popUpElement = null;

function generateDestinationCard(idx,tagId,name){
    let template = `
        <div class="card">
            <div id="${tagId}" class="bg-img"></div>
            <div class="card-content">
                <h1>Explore ${name}</h1>
                <div class="button" onclick="showPopUp(${idx})">Lihat Penawaran</div>
            </div>
        </div>
    `
    return template;
}

function generateDropDown(index){
    let template = `
        <li><a href="#destinasi" onclick="showPopUp(${index})">${destinationList[index].name}</a></li>
    `
    return template
}

function generatePopUpContent(index){
    let template = `
        <div class="pop-up-card">
            <div class="button-close" onclick="closePopUp()">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="41.756px" height="41.756px" viewBox="0 0 41.756 41.756" style="enable-background:new 0 0 41.756 41.756;" xml:space="preserve"><g>	<path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465   c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071   C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343   c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </div>
            <div class="pop-up-content">
                <div>
                    <h1>Explore ${destinationList[index].name}</h1>
                    <img src="assets/img/destination/${destinationList[index].tagId}-info.jpg" alt="">
                </div>
                <div>
                    <h1>${destinationList[index].price}</h1>
                    <h3>${destinationList[index].duration}</h3>
                    <p>${destinationList[index].description}</p>
                </div>
            </div>
        </div>
    
    `
    return template;
}

function closePopUp(){
    if(popUpElement!= null) popUpElement.remove();
}
function showPopUp(index){
    popUpElement = document.createElement("div")
    popUpElement.id = "pop-up"
    popUpElement.innerHTML = generatePopUpContent(index)

    document.getElementsByTagName("body")[0].appendChild(popUpElement)
}

function createDropdown(index){
    let dropdown = document.createElement("ul")
    dropdownElement = dropdown;
    dropdownElement.style.top ="-300px";
    dropdownElement.style.opacity =0;
    dropdownContainerElement.addEventListener("mouseover",()=>{
        dropdownElement.style.top = "10px";
        dropdownElement.style.opacity =1;
    })
    dropdownContainerElement.addEventListener("mouseleave",()=>{
        dropdownElement.style.opacity =0;
        dropdownElement.style.top ="-300px";
    })
    dropdownContainerElement.appendChild(dropdownElement)
}

function initializeDestination(){
    createDropdown()
    destinationList.map( (dest,index) =>{
        destinationElement.innerHTML += generateDestinationCard(index, dest.tagId, dest.name);
        dropdownElement.innerHTML += generateDropDown(index)
    })
}

initializeDestination()
