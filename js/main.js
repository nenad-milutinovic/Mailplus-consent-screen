const sideMenuItems = document.querySelectorAll('.content-side-menu__item')
const checkBox = document.querySelector('.checkbox-container')
const saveDesktopBtn = document.querySelector('#save-settings-desktop')
const saveMobileBtn = document.querySelector('#save-settings-mobile')
const allowAllMobileBtn = document.querySelector('#allow-all-mobile')
const allowAllDesktopBtn = document.querySelector('#allow-all-desktop')
const saveButtons = [ saveDesktopBtn, saveMobileBtn, allowAllMobileBtn, allowAllDesktopBtn ]
const closeBtn = document.querySelector('.mailplus-header__close')
const container = document.querySelector('.container')

const showItem = e => {
  e.stopPropagation()

  const selectedElement = document.querySelector('.display')
    
  if (selectedElement) {
    const selectedElementId = selectedElement.id.split('-')[1]
    const newSelectedElementId = e.currentTarget.dataset.id
    
    if (newSelectedElementId !== selectedElementId) {
      selectedElement.classList.toggle('display')
      selectedElement.classList.toggle('display-no')
      document.querySelector('#feature-' + newSelectedElementId).classList.toggle('display')
      document.querySelector('#feature-' + newSelectedElementId).classList.toggle('display-no')
      document.querySelector(`[data-id="${newSelectedElementId}"]`).classList.toggle('active')
      document.querySelector(`[data-id="${selectedElementId}"]`).classList.toggle('active')
    }

    return
  }
}

sideMenuItems.forEach(item => {
  item.addEventListener('click', showItem)
})

const handleSubmit = e => {
    document.querySelector('#ch-box').checked = true
    container.classList.add('container__fadeOut')
    container.style.opacity = '0'
    checkBox.classList.remove('no-show')

    setTimeout(() => {
      if (container.classList.contains('container__fadeOut') && container.classList.contains('container__fadeIn')) {
        container.classList.remove('container__fadeOut')
      }

      if (!checkBox.classList.contains('no-show')) {
        checkBox.classList.add('no-show')
      }
      
      document.querySelector('#ch-box').checked = false
      document.querySelector('.mailplus-popup-wrapper').style.display = 'none'
    }, 2400)
    
}

saveButtons.forEach(saveBtn => {
  saveBtn.addEventListener('click', handleSubmit)
})

closeBtn.addEventListener('click', () => {
  document.querySelector('.mailplus-popup-wrapper').style.display = 'none'
})
