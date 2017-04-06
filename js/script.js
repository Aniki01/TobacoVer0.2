let srcForVideosOnMaiPage = ["https://www.youtube.com/embed/CA680tZTjaM", "https://www.youtube.com/embed/H5lZBvljeyw", "https://www.youtube.com/embed/O4VMly3wbrY"];

let player = document.querySelector(".player iframe");

let elements = [];
for(let i = 0; i < 3; i++){
    elements[i] = document.getElementById("video-" + (i+1));
}

function switchVideo(){
    for(let i = 0; i < elements.length; i++){
        if(elements[i] != this) {
            elements[i].classList.remove("active-about-video");
        }else {
            elements[i].classList.add("active-about-video");
            player.src = srcForVideosOnMaiPage[i];
        }
    }
}

for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', switchVideo );
}
