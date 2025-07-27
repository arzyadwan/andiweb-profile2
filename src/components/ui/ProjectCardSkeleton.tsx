import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProjectCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-2">
          <Skeleton width={`60%`} />
        </h3>
        <p className="text-slate-400 mb-4">
          <Skeleton count={2} />
        </p>
        <div className="flex flex-wrap gap-2">
          <Skeleton width={50} height={20} style={{ borderRadius: '9999px' }} />
          <Skeleton width={70} height={20} style={{ borderRadius: '9999px' }} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProjectCardSkeleton;