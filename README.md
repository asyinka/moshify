The HTML is broken down into simpler components which are later compiled to build the project.

The project was later built using PARCEL_BUILDER.

Download parcel_bundler package using 
            * npm i -g parcel-bundler
            OR 
            * npm i -D parcel-bundler

To Build for production - parcel build index.html

To deploy - npx parcel index.html

# File Rendering.

- We broke our html content into simpler sections in the section folder
- Each section folder contains its own JavaScript file where the html in imported and then exported.
- The exported file is received in the main index.js file.
- The file is rendered in the index.js file
