// cursor, blur cursor and there hover effect
const hoveredElements = document.querySelectorAll('#nav-web-logo,  #overflow-break ,#arrow, .nav-options, #nav-btns button, .elem, .cards,#footer-container a, #footer-part-1-image-element img, .bxl-facebook-square ,.bxl-instagram-alt,#insta-follow ');
const customCursor = document.getElementById('cursor');
const blur = document.getElementById('cursor-blur');

function handleHover() {
    gsap.to(customCursor, {
        height: 80,
        width: 80, border: '0.5px solid white',
        backgroundColor: '#96c11e00'

    });
}

function handleMouseLeave() {
    gsap.to(customCursor, {
        height: 20,
        width: 20,
        border: 'none',
        backgroundColor: '#95c11e'
    });
}

document.addEventListener("mousemove", function (dets) {
    gsap.to(customCursor, {
        left: dets.x - 10,
        top: dets.y - 10,
        duration: 0.1
    });

    gsap.to(blur, {
        left: dets.x - 150,
        top: dets.y - 150,
        duration: 0.1
    });

    const isHovered = Array.from(hoveredElements).some(element => element.contains(dets.target));

    if (isHovered) {
        gsap.to(customCursor, {
            left: dets.x - 40,
            top: dets.y - 40,
            duration: 0.1
        });
    }

    else {
        gsap.to(customCursor, {
            left: dets.x - 10,
            top: dets.y - 10,
            duration: 0.1
        });
    }
});

hoveredElements.forEach(element => {
    element.addEventListener('mouseover', handleHover);
    element.addEventListener('mouseout', handleMouseLeave);
});


// for left quatation marks
gsap.from("#left-quotation-mark-image", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#left-quotation-mark-image",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 55%",
        scrub: 2
    }
})


// for right quatation marks
gsap.from("#right-quotation-mark-image", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#left-quotation-mark-image",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 55%",
        scrub: 2
    }
})


// for nav scroll effect
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "130px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

//black body effect
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body ",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }

})

// text scroll up effect 
gsap.from("#page-4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page-4 h1",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 95%",
        scrub: 1.5
    }
})


