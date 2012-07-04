
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
  url: 'http://www.humoruscomedy.com/sounds/',
  debugMode: false,
  useHighPerformance: true,
  preferFlash: true,
  flashVersion: 9,
  onready: function() {
    soundManager.createSound({
      id: 'clapSound',
      url: 'http://www.humoruscomedy.com/sounds/clap.mp3'
    });
    soundManager.load('clapSound');
    
    soundManager.createSound({
      id: 'kickSound',
      url: 'http://www.canadianmusicartists.com/sample/kick_05.wav'
    });
    soundManager.load('kickSound');
    soundManager.defaultOptions = {
      multiShot: true,
      multiShotEvents: true
    };
  },
  ontimeout: function() {
    console.log('Error loading sound manager');
  }

});
