document.getElementById('renameFileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const directoryName = document.getElementById('directoryName').value;
    const oldFileName = document.getElementById('oldFileName').value;
    const newFileName = document.getElementById('newFileName').value;
    const renameMessageElement = document.getElementById('renameMessage');

    const apiURL = `https://files.rontohub.com/directories/files/${encodeURIComponent(oldFileName)}/rename/${encodeURIComponent(newFileName)}?directoryName=${encodeURIComponent(directoryName)}`;

    // Fetch to rename the file
    fetch(apiURL, { method: 'PUT' })
      .then(response => {
        if (response.ok) {
          renameMessageElement.textContent = 'File renamed successfully';
        } else {
          renameMessageElement.textContent = 'Error renaming file';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        renameMessageElement.textContent = 'An error occurred while renaming the file.';
      });
  });