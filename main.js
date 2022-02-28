fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((res) => res.json())
  .then((data) => cardInfo(data.categories));
const searchData = () => {
  let search = document.getElementById("searchInput");
  let searchValue = search.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => searchInfo(data.meals))
    .catch(error=>errorMsgFun())
};
let errorMsgFun=()=>{
    alert("invalid search")
}
const searchInfo = (informations) => {
  let cardDetails = document.getElementById("cardTotal");
  cardDetails.innerHTML = "";
  for (let information of informations) {
    let div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card">
        <img src="${
          information.strMealThumb
        } " class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Name:${information.strMeal} </h5>
          <p class="card-text">
            ${information.strInstructions.slice(0, 150)}
          </p>
          <p class="card-text">
            <h5 class="price">price:</h5>
            <button class="btn btn-click" type="">Buy Now</button>
          </p>
        </div>
      </div>
        `;
    cardDetails.appendChild(div);
  }
  let search = document.getElementById("searchInput");
  search.value = "";
};

const cardInfo = (informations) => {
  for (let information of informations) {
    let cardDetails = document.getElementById("cardTotal");
    let div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card">
          <img src="${
            information.strCategoryThumb
          } " class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Name:${information.strCategory} </h5>
            <p class="card-text">
              ${information.strCategoryDescription.slice(0, 150)}
            </p>
            <p class="card-text">
              <h5 class="price">price:</h5>
              <button class="btn btn-click" type="">Buy Now</button>
            </p>
          </div>
        </div>
          `;
    cardDetails.appendChild(div);
  }
};
