const categoriesAllowOption = document.querySelectorAll('input[type=checkbox]')
const saveSettingsBtn = document.querySelector('#save-settings')
let href = saveSettingsBtn.getAttribute('href')
let paramsArray = href.split('&')
let queryParams = paramsArray.slice(1, paramsArray.length)
const consents = {}

queryParams.forEach(el => {
  consents[el.split('=')[0]] = el.split('=')[1]
})

const categoryHandler = e => {
  const categorySelected = e.target.id

  if (categorySelected) {
    consents[categorySelected] = e.target.checked ? '1' : '0'    
  }

  queryParams = queryParams.map(e => {
    const newQueryParams = e.split('=')

    if (newQueryParams.includes(categorySelected)) {
      newQueryParams[1] = consents[categorySelected]
    }

    return newQueryParams.join('=')
  })  

  
  paramsArray = paramsArray.slice(0, 1).concat(queryParams)
  const newHref = paramsArray.join('&')  
  saveSettingsBtn.setAttribute('href', newHref)
}

categoriesAllowOption.forEach(el => {
  el.addEventListener('click', categoryHandler)
})

