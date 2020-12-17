function boros(id, text, url) {
    const name = id
    document.body.innerHTML = document.body.innerHTML.replace(text, '<span id=' + name + ' class="zedgestorm-keyword">' + text + '</span>')
    let boros = document.createElement('div')
    boros.setAttribute("id", "zedgestorm-" + name)
    boros.setAttribute("class", "ui-widget-content")
    let img = document.createElement('IMG')
    img.setAttribute("src", url)
    boros.append(img)
    document.body.appendChild(boros)

    $( "#" + name ).mousemove(function(e) {
        console.log(name)
        let boros = $( "#zedgestorm-" + name )
        boros.css({display: "block"})
        boros.position({
            my: "left+10 bottom",
            of: e.originalEvent,
            collision: "flip"
        });
    });
    function addTimeout() {
        let boros = $( "#zedgestorm-" + name )
        boros.remove_timeout = setTimeout(function() {
            boros.css({display: "none"})
        }, 3000)
    }

    $( "#" + name ).mouseleave(addTimeout);
    $( "#zedgestorm-" + name ).mouseleave(addTimeout);
    $( "#zedgestorm-" + name ).mousemove(function() {
        clearTimeout($("#zedgestorm-" + name).remove_timeout)
    });
}


window.addEventListener('load', (event) => {
    document.body.innerHTML = document.body.innerHTML.replaceAll('some games', '<span class="zedge-confetti">some games</span>')
    let classname = document.getElementsByClassName("zedge-confetti");

    var animateButton = function(e) {
        e.target.classList.add('animate');
        setTimeout(function(){
            e.target.classList.remove('animate');
        },700);
    };

    console.log('confetties', classname.length)
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('mouseenter', animateButton, false);
    }

    boros("boros", 'Boros Guildgate', "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366390&type=card");
    boros("chemister", 'Chemister\'s Insight', "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482736&type=card");
    boros("capture", 'Capture Sphere', "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=485370&type=card");

});
