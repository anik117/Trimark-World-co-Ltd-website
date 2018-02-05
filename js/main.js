$(function() {
   $(".nav-item").click(function() {
      // remove classes from all
      $(".nav-item").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});

/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */

$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});