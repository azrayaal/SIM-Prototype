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

interface Payroll {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  division: string;
  basicSalary: string;
  allowance: string;
  deduction: string;
  total: string;
  status: "Paid" | "Pending" | "Unpaid";
}

const payrollData: Payroll[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    division: "Creative",
    basicSalary: "5.000.000",
    allowance: "500.000",
    deduction: "200.000",
    total: "5.300.000",
    status: "Paid",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    division: "Management",
    basicSalary: "10.000.000",
    allowance: "1.200.000",
    deduction: "300.000",
    total: "10.900.000",
    status: "Pending",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    division: "Marketing",
    basicSalary: "6.500.000",
    allowance: "750.000",
    deduction: "100.000",
    total: "7.150.000",
    status: "Unpaid",
  },
];

export default function PayrollTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Karyawan
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Divisi
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Gaji Pokok
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Tunjangan
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Potongan
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Total
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {payrollData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={item.user.image}
                        alt={item.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {item.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {item.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.division}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-800 text-center text-theme-sm dark:text-white/90">
                  Rp {item.basicSalary}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-800 text-center text-theme-sm dark:text-white/90">
                  Rp {item.allowance}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-800 text-center text-theme-sm dark:text-white/90">
                  Rp {item.deduction}
                </TableCell>
                <TableCell className="px-4 py-3 font-semibold text-gray-900 text-center text-theme-sm dark:text-white">
                  Rp {item.total}
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Badge
                    size="sm"
                    color={
                      item.status === "Paid"
                        ? "success"
                        : item.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <Link to={`/slip-gaji/${item.id}`}>
                      <Button size="sm">Slip Gaji</Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
