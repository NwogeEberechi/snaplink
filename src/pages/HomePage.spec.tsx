// HomePage.test.tsx

import React from "react"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import "@testing-library/jest-dom/extend-expect";
import { HomePage } from "."; // Adjust the import path as needed
//import { UrlForm, SearchBar, LinkList, Pagination } from '../components';

// Mock the child components
// jest.mock("../components/UrlForm", () => ({
//   UrlForm: () => <div data-testid="url-form">UrlForm Component</div>,
// }));

// jest.mock("../components/SearchBar", () => ({
//   SearchBar: () => <div data-testid="search-bar">SearchBar Component</div>,
// }));

// jest.mock("../components/LinkList", () => ({
//   LinkList: () => <div data-testid="link-list">LinkList Component</div>,
// }));

// jest.mock("../components/Pagination", () => ({
//   Pagination: () => <div data-testid="pagination">Pagination Component</div>,
// }));

describe("HomePage", () => {
  test("renders HomePage with all child components", () => {
    render(<HomePage />);

    // Check if the label "Links" is present
    expect(screen.getByText("Links")).toBeInTheDocument();

    // Check if the SearchBar component is present
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();

    // Check if the UrlForm component is present
    expect(screen.getByTestId("url-form")).toBeInTheDocument();

    // Check if the LinkList component is present
    expect(screen.getByTestId("link-list")).toBeInTheDocument();

    // Check if the Pagination component is present
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
