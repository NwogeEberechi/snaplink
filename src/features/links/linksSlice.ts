import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { encode } from "../../utils";

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
}

const loadState = (): LinksState | undefined => {
  try {
    const serializedState = localStorage.getItem("links");
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
    localStorage.setItem("links", serializedState);
  } catch {
    console.log("Failed to save state");
  }
};

const initialState: LinksState = loadState() || {
  links: [],
  counter: 0,
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, action: PayloadAction<{ longUrl: string }>) => {
      const longUrl = action.payload.longUrl;
      const urlCode = encode(longUrl);
      const shortUrl = `${window.location.origin}/${urlCode}`;
      const createdAt = new Date().toISOString();

      const existingLink = state.links.find((link) => link.urlCode === urlCode);

      if (existingLink) {
        throw new Error("Short URL already exists.");
      } else {
        state.links.push({
          id: state.counter,
          longUrl,
          shortUrl,
          urlCode,
          clicks: 0,
          createdAt,
        });
        state.counter += 1;
      }
      saveState(state);
    },
    incrementClicks: (state, action: PayloadAction<string>) => {
      const link = state.links.find((link) => link.urlCode === action.payload);
      if (link) {
        link.clicks += 1;
      }
    },
  },
});

const { actions, reducer } = linksSlice;
export const { addLink, incrementClicks } = actions;
export const linksReducer = reducer;
