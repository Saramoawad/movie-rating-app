function Filter({ selectedGenre, setSelectedGenre }) {
  return (
    <select
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Drama">Drama</option>
      <option value="Crime">Crime</option>
      <option value="Action">Action</option>
      <option value="Comedy">Comedy</option>
    </select>
  );
}

export default Filter;
