function addContent() {
    const container = document.querySelector("#container");

    const paragraph = document.createElement("P");
    paragraph.textContent = "I am red!";
    paragraph.style.color = "red";

    const title = document.createElement("h3");
    title.textContent = "I'm a blue h3!";
    title.style.color = "blue";

    container.appendChild(paragraph);
    container.appendChild(title);

    const innerContainer = document.createElement("div")
    innerContainer.style.border = "1px solid black";

    const title2 = document.createElement("h1");
    title2.textContent = "I'm in a div";
    innerContainer.appendChild(title2);

    const p2 = document.createElement("p");
    p2.textContent = "ME TOO!";
    innerContainer.appendChild(p2);

    container.appendChild(innerContainer);
}

var btn = document.getElementById("button1");
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});