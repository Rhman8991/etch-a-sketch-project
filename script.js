document.addEventListener("DOMContentLoaded", () => {
    const padSize = 600;
    
    const pad = document.getElementById("pad");
    pad.style.width = `${padSize}px`;
    pad.style.height = `${padSize}px`;

    const gridSizeChangeBtn = document.getElementById("gridSizeChangeBtn");

    function makeGrid(size) {
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

})