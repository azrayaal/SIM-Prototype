import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ContractRequestTable from "../../components/kontrak/ContractRequest";

export default function ContractRequest() {
  return (
    <>
      <PageMeta
        title="  Tables Dashboard | Sagara - Next.js Admin Dashboard Template"
        description="This is   Tables Dashboard page for Sagara - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Daftar Pengajuan Kontrak" />
      <div className="space-y-6">
        <ComponentCard title="Daftar Pengajuan Kontrak">
          <ContractRequestTable />
        </ComponentCard>
      </div>
    </>
  );
}
