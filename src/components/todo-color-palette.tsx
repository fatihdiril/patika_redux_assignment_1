import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setSelectedColor, selectNotes } from "../features/notes/notesSlice";

export default function TodoColorPalette(props: any) {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex" role="group">
        <button
          type="button"
          className="m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-red-400 focus:bg-red-400 focus:z-10"
          onClick={() => {
            dispatch(
              setSelectedColor({
                colorIndex: 0,
              })
            );
          }}
        >
          {notes.selectedColor.colorIndex === 0 ? "✓" : ""}
        </button>
        <button
          type="button"
          className="m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-purple-500 focus:bg-purple-500 focus:z-10"
          onClick={() => {
            dispatch(
              setSelectedColor({
                colorIndex: 1,
              })
            );
          }}
        >
          {notes.selectedColor.colorIndex === 1 ? "✓" : ""}
        </button>
        <button
          type="button"
          className="m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-yellow-400 focus:bg-yellow-400 focus:z-10"
          onClick={() => {
            dispatch(
              setSelectedColor({
                colorIndex: 2,
              })
            );
          }}
        >
          {notes.selectedColor.colorIndex === 2 ? "✓" : ""}
        </button>
        <button
          type="button"
          className="m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-cyan-300 focus:bg-cyan-300 focus:z-10"
          onClick={() => {
            dispatch(
              setSelectedColor({
                colorIndex: 3,
              })
            );
          }}
        >
          {notes.selectedColor.colorIndex === 3 ? "✓" : ""}
        </button>
        <button
          type="button"
          className="m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-green-400 focus:bg-green-400 focus:z-10"
          onClick={() => {
            dispatch(
              setSelectedColor({
                colorIndex: 4,
              })
            );
          }}
        >
          {notes.selectedColor.colorIndex === 4 ? "✓" : ""}
        </button>
      </div>
    </div>
  );
}
