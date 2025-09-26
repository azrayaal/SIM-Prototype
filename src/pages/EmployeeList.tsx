import ComponentCard from "../components/common/ComponentCard";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import BasicTableOne from "../components/tables/BasicTables/BasicTableOne";

export default function EmployeeList() {
  return (
    <>
      <PageMeta
        title="  Tables Dashboard | Sagara - Next.js Admin Dashboard Template"
        description="This is   Tables Dashboard page for Sagara - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Daftar Karyawan" />
      <div className="space-y-6">
        <ComponentCard title="Daftar Karyawan">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
