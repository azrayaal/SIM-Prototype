import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function DashboardMetrics() {
  const metrics = [
    {
      label: "Kontrak Aktif",
      value: 42,
      icon: <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />,
      trend: "+5%",
      trendType: "success" as const,
    },
    {
      label: "Penggajian Draft",
      value: 12,
      icon: <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />,
      trend: "-2%",
      trendType: "error" as const,
    },
    {
      label: "Outstanding Invoice",
      value: "Rp 320jt",
      icon: <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />,
      trend: "+12%",
      trendType: "error" as const,
    },
    {
      label: "Pengajuan Karyawan",
      value: 8,
      icon: <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />,
      trend: "+3",
      trendType: "success" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {metrics.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            {item.icon}
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {item.value}
              </h4>
            </div>
            <Badge color={item.trendType}>
              {item.trendType === "success" ? (
                <ArrowUpIcon />
              ) : (
                <ArrowDownIcon />
              )}
              {item.trend}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
