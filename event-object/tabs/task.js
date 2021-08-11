const tabs = Array.from(document.querySelectorAll(".tab"));
const contentItems = Array.from(document.querySelectorAll(".tab__content"));


tabs.forEach(element => {
    element.addEventListener("click", clickOnTab);
});

function clickOnTab(event) {
    const tab = event.target;
    const parent = tab.closest("tabs");

    // Переключение вкладок
    if (tab.classList.contains("tab_active")) {
        tab.classList.remove("tab_active");
    } else {
        tab.classList.add("tab_active");
    }

    // Переключение контента, соответствующего вкладке 
    // Находим индекс активной вкладки
    let index = tabs.findIndex(item => item === tab);
    
    // Переключаем контент
    const oldContent = contentItems.find(item => item.classList.contains("tab__content_active"));
    oldContent.classList.remove("tab__content_active");

    const content = contentItems[index];
    content.classList.add("tab__content_active");      
}