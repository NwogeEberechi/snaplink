import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { encode } from "../../utils";

const localStorageKey = "links";
export interface Link {
  id: number;
  longUrl: string;
  shortUrl: string;
  urlCode: string;
  clicks: number;
  createdAt: string;
}

export interface LinksState {
  links: Link[];
  counter: number;
  searchTerm: string;
  currentPage: number;
  pageSize: number;
}

const loadState = (): LinksState | undefined => {
  try {
    const serializedState = localStorage.getItem(localStorageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: LinksState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageKey, serializedState);
  } catch {
    console.log("Failed to save state");
  }
};

const initialState: LinksState = loadState() || {
  links: [],
  counter: 0,
  searchTerm: "",
  currentPage: 1,
  pageSize: 5,
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, action: PayloadAction<{ longUrl: string }>) => {
      const longUrl = action.payload.longUrl;
      const urlCode = encode(longUrl);
      const existingLink = state.links.find((link) => link.urlCode === urlCode);

      if (existingLink) {
        throw new Error("URL already exists.");
      } else {
        state.links.unshift({
          clicks: 0,
          id: state.counter,
          createdAt: new Date().toISOString(),
          shortUrl: `${window.location.origin}/${urlCode}`,
          urlCode,
          longUrl,
        });
        state.counter += 1;
        saveState(state);
      }
    },
    incrementClicks: (state, action: PayloadAction<string>) => {
      state.links = state.links.map((link) => {
        return link.urlCode === action.payload
          ? { ...link, clicks: link.clicks + 1 }
          : link;
      });
      saveState(state);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    deleteLink: (state, action: PayloadAction<string>) => {
      state.links = state.links.filter(
        (link) => link.urlCode !== action.payload
      );
      saveState(state);
    },
  },
});

const { actions, reducer } = linksSlice;
export const {
  addLink,
  incrementClicks,
  setSearchTerm,
  setCurrentPage,
  setPageSize,
  deleteLink,
} = actions;
export const linksReducer = reducer;

