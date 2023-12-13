function convertToCSV() {
    const fileInput = document.getElementById('fileInput');
    const delimiterInput = document.getElementById('delimiter');
    const outputArea = document.getElementById('output');

    const file = fileInput.files[0];
    const delimiter = delimiterInput.value || ',';

    if (!file) {
        alert('Please choose a file.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const content = event.target.result;

        try {
            const convertedData = parseAndConvert(content, file.name.toLowerCase(), delimiter);
            outputArea.textContent = convertedData;
        } catch (error) {
            alert(`Error: ${error}`);
        }
    };

    reader.readAsText(file);
}

function parseAndConvert(data, fileName, delimiter) {
    if (fileName.endsWith('.json')) {
        const jsonData = JSON.parse(data);
        return jsonToCsv(jsonData, delimiter);
    } else if (fileName.endsWith('.yaml') || fileName.endsWith('.yml')) {
        const yamlData = jsyaml.load(data);
        return jsonToCsv(yamlData, delimiter);
    } else {
        throw new Error('Unsupported file format. Please provide a JSON or YAML file.');
    }
}

function jsonToCsv(data, delimiter) {
    const headers = Object.keys(data[0]);
    const rows = data.map(entry => Object.values(entry));
    const csvContent = [headers.join(delimiter)].concat(rows.map(row => row.join(delimiter)));
    return csvContent.join('\n');
}
function convertToCSV() {
    const fileInput = document.getElementById('fileInput');
    const delimiterInput = document.getElementById('delimiter');
    const outputArea = document.getElementById('output');

    const file = fileInput.files[0];
    const delimiter = delimiterInput.value || ',';

    if (!file) {
        alert('Please choose a file.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const content = event.target.result;

        try {
            const convertedData = parseAndConvert(content, file.name.toLowerCase(), delimiter);
            displayResult(convertedData);
        } catch (error) {
            alert(`Error: ${error}`);
        }
    };

    reader.readAsText(file);
}

function displayResult(data) {
    const outputArea = document.getElementById('output');
    outputArea.textContent = data;

    const downloadLink = document.createElement('a');
    downloadLink.href = createBlobUrl(data);
    downloadLink.download = 'converted_data.csv';
    downloadLink.textContent = 'Download CSV';

    outputArea.appendChild(downloadLink);
}

function createBlobUrl(data) {
    const blob = new Blob([data], { type: 'text/csv' });
    return URL.createObjectURL(blob);
}
