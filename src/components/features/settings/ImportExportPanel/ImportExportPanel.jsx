import "./ImportExportPanel.css";

import Button from "../../../ui/Button/Button";

export default function ImportExportPanel() {
  function exportLibrary() {
    alert("Export functionality will be connected in Phase 2.");
  }

  function importLibrary() {
    alert("Import functionality will be connected in Phase 2.");
  }

  return (
    <section className="import-export-panel">

      <div className="import-card">

        <div className="import-icon">
          📤
        </div>

        <div className="import-content">

          <h2>Export Library</h2>

          <p>
            Download your complete StoryGrove
            library as a backup file.
          </p>

        </div>

        <Button
          size="lg"
          onClick={exportLibrary}
        >
          Export
        </Button>

      </div>

      <div className="import-card">

        <div className="import-icon">
          📥
        </div>

        <div className="import-content">

          <h2>Import Library</h2>

          <p>
            Restore your StoryGrove from a
            previously exported backup.
          </p>

        </div>

        <Button
          variant="secondary"
          size="lg"
          onClick={importLibrary}
        >
          Import
        </Button>

      </div>

    </section>
  );
}