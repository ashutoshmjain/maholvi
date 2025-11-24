# महोलवी नामा (Maholvi Nama)

This repository presents "महोलवी नामा" (Maholvi Nama), a profound collection of Hindi and Urdu poetry penned by the esteemed poet, Madan Maholvi. Known also by its alternative title "Rasta Tau Mile," this digital book compiles Madan Maholvi's evocative works, offering readers a journey through his unique poetic voice and thematic explorations.

## About the Author

Madan Maholvi is the sole author of this poetic anthology. His verses, presented in both Hindi and Urdu, delve into various facets of life, emotion, and philosophy, inviting contemplation and reflection.

## Book Structure

The collection is meticulously organized into several thematic sections, allowing readers to explore different aspects of Madan Maholvi's poetic vision. Key sections include:

*   **Fikr Ke Parinde (फ़िक्र के परिंदे)**: A section exploring thoughts and reflections.
*   **Rasta Tou Mile**: This section lends its name to the alternative title of the book and contains a significant portion of the collection.
*   **Bahut Garam Hai Dhoop**: Another prominent section within the anthology.

The complete table of contents, detailing all poems and their arrangement, can be found in `src/SUMMARY.md`.

## Building the Book

This project is configured for automated deployment to GitHub Pages via GitHub Actions.

This book is built using `mdBook`, a command-line tool to create books from Markdown files. To view or build the book locally:

1.  **Install `mdBook`**: If you don't have `mdBook` installed, you can get it via `cargo`:
    ```bash
    cargo install mdbook
    ```
2.  **Build the book**: Navigate to the root of this repository and run:
    ```bash
    mdbook build
    ```
    This will generate the static HTML files in the `book/` directory.

3.  **Serve the book (optional)**: To preview the book in your web browser, you can use `mdbook serve`:
    ```bash
    mdbook serve
    ```
    This will start a local web server, typically accessible at `http://localhost:3000`.
