let charka = document.querySelector(".charka");

let totalLines = 24;
let angle = 360 / totalLines;

let charkaLines = [];

let angleSum = 0;

for (let i = 0; i < totalLines; i++) {
    let charkaLine = document.createElement("div");
    charkaLine.setAttribute("class", `charka-line charka-line-${i}`);
    angleSum += angle;
    charkaLine.style.transform = `rotate(${angleSum}deg)`
    charkaLines.push(charkaLine);
    charka.append(charkaLine);
}
