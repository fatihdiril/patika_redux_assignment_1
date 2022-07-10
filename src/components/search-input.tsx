export default function SearchInput(props: any) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex border-2 rounded w-1/4">
        <input
          type="text"
          className="px-4 py-2 w-full rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={props.searchQuery}
          onChange={(e) => {
            props.setSearchQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
