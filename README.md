Sure, here's a README for the main code of a page builder application using GrapesJS, in English:

# Web Page Builder with GrapesJS

This project is a React application that utilizes the GrapesJS library to provide a visual drag-and-drop editor for creating web pages. GrapesJS is a modern website builder that combines reusable blocks, drag-and-drop design, and a powerful inline styling system.

## Key Features

- **Visual Editor**: Provides a drag-and-drop interface for visually building web pages.
- **Reusable Blocks**: Offers a variety of predefined blocks such as headers, sections, buttons, etc., that can be dragged and dropped onto the canvas.
- **Style Customization**: Allows customizing the styles of elements visually or by editing CSS code.
- **CSS Stylesheet Import**: Enables importing external CSS files to apply custom styles to the page.
- **HTML Component Import**: Enables importing external HTML components to add additional functionality to the page.
- **Code Export**: Generates the HTML, CSS, and JavaScript code for the created page, ready to be deployed on a web server.
- **Local Storage**: Saves the project in the browser's local storage, allowing editing to continue in future sessions.

## Installation and Running

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/grapesjs-page-builder.git
```

2. Navigate to the project directory:

```bash
cd grapesjs-page-builder
```

3. Install the project dependencies:

```bash
npm install
```

4. Start the application in development mode:

```bash
npm start
```

The application will automatically open in your default web browser at `http://localhost:3000`.

## Usage

Once the application is running, you can access the GrapesJS visual editor. Here are some basic instructions:

1. **Canvas**: The main canvas is where the web page is built. You can drag and drop blocks from the left sidebar panel onto the canvas.
2. **Style Panel**: In the right sidebar panel, you can customize the styles of the selected elements on the canvas.
3. **Import CSS Styles**: Click the "Upload your style file" button in the top toolbar to import an external CSS file.
4. **Import HTML Components**: Click the "Upload your components file" button in the top toolbar to import an external HTML component.
5. **Export Code**: Click the "Export" button in the top toolbar to download the HTML, CSS, and JavaScript code for the created page.

## Project Structure

```
grapesjs-page-builder/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── cssSearch.js
│   └── App.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

- `node_modules/`: Directory containing all installed project dependencies.
- `public/`: Public directory containing the `index.html` file.
- `src/`: Directory containing the application source files.
  - `components/`: Directory containing reusable React components.
  - `App.js`: The main React component that renders the GrapesJS editor.
- `.gitignore`: File specifying files and directories that should be ignored by Git version control.
- `package.json`: NPM configuration file containing project information and dependencies.
- `package-lock.json`: Automatically generated file by NPM that ensures the installation of the same dependency versions across different environments.
- `README.md`: This file providing instructions about the project.

## Contributing

If you wish to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-branch`
3. Make your changes and commit: `git commit -am 'Add new feature'`
4. Push your changes to the remote repository: `git push origin my-branch`
5. Create a new Pull Request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).
