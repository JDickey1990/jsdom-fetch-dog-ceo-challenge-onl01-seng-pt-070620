console.log('%c HI', 'color: firebrick')

let breeds = [];
document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(results => renderImages(results));
  }
  
  function renderImages(images) {
    const main = document.querySelector("#dog-image-container")
    images.message.forEach(function (r){
      const img = document.createElement('img')
      img.src = r
      main.appendChild(img)
    })
  }
  
  function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => {
            breeds = Object.keys(results.message);
            renderBreeds(breeds);
            // addBreedListener();
        }
        );
  }

  function renderBreeds(breeds) {
    const ul = document.querySelector("#dog-breeds")
    breeds.forEach(function (breed){
      const li = document.createElement('li')
      li.innerHTML = breed
      ul.appendChild(li)
      li.addEventListener('click', changeColor);
    })
  }

  function changeColor(event) {
    event.target.style.color = 'green';
  }

  
 function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }


  
  