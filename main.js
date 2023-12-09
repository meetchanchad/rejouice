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