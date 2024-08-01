document.addEventListener("DOMContentLoaded", () => {
    const padSize = 600;
    
    const pad = document.getElementById("pad");
    pad.style.width = `${padSize}px`;
    pad.style.height = `${padSize}px`;

    const gridSizeChangeBtn = document.getElementById("gridSizeChangeBtn");
    const gridCheckbox = document.getElementById("gridChkbx");

    function makeGrid(size = 16) {
        pad.innerHTML = "";
        for (let i = 0; i < size; i++) {
            const padRow = document.createElement("div");
            padRow.className = "padRows";
            for (let j = 0; j < size; j++) {
                const itemSize = padSize / size;
                const padItem = document.createElement("div");
                padItem.className = "item borderOn";
                padItem.style.width =  `${itemSize}px`;
                padItem.style.height = `${itemSize}px`;
                padRow.appendChild(padItem);
            }
            pad.appendChild(padRow)
        }
    }

    gridSizeChangeBtn.addEventListener("click", () => {
        const userInput = prompt("The default grid size is 16 x 16 \n Enter value between 1 to 100 to change grid size!");
        if (userInput === null || userInput === "") {
            return;
        } else if (Number(userInput) < 1 || Number(userInput) > 100) {
            alert("The grid size should between 1 to 100!");
        } else {
            makeGrid(Number(userInput));
        }    
    })

    makeGrid()

    gridCheckbox.addEventListener("change", hideGrid)

    function hideGrid() {
        const items = document.querySelectorAll(".item");
        items.forEach(element => element.classList.toggle("borderOn"))
    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }
    
    let isDrawing = false;
    const color = document.getElementById("colorPick");
    const randomCheckbox = document.getElementById("randomChkbx");
    const draw = (e) => {
        if (e.target.classList.contains("item")) {
            if (randomCheckbox.checked === true) {
                e.target.style.backgroundColor = getRandomColor();
            } else {
                e.target.style.backgroundColor = color.value;
            }
        }
    }

    pad.addEventListener("mousedown", e => {
        isDrawing = true;
        draw(e)
    })
    pad.addEventListener("mousemove", e => {
        if (isDrawing) {
            draw(e)
        }
    })
    pad.addEventListener("mouseup", () => isDrawing = false)
    pad.addEventListener("mouseleave", () => isDrawing = false)
    
})