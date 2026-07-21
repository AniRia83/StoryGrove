import "./ProfileHeader.css";

export default function ProfileHeader({
  name = "Reader",
}) {
  return (
    <section className="profile-header">

      <div className="profile-header__avatar">
        🌿
      </div>

      <div className="profile-header__content">

        <p className="profile-header__eyebrow">
          MY GROVE
        </p>

        <h1>
          {name}'s Grove
        </h1>

        <p className="profile-header__subtitle">
          Every story leaves another leaf on your tree.
        </p>

      </div>

    </section>
  );
}