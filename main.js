$(document).ready(function() {
    placeHolderLength();
    $('#text-box').on("keydown", function(e) {
      var key = e.which;
      if (key === 13) {
        var inputItems = $(this).val().split(',');
        for (var i = 0; i < inputItems.length; i++) {
          var newItem = $('<li class="list-group-item">' + inputItems[i] + '</li>');
          newItem.click(toggleLineThrough);
          newItem.appendTo('#list');
        }
        $(this).val('');
      }
    });
});

function placeHolderLength() {
  var input = document.querySelectorAll('input');
  for(i=0; i<input.length; i++){
    input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
  }
}

function toggleLineThrough() {
  $(this).toggleClass('line-through');
}
