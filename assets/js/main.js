const bookingUrl = 'https://diamondhairbeauty.setmore.com/layla'

const handleBooking = () => {
  if (window.SetmoreWidget && typeof window.SetmoreWidget.loadPopupEmbed === 'function') {
    window.SetmoreWidget.loadPopupEmbed(bookingUrl)
  } else {
    window.open(bookingUrl, '_blank', 'noopener,noreferrer')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.js-book-button')
  buttons.forEach((btn) => btn.addEventListener('click', handleBooking))

  const revealElements = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
            if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  revealElements.forEach((el) => observer.observe(el))
})
