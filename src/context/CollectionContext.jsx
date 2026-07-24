import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [collections, setCollections] = useState(() => {
    const savedCollections = localStorage.getItem(
      "storygrove-collections"
    );

    return savedCollections
      ? JSON.parse(savedCollections)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "storygrove-collections",
      JSON.stringify(collections)
    );
  }, [collections]);

  function createCollection(collection) {
    const newCollection = {
      id: crypto.randomUUID(),

      name: collection.name,

      description:
        collection.description || "",

      icon:
        collection.icon || "🌳",

      color:
        collection.color || "evergreen",

      banner:
        collection.banner || "classic",

      createdAt:
        new Date().toISOString(),

      isFavorite: false,

cover: collection.cover || null,

updatedAt: new Date().toISOString(),
    };

    setCollections((prev) => [
      newCollection,
      ...prev,
    ]);

    return newCollection;
  }

  function updateCollection(id, updates) {
  setCollections((prev) =>
    prev.map((collection) =>
      collection.id === id
        ? {
            ...collection,
            ...updates,
            updatedAt:
              new Date().toISOString(),
          }
        : collection
    )
  );
}

  function toggleFavourite(id) {
  setCollections((prev) =>
    prev.map((collection) =>
      collection.id === id
        ? {
            ...collection,
            isFavorite: !collection.isFavorite,
          }
        : collection
    )
  );
}

  function deleteCollection(id) {
    setCollections((prev) =>
      prev.filter(
        (collection) =>
          collection.id !== id
      )
    );
  }

  function getCollectionById(id) {
    return collections.find(
      (collection) =>
        collection.id === id
    );
  }


  return (
    <CollectionContext.Provider
      value={{
        collections,

        createCollection,

        updateCollection,

        toggleFavourite,

        deleteCollection,

        getCollectionById,

      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  return useContext(CollectionContext);
}