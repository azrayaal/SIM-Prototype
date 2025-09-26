import { Link, useParams } from "react-router";
import Button from "../ui/button/Button";

interface RequestKaryawan {
  id: number;
  requestDate: string;
  jumlah: number;
  tujuan: string;
  deskripsi: string;
  status: "Pending" | "Approved" | "Rejected";
  divisi: string;
  lamaKontrak: string;
  tipeKontrak: string;
  lokasi: string;
  mulaiKerja: string;
  skills: string[];
  picKlien: string;
  vendorStatus: string;
  catatan?: string;
}

// Dummy data
const requestData: RequestKaryawan[] = [
  {
    id: 101,
    requestDate: "2025-09-10",
    jumlah: 3,
    tujuan: "Pengembangan Website Baru",
    deskripsi:
      "Dibutuhkan 3 Frontend Developer untuk mendukung project e-Government dengan deadline ketat.",
    status: "Pending",
    divisi: "IT Development",
    lamaKontrak: "6 Bulan",
    tipeKontrak: "Project-Based",
    lokasi: "Jakarta",
    mulaiKerja: "2025-10-01",
    skills: ["React", "Tailwind", "API Integration"],
    picKlien: "Budi Santoso (CTO)",
    vendorStatus: "Menunggu Validasi",
    catatan: "ingin kandidat berpengalaman minimal 2 tahun.",
  },
];

export default function RequestKaryawanDetail() {
  const { id } = useParams();
  const request = requestData.find((r) => r.id === Number(id));

  if (!request) {
    return <p className="p-6 text-gray-600">Data tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Detail Request Karyawan
        </h2>
        <Link to="/pengajuan-karyawan">
          <Button variant="outline" size="sm">
            Kembali
          </Button>
        </Link>
      </div>

      {/* Ringkasan cepat */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard label="Jumlah" value={`${request.jumlah} Orang`} />
        <SummaryCard label="Divisi" value={request.divisi} />
        <SummaryCard label="Lama Kontrak" value={request.lamaKontrak} />
      </div>

      {/* Info Utama */}
      <Section title="Informasi Utama">
        <InfoGrid
          items={[
            { label: "No. Pengajuan", value: request.id },
            { label: "Tanggal Pengajuan", value: request.requestDate },
            { label: "Tujuan", value: request.tujuan },
            { label: "Deskripsi", value: request.deskripsi },
          ]}
        />
      </Section>

      {/* Detail Outsourcing */}
      <Section title="Detail">
        <InfoGrid
          items={[
            { label: "Tipe Kontrak", value: request.tipeKontrak },
            { label: "Lokasi Penempatan", value: request.lokasi },
            { label: "Estimasi Mulai Kerja", value: request.mulaiKerja },
            { label: "PIC Klien", value: request.picKlien },
            { label: "Vendor Status", value: request.vendorStatus },
            { label: "Skill Dibutuhkan", value: request.skills.join(", ") },
          ]}
        />
      </Section>

      {/* Status */}
      <Section title="Status & Catatan">
        <div className="flex items-center gap-2">
          <StatusBadge status={request.status} />
          <span className="text-gray-700 dark:text-gray-300 text-sm">
            {request.vendorStatus}
          </span>
        </div>
        {request.catatan && (
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
            <span className="font-medium">Catatan: </span>
            {request.catatan}
          </p>
        )}
      </Section>
    </div>
  );
}

/* 🔹 Sub-komponen untuk ringkasan */
function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 dark:bg-white/[0.05] dark:border-white/10 shadow-sm">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-lg font-semibold text-gray-800 dark:text-white">
        {value}
      </p>
    </div>
  );
}

/* 🔹 Sub-komponen section */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
      <div className="rounded-xl border bg-white p-4 dark:bg-white/[0.05] dark:border-white/10 shadow-sm">
        {children}
      </div>
    </div>
  );
}

/* 🔹 Grid untuk info detail */
function InfoGrid({
  items,
}: {
  items: { label: string; value: string | number }[];
}) {
  return (
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
      {items.map((item, idx) => (
        <div key={idx}>
          <dt className="text-sm text-gray-500 dark:text-gray-400">
            {item.label}
          </dt>
          <dd className="text-gray-800 font-medium dark:text-white">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* 🔹 Badge status */
function StatusBadge({
  status,
}: {
  status: "Pending" | "Approved" | "Rejected";
}) {
  const colors =
    status === "Approved"
      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
      : status === "Pending"
      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
      : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100";

  return (
    <span className={`px-3 py-1 text-sm rounded-full font-medium ${colors}`}>
      {status}
    </span>
  );
}
