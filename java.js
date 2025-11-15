let movies = [
    {
      name: 'falcon and the winter soldier',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
      image: 'images/slider 2.PNG'
    },
    {
      name: 'loki',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
      image: 'images/slider 1.PNG'
    },
    {
      name: 'wanda vision',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
      image: 'images/slider 3.PNG'
    },
    // and so on
  ]
  
  let slideIndex = 0;
  let sliders = [];
  
  const carousel = document.querySelector('.carousel');
  
  const createSlide = () => {
    if(slideIndex >= movies.length){
      slideIndex = 0;
    }
  
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
  
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
  
    h1.appendChild(document.createTextNode(movies[slideIndex-1].name));
    p.appendChild(document.createTextNode(movies[slideIndex-1].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    sliders.push(slide);
  }
  
  for(let i = 0; i < movies.length; i++){
    createSlide();
  }