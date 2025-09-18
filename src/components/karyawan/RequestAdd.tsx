import { useState } from "react";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router";

export default function RequestKaryawanForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    requestDate: "",
    jumlah: "",
    tujuan: "",
    deskripsi: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pengajuan baru:", formData);

    // TODO: Kirim ke API
    navigate("/pengajuan-karyawan");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/[0.05] dark:bg-white/[0.03]">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
        Tambah Pengajuan Karyawan
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Tanggal Pengajuan
          </label>
          <input
            type="date"
            name="requestDate"
            value={formData.requestDate}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Jumlah Karyawan
          </label>
          <input
            type="number"
            name="jumlah"
            value={formData.jumlah}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Tujuan
          </label>
          <input
            type="text"
            name="tujuan"
            value={formData.tujuan}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Deskripsi
          </label>
          <textarea
            name="deskripsi"
            rows={4}
            value={formData.deskripsi}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => navigate("/pengajuan-karyawan")}
          >
            Batal
          </Button>
          <Button type="submit">Simpan</Button>
        </div>
      </form>
    </div>
  );
}
