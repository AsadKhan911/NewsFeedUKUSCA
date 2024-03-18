//Accessing anchor tags of navbar for each country
let home = document.getElementById('home')
let usa = document.getElementById('usa')
let uk = document.getElementById('uk')
let canada = document.getElementById('ca')

//Adding event listener for Home 
home.addEventListener("click" , function(){
  news.innerHTML = ""
})

//Adding event listener for UK NEWS
uk.addEventListener("click" , function(){

    let API_KEY = 'cf9e813dfd5e4d368436eca915a0b5bd';
    let news = document.getElementById('news');
    let news_html = "";
  
    fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const articles = data.articles;
            articles.forEach(element => {
                let news_card = `<div class="card mx-2 my-2 note_card" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">Author: ${element.author}</p>
                        <a href="${element.url}" class="btn btn-primary">Read More</a>
                    </div>
                </div>`;
                news_html += news_card;
            });
            news.innerHTML = `<div><h1 class="text-white">UK NEWS</h1></div> ${news_html}`;
        })
        .catch((error) => {
            console.error('Error fetching news:', error);
        });
  });
  
//Adding event listener for USA NEWS
usa.addEventListener("click" , function(){
  
  let API_KEY = 'cf9e813dfd5e4d368436eca915a0b5bd';
  let news = document.getElementById('news');
  let news_html = "";

  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then((data) => {
          console.log(data);
          const articles = data.articles;
          articles.forEach(element => {
              let news_card = `<div class="card mx-2 my-2 note_card"  style="width: 18rem;">
                  <img src="" class="card-img-top" alt="">
                  <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text">Author: ${element.author}</p>
                      <a href="${element.url}" class="btn btn-primary">Read More</a>
                  </div>
              </div>`;
              news_html += news_card;
          });
          news.innerHTML =`<div><h1 class="text-white">USA NEWS</h1></div> ${news_html}`;
      })
      .catch((error) => {
          console.error('Error fetching news:', error);
      });
})

//Adding event listener for Canada NEWS
canada.addEventListener("click", function () {
    let API_KEY = 'cf9e813dfd5e4d368436eca915a0b5bd';
    let news = document.getElementById('news');
    let news_html = "";

    fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const articles = data.articles;
            articles.forEach(element => {
                let news_card = `<div class="card mx-2 my-2 note_card" id="" style="width: 18rem;">
                <img src="" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">Author: ${element.author}</p>
                    <a href="${element.url}" class="btn btn-primary">Read More</a>
                </div>
            </div>`;
                news_html += news_card;
            });
            news.innerHTML =`<div><h1 class="text-white">Canada NEWS</h1></div> ${news_html}`;
        })
        .catch((error) => {
            console.log("ERROR FETCHING NEWS " + error);
        });
});



//Adding event listener for Search funtionality
let searchTxt = document.getElementById('search');

searchTxt.addEventListener("input", function () {
    let searchVal = searchTxt.value.toLowerCase();
    let cards = document.getElementsByClassName('note_card');

    Array.from(cards).forEach(function (element) {
        let cardTxt = element.querySelector('.card-title').innerText.toLowerCase();
        
        if (cardTxt.includes(searchVal)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});
