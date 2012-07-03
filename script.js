var clapBuffer = null;
var context = new webkitAudioContext();

function loadClapSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      clapBuffer = buffer;
    }, onError);
  }
  request.send();
}

function playClapSound(buffer) {
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.noteOn(0);
}

$(document).ready(function() {
  $('#container').append('<div>js loaded</div>');
  
  loadClapSound('http://fps.herokuapp.com/clap.mp3');
  $('#0').on('click', playClapSound(clapBuffer));
});