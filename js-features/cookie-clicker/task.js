let counter = 0;
const cookie = document.getElementById("cookie");

cookie.onclick = function(){
    counter++;
    document.getElementById("clicker__counter").textContent = counter;

    let width = this.width;
    //let height = this.heigth;
    width = (width == 200 ? width * 2 : width / 2 );
    this.width = width;
}