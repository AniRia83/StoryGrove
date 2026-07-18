import "./GroveSelector.css";

import { useCollection } from "../../../context/CollectionContext";

export default function GroveSelector({
  value,
  onChange,
  onCreateNew,
}) {
  const { collections } = useCollection();

  return (
    <div className="grove-selector">

      <select
        value={value}
        onChange={(e) => {
          if (e.target.value === "__new__") {
            onCreateNew();
            return;
          }

          onChange(e.target.value);
        }}
      >

        <option value="">
          No Grove
        </option>

        {collections.map((collection) => (
          <option
            key={collection.id}
            value={collection.id}
          >
            {collection.icon} {collection.name}
          </option>
        ))}

        <option value="__new__">
          🌱 Plant New Grove...
        </option>

      </select>

    </div>
  );
}