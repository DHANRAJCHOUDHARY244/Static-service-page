document.getElementById("open-popup1").addEventListener("click", function () {
    document.getElementById('popup-iframe').src = '  https://dhanrajchoudhary244.github.io/dashboardPortfolio/'
    document.getElementById("popup-overlay").style.display = "block";
});

document.getElementById("open-popup2").addEventListener("click", function () {
    document.getElementById('popup-iframe').src = 'https://youtubereactapp.pages.dev/'
    document.getElementById("popup-overlay").style.display = "block";
});

document.getElementById("open-popup3").addEventListener("click", function () {
    document.getElementById('popup-iframe').src = 'https://animated-wibe-studio-react-web-application.pages.dev/'
    document.getElementById("popup-overlay").style.display = "block";
});
document.getElementById("open-popup4").addEventListener("click", function () {
    document.getElementById('popup-iframe').src = 'https://dashboarddj.pages.dev/'
    document.getElementById("popup-overlay").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup-overlay").style.display = "none";
});

function Earth_Lines_Sphere() {
    const video = document.getElementById('VIDEOBACKGROUND');
    video.src = '../wp-content/themes/drake/assets/images/video1.mp4';
    document.body.classList.add('home1-page');
}