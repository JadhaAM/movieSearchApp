// this link provide the popular movie list
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// this link for sreaching the img of particular movie
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
/// this link for the seaching the movie 
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box")
const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data)
}
getMovies(APIURL);

// this for the creating the movibox and load the data

const showMovies = (data) => {
    moiveBox.innerHTML = "";
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
            // const box = `
            // <div class="box">
            //     <img src="${IMGPATH+result}" alt="" />
            //     <div class="overlay">
            //         <h2>Overview:</h2>
            //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
            //     </div>
            // </div>
            // 
            /*
            creating the fullbox img movi screen
            */
          

            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt=""  onclick="openFullImg(this.src)"/>
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `;

           
            moiveBox.appendChild(box)
        }
    )
}

//  this is for  searching the movie 
document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
)

// this for the preloder

let loader = document.querySelector("#loader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

            //user data status online or offline
        
        let statusbaar= window.navigator.onLine;
            if (statusbaar){
                console.log("online");
             online();
            }
        else 
        { 
            console.log("offline");
            offline(); 

        }
        window.addEventListener('online',online);
        window.addEventListener('offline',offline);
        function online() {
        
           let box = document.querySelector('.contener');
            let span=document.querySelector('#span')
           box.style.backgroundColor = 'rgb(91, 172, 204)';
           span.innerText="back online";
        }
        function offline() {
            let box = document.querySelector('.contener');
            let span=document.querySelector('#span');
            box.style.backgroundColor = 'red';
            span.innerText="no connection";
        
        }

 // full screen movie picture

 
 let fullImgBox = document.getElementById("fullImgBox");
 let fullImg = document.getElementById("fullImg");

 function openFullImg(pic) {

     fullImgBox.style.display = "flex";
     fullImg.src = pic;

 }

