import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setNewNote, selectNotes } from "../features/notes/notesSlice";

export default function TextArea() {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center ">
      <div className="flex border-2 rounded w-1/4 mt-4">
        <textarea
          id="message"
          rows={4}
          className="px-4 py-2 w-full rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your note here..."
          onChange={(e) => {
            dispatch(setNewNote(e.target.value));
          }}
        ></textarea>
      </div>
    </div>
  );
}
