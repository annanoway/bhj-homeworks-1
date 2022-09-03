let hasTooltip = document.querySelectorAll(".has-tooltip"); 
let body = document.getElementsByTagName("body");
let tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
let prevTop;
let prevLeft;


for (let item of hasTooltip) {
    let textTip = item.getAttribute("title");
    item.onclick = () => {
        let coordinats = item.getBoundingClientRect();
        let top = coordinats.bottom + 2;
        let left = Math.floor(coordinats.left);

        if (prevTop && top === prevTop && left === prevLeft) {
            tooltip.classList.toggle("tooltip_active");
            return false;
        }

        prevTop = top;
        prevLeft = left;
        tooltip.textContent = textTip;
        tooltip.setAttribute("style", `left:${left}px;  top:${top}px;`);
        tooltip.classList.add("tooltip_active");
        document.body.append(tooltip);
        window.addEventListener('scroll', () => {
            top = item.getBoundingClientRect().bottom + 2;
            left = item.getBoundingClientRect().left;
            tooltip.setAttribute("style", `left:${left}px;  top:${top}px;`);
        })
        return false;
    }
}