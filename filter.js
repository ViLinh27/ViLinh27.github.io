$("#portfolio-filters li").click ( function() {
    $("#portfolio-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    //$(".pcontainer").fadeOut().css('transform', 'scale(0)');
    $(".pcontainer").fadeOut().css('transform');

    setTimeout(function() {
      //$(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $(selectedFilter).fadeIn(100).css('transform');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });