window.onload = function () {
    window.onhashchange = function () {
        if (window.location.hash.startsWith('#inbox/')){
            const spans = document.querySelectorAll('span'); 
            
            for (const span of spans) {
                if (span.innerText === 'Reply'){
                  //do somethign with the element   
                    span.addEventListener('click', function() {
                        const email = document.querySelector('.adn.ads');
                        (async function() {
                            chrome.runtime.sendMessage(email.textContent);
                        })();
                    });
                }
            }
        }
    };
}