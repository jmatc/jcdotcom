(function ($) {

  var $toolTipLink = $('#main-navigation a');

  $toolTipLink.on('hover', function (e) {
    var $this = $(this),
        $linkTitle = $this.attr('title');

    console.log($linkTitle);
  });


})(jQuery);
