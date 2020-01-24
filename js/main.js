const sideMenuItems = document.querySelectorAll('.content-side-menu__item')

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