
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop()>0){
            $('.top').show();
        
        }
        else{
            $('.top').hide();
        }
    });
    //smooth scrolling 
    $('a[href*="#"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
        500, 'linear' );
    });
});
function loadPersonpage() {
    fetch("../data/person-page.json")
    .then(res=>res.json())
    .then(data=>{
        let h="";
        for(let c of data){
            h+= 
            `<div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>${c.date}</span>
                <h3>${c.cv}</h3>
                <p>${c.feedback}</p>
            </div>`
        }
        let e = document.querySelector("#loadPersonPage"); // Change :first-child
        e.insertAdjacentHTML("beforeend", h);
    })
}
window.onload = () => {
    loadPersonpage();
};
