const links = Array.from(document.querySelectorAll('.has-tooltip'));

links.forEach(element => element.addEventListener('click', processClick));

function processClick(event) {
    const link = event.target;
    const position = link.dataset.position;
    console.log("[]");

    event.preventDefault();

    let text = link.getAttribute("title");
    link.insertAdjacentHTML("afterEnd", `<div class = 'tooltip'> ${text} </div>`);

    const tooltips = Array.from(document.querySelectorAll('.tooltip'));

    
}