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
  tanggalJatuhTempo: string;
  nominal: number;
  status: "Draft" | "Final" | "Paid" | "Outstanding";
  tanggalBayar?: string;
  jasaPemborongan: number;
  managementFee: number;
  ppn: number;
  pph23: number;
  cncPerlengkapan: number;
  biayaMaterai: number;
  totalTagihan: number;
  client: string;
  picClient: string;
  alamat: string;
}

const dummyInvoice: InvoiceItem[] = [
  {
    id: 1,
    noInvoice: "INV/SIM/IX/2025/001",
    periode: "September 2025",
    tanggalTerbit: "2025-09-25",
    tanggalJatuhTempo: "2025-10-09",
    nominal: 367728888,
    status: "Final",
    tanggalBayar: "2025-10-05",
    jasaPemborongan: 343776000,
    managementFee: 24064320,
    ppn: 2406432,
    pph23: 4812864,
    cncPerlengkapan: 0,
    biayaMaterai: 10000,
    totalTagihan: 367728888,
    client: "PT. ADI",
    picClient: "Imelda Pangaribuan",
    alamat: "Jl. Contoh Alamat No. 123, Jakarta",
  },
  {
    id: 2,
    noInvoice: "INV/SIM/IX/2025/002",
    periode: "September 2025",
    tanggalTerbit: "2025-09-25",
    tanggalJatuhTempo: "2025-10-09",
    nominal: 245152592,
    status: "Outstanding",
    jasaPemborongan: 229184000,
    managementFee: 16042880,
    ppn: 1604288,
    pph23: 3208576,
    cncPerlengkapan: 0,
    biayaMaterai: 10000,
    totalTagihan: 245152592,
    client: "PT. ADI",
    picClient: "Imelda Pangaribuan",
    alamat: "Jl. Contoh Alamat No. 123, Jakarta",
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
                <th className="px-4 py-2">Jatuh Tempo</th>
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
                  <td className="px-4 py-2 font-mono text-xs">
                    {row.noInvoice}
                  </td>
                  <td className="px-4 py-2">{row.periode}</td>
                  <td className="px-4 py-2">{formatDate(row.tanggalTerbit)}</td>
                  <td className="px-4 py-2">
                    {formatDate(row.tanggalJatuhTempo)}
                  </td>
                  <td className="px-4 py-2">
                    Rp {formatCurrency(row.nominal)}
                  </td>
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
      : "bg-orange-100 text-orange-700"; // Outstanding

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
    <div className="space-y-6">
      {/* Informasi Dasar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <Info label="No. Invoice" value={item.noInvoice} />
        <Info label="Periode" value={item.periode} />
        <Info label="Tanggal Terbit" value={formatDate(item.tanggalTerbit)} />
        <Info label="Jatuh Tempo" value={formatDate(item.tanggalJatuhTempo)} />
        <Info label="Status" value={item.status} />
        <Info
          label="Tanggal Bayar"
          value={item.tanggalBayar ? formatDate(item.tanggalBayar) : "-"}
        />
        <Info label="Klien" value={item.client} />
        <Info label="PIC Klien" value={item.picClient} />
      </div>

      {/* Rincian Invoice */}
      <div className="border rounded-lg">
        <h4 className="font-semibold text-gray-700 dark:text-gray-200 p-4 border-b">
          Rincian Invoice
        </h4>
        <div className="p-4 space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Jasa Pemborongan Pekerjaan:</span>
            <span>Rp {formatCurrency(item.jasaPemborongan)}</span>
          </div>
          <div className="flex justify-between">
            <span>
              Management Fee (
              {Math.round((item.managementFee / item.jasaPemborongan) * 100)}%):
            </span>
            <span>Rp {formatCurrency(item.managementFee)}</span>
          </div>
          <div className="flex justify-between">
            <span>Sub Total:</span>
            <span>
              Rp {formatCurrency(item.jasaPemborongan + item.managementFee)}
            </span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span>PPN (10%):</span>
            <span>Rp {formatCurrency(item.ppn)}</span>
          </div>
          <div className="flex justify-between">
            <span>PPH 23 (2%):</span>
            <span>Rp {formatCurrency(item.pph23)}</span>
          </div>
          <div className="flex justify-between">
            <span>CnC & Perlengkapan:</span>
            <span>Rp {formatCurrency(item.cncPerlengkapan)}</span>
          </div>
          <div className="flex justify-between">
            <span>Biaya Materai:</span>
            <span>Rp {formatCurrency(item.biayaMaterai)}</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold text-lg">
            <span>Grand Total Tagihan:</span>
            <span>Rp {formatCurrency(item.totalTagihan)}</span>
          </div>
        </div>
      </div>

      {/* Informasi Pembayaran */}
      <div className="border rounded-lg">
        <h4 className="font-semibold text-gray-700 dark:text-gray-200 p-4 border-b">
          Informasi Pembayaran
        </h4>
        <div className="p-4 text-sm space-y-2">
          <p>
            <strong>Rekening Bank PT. SIM:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            <li>Permata Bank - Cab Fatmawati - 4002209409</li>
            <li>BCA Bank - Cab Arkadia - 5405355555</li>
            <li>Mandiri Bank - Cab Ragunan - 1270005902430</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">
            Mohon untuk mencantumkan No. Invoice pada Bukti Pembayaran dan di
            Fax ke No. 021-788 44 050
          </p>
        </div>
      </div>

      {/* Timeline Proses */}
      <div className="border rounded-lg">
        <h4 className="font-semibold text-gray-700 dark:text-gray-200 p-4 border-b">
          Timeline Proses Invoice
        </h4>
        <div className="p-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span>
                22 {getMonthName(item.tanggalTerbit)} - Konfirmasi THP
                di-approve
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span>
                25 {getMonthName(item.tanggalTerbit)} - Invoice dicetak &
                dikirim via kurir
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span>
                27 {getMonthName(item.tanggalTerbit)} - Invoice diterima PT. ADI
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span>
                09 {getMonthName(item.tanggalJatuhTempo)} - Jatuh tempo
                pembayaran
              </span>
            </li>
            {item.tanggalBayar && (
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>
                  {formatDate(item.tanggalBayar)} - Pembayaran diterima
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" size="sm" onClick={onClose}>
          Tutup
        </Button>
        <Button size="sm">Unduh PDF Invoice</Button>
        <Button size="sm" variant="primary">
          Cetak Kwitansi
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

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID").format(amount);
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getMonthName(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", { month: "long" });
}
