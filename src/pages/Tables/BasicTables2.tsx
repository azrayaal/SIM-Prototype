import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";

interface InvoiceItem {
  id: number;
  noInvoice: string;
  periode: string;
  tanggalTerbit: string;
  nominal: string;
  status: "Draft" | "Final" | "Paid" | "Outstanding";
  tanggalBayar?: string;
}

const dummyInvoice: InvoiceItem[] = [
  {
    id: 1,
    noInvoice: "INV-2025-09-001",
    periode: "September 2025",
    tanggalTerbit: "2025-09-05",
    nominal: "Rp 320.000.000",
    status: "Final",
    tanggalBayar: "2025-09-20",
  },
  {
    id: 2,
    noInvoice: "INV-2025-09-002",
    periode: "September 2025",
    tanggalTerbit: "2025-09-10",
    nominal: "Rp 150.000.000",
    status: "Outstanding",
  },
];

export default function InvoiceList() {
  const [selected, setSelected] = useState<InvoiceItem | null>(null);

  return (
    <>
      <PageMeta
        title="Invoicing | Client Portal PT SIM"
        description="Halaman invoicing client portal PT SIM"
      />
      <PageBreadcrumb pageTitle="Invoicing" />

      <div className="space-y-6">
        <ComponentCard title="Daftar Invoice">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-600 dark:text-gray-300">
                <th className="px-4 py-2">No. Invoice</th>
                <th className="px-4 py-2">Periode</th>
                <th className="px-4 py-2">Tanggal Terbit</th>
                <th className="px-4 py-2">Nominal</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyInvoice.map((row) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-white/[0.05]"
                >
                  <td className="px-4 py-2">{row.noInvoice}</td>
                  <td className="px-4 py-2">{row.periode}</td>
                  <td className="px-4 py-2">{row.tanggalTerbit}</td>
                  <td className="px-4 py-2">{row.nominal}</td>
                  <td className="px-4 py-2">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-2">
                    <Button onClick={() => setSelected(row)}>
                      Lihat Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ComponentCard>

        {selected && (
          <ComponentCard title="Detail Invoice">
            <InvoiceDetail item={selected} onClose={() => setSelected(null)} />
          </ComponentCard>
        )}
      </div>
    </>
  );
}

/* 🔹 Badge Status */
function StatusBadge({ status }: { status: string }) {
  const colors =
    status === "Paid"
      ? "bg-green-100 text-green-700"
      : status === "Final"
      ? "bg-blue-100 text-blue-700"
      : status === "Draft"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700"; // Outstanding

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors}`}>
      {status}
    </span>
  );
}

/* 🔹 Detail Komponen */
function InvoiceDetail({
  item,
  onClose,
}: {
  item: InvoiceItem;
  onClose: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <Info label="No. Invoice" value={item.noInvoice} />
        <Info label="Periode" value={item.periode} />
        <Info label="Tanggal Terbit" value={item.tanggalTerbit} />
        <Info label="Nominal" value={item.nominal} />
        <Info label="Status" value={item.status} />
        <Info label="Tanggal Bayar" value={item.tanggalBayar || "-"} />
      </div>

      <h4 className="font-semibold text-gray-700 dark:text-gray-200">
        Riwayat Konfirmasi
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
        <li>05 Sept 2025 – Draft invoice dikirim ke klien</li>
        <li>07 Sept 2025 – Klien validasi & konfirmasi draft</li>
        <li>10 Sept 2025 – Final invoice diterbitkan</li>
        {item.status === "Paid" && (
          <li>{item.tanggalBayar} – Pembayaran diterima</li>
        )}
      </ul>

      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={onClose}>
          Tutup
        </Button>
        <Button size="sm" className="ml-2">
          Unduh PDF
        </Button>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="text-gray-800 font-medium dark:text-white">{value}</p>
    </div>
  );
}
