import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Link {
  id: number;
  longUrl: string;
  shortUrl: string;
  clicks: number;
}

interface LinksState {
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
      const newId = state.counter + 1;
      const shortUrl = "abcdef"; // will be encoded later
      state.links.push({
        id: newId,
        longUrl: action.payload.longUrl,
        shortUrl,
        clicks: 0,
      });
      state.counter = newId;
      saveState(state);
    },
  },
});

const { actions, reducer } = linksSlice;
export const { addLink } = actions;
export const linksReducer = reducer;
