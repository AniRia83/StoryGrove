import "./ProfileSettingsForm.css";

import { useState } from "react";

import Input from "../../../ui/Input/Input";
import Textarea from "../../../ui/Textarea/Textarea";
import Button from "../../../ui/Button/Button";

import { useSettings } from "../../../../context/SettingsContext";

const avatars = [
  "🌸",
  "🌿",
  "🌷",
  "🦊",
  "🐇",
  "🦉",
  "🐝",
  "🍄",
];

export default function ProfileSettingsForm() {

  const {
    settings,
    updateProfile,
  } = useSettings();

  const [saved, setSaved] =
    useState(false);

  const [form, setForm] =
    useState(settings.profile);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateProfile(form);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1800);
  }

  return (
    <form
      className="profile-settings-form"
      onSubmit={handleSubmit}
    >
      <div className="profile-avatar">
        {form.avatar}
      </div>

      <div className="avatar-picker">
        {avatars.map((avatar) => (
          <button
            key={avatar}
            type="button"
            className={
              form.avatar === avatar
                ? "avatar-option active"
                : "avatar-option"
            }
            onClick={() =>
              setForm((prev) => ({
                ...prev,
                avatar,
              }))
            }
          >
            {avatar}
          </button>
        ))}
      </div>

      <Input
        label="Display Name"
        name="displayName"
        value={form.displayName}
        onChange={handleChange}
      />

      <Textarea
        label="Bio"
        name="bio"
        value={form.bio}
        onChange={handleChange}
      />

      <Input
        type="number"
        label="Yearly Reading Goal"
        name="yearlyGoal"
        value={form.yearlyGoal}
        onChange={handleChange}
      />

      <Textarea
        label="Favorite Garden Quote"
        name="favoriteQuote"
        value={form.favoriteQuote}
        onChange={handleChange}
      />

      <Button
        type="submit"
        size="lg"
      >
        {saved
          ? "✓ Saved"
          : "💾 Save Changes"}
      </Button>

    </form>
  );
}