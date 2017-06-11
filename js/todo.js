$(document).ready(function(){
  adds()

});

function adds() {
  $('form').on('submit', function(event) {
    var listItem = $('#item').val()
    $('ol').append(`<li>` + listItem + `</li>`)
    event.preventDefault()
  })
}
