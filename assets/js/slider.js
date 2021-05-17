let sliderElement = document.getElementById("testimoni-slider")
let sliderContainerElement = null;

let cardWidth = 18;
let cardShow = 3;
let translateX = 0;

function cardShowHandler(){
    if(window.innerWidth <= 768) cardShow = 1;
    else cardShow = 3;
}

let testimonyList =[
    {imgPath:"assets/img/testimoni/0.jpg", name:"Eric", testimony:"Pengalaman saya jalan-jalan bersama anak istri ke Bandung sangat menakjubkan senang bisa melakukan perjalanan bersama dengan TraveLah"},
    {imgPath:"assets/img/testimoni/1.jpg", name:"Megara", testimony:"Saya dapat mengatakan tanpa ragu bahwa jalan jalan dengan TraveLah adalah salah satu pengalaman paling berharga dalam hidup saya. Kesempatan untuk melakukan tur yang luar biasa dengan yang lainnya di Papua adalah waktu yang saya hargai dan saya nantikan untuk melakukannya lagi."},
    {imgPath:"assets/img/testimoni/2.jpg", name:"Zeus", testimony:"Saya telah melakukan banyak perjalanan ke kota lain, tetapi perjalanan dengan TraveLah adalah favorit saya. Cucu saya siap untuk berpetualang tahun depan ketika corona telah mereda dan saya menantikannya."},
    {imgPath:"assets/img/testimoni/3.jpg", name:"Hercules", testimony:"Perjalanan ke NTT sangatlah indah, dan itulah yang membuat perjalanan ini luar biasa !!!! Perjalanan itu mengubah hidup saya dan bertemu dengan beberapa teman perjalanan yang benar-benar luar biasa sangat mengharukan."},
    {imgPath:"assets/img/testimoni/4.jpg", name:"Anna", testimony:"Saya sangat berterima kasih kepada seluruh staf TraveLah atas bantuan ekstra yang saya butuhkan sebelum perjalanan ke Bali. Saya juga ingin menyebutkan betapa hebatnya pekerjaan yang dilakukan tim TraveLah selama perjalanan. Pelayanan pelanggan 24 jam yang sangat luar biasa. Terima kasih!!!"},
    {imgPath:"assets/img/testimoni/5.jpg", name:"Esmeralda", testimony:"Masih banyak lagi yang bisa ditulis tentang Perjalanan luar biasa ini dengan TraveLah. Saya sangat merekomendasikannya bagi mereka yang suka melihat keindahan alam di Indonesia, petualangan yang hebat dan bertemu orang-orang dan tidak mengeluarkan biaya yang terlalu mahal."},
    {imgPath:"assets/img/testimoni/6.jpg", name:"Aladdin", testimony:"Saya telah menggunakan TraveLah 5 kali, setiap perjalanan adalah pengalaman dan petualangan yang luar biasa. Perjalanan terakhir ke Mentawai adalah yang terbaik dari keseluruhan perjalanan saya dengan TraveLah."},
    {imgPath:"assets/img/testimoni/7.jpg", name:"Rapunzel", testimony:"Pengalaman perjalanan dengan TraveLah adalah pengalaman yang luar biasa bagi semua orang yang ingin melakukan perjalanan di Indonesia. Sebagai seorang pelanggan, saya sepenuhnya dilayani oleh pegawai pegawai yang cekatan dalam perjalanan saja."},
    {imgPath:"assets/img/testimoni/8.jpg", name:"Li Shang", testimony:"Terima kasih banyak untuk perjalanannya! Saya akan selalu berterima kasih atas bantuan TraveLah dalam semua kegiatan perjalanan yang saya lakukan!"}
]

function generateCard(imgPath,name,testimony){
    let cardTemplate = `
        <div class="slider-card">
            <img src=${imgPath} alt="">
            <h3>${name}</h3>
            <p>${testimony}</p>
        </div>
    `
    return cardTemplate
}

function prevSlide(){
    let maxSlide = cardWidth * (testimonyList.length-cardShow)
    translateX = translateX-cardWidth < 0 ? maxSlide : translateX-cardWidth;
    sliderContainerElement.style.transform = `translateX(-${translateX}rem)`
}

function nextSlide(){
    let maxSlide = cardWidth * (testimonyList.length-cardShow)
    translateX = translateX+cardWidth > maxSlide ? 0 : translateX+cardWidth;
    sliderContainerElement.style.transform = `translateX(-${translateX}rem)`
}

function renderPrevArrow(){
    let prev = document.createElement("div")
    prev.classList += "prev";
    prev.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g>	<path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0   c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744   c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`
    sliderElement.appendChild(prev)
    prev.addEventListener('click',prevSlide)
}
function renderNextArrow(){
    let next = document.createElement("div")
    next.classList += "next";
    next.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g>	<path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`
    sliderElement.appendChild(next)
    next.addEventListener('click',nextSlide)
}

function initializeTestimony(){
    if(sliderContainerElement == null){
        renderPrevArrow()

        let sliderOverflow = document.createElement("div")
        sliderOverflow.classList += "slider-overflow";

        let sliderContainer = document.createElement("div")
        sliderContainer.classList += "slider-container";

        sliderContainer.innerHTML = "";
        testimonyList.map( (testi) => {
            sliderContainer.innerHTML += generateCard(testi.imgPath, testi.name, testi.testimony);
        })
        sliderOverflow.appendChild(sliderContainer)
        sliderElement.appendChild(sliderOverflow)
        renderNextArrow()
        sliderContainerElement = sliderContainer;
    }
}
cardShowHandler()
initializeTestimony()
setInterval(nextSlide, 3000);
window.addEventListener('resize', ()=>{
    cardShowHandler()
})