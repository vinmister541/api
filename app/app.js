SC.initialize({
  client_id: '59b223db9c6816b45be8c37fd4cd00bb'
});



 $(document).ready(function() {

$('#add').click(function() {
  var playerInput = $('input#item').val();
  $("#comment").append(playerInput); 



  SC.get('https://api.soundcloud.com/tracks', { genres: playerInput }, function(tracks) {
  $(tracks).each(function(index, track) {
  var i = track.id;
  var uniqueTrack = '<button type="button" class="start">' + 'CLICK ME' + '</button>' + '<div id="switch">' + i + '</div>';
  $('#results').append($('<li></li>').html(track.title + ' - '  + uniqueTrack));
   });
  });








});




$('ul').on('click', '.start', function() {
    $('#main').empty();
    SC.get('https://api.soundcloud.com/tracks', { genres: playerInput }, function(tracks) {
   $(tracks).each(function(index, track) {
   var i = track.id;
   var manDingo = '<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + i + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
    $('#main').append($(manDingo));
  });

 });
  });
 });


