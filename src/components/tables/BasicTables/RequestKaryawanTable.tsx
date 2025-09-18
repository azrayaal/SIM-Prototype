import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import Button from "../../ui/button/Button";
import { Link } from "react-router";

interface RequestKaryawan {
  id: number;
  requestDate: string;
  jumlah: number;
  tujuan: string;
  deskripsi: string;
  status: "Pending" | "Approved" | "Rejected";
}

const requestData: RequestKaryawan[] = [
  {
    id: 101,
    requestDate: "2025-09-10",
    jumlah: 3,
    tujuan: "Pengembangan Website Baru",
    deskripsi:
      "Dibutuhkan 3 Frontend Developer untuk mendukung project e-Government dengan deadline ketat.",
    status: "Pending",
  },
  {
    id: 102,
    requestDate: "2025-09-12",
    jumlah: 2,
    tujuan: "Penguatan Tim Marketing",
    deskripsi:
      "Butuh tambahan 2 Digital Marketer untuk meningkatkan campaign digital tahun ini.",
    status: "Approved",
  },
  {
    id: 103,
    requestDate: "2025-09-15",
    jumlah: 5,
    tujuan: "Ekspansi Cabang Baru",
    deskripsi: "Request 5 Customer Service untuk cabang baru di Surabaya.",
    status: "Rejected",
  },
];

export default function RequestKaryawanTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* Header Atas */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/[0.05]">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Daftar Pengajuan Karyawan
        </h2>
        <Link to="/pengajuan-karyawan/tambah">
          <Button size="sm" color="primary">
            + Tambah Pengajuan
          </Button>
        </Link>
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 text-xs text-gray-500">
                No. Pengajuan
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-xs text-gray-500">
                Tanggal
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-xs text-gray-500">
                Jumlah
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-xs text-gray-500">
                Tujuan
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-xs text-gray-500">
                Deskripsi
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-xs text-gray-500">
                Status
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-xs text-gray-500">
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {requestData.map((req) => (
              <TableRow key={req.id}>
                <TableCell className="px-5 py-4 text-gray-700 dark:text-white/80">
                  {req.id}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500">
                  {req.requestDate}
                </TableCell>
                <TableCell className="px-4 py-3 font-medium text-gray-800 dark:text-white">
                  {req.jumlah} Orang
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500">
                  {req.tujuan}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 max-w-[250px] truncate">
                  {req.deskripsi}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Badge
                    size="sm"
                    color={
                      req.status === "Approved"
                        ? "success"
                        : req.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {req.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Link to={`/pengajuan-karyawan/${req.id}`}>
                    <Button size="sm">Detail</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
