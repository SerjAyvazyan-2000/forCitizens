



let reviewsSwiper = new Swiper(".reviews-swiper", {
    spaceBetween: 24,
    slidesPerView: 3,
    loop:true,

    navigation: {
        nextEl: '.reviews-button-prev',
        prevEl: '.reviews-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.2},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 3},

    },



});


let opportunitiesSwiper = new Swiper(".opportunities-swiper", {
    spaceBetween: 24,
    slidesPerView: 3,
    loop:true,

    navigation: {
        nextEl: '.reviews-button-prev',
        prevEl: '.reviews-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.2},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 3},

    },



});

