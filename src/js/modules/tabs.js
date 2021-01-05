function tabs({headerSelector, tabSelector, contentSelector, activeClass, display = 'block'}) {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);
          

    function hideTabContent() {
        contents.forEach(content => {
            content.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        //console.log(contents);
        contents[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (event) => {
        const target = event.target;
    
        if(target && 
          (target.classList.contains(tabSelector.replace(/\./, '')) || 
          target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
              tabs.forEach((tab, i) => {
                  if (tab == target || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                  }
              });
          }
    });

    
}

export default tabs;