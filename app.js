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