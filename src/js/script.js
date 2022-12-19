// let slider = $(document).ready(function () {
//   $('.your-class').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: true
//   });
// });

$('.blog__tabs_tab').on('click', function() {
    $('.blog__tabs_tab').removeClass('active');
    $(this).addClass('active');
    let tabs = $(this).data("tabs");

    $('.blog__card').addClass('d-none');
    $('.blog__card[data-tabs =' + tabs +']').removeClass('d-none');
    $('.blog__card[data-tabs =' + tabs +']').addClass('d-block');
})