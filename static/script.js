$(function(){
  $('input.checkbox').change(function() {
    $.post(
      "/switch/" + $(this).data('id'),
      { state: $(this).is(':checked') ? 1 : 0 }
    );
  });

  $('.name').each(function(index) {
    $(this).editable('dblclick', function(e) {
      if (e.old_value != e.value) {
        console.log(e);
        console.log(this);
        $.post(
          "/switch/" + e.target.data('id') + "/name",
          {name: e.value}
        );
      }
    });
  });

  $('.hide').click(function(e) {
    $.post("/switch/" + $(this).data('id') + "/hide");
    location.reload();
  });

  $('#show').change(function(e) {
    $.post("/switch/" + $(this).val() + "/show");
    location.reload();
  });
});

