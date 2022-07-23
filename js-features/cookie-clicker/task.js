const cookies = document.getElementById("cookie")
const clickerCounter = document.getElementById("clicker__counter")
let click = +clickerCounter.textContent

cookies.onclick = function() {
 if (cookies.width === 200) {
    cookies.width = "400"
 } else {
    cookies.width = "200"
 }
 clickerCounter.textContent = ++click
}