$(document).ready(function () {
  // custom contact form submit (redirect letter)
  var submitBookingForm = function () {
    var $submitButton = $('#wrBookingForm input[type=\'submit\']').addClass('disabled');
    if ($('#wrBookingForm').hasClass('disabled')) {
      return;
    }
    // Get some values from elements on the page:
    var $form = $('#wrBookingForm');
    var element_0 = $form.find('input[name=\'element_0\']').val();
    var element_1 = $form.find('input[name=\'element_1\']').val();
    var element_2 = $form.find('textarea[name=\'element_2\']').val();
    var element_counts = $form.find('input[name=\'element_counts\']').val();
    var embed = $form.find('input[name=\'embed\']').val();
    var url = $form.attr('action');

    // Send the data using post
    $.post(url, { element_0: element_0, element_1: element_1, element_2: element_2, element_counts: element_counts, embed: embed })
    .always(function () {
      $form.addClass('disabled');
      $submitButton.addClass('hidden');
      $form.find('input[type=\'reset\']').addClass('hidden');
      $form.find('.alert-success').removeClass('hidden');
    });
  }

  $('#wrBookingForm input[type=\'submit\']').click(function (event) {
    event.preventDefault();
    submitBookingForm();
  });

  $('#wrBookingForm').submit(function(event) {
    // Stop form from submitting normally
    event.preventDefault();
  });
});
