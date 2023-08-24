document.getElementById("saveFileForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const directoryName = document.getElementById("directoryName").value;
    const fileName = document.getElementById("fileName").value;
    const fileContent = document.getElementById("fileContent").value;

    ///directories/files/:fileName
    const response = await fetch("https://files.rontohub.com/directories/files/"+fileName, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        directoryName,
        fileContent
      })
    });

    if (response.ok) {
      alert("File saved successfully");
    } else {
      alert("Error saving File");
    }
  });