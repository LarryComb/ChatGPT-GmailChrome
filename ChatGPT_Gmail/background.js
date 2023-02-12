console.log('hello i am the service worker');

chrome.runtime.onMessage.addListener(
    function(emailContent, sender, senderResponse) {
        console.log(emailContent);
        /*(async function() {
            const tabs = await chrome.tabs.query({url: 'https://chat.openai.com/*'});
            const tab = tabs[0];
            chrome.tabs.sendMessage(tab.id, emailContent);
        })();*/
    }
    

)