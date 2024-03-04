// 1 muziek enkel afspelen
document.addEventListener('DOMContentLoaded', function () {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(function (audioElement) {
        audioElement.addEventListener('play', function () {
            pauseOtherAudio(audioElement);
        });
    });

    function pauseOtherAudio(currentAudio) {
        audioElements.forEach(function (audioElement) {
            if (audioElement !== currentAudio && !audioElement.paused) {
                audioElement.pause();
            }
        });
    }
});

