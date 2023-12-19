// 音声を再生する関数
function playSound(audioElement) {
  if (!audioElement.paused) {
    audioElement.pause(); // 既に再生中の音声を停止
    audioElement.currentTime = 0; // 再生位置を最初に戻す
  }
  audioElement.play(); // 音声を再生
}

document.body.addEventListener('click', function(event) {
  // 左クリックの場合、Cの音を再生
  if (event.button === 0) {
    playSound(document.getElementById('cNote'));
  }
});

document.body.addEventListener('auxclick', function(event) {
  // ホイールクリック（中クリック）の場合、C#の音を再生
  if (event.button === 1) {
    playSound(document.getElementById('csNote'));
  }
});

document.body.addEventListener('contextmenu', function(event) {
  // 右クリックの場合、Dの音を再生
  event.preventDefault(); // コンテキストメニューを表示しない
  playSound(document.getElementById('dNote'));
});
