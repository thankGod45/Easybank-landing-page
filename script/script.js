const opener = document.getElementById('hamburger')

const closed = document.querySelector('#close')
const links = document.getElementById('nav-link')
 const overlay = document.querySelector('.overlay')

   opener.addEventListener('click', ()=> {
           links.style.display = "flex"  
           opener.style.display = "none"
           closed.style.display = "block"
             overlay.style.display = "block"
             document.body.classList.add('no-scroll')
   })
   closed.addEventListener('click', ()=> {
           links.style.display = "none"
           closed.style.display = "none"
           opener.style.display = "block"
             overlay.style.display = "none"
               document.body.classList.remove('no-scroll')
   })
    
