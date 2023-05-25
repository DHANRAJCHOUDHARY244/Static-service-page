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
function E_3D_Abstract_Ball() {
    const video = document.getElementById('VIDEOBACKGROUND');
    video.src = '../wp-content/themes/drake/assets/images/video2.mp4';
    document.body.classList.add('home2-page');
}
function Water_Waves() {
    const video = document.getElementById('VIDEOBACKGROUND');
    video.src = '../wp-content/themes/drake/assets/images/video3.mp4';
    document.body.classList.add('home3-page');
}
function Liquids_Wavy() {
    const video = document.getElementById('VIDEOBACKGROUND');
    video.src = '../wp-content/themes/drake/assets/images/video4.mp4';
    document.body.classList.add('home4-page');
}
function Solid_Color() {
    const video = document.getElementById('VIDEOBACKGROUND');
    video.src = '#';
    document.body.classList.add('home5-page');
}
function Simple_Strings() {
    const video = document.getElementById('VIDEOBACKGROUND');
    video.src = '../wp-content/themes/drake/assets/images/video5.mp4';
    document.body.classList.add('home6-page');
}