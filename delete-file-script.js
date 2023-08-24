document.getElementById('deleteFileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const directoryName = document.getElementById('directoryName').value;
    const fileName = document.getElementById('fileName').value;
    const deleteMessageElement = document.getElementById('deleteMessage');

    const apiURL = `https://files.rontohub.com/directories/files/${encodeURIComponent(fileName)}?directoryName=${encodeURIComponent(directoryName)}`;

    // Fetch to delete the file
    fetch(apiURL, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          deleteMessageElement.textContent = 'File deleted successfully';
        } else {
          deleteMessageElement.textContent = 'Error deleting file';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        deleteMessageElement.textContent = 'An error occurred while deleting the file.';
      });
  });