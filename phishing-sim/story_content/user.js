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

function readNum(names) {
  for (var i = 0; i < names.length; i++) {
    try {
      var v = player.GetVar(names[i]);
      if (v !== undefined && v !== null && v !== "" && !isNaN(Number(v))) {
        return Number(v);
      }
    } catch (e) {}
  }
  return null;
}

// Kendi değişken adınızı EN BAŞA yazın (ekranda %...% ile gösterdiğiniz değişken)
var score = readNum(["Results.ScorePoints", "TotalScore", "totalScore"]);
var max   = readNum(["Results.MaxPoints", "MaxScore"]);

if (max === null || max <= 0) max = 300;      // sadece max için sabit değer
if (score === null) score = 0;                // bulunamazsa sahte 300 VERME

console.log("[Storyline] score:", score, "max:", max);

// TEK mesaj gönder (iki kez göndermek çift XP riski yaratıyordu)
window.parent.postMessage(JSON.stringify({
  type: "storyline_complete",
  score: score,
  maxScore: max
}), "*");
}

};
