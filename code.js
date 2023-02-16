const API_KEY = "qrHaNn2k74FM8RnB6KjeURX3lnCKHKR4";
const formEl = document.querySelector("form")
const listEl = document.querySelector(".list-card")

formEl.addEventListener("submit", getPopularSection);

function getPopularSection(e){
    e.preventDefault();

}

// fetch(
//   `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
// )
//   .then((responce) => responce.json())
//   .then((res) => console.log(res.results));



function fetchPopularNews() {
  return fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
  )
    .then((responce) => {
      if (!responce.ok) {
        throw new Error(responce.statusText);
      }
      return responce.json();
    })
   
}
fetchPopularNews().then((res) => console.log(res.results));

function renderCard(array){
    const markup = array.map(({title, url, updated, abstract}) => {
        return `<li>
        <img src="" alt="photo">
        <h2 class="title">${title}</h2>
        <p class="text">${abstract}</p>
        <P>${updated}</p>
        <button type="button">
            <a href="${url} ">read more...</a>
        </button>
    </li>`
    }).join('');

    listEl.insertAdjacentHTML('beforeend', markup)

}