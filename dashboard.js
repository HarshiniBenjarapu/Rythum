document.addEventListener('DOMContentLoaded', function(){
    const container = document.getElementById('playlist-container');
    const scrollLeft = document.getElementById('scroll-right');
    const scrollRight = document.getElementById('scroll-left');
    const cards = document.querySelectorAll('.crad');

    scrollLeft.addEventListener('click', ()=>{
        container.scrollBy({
            left: -300,
        behavior: 'smooth'
    });
});
    scrollRight.addEventListener('click',()=>{
        container.scrollBy({
            left: 300,
            behaviour: 'smooth'
        });
        
    });
    cards.forEach((card)=>{
        card.addEventListener('click',()=>{
            cards.forEach((c)=> 
            c.classList.remove('focus'));
        })
    
});
});