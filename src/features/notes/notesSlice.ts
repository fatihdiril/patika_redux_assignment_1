import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface NoteModel {
  note: string;
  colorIndex: number;
}

export interface NoteColor {
  colorIndex: number;
}

export interface NotesModel {
  notes: NoteModel[];
  newNote: NoteModel;
  selectedColor: NoteColor;
}

const initialState: NotesModel = {
  notes: [],
  newNote: { note: "", colorIndex: 0 },
  selectedColor: { colorIndex: 0 },
};

export const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteModel>) => {
      state.notes.push(action.payload);
    },
    setSelectedColor: (state, action: PayloadAction<NoteColor>) => {
      state.selectedColor = action.payload;
      state.newNote.colorIndex = action.payload.colorIndex;
    },
    setNewNote: (state, action: PayloadAction<string>) => {
      state.newNote.note = action.payload;
    },
  },
});

export const { addNote, setSelectedColor, setNewNote } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
