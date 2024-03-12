// Get the buttons and content elements
var iButton = document.getElementById("iButton");
var loveButton = document.getElementById("loveButton");
var thinkingButton = document.getElementById("thinkingButton");
var boutButton = document.getElementById("boutButton");
var youButton = document.getElementById("youButton");
var butButton = document.getElementById("butButton");
var notButton = document.getElementById("notButton");
var everyButton = document.getElementById("everyButton");
var staysButton = document.getElementById("staysButton");
var likeButton = document.getElementById("likeButton");
var mineButton = document.getElementById("mineButton");
var goBackButton = document.getElementById("goBackButton");
var contentDiv = document.getElementById("content");
var player;
var audio1 = new Audio('music/As You Wish.mp3');
// var audio3 = new Audio('music/Summer (Feat. BEO).mp3');

var isPlaying = false;

// Initial content
var originalContent = contentDiv.innerHTML;


document.getElementById('playButton1').addEventListener('click', playMusic);

audio1.volume = 0.1;
// audio3.volume = 0.1;

function playMusic() {
    if (isPlaying) {
        audio1.pause();
        isPlaying = false;
    } else {
        audio1.play();
        isPlaying = true;
    }
}

function pauseMusic() {
    audio1.pause();
    isPlaying = false;
}






// Add click event listeners to the buttons
iButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = `<pre class="lyrics">
이제 너는 가도 돼
너가 원하는 그대로 해줄게
나도 지쳤나 봐 너를 잡는 게
너가 원한다면 그만할게
이런 걸 원한다면
이번에 떠난다면
난 안 돌아온다고
<span class="bold-text">I</span> ain't coming back
어제랑은 다른 너 이젠 뻔해져서
<span class="bold-text">I</span>'ll give what you want 너가 원한다면
<span class="bold-text">I</span> got you
<span class="bold-text">I</span> got you
<span class="bold-text">I</span> got you
너가 날 잊어줘
드디어 본 거 같아 나
우리가 여길 벗어나는 걸
Every day, every night 우린 뭐가 될까
나 없이도 괜찮아하는 너를 봐
Ya, <span class="bold-text">I</span> got you
너가 원하면 <span class="bold-text">I</span> got you
이제 너는 가도 돼
너가 원하는 그대로 해줄게
나도 지쳤나 봐 너를 잡는 게
너가 원한다면 그만할게
이런 걸 원한다면
이번에 떠난다면
난 안 돌아온다고
<span class="bold-text">I</span> ain't coming back
너가 날 떠나도
난 안 놀란다고
한두 번도 아니고
Just know that <span class="bold-text">I</span> don't need you
So go and tell 'em
난 진짜 go getter
진짜를 맛봐놓고
How is you gon' find better
You was with me for the come up
이젠 각자 길 걸어
내 옆에 누워있지만 우리는 너무 멀어
날 믿으랬잖아 난 하루아침 약을 stopped it
억 버는 방법을 보여줄게 come on and watch this
Me and bro Batman, 두 명 우린 없어 Robin
요즘 날 보면 알 거 같아 who Santa Claus is
Balenciaga, 바지 얼만지는 아니
사실 나도 몰라 태그 안 보고 걍 샀지
나한테 하는 욕은 다 받아 감사히
아무도 우리한테 신경 쓰지 않았으니
너마저 나한테 신경 쓰지 않았지
</pre>`;
});

loveButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HELLO</h1>";
});

thinkingButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>Summer</h1>";
});

boutButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HELLO</h1>";
});

youButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HI</h1>";
});

butButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HELLO</h1>";
});

notButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HI</h1>";
});

everyButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HELLO</h1>";
});

staysButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HI</h1>";
});

likeButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HELLO</h1>";
});

mineButton.addEventListener("click", function() {
    hideButtons();
    contentDiv.innerHTML = "<h1>HELLO</h1>";
});

goBackButton.addEventListener("click", function() {
    contentDiv.innerHTML = originalContent;
    showButtons();
    pauseMusic();
});



// Function to hide buttons and show "Go Back" button
function hideButtons() {
    iButton.style.display = "none";
    loveButton.style.display = "none";
    thinkingButton.style.display = "none";
    boutButton.style.display = "none";
    youButton.style.display = "none";
    butButton.style.display = "none";
    notButton.style.display = "none";
    everyButton.style.display = "none";
    staysButton.style.display = "none";
    likeButton.style.display = "none";
    mineButton.style.display = "none";
    goBackButton.style.display = "block";
    playButton1.style.display = "block";
}

// Function to show buttons and hide "Go Back" button
function showButtons() {
    iButton.style.display = "block";
    loveButton.style.display = "block";
    thinkingButton.style.display = "block";
    boutButton.style.display = "block";
    youButton.style.display = "block";
    butButton.style.display = "block";
    notButton.style.display = "block";
    everyButton.style.display = "block";
    staysButton.style.display = "block";
    likeButton.style.display = "block";
    mineButton.style.display = "block";
    goBackButton.style.display = "none";
    playButton1.style.display = "none";
}
