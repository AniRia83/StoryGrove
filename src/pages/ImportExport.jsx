import AppLayout from "../components/layout/AppLayout/AppLayout";
import PageBanner from "../components/ui/PageBanner";

import ImportExportPanel from "../components/features/settings/ImportExportPanel/ImportExportPanel";

export default function ImportExport() {
  return (
    <AppLayout>

      <PageBanner
        icon="📦"
        title="Import & Export"
        subtitle="Backup and restore your StoryGrove."
      />

      <ImportExportPanel />

    </AppLayout>
  );
}