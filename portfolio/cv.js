// script.js
document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace with your PDF URL
    let pdfUrl = ' C:\Users\minu3\Downloads\Blue Simple Professional CV Resume (1).pdf';
  
    // Using fetch to get the PDF file
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a link element, set the download attribute and append to body
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
  
        // Create a Blob URL for the PDF
        const blobUrl = window.URL.createObjectURL(new Blob([blob], {type: 'application/pdf'}));
        a.href = blobUrl;
        a.setAttribute('download', 'cv.pdf');
        
        // Trigger the click event of the link to start the download
        a.click();
  
        // Remove the temporary link element
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Error fetching the PDF file:', error);
      });
  });
  