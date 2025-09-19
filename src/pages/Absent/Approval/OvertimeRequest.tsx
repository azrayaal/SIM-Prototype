import OvertimeRequestTable2 from "../../../components/absentConfirmation/OvertimeRequest";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";

export default function OvertimeRequestList2() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | Sagara - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for Sagara - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Daftar Lembur" />
      <div className="space-y-6">
        <OvertimeRequestTable2 />
      </div>
    </>
  );
}
