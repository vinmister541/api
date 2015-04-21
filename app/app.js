SC.initialize({
  client_id: '59b223db9c6816b45be8c37fd4cd00bb'
});



 $(document).ready(function() {

$('#add').click(function() {
  var playerInput = $('input#item').val();
  $("#repeat").append("Results for " + playerInput); 



  SC.get('https://api.soundcloud.com/tracks', { genres: playerInput }, function(tracks) {
  $(tracks).each(function(index, track) {
  var i = track.id;
  var uniqueTrack = '<button type="button" class="start">' + 'Select Track' + '</button>' + '<span>' + i + '</span>';
  $('#results').append($('<li></li>').html(track.title + ' - '  + uniqueTrack));
   });
  });








});




$('ul').on('click', '.start', function(event) {
  var listItem = $(this).closest("li");
  var itemName = listItem.find("span").text();
  $('#main').empty();
  $('#main').append('<iframe  width="80%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+itemName+ '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>');
  
//get trace id from html
//build url using id
//modify src of the main frame

  });

$('#sub').click(function() {
    $('#results').empty();
    $('#repeat').empty();
    $('input#item').val("");
});


 });


