// Wic Doctor Custom Branding Override
// This script runs after Jitsi Meet loads and replaces branding text

(function() {
    'use strict';
    
    // Function to replace text in DOM
    function replaceTextInDOM() {
        // Replace "Jitsi Meet" with "Wic Doctor" in all text nodes
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const nodesToReplace = [];
        let node;
        
        while (node = walker.nextNode()) {
            if (node.nodeValue && node.nodeValue.includes('Jitsi Meet')) {
                nodesToReplace.push(node);
            }
        }
        
        nodesToReplace.forEach(node => {
            if (node.nodeValue) {
                node.nodeValue = node.nodeValue.replace(/Jitsi Meet/g, 'Wic Doctor');
            }
        });
    }
    
    // Run on load - use multiple hooks to catch dynamic content
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(replaceTextInDOM, 100);
            setTimeout(replaceTextInDOM, 500);
            setTimeout(replaceTextInDOM, 1000);
        });
    } else {
        setTimeout(replaceTextInDOM, 100);
        setTimeout(replaceTextInDOM, 500);
        setTimeout(replaceTextInDOM, 1000);
    }
    
    // Observe for dynamic content changes with a delay to let React render
    let mutationTimeout;
    const observer = new MutationObserver(function(mutations) {
        clearTimeout(mutationTimeout);
        mutationTimeout = setTimeout(replaceTextInDOM, 50);
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: false
    });
    
    // Also listen for specific events that might reload content
    window.addEventListener('load', function() {
        setTimeout(replaceTextInDOM, 100);
        setTimeout(replaceTextInDOM, 500);
    });
})();
