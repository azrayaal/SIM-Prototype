import LeaveListTable2 from "../../../components/absentConfirmation/AbsentRequest";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";

export default function LeaveRequestList2() {
  return (
    <>
      <PageMeta
        title="  Tables Dashboard | Sagara - Next.js Admin Dashboard Template"
        description="This is   Tables Dashboard page for Sagara - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Daftar Cuti" />
      <div className="space-y-6">
        <LeaveListTable2 />
      </div>
    </>
  );
}
