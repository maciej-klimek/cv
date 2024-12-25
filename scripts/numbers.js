document.addEventListener("DOMContentLoaded", () => {
  const lineNumbersContainer = document.getElementById("line-numbers");
  const contentContainer = document.querySelector(".main-content");

  const generateLineNumbers = () => {
    const lineHeight = 20.5; // Average height per line
    const totalLines = Math.ceil(contentContainer.offsetHeight / lineHeight);

    lineNumbersContainer.innerHTML = "";
    for (let i = 1; i <= totalLines; i++) {
      const li = document.createElement("li");
      li.textContent = i;
      lineNumbersContainer.appendChild(li);
    }
  };

  // Generate numbers on load
  generateLineNumbers();

  // Regenerate numbers if window resizes
  window.addEventListener("resize", generateLineNumbers);
});
