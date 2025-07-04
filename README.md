# Sensory Accessibility Extension

A browser extension providing sensory accessibility tools such as Grayscale, Dyslexic Font, and Bionic Reading.

## Features

- **Grayscale:** Converts page colors to grayscale for visual comfort.
- **Dyslexic Font:** Applies the OpenDyslexic font for easier reading.
- **Bionic Reading:** Highlights parts of words to aid reading focus.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Webpack](https://webpack.js.org/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/mazillka/Sensory-Accessibility-Ext.git
    cd Sensory-Accessibility-Ext/extension
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Build the extension:
    - For development:
        ```sh
        npm run build-dev
        ```
    - For production:
        ```sh
        npm run build-prod
        ```

4. Load the extension in your browser:
    - Open your browser's extensions page.
    - Enable "Developer mode".
    - Click "Load unpacked" and select the `dist` folder.

## Project Structure

- `src/` – Source TypeScript and SCSS files
- `static/` – Static assets (HTML, icons, fonts, locales)
- `dist/` – Build output (after running build script)

## Localization

Supports English and Ukrainian. See [`static/_locales/en/messages.json`](static/_locales/en/messages.json) and [`static/_locales/uk/messages.json`](static/_locales/uk/messages.json).

## License

[MIT](../LICENSE)
