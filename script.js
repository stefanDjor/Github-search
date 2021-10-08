const body = document.getElementById("body");
const team = document.getElementById("team-dark");
const dark = document.querySelector(".dark");
const nameperson = document.getElementById('email').value;
const input = document.getElementById('email');
const twit= document.getElementById("twit");
const avatar = document.getElementById("img-user-me");
const locationPlace = document.getElementById('location-place');
const folowing = document.getElementById('folowing-n');
const folowers = document.getElementById('folowers-n');
const repose = document.getElementById('repose');
const nickName =document.getElementById('name-nickname');
const nick = document.getElementById('nick');
const blog = document.getElementById('blog');
const company = document.getElementById('company');
const biography = document.getElementById('bioGr');
const biographyTwo = document.getElementById('bioTwo');
const datamobile = document.getElementById("timesTwo");
const searchBut = document.getElementById("searchBut");
const date = document.getElementById("times");
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const octocat = "octocat";
const gitUrl = 'https://api.github.com/users/';
const error = document.querySelector('.error');
function changeMode() {
    body.classList.toggle("dark-mode");
    if(localStorage.getItem("theme") == "true"){
        localStorage.setItem("theme", true);
    }  
    else {
        localStorage.setItem("theme", false);
    }

};
team.addEventListener("click", changeMode);

const showMode = () => {
    let toggleMode = localStorage.getItem("theme");
    if (toggleMode){
        localStorage.setItem("theme", false);
        toggleMode = localStorage.getItem("theme");
    }
    else {
        localStorage.setItem("theme", true);
        toggleMode = localStorage.getItem("theme");
    }
};

showMode();

function changeImage() {
    let Image_Id = document.getElementById('moon-sun');
    if (Image_Id.src.match("img/icon-moon.svg")) {
        Image_Id.src = "img/icon-sun.svg";  
        dark.innerHTML = "Light";
    }
    else {
        Image_Id.src = "img/icon-moon.svg";
        dark.innerHTML = "dark"
    }
}; 
function getUserData(gitUrl) {
    fetch(gitUrl)
        .then(response => response.json())
        .then(data => {
            target(data)
        })
        .catch(error => {
            throw error;
        })
}
 function target (data) {

            // fetch(`https://api.github.com/users/${nameperson}`,{headers:{'Authorization':'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','Content-Type': 'application/json'}})
            // .then(response => response.json()
            // .then(data => {
            if (data.message !== "Not Found") {
                error.style.display = "none";
                
            const d = new Date(data.created_at);
            const year = d.getFullYear();
            const day = d.getDate();
            const month = monthNames[d.getMonth()];
    
            datamobile.innerHTML = `Joined ${day} ${month} ${year}`;
            date.innerText = `Joined ${day} ${month} ${year}`;
            nick.innerHTML = data.login;
            nickName.innerHTML= data.name;
            repose.innerHTML = data.public_repos;
            folowers.innerHTML = data.followers;
            folowing.innerHTML = data.following;
            locationPlace.innerHTML =data.location; 
            avatar.src = `${data.avatar_url}`;
            twit.innerHTML = data.twitter_username;
            if(data.twitter_username === null){
                twit.innerHTML = "Not Available";
                twit.style.opacity = "0.5";
                twit.style.textDecoration ="none"
                twit.style.cursor ="default"

            };
            blog.innerHTML = data.blog;
            if(data.blog === ""){
                blog.innerHTML = "Not Available";
                blog.style.opacity = "0.5";
                blog.style.textDecoration ="none";
                blog.style.cursor ="default";
            };
            company.innerHTML = data.company;
            if(data.company === null){
                company.innerHTML = "Not Available";
                company.style.opacity = "0.5";
                company.style.textDecoration ="none";
                company.style.cursor ="default";
            };
            biography.innerHTML = data.bio;
            if(data.bio === null){
                biography.innerHTML = "This profile has no bio";
            };
            biographyTwo.innerHTML = data.bio;
            if(data.bio === null){
                biographyTwo.innerHTML = "This profile has no bio";
            };
        } else {
            error.style.display = "inline-block";
        }          
}
body.addEventListener('load', getUserData(gitUrl + octocat))
window.addEventListener('DOMContentLoaded', (event) => {
    let Image_Id = document.getElementById('moon-sun');
    let flag = localStorage.getItem("theme");
    if(flag == 'true'){
        Image_Id.src = "img/icon-sun.svg";  
        dark.innerHTML = "Light";
        body.classList.add("dark-mode");
    }
    else {
        body.classList.remove("dark-mode");
        Image_Id.src = "img/icon-moon.svg";
        dark.innerHTML = "dark"
    }
});
searchBut.addEventListener('click', function () {
    
    if (input.value !== "") {
        getUserData(gitUrl + input.value);
       
    }
})
input.addEventListener("keydown", function (e) {
    if (!e) {
        var e = window.event;
    }
    if (e.key == "Enter") {
        if (input.value !== "") {
            getUserData(gitUrl + input.value);
        }
    }
}, false);
