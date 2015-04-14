SC.initialize({
  client_id: '59b223db9c6816b45be8c37fd4cd00bb'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'zedd' }, function(tracks) {
  $(tracks).each(function(index, track) {
  $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
   });
  });
});