const movie_cards = document.querySelector('#movies_section .movie_cards')
const categoryData = document.querySelector('.categoryData')
const liveData = document.querySelector('.liveData')

function movie_card(jsonData) {
    let card = '';
    for (var variable of jsonData.movie_card) {
      card += `
      <div class="col-lg-2 col-md-3 col-sm-4 col-6 ees">
        <div class="card">
          <div class="img_box">
            <img src="assets/img/movies/${variable.img}" alt="" class="movieImg" loading="lazy">
            <div class="card_overFlow">
              <div class="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
              <div class="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>${variable.rate}</span>
              </div>
              <div class="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div class="box_text">
            <h1>${variable.name}</h1>
            <div class="info">
              <span>${variable.type}</span>
              <span>${variable.year}</span>
            </div>
          </div>
        </div>
      </div>
      `
    }
    movie_cards.innerHTML = card;

  }
  function category(jsonData) {
    let card = '';
    for (var variable of jsonData.category) {
  
      card += `
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card_box">
          <div class="card">
          <img src="assets/img/${variable.img}" alt="" loading="lazy">
            <ul>
              <li><h1>${variable.tittle}</h1></li>
              <li><span>${variable.values}</span></li>
            </ul>
          </div>
        </div>
      </div>
      `
    }
    categoryData.innerHTML = card;
  }
  function live(jsonData) {
    let card = '';
    for (var variable of jsonData.live) {
  
      card += `
      <div class="col-lg-4 col-sm-6">
        <div class="card_box">
          <div class="img_box">
            <img src="assets/img/${variable.img}" alt="" loading="lazy">
            <div class="overflow">
              <div class="live">
                <p>Live</p>
              </div>
              <div class="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
              <div class="views">
                <p>${variable.views}</p>
              </div>
            </div>
          </div>
          <div class="bottom_text">
            <div class="logo">
              <img src="assets/img/${variable.logo}" alt="">
            </div>
            <div class="info">
              <h1>${variable.name}</h1>
            </div>
          </div>
        </div>
      </div>
      `
    }
    liveData.innerHTML = card;
  }


  
  fetch('https://cineflixapi-v1l0.onrender.com/main')
  .then(res=>res.json())
  .then(json=>{
    movie_card(json[0]);
    category(json[1]);
    live(json[2]);

  })
  
