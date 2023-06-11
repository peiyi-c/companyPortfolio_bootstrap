/*  COMPANIES CONTENT  */
const companies = [
  {
    id: 1,
    name: "Microsoft"
  },
  {
    id: 2,
    name: "Goggle"
  },
  {
    id: 3,
    name: "Walmart"
  },
  {
    id: 4,
    name: "airbnb"
  },
  {
    id: 5,
    name: "amazon"
  },
  {
    id: 6,
    name: "CNN"
  },
];

const companyContent = document.querySelector('.company-content')

function renderCompanyContent(items) {
  let rawHTML = ""
  items.forEach((item) => {
    rawHTML += `
        <div class="col-md-4 col-lg-2">
          <div class="companies__logo-box shadow-sm">
            <img src="images/companies/campany-${item.id}.png" 
            alt="Company ${item.id} logo" 
            title="Company ${item.name} Logo" class="img-fluid">
          </div>
        </div>
        `
  })
  companyContent.innerHTML = rawHTML
}

renderCompanyContent(companies)

/*  CLIENT CONTENT  */

const clients = [
  {
    id: 1,
    name: "Johnathan Zawadi",
    job: "CEO & Founder",
    rating: 4,
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt recusandae amet dignissimos, ullam tenetur optio, nulla sapiente odit, rem cum expedita!"
  },
  {
    id: 2,
    name: "Joy Marette",
    job: "Global Finance Manager",
    rating: 5,
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt recusandae amet dignissimos, ullam tenetur optio, nulla sapiente odit, rem cum expedita!"
  },
  {
    id: 3,
    name: "Carebell Aberdom",
    job: "Entrepreneur",
    rating: 4,
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt recusandae amet dignissimos, ullam tenetur optio, nulla sapiente odit, rem cum expedita!"
  },
  {
    id: 4,
    name: "Uhuru Kimadi",
    job: "General Manager",
    rating: 5,
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt recusandae amet dignissimos, ullam tenetur optio, nulla sapiente odit, rem cum expedita!"
  },
];

/* content */

const clientContent = document.querySelector('.client-content')

function renderClientContent(items) {
  let rawHTML = ""
  items.forEach((item) => {
    rawHTML += `
  <div class="carousel-item">
              <!-- testimonials card  -->
              <div class="testimonials__card">
                <p class="lh-lg">
                  <i class="fas fa-quote-left"></i>
                  ${item.quote}
                  <i class="fas fa-quote-right"></i>
                <div class="ratings p-1" data-id="${item.id} ">
                </div>
                </p>
              </div>
              <!-- client picture  -->
              <div class="testimonials__pic">
                <img src="images/testimonials/client-${item.id}.jpeg" alt="client-1 picture" class="rounded-circle img-fluid">
              </div>
              <!-- client name & role -->
              <div class="testimonials__name">
                <h3>${item.name}</h3>
                <p class="fw-light">${item.name}</p>
              </div>
            </div>
  `
  })
  clientContent.innerHTML = rawHTML
  clientContent.firstElementChild.classList.add('active')
}

renderClientContent(clients)

/* rating */

const clientRatings = document.querySelectorAll('.ratings')

function renderRatings(item) {
  clientRatings.forEach((clientRating) => {
    let i = clientRating.dataset.id - 1
    clientRating.innerHTML = generateRatings(item[i]["rating"])
  })
}

function generateRatings(num) {
  let rawHTML = ""
  for (let i = 1; i <= num; i++) {
    rawHTML += `<i class="fas fa-star"></i>`
  }
  return rawHTML
}

renderRatings(clients)

/*  PROJECT CONTENT  */

const works = [
  {
    id: 1,
    name: "project ninja",
    category: "Websites"
  },
  {
    id: 2,
    name: "shape&fit",
    category: "Websites"
  },
  {
    id: 3,
    name: "fish and chips",
    category: "Websites"
  },
  {
    id: 4,
    name: "fairytale hair",
    category: "Design"
  },
  {
    id: 5,
    name: "design gururu",
    category: "Design"
  },
  {
    id: 6,
    name: "coffee host",
    category: "Mockup"
  },
  {
    id: 7,
    name: "slurpee genie",
    category: "Mockup"
  },
  {
    id: 8,
    name: "cornflakes snowflakes",
    category: "Mockup"
  },
  {
    id: 9,
    name: "Penny's cheese factory",
    category: "Mockup"
  }
];

const projectContent = document.querySelector('.project-content')
const filterBtns = document.querySelector('.filter-btns')

function renderProjectContent(items) {
  let rawHTML = ""
  items.forEach((item) => {
    rawHTML += `
    <col-lg-4 class="col-md-6 project" data-category="${item.category}">
          <div class="portfolio-box shadow">
            <img src="images/portfolio/portfolio-${item.id}.jpeg" alt="portfolio-${item.id} image" title="portfolio ${item.id} picture ${item.name}"
              class="img-fluid">
            <div class="portfolio-info">
              <div class="caption">
                <h4>${item.name}</h4>
                <p>${item.category}</p>
              </div>
            </div>
          </div>
        </col-lg-4>
    `
  })
  projectContent.innerHTML = rawHTML
}

renderProjectContent(works)

/* FILTER PROJECTS CONTENT */
filterBtns.addEventListener('click', (e) => {
  let cate = e.target.innerText
  cate === "All" ? renderProjectContent(works) : renderProjectContent(filterWorks(cate))
})

function filterWorks(cate) {
  return works.filter((work) => work.category === cate)
}