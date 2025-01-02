document.getElementById("download-pdf").addEventListener("click", function () {
  const themeStylesheet = document.getElementById("theme-stylesheet");
  let pdfFile;

  // Check the current theme and set the corresponding PDF file
  if (themeStylesheet.getAttribute("href") === "css/colors_dark.css") {
    pdfFile = "pdfs/maciej_klimek_cv_dark.pdf";
  } else {
    pdfFile = "pdfs/maciej_klimek_cv_light.pdf";
  }

  // Create a temporary link element to trigger the download
  const link = document.createElement("a");
  link.href = pdfFile;
  link.download = pdfFile.split("/").pop(); // Set the file name
  link.click(); // Trigger the download
});
