window.addEventListener('load', (event) => {
    document.body.innerHTML = document.body.innerHTML.replaceAll('Boros Guildgate', '<span class="zedge_tooltip">Boros Guildgate<span class="zedge_tooltiptext"><img src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366390&type=card" alt="Boros Guildgate"></span></span>')
    document.body.innerHTML = document.body.innerHTML.replaceAll('some games', '<span class="zedge-confetti">some games</span>')
    let classname = document.getElementsByClassName("zedge-confetti");

    var animateButton = function(e) {
        e.preventDefault;
        if (!e.target.classList.contains('animate'))
        {
            e.target.classList.add('animate');
        }
        setTimeout(function(){
            e.target.classList.remove('animate');
        },700);
    };

    console.log('confetties', classname.length)
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('mouseover', animateButton, false);
    }
});
