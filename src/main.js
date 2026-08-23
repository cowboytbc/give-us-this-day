const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#site-nav')

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  navigation.classList.toggle('is-open', !isOpen)
  document.body.classList.toggle('menu-open', !isOpen)
})

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false')
    navigation.classList.remove('is-open')
    document.body.classList.remove('menu-open')
  })
})

// Shirt viewer — tap to toggle front/back on mobile
const viewer = document.querySelector('.shirt-viewer')
if (viewer) {
  const label = viewer.querySelector('.shirt-label')
  const toggle = () => {
    const showingFront = viewer.classList.toggle('show-front')
    label.textContent = showingFront ? 'FRONT' : 'BACK'
  }
  viewer.addEventListener('click', toggle)
  viewer.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') toggle() })
  // On desktop, hover already handles it — sync label on mouseenter/leave
  viewer.addEventListener('mouseenter', () => { label.textContent = 'FRONT' })
  viewer.addEventListener('mouseleave', () => { label.textContent = viewer.classList.contains('show-front') ? 'FRONT' : 'BACK' })
}
