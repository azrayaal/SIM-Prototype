import { useParams, Link } from "react-router";
import Button from "../../ui/button/Button";
import Badge from "../../ui/badge/Badge";
import { useState } from "react";
import { Modal } from "../../ui/modal";

const requestData = [
  {
    id: 502,
    tujuan: "Project Digital Marketing",
    divisi: "Marketing",
    jumlah: 3,
    lamaKontrak: "6 Bulan",
    kontrakList: [
      {
        id: 202,
        nama: "Siti Aisyah",
        posisi: "Digital Marketer",
        startDate: "2025-09-15",
        endDate: "2026-03-15",
        status: "Aktif",
      },
      {
        id: 203,
        nama: "Andi Wijaya",
        posisi: "Digital Marketer",
        startDate: "2025-09-15",
        endDate: "2026-03-15",
        status: "Menunggu Konfirmasi",
      },
      {
        id: 204,
        nama: "Ratna Dewi",
        posisi: "Digital Marketer",
        startDate: "2025-09-15",
        endDate: "2026-03-15",
        status: "Menunggu Konfirmasi",
      },
    ],
  },
];

export default function RequestKontrakDetail() {
  const { id } = useParams();
  const request = requestData.find((r) => r.id === Number(id));
  const [openImport, setOpenImport] = useState(false);

  if (!request) return <p>Data pengajuan tidak ditemukan.</p>;

  const handleDownloadTemplate = () => {
    alert("Template import kontrak (Excel/CSV) akan di-download 🚀");
  };

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) alert(`File ${file.name} siap divalidasi!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Detail Pengajuan Kontrak</h2>
        <Link to="/pengajuan-kontrak">
          <Button size="sm" variant="outline">
            Kembali
          </Button>
        </Link>
      </div>

      {/* Info Pengajuan */}
      <div className="p-4 border rounded-xl bg-white dark:bg-white/[0.03] dark:border-white/[0.05]">
        <h3 className="font-semibold mb-2">Informasi Pengajuan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <Info label="Tujuan" value={request.tujuan} />
          <Info label="Divisi" value={request.divisi} />
          <Info label="Jumlah Karyawan" value={`${request.jumlah} Orang`} />
          <Info label="Lama Kontrak" value={request.lamaKontrak} />
        </div>
      </div>

      {/* List Kontrak */}
      <div className="p-4 border rounded-xl bg-white dark:bg-white/[0.03] dark:border-white/[0.05]">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">Daftar Kontrak</h3>
          <div className="space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleDownloadTemplate}
            >
              Download Template
            </Button>
            <Button size="sm" onClick={() => setOpenImport(true)}>
              Import Kontrak
            </Button>
          </div>
        </div>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b text-gray-600 dark:text-gray-300">
              <th className="px-3 py-2">Nama</th>
              <th className="px-3 py-2">Posisi</th>
              <th className="px-3 py-2">Mulai</th>
              <th className="px-3 py-2">Berakhir</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {request.kontrakList.map((k) => (
              <tr key={k.id} className="border-b">
                <td className="px-3 py-2">{k.nama}</td>
                <td className="px-3 py-2">{k.posisi}</td>
                <td className="px-3 py-2">{k.startDate}</td>
                <td className="px-3 py-2">{k.endDate}</td>
                <td className="px-3 py-2">
                  <Badge
                    size="sm"
                    color={
                      k.status === "Aktif"
                        ? "success"
                        : k.status === "Habis"
                        ? "error"
                        : "warning"
                    }
                  >
                    {k.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Import */}
      <Modal isOpen={openImport} onClose={() => setOpenImport(false)}>
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">Import Kontrak</h3>
          <input type="file" accept=".csv,.xlsx" onChange={handleUploadFile} />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpenImport(false)}>
              Batal
            </Button>
            <Button onClick={() => alert("Data import disimpan!")}>
              Konfirmasi Import
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-800 dark:text-white">
        {value}
      </p>
    </div>
  );
}
