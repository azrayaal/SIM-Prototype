import { useParams, Link } from "react-router";
import Button from "../../ui/button/Button";

const kontrakData = [
  {
    id: 201,
    nama: "Budi Santoso",
    posisi: "Frontend Developer",
    startDate: "2024-09-01",
    endDate: "2025-09-01",
    status: "Aktif",
    catatan: "Kontrak baru ditandatangani tahun lalu untuk 1 tahun.",
  },
  {
    id: 202,
    nama: "Siti Aisyah",
    posisi: "Digital Marketer",
    startDate: "2023-09-15",
    endDate: "2024-09-15",
    status: "Habis",
    catatan: "Kontrak berakhir bulan September 2024, menunggu evaluasi HR.",
  },
];

export default function AbsentDetail() {
  const { id } = useParams();
  const kontrak = kontrakData.find((k) => k.id === Number(id));

  if (!kontrak) return <p>Data kontrak tidak ditemukan.</p>;

  return (
    <div className="p-6 bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.05]">
      <h2 className="text-lg font-semibold mb-4">Detail Kontrak Karyawan</h2>
      <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p>
          <strong>Nama:</strong> {kontrak.nama}
        </p>
        <p>
          <strong>Posisi:</strong> {kontrak.posisi}
        </p>
        <p>
          <strong>Tanggal Mulai:</strong> {kontrak.startDate}
        </p>
        <p>
          <strong>Tanggal Berakhir:</strong> {kontrak.endDate}
        </p>
        <p>
          <strong>Status:</strong> {kontrak.status}
        </p>
        <p>
          <strong>Catatan:</strong> {kontrak.catatan}
        </p>
      </div>
      <div className="mt-5 flex gap-3">
        <Link to="/kontrak">
          <Button size="sm" variant="outline">
            Kembali
          </Button>
        </Link>
        <Link to={`/request-kontrak/${kontrak.id}`}>
          <Button size="sm">Perpanjang Kontrak</Button>
        </Link>
      </div>
    </div>
  );
}
