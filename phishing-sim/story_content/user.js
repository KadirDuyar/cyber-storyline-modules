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
var finalScore = player.GetVar("TotalScore");

// CyberEdu LMS StorylinePlayer dinleyicisine sinyal gönderimi:
var payload = {
  type: 'storyline_complete',
  score: finalScore
};

// Tarayıcı iframe dışına mesaj iletimi
window.parent.postMessage(JSON.stringify(payload), '*');
}

};
