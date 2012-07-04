
$(document).ready(function() {
  $('#container').append('<div>js loaded</div>');
  
  $('#2').on('click', function(e) {
    soundManager.play('clapSound');
  });
  
  $('#1').on('click', function(e) {
    soundManager.play('kickSound');
  });
  
  $(document).on('keypress', function(e) {
    var code = (e.keyCode || e.which);
    switch (code) {
      case 49:
        soundManager.play('kickSound');
        break;
      case 50:
        soundManager.play('clapSound');
        break;
    };
  });
});

soundManager.setup({
  url: 'swf/',
  onready: function() {
    soundManager.createSound({
      id: 'clapSound',
      url: 'clap.mp3'
    });
    
    soundManager.createSound({
      id: 'kickSound',
      url: 'http://www.canadianmusicartists.com/sample/kick_05.wav'
    });
  },
  ontimeout: function() {
    console.log('Error loading sound manager');
  }
});
