function shift(leaves) {
    for (let leaf of leaves) {
        let newPosition = parseInt(leaf.style.top) + 2;
        if (newPosition > window.innerHeight) {
            newPosition = -leaf.height;
        }
        leaf.style.top = newPosition + "px";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 5; i++) {
        let img = document.createElement("img");
        img.src = "leaf.jpg";
        img.setAttribute("data-autumn", "");
        img.alt = "Leaf";
        document.body.appendChild(img);
    }

    let leaves = document.querySelectorAll("body > img[data-autumn]");
    let index = 0;
    
    for (let leaf of leaves) {
        leaf.style.left = index * window.innerWidth / leaves.length + "px";
        leaf.style.top = -leaf.height + "px";
        index++;
    }

    setInterval(() => shift(leaves), 20);
});

