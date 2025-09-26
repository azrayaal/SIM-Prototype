import AbsentListTable2 from "../../../components/absentConfirmation/AbsentList";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";

export default function RequestTableList2() {
  return (
    <>
      <PageMeta
        title="  Tables Dashboard | Sagara - Next.js Admin Dashboard Template"
        description="This is   Tables Dashboard page for Sagara - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Daftar Absent" />
      <div className="space-y-6">
        <AbsentListTable2 />
      </div>
    </>
  );
}
