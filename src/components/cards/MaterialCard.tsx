import { Bookmark, Lightbulb, Brain, BookOpen, ClipboardList, ListOrdered, BarChart2, BookMarked } from 'lucide-react';
import type { FeedCard } from '../../content/feedData';

export default function MaterialCard({ card }: { card: FeedCard }) {
  return (
    <div className="k-card k-material-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-primary">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label"><BookOpen size={12} /> Materi</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body">{card.content}</p>

      {card.sections?.map((section, i) => (
        <div key={i} className="k-material-section">
          <h4 className="k-material-section-heading">{section.heading}</h4>
          <p className="k-material-section-body">{section.body}</p>
        </div>
      ))}

      {card.rules && card.rules.length > 0 && (
        <div className="k-material-rules">
          <div className="k-material-rules-label"><ClipboardList size={14} /> Aturan / Ketentuan</div>
          <ul className="k-material-rules-list">
            {card.rules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
        </div>
      )}

      {card.steps && card.steps.length > 0 && (
        <div className="k-material-steps">
          <div className="k-material-steps-label"><ListOrdered size={14} /> Langkah-langkah</div>
          <ol className="k-material-steps-list">
            {card.steps.map((step, i) => (
              <li key={i}>
                <span className="k-step-number">{i + 1}</span>
                <span className="k-step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {card.tables?.map((table, ti) => (
        <div key={ti} className="k-material-table-wrapper">
          {table.caption && <div className="k-material-table-caption">{table.caption}</div>}
          <div className="k-material-table-scroll">
            <table className="k-material-table">
              <thead>
                <tr>{table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {table.rows.map((row, ri) => (
                  <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {card.diagram && (
        <div className="k-material-diagram">
          <div className="k-material-diagram-label"><BarChart2 size={14} /> Diagram</div>
          <pre className="k-material-diagram-content">{card.diagram}</pre>
        </div>
      )}

      {card.example && (
        <div className="k-example">
          <div className="k-example-label"><Bookmark size={14} /> Contoh</div>
          {card.example}
        </div>
      )}

      {card.mnemonic && (
        <div className="k-mnemonic"><Brain size={14} /> {card.mnemonic}</div>
      )}

      {card.keyTakeaway && (
        <div className="k-takeaway">
          <div className="k-takeaway-label"><Lightbulb size={14} /> Poin Kunci</div>
          {card.keyTakeaway}
        </div>
      )}

      {card.source && (
        <p className="k-source"><BookMarked size={14} /> {card.source}</p>
      )}
    </div>
  );
}
