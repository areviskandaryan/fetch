const div= document.querySelector(".dog-img")

const state = {
    name: "",
    subname:"",
}

const selectElement = document.querySelector('.dog-breed');

selectElement.addEventListener('change', (event) => {
  if(event.target.value) {
    state.name = event.target.value.toLowerCase().split(" ")[1];
    state.subname = event.target.value.toLowerCase().split(" ")[0];
    render(state.name, state.subname);
  } else {
      div.innerHTML = "select a bread";
  }

});


const render = (name, subname) => {
    let url = name === undefined ? `https://dog.ceo/api/breed/${subname}/images/random` :
    `https://dog.ceo/api/breed/${name}/${subname}/images/random`
    getBreedImg(url);
}



const getBreedImg=(url)=>{
    fetch(url)
        .then(r => r.json())
        .then(res => {
            div.innerHTML = "";
            let randomImg = document.createElement('img');
            randomImg.src = res.message;
            randomImg.width = 250;
            div.append(randomImg);
        })
}