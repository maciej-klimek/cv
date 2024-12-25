document.getElementById("download-pdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;

  // Create a new PDF instance
  const doc = new jsPDF();

  // Get the HTML content
  const content = document.querySelector(".container");

  // Use html2canvas to convert the content to an image
  html2canvas(content, {
    useCORS: true, // Enable CORS if you want external images to load
    backgroundColor: null, // Preserve background color
  })
    .then(function (canvas) {
      // Get the image data from the canvas
      const imgData = canvas.toDataURL("image/png");

      // Add the image to the PDF
      doc.addImage(imgData, "PNG", 0, 0);

      // Save the generated PDF
      doc.save("Maciej_Klimek_CV.pdf");
    })
    .catch(function (error) {
      console.error("Error generating PDF:", error);
    });
});
