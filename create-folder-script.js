document.getElementById("folderForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const directoryName = document.getElementById("directoryName").value;

    const response = await fetch("https://files.rontohub.com/directories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        directoryName
      })
    });

    if (response.ok) {
      alert("Folder created successfully");
    } else {
      alert("Error creating Folder");
    }
  });
