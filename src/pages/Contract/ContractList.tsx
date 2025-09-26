import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ContractListTable from "../../components/kontrak/ContractList";

export default function ContractList() {
  return (
    <>
      <PageMeta
        title="  Tables Dashboard | Sagara - Next.js Admin Dashboard Template"
        description="This is   Tables Dashboard page for Sagara - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Daftar Kontrak" />
      <div className="space-y-6">
        <ComponentCard title="Daftar Kontrak">
          <ContractListTable />
        </ComponentCard>
      </div>
    </>
  );
}
