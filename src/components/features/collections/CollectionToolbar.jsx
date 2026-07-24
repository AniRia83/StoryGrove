import "./CollectionToolbar.css";

export default function CollectionToolbar({
  search,
  onSearch,
  sort,
  onSort,
  storyCount,
}) {
  return (
    <section className="collection-toolbar">

      <div>

        <h2>
          🌳 Stories in this Grove
        </h2>

        <p>
          {storyCount}{" "}
          {storyCount === 1
            ? "story"
            : "stories"}
        </p>

      </div>

      <div className="collection-toolbar__controls">

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            onSearch(e.target.value)
          }
        />

        <select
          value={sort}
          onChange={(e) =>
            onSort(e.target.value)
          }
        >
          <option value="updated">
            Recently Updated
          </option>

          <option value="title">
            Alphabetical
          </option>

          <option value="bloom">
            Highest Bloom
          </option>

          <option value="progress">
            Highest Progress
          </option>
        </select>

      </div>

    </section>
  );
}