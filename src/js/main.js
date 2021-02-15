$(function () {
  /************* Toggle Menu Jquery Js ***************/
  $(".toggle").on("click", function () {
    $(".toggle").toggleClass("on-off");
    $(".nav-list").toggleClass("nav-active");
  });

  /* Toggle Menu Nav List "a" click Active class Remove */
  $(".nav-list a").click(function () {
    $(".toggle").removeClass("on-off");
    $(".nav-list").removeClass("nav-active");
  });

  /* Star Voting */
  var star = ".star",
    selected = ".selected";

  $(star).on("click", function () {
    $(selected).each(function () {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
  });

  /* Swiper Js */
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    autoplay: false,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      800: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  /* Dark Mode */
  $(".theme-switch").on("click", () => {
    $("body").toggleClass("dark-theme");
  });

  /* Swiper Comments */
  $("html").on("click", ".swiper-slide .delete", function (e) {
    e.preventDefault();
    var slideIndex = $(this).parent().parent().index();
    swiper.removeSlide(slideIndex);
  });

  $("#submit-review").on("click", (e) => {
    e.preventDefault();

    var name = $("#reviewer-name").val();
    var title = $("#reviewer-title").val();
    var message = $("#reviewer-message").val();

    var reviewHtml = `
      <div class="swiper-slide">
        <div class="content">
          <div class="delete d-flex justify-content-end">
            <a href="#"><i class="fas fa-trash-alt"></i></a>
          </div>
          <p class="heading-2">
            ${message}
          </p>
          <div class="profile d-flex align-items-center">
            <figure>
              <img src="/assets/Picture.svg" alt="" />
            </figure>
            <div class="title-bottom">
              <h4 class="text-small">${name}</h4>
              <h5 class="text-xsmall">${title}</h5>
            </div>
            <div class="voting d-flex align-items-center">
              ${$(".send-comments .ratings")[0].outerHTML}
            </div>
          </div>
        </div>
      </div>
    `;

    swiper.prependSlide(reviewHtml);
    swiper.slideTo(0, 200);

    $("html, body").animate(
      { scrollTop: $(".comments").offset().top - 170 },
      1000
    );

    $("#reviewer-name").val("");
    $("#reviewer-title").val("");
    $("#reviewer-message").val("");
  });
});

/* Back to Top */
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }
});

$("#toTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500);
});

/* Scrolls */
$(".nav-list a").click(function () {
  var current_width = $(window).width();
  var id = $(this).attr("href");
  var target = $(id);
  var offset = target.offset();
  if (current_width > 700) {
    $("html, body").animate({ scrollTop: offset.top - 120 }, 1000);
  } else if (current_width < 700) {
    $("html, body").animate({ scrollTop: offset.top - 80 }, 1000);
  }
});
