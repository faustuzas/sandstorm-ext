window.addEventListener('load', (event) => {
    document.body.innerHTML = document.body.innerHTML.replaceAll('Boros Guildgate', '<span class="zedge_tooltip">Boros Guildgate<span class="zedge_tooltiptext"><img src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366390&type=card" alt="Boros Guildgate"></span></span>')
    let re = /(Boros Guildgate)/;
    let node = document.body.textContent.match(re);
    console.log(node)
    if (document.body.textContent.match(re)) {
        console.log('Found Boros Guildgate')
        let match = re.exec(node)
        if (match && match.length) {
            console.log('match', match[0])
        }
    }
});
