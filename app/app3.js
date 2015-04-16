SC.initialize({
  client_id: '59b223db9c6816b45be8c37fd4cd00bb'
});



 $(document).ready(function() {

$('#add').click(function() {
  var playerInput = $('input#item').val();
  



  SC.get('https://api.soundcloud.com/tracks', { genres: playerInput, limit:9 }, function(tracks) {
  $(tracks).each(function(index, track) {
  var i = track.id;
  var manDingo = '<iframe id="gone" class="options" width="30%" height="150" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + i + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
  $('#results').append($(manDingo));
   }); /*.get*/
  }); /*.each*/

}); /*.click*/

$('#sub').click(function() {
    $('#results').empty();
    $('input#item').val("");
});




  }); /*document ready*/



