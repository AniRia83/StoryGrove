import "./LibraryToolbar.css";

import SearchBar from "../../../ui/SearchBar";

export default function LibraryToolbar({
  search,
  setSearch,
  grove,
  setGrove,
  journey,
  setJourney,
  mediaType,
  setMediaType,
  bloom,
  setBloom,
  sort,
  setSort,
  collections,
}) {
  return (
    <section className="library-toolbar">

      <div className="library-toolbar__search">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search your grove..."
        />
      </div>

      <div className="library-toolbar__controls">

        <div className="library-toolbar__filters">

          <select
            value={grove}
            onChange={(e) =>
              setGrove(e.target.value)
            }
          >
            <option value="">
              🌳 All Groves
            </option>

            {collections.map((collection) => (
              <option
                key={collection.id}
                value={collection.id}
              >
                {collection.icon} {collection.name}
              </option>
            ))}
          </select>

          <select
            value={journey}
            onChange={(e) =>
              setJourney(e.target.value)
            }
          >
            <option value="">
              📖 All Journeys
            </option>

            <option value="planning">
              🌱 Planning
            </option>

            <option value="growing">
              🌿 Growing
            </option>

            <option value="completed">
              🌸 Bloomed
            </option>

            <option value="paused">
              🍂 Resting
            </option>

            <option value="abandoned">
              🪵 Abandoned
            </option>
          </select>

          <select
  value={mediaType}
  onChange={(e) =>
    setMediaType(e.target.value)
  }
>
  <option value="">
    🎬 All Media
  </option>

  <option value="Book">
    📚 Book
  </option>

  <option value="Comic">
    📖 Comic
  </option>

  <option value="Manga">
    📘 Manga
  </option>

  <option value="Fanfiction">
    ✍️ Fanfiction
  </option>

  <option value="Movie">
    🎬 Movie
  </option>

  <option value="TV Series">
    📺 TV Series
  </option>

  <option value="Anime">
    🌸 Anime
  </option>

  <option value="Game">
    🎮 Game
  </option>

  <option value="Music">
    🎵 Music
  </option>

  <option value="Podcast">
    🎙️ Podcast
  </option>
</select>

          <select
            value={bloom}
            onChange={(e) =>
              setBloom(e.target.value)
            }
          >
            <option value="">
              ⭐ Any Bloom
            </option>

            <option value="8">
              ⭐⭐ 8+
            </option>

            <option value="9">
              ⭐⭐⭐ 9+
            </option>

            <option value="10">
              ⭐⭐⭐⭐ 10
            </option>
          </select>

        </div>

        <div className="library-toolbar__actions">

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="newest">
              🆕 Newest
            </option>

            <option value="oldest">
              🌱 Oldest
            </option>

            <option value="title-asc">
              🔤 Title A–Z
            </option>

            <option value="title-desc">
              🔠 Title Z–A
            </option>

            <option value="bloom-desc">
              ⭐ Highest Bloom
            </option>

            <option value="bloom-asc">
              🌑 Lowest Bloom
            </option>
          </select>

        </div>

      </div>

    </section>
  );
}