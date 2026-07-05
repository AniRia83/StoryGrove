# 🌿 StoryGrove Architecture

## Philosophy

StoryGrove follows a component-first architecture.

Components should have a single responsibility.

Every component belongs to one of these categories.

---

## UI Components

Location:

src/components/ui

Purpose:

Reusable generic components.

Examples:

- Button
- Badge
- Section
- Card
- Modal
- Input
- ProgressBar

These components know nothing about books, movies or StoryGrove.

---

## Cards

Location:

src/components/cards

Purpose:

Represent StoryGrove media visually.

Examples:

- MediaCard
- ContinueReadingCard
- CollectionCard
- ShelfCard

Cards display StoryGrove data.

---

## Features

Location:

src/components/features

Purpose:

Feature sections of each page.

Examples:

- Hero
- ContinueReading
- RecentlyPlanted
- QuickActions

Features combine UI and Cards.

---

## Pages

Located in:

src/pages

Pages assemble features.

Example:

Home

↓

Hero

↓

ContinueReading

↓

RecentlyPlanted

Pages should contain almost no styling.

---

## Styling

Each component owns its own CSS file.

No component should style another component.

---

## Naming

Folders:

PascalCase

Components:

PascalCase

CSS:

ComponentName.css

Index file:

index.js

---

## Design Principles

- Cozy
- Calm
- Nature inspired
- Premium
- Minimal
- Accessible

---

## Future Features

- Story Seeds
- Seasonal Themes
- Achievements
- Reading Challenges
- Advanced Statistics
- Cloud Sync