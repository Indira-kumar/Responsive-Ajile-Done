const openModalcssButtons = document.querySelectorAll('[data-modalcss-target]')
const overlay = document.getElementById('overlay')

openModalcssButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalcss = document.querySelector(button.dataset.modalcssTarget)
    openModalcss(modalcss)
  })
})

overlay.addEventListener('click', () => {
  const modalcsss = document.querySelectorAll('.modalcss.active')
  modalcsss.forEach(modalcss => {
    closeModalcss(modalcss)
  })
})

function openModalcss(modalcss) {
  if (modalcss == null) return
  modalcss.classList.add('active')
  overlay.classList.add('active')
}

function closeModalcss(modalcss) {
  if (modalcss == null) return
  modalcss.classList.remove('active')
  overlay.classList.remove('active')
}