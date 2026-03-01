import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Selamat Datang! 🇮🇩</h2>
        <p className="opacity-90">Siap melanjutkan persiapan CA Indonesia?</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/feed" className="bg-gradient-to-br from-purple-500 to-blue-600 text-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-1">⚡ Feed</h3>
          <p className="text-sm opacity-90">Scroll & belajar</p>
        </Link>
        <Link to="/subjects" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-1">📚 Mata Ujian</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Jelajahi per subjek</p>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-semibold text-lg mb-3">Info Ujian CA</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
          <p>📋 <strong>3 Level</strong>: CAFB → Associate CA → Chartered Accountant</p>
          <p>📝 <strong>12 Mata Ujian</strong> total di semua level</p>
          <p>⏰ <strong>Masa berlaku</strong>: 3 tahun per mata ujian</p>
        </div>
      </div>
    </div>
  );
}
