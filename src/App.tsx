import { useState } from "react";
import SearchInput from "./components/search-input";
import TextArea from "./components/text-area";
import TodoColorPalette from "./components/todo-color-palette";
import Note from "./components/note";

import { useAppSelector, useAppDispatch } from "./app/hooks";
import { addNote, NoteModel, selectNotes } from "./features/notes/notesSlice";

function App() {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [newTodoColor, setNewTodoColor] = useState(0);

  function search(searchItems: any) {
    return searchItems
      .filter(
        (searchItem: NoteModel) =>
          searchItem.note
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase().trim()) > -1
      )
      .sort((a: any, b: any) =>
        a.product_index > b.product_index
          ? 1
          : b.product_index > a.product_index
          ? -1
          : 0
      );
  }

  function addNoteee() {
    if (notes.newNote.note.trim() === "") {
      return;
    } else {
      dispatch(addNote(notes.newNote));
    }
  }

  return (
    <div className="justify-center items-center">
      <h1 className="text-3xl text-center m-4">Notes App</h1>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TextArea />
      <div className="flex items-center justify-center">
        <div className="flex flex-row w-1/4 mt-2 justify-between">
          <TodoColorPalette
            newTodoColor={newTodoColor}
            setNewTodoColor={setNewTodoColor}
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"
            onClick={addNoteee}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="grid-flow-col w-1/4 m-auto mt-12">
        {search(notes.notes).map((note: any, i: any) => {
          return <Note note={note} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
