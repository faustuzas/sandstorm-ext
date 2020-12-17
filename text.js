window.addEventListener('load', (event) => {
    // document.body.innerHTML = document.body.innerHTML.replaceAll('some games', '<span class="zedge-confetti">some games</span>')
    // let classname = document.getElementsByClassName("zedge-confetti");
    //
    // var animateButton = function(e) {
    //     e.preventDefault;
    //     if (!e.target.classList.contains('animate'))
    //     {
    //         e.target.classList.add('animate');
    //     }
    //     setTimeout(function(){
    //         e.target.classList.remove('animate');
    //     },700);
    // };
    //
    // console.log('confetties', classname.length)
    // for (var i = 0; i < classname.length; i++) {
    //     classname[i].addEventListener('mouseover', animateButton, false);
    // }

    document.body.innerHTML = document.body.innerHTML.replace('Boros Guildgate', '<span id="boros" class="zedgestorm-keyword" onmouseover=showCard() onmouseout=hideCard()>Boros Guildgate</span>')
    $( function() {
        $( "#zedgestorm-boros" ).draggable();
    } );
    $( document ).mousemove(function( event ) {
        $( "#zedgestorm-boros" ).position({
            my: "left+3 bottom-3",
            of: event,
            collision: "fit"
        });
    });
    function showCard() {
        $( "#zedgestorm-boros" ).css({display: "block"})
    }
    function hideCard() {
        $( "#zedgestorm-boros" ).css({display: "none"})
    }

    let boros = document.createElement('div')
    boros.setAttribute("id", "zedgestorm-boros")
    boros.setAttribute("class", "ui-widget-content")
    let img = document.createElement('IMG')
    img.setAttribute("src", "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366390&type=card")
    boros.append(img)
    document.body.appendChild(boros)
});
