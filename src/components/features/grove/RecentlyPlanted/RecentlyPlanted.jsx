import "./RecentlyPlanted.css";
import MediaCard from "../../../cards/MediaCard";

export default function RecentlyPlanted() {
  return (
    <section className="recently-planted">

      <h2>Recently Planted</h2>

      <div className="recently-planted__grid">

        <MediaCard
    title="The Hobbit"
    creator="J.R.R. Tolkien"
    mediaType="Book"
    progress={82}
        />

        <MediaCard
    title="Dune"
    creator="Frank Herbert"
    mediaType="Book"
    progress={41}
        />

        <MediaCard
    title="Spirited Away"
    creator="Hayao Miyazaki"
    mediaType="Movie"
    progress={100}
        />

      </div>

    </section>
  );
}