
const box = document.querySelectorAll(".box");
      function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
      }
      box.forEach((b) => {
        b.style.backgroundColor = randomColor();
        b.style.color = randomColor(); // for text
      });
