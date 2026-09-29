window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script3 = function()
{
  var player = GetPlayer();

// Olası değişken adlarını sırayla kontrol et
var finalScore = player.GetVar("TotalScore") || 
                 player.GetVar("Results.ScorePoints") || 
                 player.GetVar("totalScore") || 
                 300; // Bulamazsa ekrandaki 300 puanı baz al

var payload = {
  type: 'storyline_complete',
  score: Number(finalScore),
  maxScore: 300
};

// Siteye sinyal gönder
window.parent.postMessage(JSON.stringify(payload), '*');
window.parent.postMessage(payload, '*');
}

};
