document.getElementById('listFilesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const directoryName = document.getElementById('directoryName').value;
    const fileListElement = document.getElementById('fileList');

    const apiURL = `https://files.rontohub.com/directories/files?directoryName=${encodeURIComponent(directoryName)}`;

    // Fetch the directory listing
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        // Build a table to display the list of files and directories
        let tableHTML = '<table>';
        tableHTML += '<tr><th>Name</th><th>Type</th></tr>';
        data.forEach(entry => {
          tableHTML += '<tr>';
          tableHTML += `<td>${entry.name}</td>`;
          tableHTML += `<td>${entry.type}</td>`;
          tableHTML += '</tr>';
        });
        tableHTML += '</table>';

        // Display the table in the fileListElement
        fileListElement.innerHTML = tableHTML;
      })
      .catch(error => {
        console.error('Error:', error);
        fileListElement.innerHTML = 'An error occurred while fetching data.';
      });
  });