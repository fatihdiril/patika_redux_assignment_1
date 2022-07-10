export default function Note(props: any) {
  const { note } = props;
  let className;

  switch (note.colorIndex) {
    case 0:
      className = `bg-red-400 text-slate-700 inline-flex m-2 p-2`;
      break;
    case 1:
      className = `bg-purple-500 text-slate-700 inline-flex m-2 p-2`;
      break;
    case 2:
      className = `bg-yellow-400 text-slate-700 inline-flex m-2 p-2`;
      break;
    case 3:
      className = `bg-cyan-300 text-slate-700 inline-flex m-2 p-2`;
      break;
    case 4:
      className = `bg-green-400 text-slate-700 inline-flex m-2 p-2`;
      break;
    default:
      className = `bg-slate-600 text-slate-700 inline-flex m-2 p-2`;
  }

  return (
    <div className={className}>
      <p>{note.note}</p>
    </div>
  );
}
