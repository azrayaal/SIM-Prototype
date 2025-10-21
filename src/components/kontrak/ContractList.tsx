import { Link } from "react-router";
import Button from "../ui/button/Button";

interface Kontrak {
  id: number;
  nama: string;
  posisi: string;
  startDate: string;
  endDate: string;
  status: "Aktif" | "Habis" | "Diperpanjang" | "Menunggu Konfirmasi";
}

interface Request {
  id: number;
  tujuan: string;
  divisi: string;
  jumlah: number;
  lamaKontrak: string;
  status: string;
  kontrakList: Kontrak[];
}

const requestData: Request[] = [
  {
    id: 501,
    tujuan: "Ekspansi Cabang Surabaya",
    divisi: "Customer Service",
    jumlah: 1,
    status: "Menunggu Konfirmasi",
    lamaKontrak: "12 Bulan",
    kontrakList: [
      {
        id: 201,
        nama: "Budi Santoso",
        posisi: "Customer Service",
        startDate: "2025-10-01",
        endDate: "2026-10-01",
        status: "Menunggu Konfirmasi",
      },
    ],
  },
  {
    id: 502,
    tujuan: "Project Digital Marketing",
    divisi: "Marketing",
    jumlah: 3,
    lamaKontrak: "6 Bulan",
    status: "Menunggu Konfirmasi",
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

export default function RequestKontrakList() {
  return (
    <div className="p-6 bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.05]">
      <h2 className="text-lg font-semibold mb-4">Daftar Pengajuan Kontrak</h2>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b text-gray-600 dark:text-gray-300">
            <th className="px-3 py-2">No</th>
            <th className="px-3 py-2">Tujuan</th>
            <th className="px-3 py-2">Divisi</th>
            <th className="px-3 py-2">Jumlah Kontrak</th>
            <th className="px-3 py-2">Lama Kontrak</th>
            <th className="px-3 py-2">Status</th>
            <th className="px-3 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {requestData.map((req, idx) => (
            <tr key={req.id} className="border-b">
              <td className="px-3 py-2 text-center">{idx + 1}</td>
              <td className="px-3 py-2 text-center">{req.tujuan}</td>
              <td className="px-3 py-2 text-center">{req.divisi}</td>
              <td className="px-3 py-2 text-center">{req.jumlah}</td>
              <td className="px-3 py-2 text-center">{req.lamaKontrak}</td>
              <td className="px-3 py-2 text-center">{req.status}</td>
              <td className="px-3 py-2 text-center space-x-2">
                {req.kontrakList.length === 1 ? (
                  <>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Approve
                    </Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Reject
                    </Button>
                  </>
                ) : (
                  <Link to={`/kontrak/${req.id}`}>
                    <Button>Detail</Button>
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
