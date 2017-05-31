$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var businessNameInput = $("input#businessName").val();
    var contactNameInput = $("input#contactName").val();
    var addressInput = $("input#address").val();
    var emailInput = $("input#email").val();
    var subjectInput = $("input#subject").val();

    $(".contactName").text(contactNameInput);
    $(".businessName").text(businessNameInput);
    $(".email").text(emailInput);
    $(".address").text(addressInput);
    $(".subject").text(subjectInput);

    $("#letter").show();

    event.preventDefault();
  });
});
