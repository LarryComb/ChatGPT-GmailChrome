console.log('hi im gpt script');


chrome.runtime.onMessage.addListener(
    function(emailContent, sender, senderResponse) {
        console.log(emailContent);
        
    }

)
