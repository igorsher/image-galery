/*let url = 'https://api.unsplash.com/search/photos?query=winter&per_page=20&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';*/
let url = 'https://api.unsplash.com/search/photos?query=winter&per_page=20&orientation=landscape&client_id=EuvZDxSoY09-kFkFkr1hKOHWHrM-qKlSiUlayK5XDiw';
async function getData() {
   const res = await fetch(url);
   const data = await res.json();
   showData(data);
   const bodyUrl = data.results[3].urls.regular;
   console.log(bodyUrl);
   const bodyImage = document.querySelector('body');
   bodyImage.style.background = `url(${bodyUrl}) 0 0/200% auto`;
  /* console.log(data.results)
   console.log(data)
   console.log(url);*/

}
getData();

const galleryContainer = document.querySelector('.galleryContainer');

function showData(data) {
   data.results.map((item, index) => {
      const img = document.createElement('img');
      img.classList.add('gallery-img');
      img.src = `${data.results[index].urls.regular}`;
      img.alt = `image`;
      galleryContainer.append(img);
   })
}

function deleteImage() {
   let child = document.querySelectorAll('.gallery-img');
   child.forEach((item) => {
      item.remove();
   })
}

let link
function changeLink() {
   deleteImage()
   link = document.getElementById("input").value
   url = `https://api.unsplash.com/search/photos?query=${link}&per_page=21&orientation=landscape&client_id=EuvZDxSoY09-kFkFkr1hKOHWHrM-qKlSiUlayK5XDiw`;
   console.log(url);
   getData();
}

const glassButton = document.querySelector('.glass');
glassButton.addEventListener('click', changeLink);

const deleteX = document.querySelector('.deleteX');
deleteX.addEventListener('click', () => {
   document.getElementById("input").value = "";
})

const inputEnter = document.querySelector(".text-search");
inputEnter.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) {
      changeLink();
   }
})





