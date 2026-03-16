import { MapPin, Zap, Calendar } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const systemTypeLabels: Record<Project['systemType'], string> = {
  'on-grid': 'On-Grid',
  'off-grid': 'Off-Grid',
  hybrid: 'Hybrid',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-bg-white shadow-md transition-shadow hover:shadow-lg">
      {/* Image placeholder */}
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="text-center">
          <Zap className="mx-auto h-10 w-10 text-primary/30" />
          <p className="mt-2 text-xs text-text-light">Project Photo</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {systemTypeLabels[project.systemType]}
        </div>
        <h3 className="font-heading text-base font-bold text-text">{project.title}</h3>
        {project.description && (
          <p className="mt-1 text-sm text-text-light line-clamp-2">{project.description}</p>
        )}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-text-light">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {project.area}
          </span>
          <span className="inline-flex items-center gap-1">
            <Zap className="h-3 w-3" />
            {project.systemSize}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(project.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  );
}
