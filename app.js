/* DATA */
import { companies, clients, works } from './assets/js/data.js'

const companyContent = document.querySelector('.company-content')
const clientContent = document.querySelector('.client-content')
const projectContent = document.querySelector('.project-content')
const filterBtns = document.querySelectorAll('.filter-btn')

/*  COMPANIES CONTENT  */
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
/* content */
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
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let category = e.target.innerText
    category === "All" ? renderProjectContent(works) : renderProjectContent(filterWorks(category))
  })
})
function filterWorks(cate) {
  return works.filter((work) => work.category === cate)
}