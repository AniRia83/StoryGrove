import { useState } from "react";

import AppLayout from "../components/layout/AppLayout/AppLayout";
import CollectionCard from "../components/cards/CollectionCard/CollectionCard";

import Button from "../components/ui/Button/Button";
import EmptyState from "../components/ui/EmptyState";

import CreateCollectionModal from "../components/features/collections/CreateCollectionModal/CreateCollectionModal";

import { useCollection } from "../context/CollectionContext";

export default function Collection() {
  const { collections } = useCollection();

  const [showModal, setShowModal] = useState(false);

  return (
    <AppLayout
      title="Groves 🌳"
      subtitle="Organize your stories into beautiful collections."
    >
      <section className="collection-header">

        <Button
          onClick={() => setShowModal(true)}
        >
          🌱 Plant New Grove
        </Button>

      </section>

      {collections.length === 0 ? (

        <EmptyState
  icon="🌿"
  title="No Groves Yet"
  description="Plant your first Grove to organize your favourite stories."
>
  <Button onClick={() => setShowModal(true)}>
    🌱 Plant New Grove
  </Button>
</EmptyState>

      ) : (

        <section className="collection-grid">

          {collections.map((collection) => (
  <CollectionCard
    key={collection.id}
    collection={collection}
  />
))}

        </section>

      )}

      <CreateCollectionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

    </AppLayout>
  );
}