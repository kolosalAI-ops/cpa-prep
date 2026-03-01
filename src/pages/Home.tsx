import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="k-home">
      <div className="k-hero">
        <h2>Selamat Datang! 🇮🇩</h2>
        <p>Siap melanjutkan persiapan CA Indonesia?</p>
      </div>

      <div className="k-home-grid">
        <Link to="/feed" className="k-home-link k-home-link-primary">
          <h3>⚡ Feed</h3>
          <p>Scroll & belajar</p>
        </Link>
        <Link to="/subjects" className="k-home-link k-home-link-secondary">
          <h3>📚 Mata Ujian</h3>
          <p>Jelajahi per subjek</p>
        </Link>
      </div>

      <div className="k-info-box">
        <h3>Info Ujian CA</h3>
        <div className="k-info-box-items">
          <p>📋 <strong>3 Level</strong>: CAFB → Associate CA → Chartered Accountant</p>
          <p>📝 <strong>12 Mata Ujian</strong> total di semua level</p>
          <p>⏰ <strong>Masa berlaku</strong>: 3 tahun per mata ujian</p>
        </div>
      </div>
    </div>
  );
}
