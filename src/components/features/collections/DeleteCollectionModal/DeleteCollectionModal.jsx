import "./DeleteCollectionModal.css";

import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";

export default function DeleteCollectionModal({
  isOpen,
  onClose,
  onConfirm,
  collection,
}) {
  if (!collection) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="🪓 Uproot Grove?"
    >
      <div className="delete-collection">

        <div className="delete-collection__icon">
          🌳
        </div>

        <p>
          Are you sure you want to uproot
          <strong> {collection.name}</strong>?
        </p>

        <p className="delete-collection__warning">
          This action cannot be undone.
        </p>

        <div className="delete-collection__actions">

          <Button
            variant="secondary"
            onClick={onClose}
          >
            Keep Grove
          </Button>

          <Button
            onClick={onConfirm}
          >
            🪓 Delete Grove
          </Button>

        </div>

      </div>
    </Modal>
  );
}