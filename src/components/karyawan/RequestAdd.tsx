import { useState } from "react";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router";

export default function RequestKaryawanForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    divisi: "",
    jumlah: "",
    tujuan: "",
    deskripsi: "",
    lamaKontrak: "",
    tipeKontrak: "",
    lokasi: "",
    mulaiKerja: "",
    skills: "",
    picKlien: "",
    vendorStatus: "",
    catatan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()), // ubah jadi array
    };

    console.log("Pengajuan baru:", payload);
    // TODO: Kirim ke API
    navigate("/pengajuan-karyawan");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/[0.05] dark:bg-white/[0.03]">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
        Tambah Pengajuan Karyawan
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Divisi */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Divisi
          </label>
          <input
            type="text"
            name="divisi"
            value={formData.divisi}
            onChange={handleChange}
            placeholder="Contoh: IT Development"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* Jumlah */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Jumlah Karyawan
          </label>
          <input
            type="number"
            name="jumlah"
            value={formData.jumlah}
            onChange={handleChange}
            placeholder="Contoh: 3"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* Tujuan */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Tujuan
          </label>
          <input
            type="text"
            name="tujuan"
            value={formData.tujuan}
            onChange={handleChange}
            placeholder="Contoh: Pengembangan Website Baru"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Deskripsi
          </label>
          <textarea
            name="deskripsi"
            rows={4}
            value={formData.deskripsi}
            onChange={handleChange}
            placeholder="Jelaskan detail kebutuhan karyawan..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* Lama Kontrak */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Lama Kontrak
          </label>
          <input
            type="text"
            name="lamaKontrak"
            value={formData.lamaKontrak}
            onChange={handleChange}
            placeholder="Contoh: 6 Bulan"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* Tipe Kontrak */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Tipe Kontrak
          </label>
          <select
            name="tipeKontrak"
            value={formData.tipeKontrak}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          >
            <option value="">Pilih Tipe Kontrak</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Project-Based">Project-Based</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        {/* Lokasi */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Lokasi Penempatan
          </label>
          <input
            type="text"
            name="lokasi"
            value={formData.lokasi}
            onChange={handleChange}
            placeholder="Contoh: Jakarta"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* Mulai Kerja */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Estimasi Mulai Kerja
          </label>
          <input
            type="date"
            name="mulaiKerja"
            value={formData.mulaiKerja}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Skills Dibutuhkan
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Pisahkan dengan koma. Contoh: React, Tailwind, API Integration"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* PIC Klien */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            PIC Klien
          </label>
          <input
            type="text"
            name="picKlien"
            value={formData.picKlien}
            onChange={handleChange}
            placeholder="Contoh: Budi Santoso (CTO)"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div>

        {/* Vendor Status */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Vendor Status
          </label>
          <input
            type="text"
            name="vendorStatus"
            value={formData.vendorStatus}
            onChange={handleChange}
            placeholder="Contoh: Menunggu Validasi"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
            required
          />
        </div> */}

        {/* Catatan */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Catatan (opsional)
          </label>
          <textarea
            name="catatan"
            rows={3}
            value={formData.catatan}
            onChange={handleChange}
            placeholder="Tambahkan catatan tambahan jika ada..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
              focus:ring focus:ring-blue-500 dark:bg-white/[0.05] dark:text-white"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="outline"
            onClick={() => navigate("/pengajuan-karyawan")}
          >
            Batal
          </Button>
          <Button variant="primary" type="submit">
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
}
