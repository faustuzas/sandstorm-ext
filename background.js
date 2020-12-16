// cocoSsd.load().then(model => {
//     chrome.runtime.onMessage.addListener(
//         function(request, sender, sendResponse) {
//           if(request.message === "check_image" ) {
//             console.log(request.image)
//           }
//         }
//     );
// })

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request)
    //   if(request.message === "check_image" ) {
        // console.log(request.image)
    //   }
    }
);