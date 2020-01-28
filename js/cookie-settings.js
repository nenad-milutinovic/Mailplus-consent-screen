const categoriesAllowOption = document.querySelectorAll('input[type=checkbox]')
const saveSettingsDesktopBtn = document.querySelector('#save-settings-desktop')
const saveSettingsMobileBtn = document.querySelector('#save-settings-mobile')
const saveSettingsButtons = [ saveSettingsDesktopBtn, saveSettingsMobileBtn ]

const itemHandler = item => {
  let href = item.getAttribute('href')
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
    item.setAttribute('href', newHref)
  }
  
  categoriesAllowOption.forEach(el => {
    el.addEventListener('click', categoryHandler)
  })
}

saveSettingsButtons.forEach(item => itemHandler(item))
