import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";

interface PayrollItem {
  id: number;
  periode: string;
  divisi: string;
  jumlahKaryawan: number;
  statusKonfirmasi: "Pending" | "Dikonfirmasi" | "Revisi";
  statusPayroll: "Proses" | "Ready to Pay" | "Selesai";
  tanggalKonfirmasi?: string;
  workday: number;
  gajiPokok: number;
  insentif: number;
  tunjangan: number;
  bpjsKetenagakerjaan: number;
  bpjsKesehatan: number;
  iuranPensiun: number;
  total: number;
  managementFee: number;
  ppn: number;
  pph23: number;
  grandTotal: number;
}

const dummyPayroll: PayrollItem[] = [
  {
    id: 1,
    periode: "September 2025",
    divisi: "IT Development",
    jumlahKaryawan: 12,
    statusKonfirmasi: "Dikonfirmasi",
    statusPayroll: "Ready to Pay",
    tanggalKonfirmasi: "2025-09-15",
    workday: 22,
    gajiPokok: 240000000,
    insentif: 36000000,
    tunjangan: 48000000,
    bpjsKetenagakerjaan: 10176000,
    bpjsKesehatan: 4800000,
    iuranPensiun: 4800000,
    total: 343776000,
    managementFee: 24064320,
    ppn: 2406432,
    pph23: 4812864,
    grandTotal: 367728888,
  },
  {
    id: 2,
    periode: "September 2025",
    divisi: "Marketing",
    jumlahKaryawan: 8,
    statusKonfirmasi: "Pending",
    statusPayroll: "Proses",
    workday: 22,
    gajiPokok: 160000000,
    insentif: 24000000,
    tunjangan: 32000000,
    bpjsKetenagakerjaan: 6784000,
    bpjsKesehatan: 3200000,
    iuranPensiun: 3200000,
    total: 229184000,
    managementFee: 16042880,
    ppn: 1604288,
    pph23: 3208576,
    grandTotal: 245152592,
  },
];

export default function PayrollList() {
  const [selected, setSelected] = useState<PayrollItem | null>(null);

  return (
    <>
      <PageMeta
        title="Penggajian | Client Portal PT SIM"
        description="Halaman penggajian client portal PT SIM"
      />
      <PageBreadcrumb pageTitle="Penggajian" />

      <div className="space-y-6">
        <ComponentCard title="Daftar Penggajian">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-600 dark:text-gray-300">
                <th className="px-4 py-2">Periode</th>
                <th className="px-4 py-2">Divisi</th>
                <th className="px-4 py-2">Jumlah Karyawan</th>
                <th className="px-4 py-2">Total Gaji</th>
                <th className="px-4 py-2">Status Konfirmasi</th>
                <th className="px-4 py-2">Status Payroll</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyPayroll.map((row) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-white/[0.05]"
                >
                  <td className="px-4 py-2">{row.periode}</td>
                  <td className="px-4 py-2">{row.divisi}</td>
                  <td className="px-4 py-2">{row.jumlahKaryawan}</td>
                  <td className="px-4 py-2">
                    Rp {formatCurrency(row.grandTotal)}
                  </td>
                  <td className="px-4 py-2">
                    <StatusBadge status={row.statusKonfirmasi} />
                  </td>
                  <td className="px-4 py-2">
                    <StatusBadge status={row.statusPayroll} />
                  </td>
                  <td className="px-4 py-2">
                    <Button variant="primary" onClick={() => setSelected(row)}>
                      Lihat Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ComponentCard>

        {selected && (
          <ComponentCard title="Detail Penggajian">
            <PayrollDetail item={selected} onClose={() => setSelected(null)} />
          </ComponentCard>
        )}
      </div>
    </>
  );
}

/* 🔹 Badge Status */
function StatusBadge({ status }: { status: string }) {
  const colors =
    status === "Dikonfirmasi" || status === "Selesai"
      ? "bg-green-100 text-green-700"
      : status === "Pending" || status === "Proses"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors}`}>
      {status}
    </span>
  );
}

/* 🔹 Detail Komponen */
function PayrollDetail({
  item,
  onClose,
}: {
  item: PayrollItem;
  onClose: () => void;
}) {
  return (
    <div className="space-y-6">
      {/* Informasi Dasar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <Info label="Periode" value={item.periode} />
        <Info label="Divisi" value={item.divisi} />
        <Info label="Jumlah Karyawan" value={item.jumlahKaryawan.toString()} />
        <Info label="Workday" value={item.workday.toString()} />
        <Info label="Status Konfirmasi" value={item.statusKonfirmasi} />
        <Info
          label="Tanggal Konfirmasi"
          value={item.tanggalKonfirmasi || "-"}
        />
        <Info label="Status Payroll" value={item.statusPayroll} />
      </div>

      {/* Rincian Gaji */}
      <div className="border rounded-lg">
        <h4 className="font-semibold text-gray-700 dark:text-gray-200 p-4 border-b">
          Rincian Penggajian
        </h4>
        <div className="p-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Gaji Pokok:</span>
            <span>Rp {formatCurrency(item.gajiPokok)}</span>
          </div>
          <div className="flex justify-between">
            <span>Insentif:</span>
            <span>Rp {formatCurrency(item.insentif)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tunjangan:</span>
            <span>Rp {formatCurrency(item.tunjangan)}</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span>Sub Total:</span>
            <span>
              Rp{" "}
              {formatCurrency(item.gajiPokok + item.insentif + item.tunjangan)}
            </span>
          </div>
        </div>
      </div>

      {/* Biaya BPJS & Iuran */}
      <div className="border rounded-lg">
        <h4 className="font-semibold text-gray-700 dark:text-gray-200 p-4 border-b">
          Biaya BPJS & Iuran
        </h4>
        <div className="p-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>BPJS Ketenagakerjaan (4.24%):</span>
            <span>Rp {formatCurrency(item.bpjsKetenagakerjaan)}</span>
          </div>
          <div className="flex justify-between">
            <span>BPJS Kesehatan (2%):</span>
            <span>Rp {formatCurrency(item.bpjsKesehatan)}</span>
          </div>
          <div className="flex justify-between">
            <span>Iuran Pensiun (2%):</span>
            <span>Rp {formatCurrency(item.iuranPensiun)}</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-semibold">
            <span>Total:</span>
            <span>Rp {formatCurrency(item.total)}</span>
          </div>
        </div>
      </div>

      {/* Management Fee & Pajak */}
      <div className="border rounded-lg">
        <h4 className="font-semibold text-gray-700 dark:text-gray-200 p-4 border-b">
          Management Fee & Pajak
        </h4>
        <div className="p-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Management Fee (7%):</span>
            <span>Rp {formatCurrency(item.managementFee)}</span>
          </div>
          <div className="flex justify-between">
            <span>PPN (10%):</span>
            <span>Rp {formatCurrency(item.ppn)}</span>
          </div>
          <div className="flex justify-between">
            <span>PPH 23 (2%):</span>
            <span>Rp {formatCurrency(item.pph23)}</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold text-lg">
            <span>Grand Total:</span>
            <span>Rp {formatCurrency(item.grandTotal)}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" size="sm" onClick={onClose}>
          Tutup
        </Button>
        <Button size="sm">Unduh Excel</Button>
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

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID").format(amount);
}
