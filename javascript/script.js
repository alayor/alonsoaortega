window.onload = function() {
  $(".page-item").click(function(e) {
    debugger;
    const id = e.currentTarget.id.substr(-1);
    e.preventDefault();
    $(".skills-container").addClass("hide");
    $(`#skill-container-${id}`).removeClass("hide");
    $(this).addClass("disabled");
    $(".page-tiem").removeClass("disabled");
  });
};
