import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { subjects } from '../content/feedData';
import { formalMaterials } from '../content/formalData';
import type { FormalSection } from '../content/formalData';
import {
  ArrowLeft, ChevronLeft, ChevronRight, BookOpen, List,
  AlertTriangle, Lightbulb, Bookmark, ListOrdered,
  ClipboardList, BarChart2, Hash,
} from 'lucide-react';
import SubjectIcon from '../components/cards/SubjectIcon';

function SectionRenderer({ section }: { section: FormalSection }) {
  return (
    <div className="k-formal-section" id={section.id}>
      <h3 className="k-formal-section-title">{section.title}</h3>
      <p className="k-formal-section-content">{section.content}</p>

      {section.rules && section.rules.length > 0 && (
        <div className="k-formal-rules">
          <div className="k-formal-rules-label">
            <ClipboardList size={14} /> Aturan / Ketentuan
          </div>
          <ul>
            {section.rules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
        </div>
      )}

      {section.steps && section.steps.length > 0 && (
        <div className="k-formal-steps">
          <div className="k-formal-steps-label">
            <ListOrdered size={14} /> Langkah-langkah
          </div>
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
        <div>
          <div className="k-formula-block-label"><Hash size={14} /> Rumus</div>
          <div className="k-formula-block">{section.formula}</div>
        </div>
      )}

      {section.diagram && (
        <div className="k-formal-diagram">
          <div className="k-formal-diagram-label"><BarChart2 size={14} /> Diagram</div>
          <pre>{section.diagram}</pre>
        </div>
      )}

      {section.examples && section.examples.length > 0 && (
        <div className="k-formal-examples">
          <div className="k-formal-examples-label"><Bookmark size={14} /> Contoh</div>
          {section.examples.map((ex, i) => (
            <div key={i} className="k-formal-example-item">{ex}</div>
          ))}
        </div>
      )}

      {section.notes && section.notes.length > 0 && (
        <div className="k-formal-notes">
          {section.notes.map((note, i) => (
            <div key={i} className="k-formal-note-item">
              <Lightbulb size={14} /> {note}
            </div>
          ))}
        </div>
      )}

      {section.warning && (
        <div className="k-formal-warning">
          <AlertTriangle size={14} /> {section.warning}
        </div>
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
          <SubjectIcon id={subjectId!} size={32} className="k-formal-icon" />
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
            <div className="k-formal-toc-label"><List size={16} /> Daftar Isi</div>
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
              <span className="k-formal-chapter-number">BAB {currentPage + 1}</span>
              <h2 className="k-formal-chapter-title">{chapter.title}</h2>
              <p className="k-formal-chapter-desc">{chapter.description}</p>
            </div>
            {chapter.sections.map((section) => (
              <SectionRenderer key={section.id} section={section} />
            ))}
          </div>
        ) : (
          <div className="k-formal-empty">
            <p><BookOpen size={16} /> Materi formal untuk mata ujian ini sedang dalam pengembangan.</p>
            <Link to={`/subjects/${subjectId}`} className="k-formal-back-link">
              <ArrowLeft size={14} /> Kembali ke mode kartu belajar
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
