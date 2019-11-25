window.onload = function() {
  $(".page-item").click(function(e) {
    const id = e.currentTarget.id.substr(-1);
    e.preventDefault();
    $(".skills-container").addClass("hide");
    $(`#skill-container-${id}`).removeClass("hide");
    $(".page-item").removeClass("disabled");
    $(this).addClass("disabled");
  });
  document.forms[0].onsubmit = validateForm;
};

function validateForm() {
  var returnValue = true;

  if (!validateEmail()) {
    returnValue = false;
  }
  return returnValue;
}

function validateEmail() {
  if (document.getElementById("inputEmail").value === "") {
    $("#errorEmail").show();
    return false;
  } else {
    $("#errorEmail").hide();
    return true;
  }
}
