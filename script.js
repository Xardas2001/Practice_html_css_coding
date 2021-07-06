const allButtons = document.querySelectorAll(".tab_button");
const allTabs = document.querySelectorAll(".reviews_item");

allButtons.forEach(function(item){
    item.addEventListener("click", function(){
        let currentButton = item;
        let tabId = currentButton.getAttribute("data-tab");

        let currentTab = document.querySelector(tabId);
        if(!(currentButton.classList.contains('active'))){
            allButtons.forEach(function(item){
                item.classList.remove('active');
            });
    
            allTabs.forEach(function(item){
                item.classList.remove('active');
            });
    
            currentButton.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});
