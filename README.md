# URL Shortening Application

This repository contains a URL shortening application built with React, TypeScript, Tailwind CSS, Ant design, Redux Toolkit, and Vite. It uses the browser's local storage to persist data. This means that all links and related information are stored locally on the user's machine to ensure data persistence between sessions without requiring a backend server.

## Assumptions

1. **Idempotent Encoding Algorithm**: The encoding algorithm is designed to be idempotent, meaning it generates the same short link for the same long URL every time. This is achieved by hashing the long URL to ensure consistency.

2. **Dependencies**: The application assumes that the following dependencies are installed on your machine:
   - Node.js (>= 14.0.0)
   - npm (>= 6.0.0) or yarn (>= 1.22.0)

## Features

- Create new short links
- Search for existing links
- List links in card view
- Copy short links to clipboard
- Delete links
- Visit the original URL from the short link
- Track the number of clicks for each link
- Pagination for links

## Installation and testing

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NwogeEberechi/snaplink.git
   cd snaplink

   ```

2. **Install dependencies:**

   ```bash
   npm install or yarn install
   ```

3. **Run the application:**

   ```bash
   npm run dev or yarn dev
   ```

4. **Running test**

   ```bash
   npm run test or yarn test

   ```

## Usage

1. **Create a new link**

- Enter the long URL in the input field.
- Click the "Create link" button.
- The short URL will be displayed and saved to the list of links.

2. **Search for a link**

- Enter at least 3 search term in the search input field.
- The list of links will be filtered based on the search term.

3. **Delete a link**

- Click the "Delete" button next to the link you want to delete.
- Confirm the deletion in the confirmation dialog.

4. **Other features**

- Click the "Copy" icon to copy the short URL to the clipboard.
- Click the short url to navigate to the original URL in a new tab.
- Track the number of clicks for each link in the list.
- Navigate through pages of links using the pagination controls.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
