window.addEventListener('load', (event) => {
    const images = Array.from(document.querySelectorAll('img'))

    console.log('yo')
    images.forEach(image => {
        console.log('sending: ', image)
        chrome.runtime.sendMessage({message: "check_image", image });
    })
});