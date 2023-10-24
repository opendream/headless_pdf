# headless_pdf

A simple Node.js application that uses the Puppeteer library to generate PDFs from web pages in a headless manner.

## Features

- Convert any web page to a PDF.
- Option to generate the PDF in landscape mode.
- Hide specific elements from the PDF by adding the `print-hide` class to them.
- Specify the filename for the downloaded PDF.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/opendream/headless_pdf.git
   ```

2. Navigate to the repository directory:
   ```bash
   cd headless_pdf
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node index.js
   ```

2. Access the service by navigating to:
   ```
   http://localhost:8080/headless-pdf?url=YOUR_WEBPAGE_URL
   ```

   Optional query parameters:
   - `landscape`: Set to `true` for landscape mode.
   - `filename`: Specify the name for the downloaded PDF file (without the `.pdf` extension).

   Example:
   ```
   http://localhost:8080/headless-pdf?url=https://www.example.com&landscape=true&filename=mydocument
   ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
