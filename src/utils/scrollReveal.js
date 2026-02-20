// Scroll reveal animation utility
export const initScrollReveal = () => {
  const reveals = document.querySelectorAll('.reveal')
  
  const revealOnScroll = () => {
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active')
      }
    })
  }
  
  window.addEventListener('scroll', revealOnScroll)
  revealOnScroll() // Initial check
  
  return () => window.removeEventListener('scroll', revealOnScroll)
}
