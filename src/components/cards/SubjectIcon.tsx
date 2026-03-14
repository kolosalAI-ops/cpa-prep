import {
  BookOpen, Calculator, Scale, TrendingUp, Search,
  Target, Layers, FileText, BarChart2, Briefcase,
  PieChart, Award, ClipboardList,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const subjectIconMap: Record<string, LucideIcon> = {
  'pengantar-akuntansi':      BookOpen,
  'akuntansi-keuangan-dasar': Calculator,
  'manajemen-bisnis-dasar':   Briefcase,
  'ekonomi-statistik':        PieChart,
  'pelaporan-korporat':       FileText,
  'manajemen-keuangan':       TrendingUp,
  'manajemen-perpajakan':     Scale,
  'audit-asurans':            Search,
  'akuntansi-manajemen':      BarChart2,
  'manajemen-stratejik':      Target,
  'studi-kasus-terpadu':      Layers,
  'etika-tata-kelola':        Award,
  'psak-standar':             ClipboardList,
  'strategi-ujian':           BookOpen,
};

interface SubjectIconProps {
  id: string;
  size?: number;
  className?: string;
}

export default function SubjectIcon({ id, size = 20, className }: SubjectIconProps) {
  const Icon = subjectIconMap[id] ?? BookOpen;
  return <Icon size={size} className={className} />;
}
