//SIDEBAR
const menuItems= document.querySelectorAll('.menu-item');
// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
// request

//THEME
// const theme = document.querySelector('#theme'); 
// const themeModal = document.querySelector('.customize-theme');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//SIDEBAR
// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item =>{
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            notifications.querySelector('.notification-count').style.display='none';
            document.querySelector('#notifications.notification-count').style.display ='none';
        }

    })
})
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let names = user.querySelectorAll('h5'); // Lấy NodeList của các phần tử h5
        let found = false;
        names.forEach(name => {
            if (name.textContent.toLowerCase().indexOf(val) !== -1) {
                found = true;
            }
        });
        if (found) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    });
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);
//hightlight
messagesNotification.addEventListener('click',() =>{
    messages.style.boxShadow ='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() =>{
        messages.style.boxShadow='none';
    },2000);
})
// request
//
//THEME CUSTOMIZATION

//opens modal
function openThemeModal() {
    themeModal.style.display = 'grid';
}
//close modal
const closeThemeModal= (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    
    }
}
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


// --------FONTS-----------
// remove active class from span or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {

    size.addEventListener('click', () =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty ('----sticky-top-left', '5.4rem');
            root.style.setProperty ('----sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty ('----sticky-top-left', '5.4rem');
            root.style.setProperty ('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty ('----sticky-top-left', '-2rem');
            root.style.setProperty ('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty ('----sticky-top-left', '-5rem');
            root.style.setProperty ('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty ('----sticky-top-left', '-12rem');
            root.style.setProperty ('----sticky-top-right', '-35rem');
        }
        // thay doi font size cua root html
        document.querySelector('html').style.fontSize = fontSize;
    })
})
// -------------COLOR---------------
//remove active class from colors
const changeActiveColorClass=()=>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}
// changes colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        //remove active class from colors
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;

        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);

    })
})
//----------------BACKGROUND----------------
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
// change background color
const changeBG =() =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}
Bg1.addEventListener('click', () => {
    
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness ='20%';
    lightColorLightness = '15%';
    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness ='10%';
    lightColorLightness = '0%';
    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

function loadProducts() {
    fetch("../data/product.json")
    .then(res => res.json())
    .then(data => {
        let h = "";
        for (let c of data) {
            h +=
            `<div>
                <div class="profile-photo">
                    <img src="${c.image}" alt="">
                </div>
                <div class="notification-body">
                    <b>${c.name}</b>${c.comment}
                    <small class="text-muted">${c.time}</small>
                </div>
            </div>`;
        }
        let e = document.querySelector("#products :first-child"); // Change :first-child
        e.insertAdjacentHTML("afterend", h);
    })
}
function loadRequests(){
    fetch("../data/request.json")
    .then(res => res.json())
    .then(data => {
        let h="";
        for(let c of data){
            h += 
            `<div class="request">
                        <div class="info">
                            <div class="profile-photo">
                                <img src="${c.image}" alt="">
                            </div>
                            <div>
                                <h5>${c.name}</h5>
                                <p class="text-muted">${c.comment}</p>
                            </div> 
                        </div>
                        <div class="action">
                            <button class="btn btn-primary">
                                Chấp nhận
                            </button>
                            <button class="btn">
                                Từ chối
                            </button>
                        </div>
              </div>`
        }
        let e = document.querySelector("#product-friends :first-child"); // Change :first-child
        e.insertAdjacentHTML("afterend", h);
    })
}
function loadMess() {
    fetch("../data/message.json")
    .then(res=>res.json())
    .then(data=>{
        let h="";
        for(let c of data){
            h += 
            `<div class="message">
                        <div class="profile-photo">
                            <img src="${c.image}" >
                            <div class="${c.onl}"></div>
                        </div>
                        <div class="message-body">
                            <h5>${c.name}</h5>
                            <p class="${c.see}">${c.comment}</p>
                        </div>
            </div>`
        }
        let e = document.querySelector("#product-mess"); // Change :first-child
        e.insertAdjacentHTML("beforeend", h);
    })
}
function loadPage(){
    fetch("../data/feed.json")
    .then(res=>res.json())
    .then(data=>{
        let h="";
        for(let c of data){
            h+=
            `<div class="feed">
                <div class="head">
                    <div class="user">
                        <div class="profile-photo">
                            <img src="${c.image1}" alt="">
                        </div>
                        <div class="ingo">
                            <h3>${c.name}</h3>
                            <small>${c.onl}</small>
                        </div>
                    </div>
                    <span class="edit">
                        <i class="fa-solid fa-ellipsis"></i>
                    </span>
                </div>

                <div class="photo">
                    <img src="${c.image2}" alt="">
                </div>

                <div class="action-button">
                    <div class="interaction-buttons">
                        <span><i class="fa-regular fa-heart"></i></span>
                        <span><i class="fa-regular fa-comment-dots"></i></span>  
                        <span><i class="fa-solid fa-share-nodes"></i></span>
                    </div>
                    <div class="bookmark">
                        <span><i class="fa-regular fa-bookmark"></i></span>
                    </div>
                </div>

                <div class="liked-by">
                    <span><img src="${c.image3}" ></span>
                    <span><img src="${c.image4}" ></span>
                    <span><img src="${c.image5}" ></span>
                    <p>Liked by<b> ${c.like}</p>
                </div>

                <div class="caption">
                    <p>${c.caption}<span class="harsh-tag">${c.hastag}</span></p>
                </div>
                <div class="${c.comment}">${c.view}</div>
            </div>`
        }
        let e = document.querySelector("#loadpage"); // Change :first-child
        e.insertAdjacentHTML("beforeend", h);
    })
}

window.onload = () => {
    loadProducts();
    loadRequests();
    loadMess();
    loadPage(); 
};
let back_to_top = document.querySelector('.back_to_top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    back_to_top.classList.add('show');
  } else {
    back_to_top.classList.remove('show');
  }
});
back_to_top.addEventListener('click', function () {
  window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
  });
});
