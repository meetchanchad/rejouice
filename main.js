function playReelMover(){
    let pageOneContent = document.querySelector(".pageOne-content")
    let cursor = document.querySelector("#cursor")

pageOneContent.addEventListener("mousemove" ,function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
    })
})

pageOneContent.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
pageOneContent.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
playReelMover()

let tl = gsap.timeline()

tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:0.5,
    stagger:0.2
})
tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:0.5,
    delay:0.5,
    stagger:0.1
})

tl.to("#loader",{
    opacity:0,
    display: "none"
})
tl.from(".pageOne-content h1 span",{
    y:150,
    opacity:0,
    stagger:0.1,
    duration:0.4,
    delay:-0.5
})