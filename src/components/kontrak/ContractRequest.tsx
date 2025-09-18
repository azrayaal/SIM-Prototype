import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Link } from "react-router";
import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";

interface Kontrak {
  id: number;
  nama: string;
  posisi: string;
  startDate: string;
  endDate: string;
  status: "Aktif" | "Habis" | "Diperpanjang";
}

const kontrakData: Kontrak[] = [
  {
    id: 201,
    nama: "Budi Santoso",
    posisi: "Frontend Developer",
    startDate: "2024-09-01",
    endDate: "2025-09-01",
    status: "Aktif",
  },
  {
    id: 202,
    nama: "Siti Aisyah",
    posisi: "Digital Marketer",
    startDate: "2023-09-15",
    endDate: "2024-09-15",
    status: "Habis",
  },
  {
    id: 203,
    nama: "Andi Wijaya",
    posisi: "Customer Service",
    startDate: "2024-01-10",
    endDate: "2025-01-10",
    status: "Diperpanjang",
  },
];

export default function ContractRequestTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 dark:border-white/[0.05]">
        <h2 className="font-semibold text-gray-700 dark:text-white">
          Daftar Kontrak Karyawan
        </h2>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader>No.</TableCell>
              <TableCell isHeader>Nama</TableCell>
              <TableCell isHeader>Posisi</TableCell>
              <TableCell isHeader>Mulai</TableCell>
              <TableCell isHeader>Berakhir</TableCell>
              <TableCell isHeader>Status</TableCell>
              <TableCell isHeader>Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {kontrakData.map((k) => (
              <TableRow key={k.id}>
                <TableCell>{k.id}</TableCell>
                <TableCell>{k.nama}</TableCell>
                <TableCell>{k.posisi}</TableCell>
                <TableCell>{k.startDate}</TableCell>
                <TableCell>{k.endDate}</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>
                  <Link to={`/kontrak/${k.id}`}>
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
