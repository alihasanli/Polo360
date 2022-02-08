$(()=>{
    let path = "sliderimg/"
    let img = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
    let x = 0 
    const slider = $("#slider")
    

    slider
        .css({
            width: "100%",
            margin: "auto",
            boxShadow: "0 0 5px #333",
            position: "relative",
            borderRadius: "7px",
            background: "#FFF center/cover",
            overflow: "hidden"
        })
        .click(function(e){
            if(e.pageX > $(window).width() / 2) change()
            else change(-1)
        })
    
    .append('<div id="frame"></div>')

    .append('<div id="thumbs"></div>')
    
    const frame = $("#frame")
                
    frame.css({
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "yellow center/cover",
        })
    
    $("#thumbs").css({
        position: "absolute",
        width: "100%",
        textAlign: "center",
        bottom: 0
    })
    
    for(let i = 0; i < img.length; i++) {
        $("#thumbs").append(`<img src="${path}${img[i]}" />`)
    }
    
    $("#thumbs>img")
        .css({
            width: "30px",
            height: "30px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "2px solid #FFF",
            margin: "10px"
        })
        .click(function(event){
            event.stopPropagation()
            x = $(this).index() - 1
            change()
        })
            
    
    let timer = setTimeout(change, 0, 0)
    
    function change(dx = 1){
        clearTimeout(timer)
        x += dx
        if( x > img.length - 1) x = 0
        if( x < 0) x = img.length - 1
    
        frame.stop()
            .css({
                left: dx * 100 + "%",
                backgroundImage: `url('${path}${img[x]}')`
            })
            .animate({left: 0}, 500, ()=>{
                slider.css({
                    backgroundImage: `url('${path}${img[x]}')`
                })
            })
    
        timer = setTimeout(change, 3000)
    }
    
})