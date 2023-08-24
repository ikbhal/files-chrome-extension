// popup.js
document.getElementById("fileForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const directoryName = document.getElementById("directoryName").value;
    const fileName = document.getElementById("fileName").value;
  
    const response = await fetch("https://files.rontohub.com/directories/files", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        directoryName,
        fileName
      })
    });
  
    if (response.ok) {
      alert("File created successfully");
    } else {
      alert("Error creating file");
    }
  });
  