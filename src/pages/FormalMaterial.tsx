import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { subjects } from '../content/feedData';
import { formalMaterials } from '../content/formalData';
import type { FormalSection } from '../content/formalData';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, List } from 'lucide-react';

function SectionRenderer({ section }: { section: FormalSection }) {
  return (
    <div className="k-formal-section" id={section.id}>
      <h3 className="k-formal-section-title">{section.title}</h3>
      <p className="k-formal-section-content">{section.content}</p>

      {section.rules && section.rules.length > 0 && (
        <div className="k-formal-rules">
          <div className="k-formal-rules-label">📋 Aturan / Ketentuan</div>
          <ul>
            {section.rules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>
      )}

      {section.steps && section.steps.length > 0 && (
        <div className="k-formal-steps">
          <div className="k-formal-steps-label">🔢 Langkah-langkah</div>
          <ol>
            {section.steps.map((step, i) => (
              <li key={i}>
                <span className="k-formal-step-num">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {section.tables?.map((table, ti) => (
        <div key={ti} className="k-formal-table-wrapper">
          {table.caption && <div className="k-formal-table-caption">{table.caption}</div>}
          <div className="k-formal-table-scroll">
            <table className="k-formal-table">
              <thead>
                <tr>
                  {table.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {section.formula && (
        <div className="k-formal-formula">
          <div className="k-formal-formula-label">🔣 Rumus</div>
          <pre>{section.formula}</pre>
        </div>
      )}

      {section.diagram && (
        <div className="k-formal-diagram">
          <div className="k-formal-diagram-label">📊 Diagram</div>
          <pre>{section.diagram}</pre>
        </div>
      )}

      {section.examples && section.examples.length > 0 && (
        <div className="k-formal-examples">
          <div className="k-formal-examples-label">📌 Contoh</div>
          {section.examples.map((ex, i) => (
            <div key={i} className="k-formal-example-item">{ex}</div>
          ))}
        </div>
      )}

      {section.notes && section.notes.length > 0 && (
        <div className="k-formal-notes">
          {section.notes.map((note, i) => (
            <div key={i} className="k-formal-note-item">💡 {note}</div>
          ))}
        </div>
      )}

      {section.warning && (
        <div className="k-formal-warning">⚠️ {section.warning}</div>
      )}
    </div>
  );
}

export default function FormalMaterial() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjects.find(s => s.id === subjectId);
  const material = formalMaterials.find(m => m.subjectId === subjectId);
  const [currentPage, setCurrentPage] = useState(0);
  const [showToc, setShowToc] = useState(false);

  const totalPages = material?.chapters.length ?? 0;
  const chapter = material?.chapters[currentPage];

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    setShowToc(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
        goToPage(currentPage + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 0) {
        goToPage(currentPage - 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentPage, totalPages, goToPage]);

  if (!subject) {
    return (
      <div className="k-not-found">
        <p>Mata ujian tidak ditemukan</p>
        <Link to="/subjects">← Kembali</Link>
      </div>
    );
  }

  return (
    <div className="k-formal k-formal--paged">
      {/* Header */}
      <div className="k-formal-header">
        <div className="k-formal-header-top">
          <Link to={`/subjects/${subjectId}`} className="k-formal-back">
            <ArrowLeft size={16} /> Kembali
          </Link>
          {totalPages > 0 && (
            <button
              className="k-formal-toc-toggle"
              onClick={() => setShowToc(!showToc)}
              title="Daftar Isi"
            >
              <List size={18} />
              <span>Daftar Isi</span>
            </button>
          )}
        </div>
        <div className="k-formal-title-row">
          <span className="k-formal-icon">{subject.icon}</span>
          <div>
            <h2 className="k-formal-title">{subject.title}</h2>
            <p className="k-formal-subtitle">
              <BookOpen size={14} /> Materi Formal & Referensi Lengkap
            </p>
          </div>
        </div>
        {totalPages > 0 && (
          <div className="k-formal-page-indicator">
            Bab {currentPage + 1} dari {totalPages}
          </div>
        )}
      </div>

      {/* Table of Contents overlay */}
      {showToc && material && (
        <div className="k-formal-toc-overlay" onClick={() => setShowToc(false)}>
          <div className="k-formal-toc-panel" onClick={(e) => e.stopPropagation()}>
            <div className="k-formal-toc-label">📑 Daftar Isi</div>
            {material.chapters.map((ch, i) => (
              <button
                key={ch.id}
                className={`k-formal-toc-item ${i === currentPage ? 'k-formal-toc-item--active' : ''}`}
                onClick={() => goToPage(i)}
              >
                <span className="k-formal-toc-num">{i + 1}</span>
                {ch.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="k-formal-content">
        {chapter ? (
          <div className="k-formal-page">
            <div className="k-formal-chapter-header">
              <span className="k-formal-chapter-number">Bab {currentPage + 1}</span>
              <h2 className="k-formal-chapter-title">{chapter.title}</h2>
              <p className="k-formal-chapter-desc">{chapter.description}</p>
            </div>
            {chapter.sections.map((section) => (
              <SectionRenderer key={section.id} section={section} />
            ))}
          </div>
        ) : (
          <div className="k-formal-empty">
            <p>📝 Materi formal untuk mata ujian ini sedang dalam pengembangan.</p>
            <Link to={`/subjects/${subjectId}`} className="k-formal-back-link">
              ← Kembali ke mode kartu belajar
            </Link>
          </div>
        )}
      </div>

      {/* Page Navigation */}
      {totalPages > 1 && (
        <div className="k-formal-nav">
          <button
            className="k-formal-nav-btn"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={18} />
            <span className="k-formal-nav-label">
              {currentPage > 0 && (
                <>
                  <span className="k-formal-nav-hint">Sebelumnya</span>
                  <span className="k-formal-nav-chapter">{material!.chapters[currentPage - 1].title}</span>
                </>
              )}
            </span>
          </button>
          <div className="k-formal-nav-pages">
            {material!.chapters.map((_, i) => (
              <button
                key={i}
                className={`k-formal-nav-dot ${i === currentPage ? 'k-formal-nav-dot--active' : ''}`}
                onClick={() => goToPage(i)}
                title={`Bab ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="k-formal-nav-btn k-formal-nav-btn--next"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          >
            <span className="k-formal-nav-label">
              {currentPage < totalPages - 1 && (
                <>
                  <span className="k-formal-nav-hint">Selanjutnya</span>
                  <span className="k-formal-nav-chapter">{material!.chapters[currentPage + 1].title}</span>
                </>
              )}
            </span>
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
