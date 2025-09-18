import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ContractRequestTable from "../../components/kontrak/ContractRequest";

export default function ContractRequest() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
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
