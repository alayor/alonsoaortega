window.onload = function() {
  $(".page-item").click(function(e) {
    const id = e.currentTarget.id.substr(-1);
    e.preventDefault();
    $(".skills-container").addClass("hide");
    $(`#skill-container-${id}`).removeClass("hide");
    $(".page-item").removeClass("disabled");
    $(this).addClass("disabled");
  });
  if (document.forms && document.forms.length) {
    document.forms[0].onsubmit = validateForm;
  }
  if (!window.location.href.includes('alayor.com')) {
    $("#not-published-site-alert").removeClass("hide");
  }
};

function validateForm() {
  var returnValue = true;

  if (!validateEmail()) {
    returnValue = false;
  }
  if (!validateSubject()) {
    returnValue = false;
  }
  return returnValue;
}

function validateEmail() {
  if (document.getElementById("inputEmail").value === "") {
    $("#errorEmail").show();
    setTimeout(function() {
      $("#errorEmail").hide();
    }, 5000);
    return false;
  } else {
    $("#errorEmail").hide();
    return true;
  }
}

function validateSubject() {
  if (document.getElementById("subject").value.trim().length < 4) {
    $("#errorSubject").show();
    setTimeout(function() {
      $("#errorSubject").hide();
    }, 5000);
    return false;
  } else {
    $("#errorSubject").hide();
    return true;
  }
}
