window.addEventListener('load', (event) => {
    document.body.innerHTML = document.body.innerHTML.replaceAll('Boros Guildgate', '<div className="zedge_tooltip">Boros Guildgate<span className="zedge_tooltiptext"><img src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366390&type=card" id="ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_cardImage" alt="Boros Guildgate" style="border:none;border-radius:13px;-webkit-border-radius:13px;-moz-border-radius:13px;"> </span> </div>')
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
