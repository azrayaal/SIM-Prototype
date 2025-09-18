import { Link, useParams } from "react-router";
import Button from "../ui/button/Button";

interface RequestKaryawan {
  id: number;
  requestDate: string;
  jumlah: number;
  tujuan: string;
  deskripsi: string;
  status: "Pending" | "Approved" | "Rejected";
}

// Dummy data (nanti ganti dari API/backend)
const requestData: RequestKaryawan[] = [
  {
    id: 101,
    requestDate: "2025-09-10",
    jumlah: 3,
    tujuan: "Pengembangan Website Baru",
    deskripsi:
      "Dibutuhkan 3 Frontend Developer untuk mendukung project e-Government dengan deadline ketat. Kandidat harus menguasai React dan Tailwind.",
    status: "Pending",
  },
  {
    id: 102,
    requestDate: "2025-09-12",
    jumlah: 2,
    tujuan: "Penguatan Tim Marketing",
    deskripsi:
      "Butuh tambahan 2 Digital Marketer untuk meningkatkan campaign digital tahun ini. Fokus pada SEO, SEM, dan Social Media Ads.",
    status: "Approved",
  },
  {
    id: 103,
    requestDate: "2025-09-15",
    jumlah: 5,
    tujuan: "Ekspansi Cabang Baru",
    deskripsi:
      "Request 5 Customer Service untuk cabang baru di Surabaya. Dibutuhkan segera untuk mendukung pembukaan bulan depan.",
    status: "Rejected",
  },
];

export default function RequestKaryawanDetail() {
  const { id } = useParams(); // ambil ID dari URL
  const request = requestData.find((r) => r.id === Number(id));

  if (!request) {
    return <p className="p-6 text-gray-600">Data tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Detail Request Karyawan
        </h2>
        <Link to="/pengajuan-karyawan">
          <Button variant="outline" size="sm">
            Kembali
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500 text-sm">No. Pengajuan</p>
          <p className="text-gray-800 font-medium dark:text-white">
            {request.id}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Tanggal Pengajuan</p>
          <p className="text-gray-800 font-medium dark:text-white">
            {request.requestDate}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Jumlah Karyawan</p>
          <p className="text-gray-800 font-medium dark:text-white">
            {request.jumlah} Orang
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Tujuan</p>
          <p className="text-gray-800 font-medium dark:text-white">
            {request.tujuan}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Deskripsi</p>
          <p className="text-gray-800 font-medium dark:text-white">
            {request.deskripsi}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Status</p>
          {request.status === "Approved" ? (
            <p className="text-green-500 font-medium dark:text-white">
              {request.status}
            </p>
          ) : request.status === "Pending" ? (
            <p className="text-yellow-500 font-medium dark:text-white">
              {request.status}
            </p>
          ) : (
            <p className="text-red-500 font-medium dark:text-white">
              {request.status}
            </p>
          )}
          {/* <Badge
            size="md"
            color={
              request.status === "Approved"
                ? "success"
                : request.status === "Pending"
                ? "warning"
                : "error"
            }
          >
            {request.status}
          </Badge> */}
        </div>
      </div>

      {/* <div className="flex gap-3 mt-6">
        <Button color="success">Approve</Button>
        <Button color="error">Reject</Button>
      </div> */}
    </div>
  );
}
