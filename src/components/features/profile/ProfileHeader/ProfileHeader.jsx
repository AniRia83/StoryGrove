import "./ProfileHeader.css";

export default function ProfileHeader({
  name = "Reader",
  avatar = "🌿",
  bio = "",
}) {
  return (
    <section className="profile-header">

      <div className="profile-header__avatar">
        {avatar}
      </div>

      <div className="profile-header__content">

        <p className="profile-header__eyebrow">
          MY GROVE
        </p>

        <h1>
          {name}'s Grove
        </h1>

        <p className="profile-header__subtitle">
          {bio?.trim()
            ? bio
            : "Every story leaves another leaf on your tree."}
        </p>

      </div>

    </section>
  );
}