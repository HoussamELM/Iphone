const tlIntro = gsap.timeline({
    scrollTrigger:{
        trigger: ".first-page",
        start: "0%",
        end: "100%",
        scrub:true,
        pin:true,
        pinSpacing: false
    }
})

tlIntro.fromTo('nav',{opacity:1},{opacity:0})

const  tlH = gsap.timeline({
    scrollTrigger:{
        trigger: ".second-page",
        scrub:true,
        start: "-40%",
        end: "60%",
    }
})

tlH.fromTo(".highlight",
{color:'rgba(255,255,255,0.4)'},
{color:'rgba(255,255,255,1)',stagger:1}
)

const  tlHRemove = gsap.timeline({
    scrollTrigger:{
        trigger: ".second-page",
        scrub:true,
        start: "40%",
        end: "100%",
    }
})

tlH.fromTo(".highlight",
{color:'rgba(255,255,255,1)'},
{color:'rgba(255,255,255,0.4)',stagger:1}
)

const tlSplit = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-page",
        start: '-40%',
        end: '0%',
        markers: true,
        scrub: true
    }
})

tlSplit.fromTo(".large-phone",{x: '40%'},{x:'20%'})
tlSplit.fromTo(".small-phone",{x: '-40%'}, {x:'-20%'}, '<')
tlSplit.fromTo(".product-text-left",{x: '100%',opacity:0}, {x: '-100%',opacity:1}, '<')
tlSplit.fromTo(".product-text-right",{x: '-50%',opacity:0}, {x: '110%',opacity:1}, '<')

const tlSplitPin = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-page",
        start: "0%",
        end: "100%",
        scrub:true,
        pin:true,
        pinSpacing: false
    }
})


//caroussel

const swatches = document.querySelectorAll(".swatches img")
const gallery = document.querySelector(".phone-gallery")
const slides = document.querySelectorAll(".phone-gallery-container")

let currentSwatch = "blue"
let topIndex = 2;

swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left

    swatch.addEventListener("click", (e) => {
        let swatchName = e.target.getAttribute("swatch")
        let closeUp = document.querySelector("." + swatchName)

        if(currentSwatch === swatchName) return;

        gsap.set(closeUp, {zIndex: topIndex});

        gsap.fromTo(
            closeUp,
             {opacity: 0},
             {opacity: 1, duration: 1}
        );

        gsap.to(gallery, {x:-coord, duration: 1, ease: 'Power2.easeOut'});

        topIndex++;
        currentSwatch = swatchName
    })
})

// p-5

