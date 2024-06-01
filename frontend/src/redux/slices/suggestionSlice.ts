import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Suggestion {
  title: string;
  img_url: string;
  genres: string[];
  rating: string;
  score: number;
  duration: string;
  trailer_url: string;
}

const initialState: Suggestion[] = [];

const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState: initialState,
  reducers: {
    setSuggestions(state, action: PayloadAction<Suggestion[]>) {
      state = [...action.payload];
      console.log('suggestion updated');
    },
  },
});

export const {setSuggestions} = suggestionSlice.actions;
export default suggestionSlice.reducer;
