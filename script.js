const cards = document.querySelectorAll(".card");

cards.forEach((card) =>{

    card.addEventListener("mousehover", () =>{
       
        gsap.to(card, {
            rotateY: 360,
            duration: 1.5,
            ease:"power2.inOut"
        });
       },
        
       card.addEventListener("mouseout", () =>{
        gsap.to(card,{
            rotateY: 360,
            duration: 1.5,
            ease:"power2.inOut"
        });
       })
      )
 }
      
)

