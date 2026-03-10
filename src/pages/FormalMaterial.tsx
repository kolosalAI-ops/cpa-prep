import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { subjects } from '../content/feedData';
import { formalMaterials } from '../content/formalData';
import type { FormalSection, FormalChapter } from '../content/formalData';
import { ArrowLeft, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';

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

function ChapterRenderer({ chapter, defaultOpen }: { chapter: FormalChapter; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="k-formal-chapter">
      <button className="k-formal-chapter-toggle" onClick={() => setOpen(!open)}>
        <span className="k-formal-chapter-icon">
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </span>
        <span className="k-formal-chapter-title">{chapter.title}</span>
      </button>
      {open && (
        <div className="k-formal-chapter-body">
          <p className="k-formal-chapter-desc">{chapter.description}</p>
          {chapter.sections.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FormalMaterial() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjects.find(s => s.id === subjectId);
  const material = formalMaterials.find(m => m.subjectId === subjectId);

  if (!subject) {
    return (
      <div className="k-not-found">
        <p>Mata ujian tidak ditemukan</p>
        <Link to="/subjects">← Kembali</Link>
      </div>
    );
  }

  return (
    <div className="k-formal">
      <div className="k-formal-header">
        <Link to={`/subjects/${subjectId}`} className="k-formal-back">
          <ArrowLeft size={16} /> Kembali ke Kartu
        </Link>
        <div className="k-formal-title-row">
          <span className="k-formal-icon">{subject.icon}</span>
          <div>
            <h2 className="k-formal-title">{subject.title}</h2>
            <p className="k-formal-subtitle">
              <BookOpen size={14} /> Materi Formal & Referensi Lengkap
            </p>
          </div>
        </div>
      </div>

      {material && material.chapters.length > 0 ? (
        <div className="k-formal-toc">
          <div className="k-formal-toc-label">📑 Daftar Isi</div>
          {material.chapters.map((ch, i) => (
            <a key={ch.id} href={`#ch-${ch.id}`} className="k-formal-toc-item">
              <span className="k-formal-toc-num">{i + 1}</span>
              {ch.title}
            </a>
          ))}
        </div>
      ) : null}

      <div className="k-formal-content">
        {material && material.chapters.length > 0 ? (
          material.chapters.map((chapter, i) => (
            <div key={chapter.id} id={`ch-${chapter.id}`}>
              <ChapterRenderer chapter={chapter} defaultOpen={i === 0} />
            </div>
          ))
        ) : (
          <div className="k-formal-empty">
            <p>📝 Materi formal untuk mata ujian ini sedang dalam pengembangan.</p>
            <Link to={`/subjects/${subjectId}`} className="k-formal-back-link">
              ← Kembali ke mode kartu belajar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
