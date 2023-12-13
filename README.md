# CSV Converter

This simple web-based CSV converter allows users to convert JSON and YAML files to CSV format. The conversion is done in the browser without the need for server-side processing.

## Features

- **File Input:** Users can choose a JSON or YAML file using the file input field.
- **Delimiter Selection:** Users can specify the delimiter for the CSV file using the delimiter input field. The default delimiter is a comma (`,`).
- **Conversion:** The selected file is read using FileReader, and based on the file type, it is converted to CSV format.
- **Supported Formats:** JSON and YAML file formats are supported. Other formats will result in an error message.
- **Display Results:** The converted CSV data is displayed in a text area on the web page.
- **Download CSV:** Users can download the converted CSV file using a provided download link.

## Usage

1. Open the `index.html` file in a web browser.
2. Choose a JSON or YAML file using the file input field.
3. Optionally, specify a delimiter in the delimiter input field.
4. Click the "Convert to CSV" button.
5. View the converted CSV data in the output area.
6. To download the CSV file, click the "Download CSV" link.

## Code Structure

- **convertToCSV():** Handles the main conversion process. Reads the selected file, converts it, and displays the result.
- **parseAndConvert(data, fileName, delimiter):** Parses the input data based on the file type and delegates the conversion to `jsonToCsv()`.
- **jsonToCsv(data, delimiter):** Converts JSON or YAML data to CSV format.
- **displayResult(data):** Displays the converted data in the output area and provides a link for downloading the CSV file.
- **createBlobUrl(data):** Creates a Blob from the converted data and returns a URL for downloading.

## Dependencies

- The code uses [js-yaml](https://github.com/nodeca/js-yaml) for parsing YAML data.

## Error Handling

- If an unsupported file format is chosen, an error message is displayed.
- If there is an error during conversion, an alert with the error message is shown.
