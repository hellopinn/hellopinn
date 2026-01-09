import React from 'react';
import { Monster, DetectionType } from '../types';

interface MonsterCardProps {
  monster: Monster;
  onClick: () => void;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster, onClick }) => {
  const isPatrol = monster.type === 'patrol';
  const isDangerous = monster.isDangerous;

  const getThemeStyles = () => {
    // 로머가 가장 중요하므로 로머 빛 효과를 우선 적용
    if (isPatrol) {
      return 'bg-white border-amber-300 animate-roamer-glow';
    }
    if (isDangerous) {
      return 'bg-white border-slate-200 hover:border-red-400 shadow-md';
    }
    return 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm';
  };

  const getBadgeColor = (type: 'danger' | 'patrol') => {
    if (type === 'danger') {
      return 'bg-red-600 text-white shadow-md shadow-red-200';
    }
    return 'bg-amber-600 text-white shadow-md shadow-amber-200';
  };

  const getFloorTagColor = () => {
    if (isPatrol) return 'text-amber-600';
    if (isDangerous) return 'text-red-600';
    return 'text-indigo-600';
  };

  const renderDetectionType = (type: DetectionType) => {
    const icon = (() => {
      switch (type) {
        case '시선 감지': return '👁️';
        case '소리 감지': return '🔊';
        case '근접 감지': return '🚶‍♂️';
        case '마법 감지': return '✨';
        default: return '';
      }
    })();
    return (
      <span className="flex items-center gap-1.5 font-bold">
        {type} <span className="text-lg leading-none">{icon}</span>
      </span>
    );
  };

  return (
    <div 
      onClick={onClick}
      className={`p-6 rounded-3xl border-2 cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between h-full relative overflow-hidden ${getThemeStyles()}`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <span className={`text-[10px] font-black mb-1 ${getFloorTagColor()}`}>{monster.appearanceRange}</span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none">{monster.name}</h3>
          </div>
          <div className="flex flex-col items-end gap-1.5">
             {isDangerous && (
               <span className={`text-[10px] px-2.5 py-1 rounded-full font-black transition-colors ${getBadgeColor('danger')}`}>
                 ⭐ 위험
               </span>
             )}
             {isPatrol && (
               <span className={`text-[10px] px-2.5 py-1 rounded-full font-black transition-colors ${getBadgeColor('patrol')}`}>
                 로머 👻
               </span>
             )}
             {!isDangerous && !isPatrol && (
               <span className="text-[10px] px-2.5 py-1 rounded-full font-black bg-slate-100 text-slate-500 border border-slate-200">
                 일반 👽
               </span>
             )}
          </div>
        </div>
        
        {/* 간격을 space-y-4에서 space-y-2로 줄이고 mt-6에서 mt-4로 조정 */}
        <div className="space-y-2 mt-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-8 shrink-0">감지</span>
            <span className="text-xs text-slate-700 font-bold">{renderDetectionType(monster.detectionType)}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-8 shrink-0">장판</span>
            <span className="text-xs text-slate-700 truncate font-bold">{monster.aoeShape}</span>
          </div>
        </div>
      </div>

      {/* 구분선 border-t 제거 및 여백 mt-8 pt-4에서 mt-4로 축소 */}
      <div className="mt-4 flex flex-wrap gap-2 relative z-10">
        {monster.features?.map(feature => (
          <span key={feature} className="text-[9px] px-2 py-1 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 font-black uppercase shadow-sm">
            {feature}
          </span>
        ))}
        
        {monster.immuneCC.length > 0 ? (
          monster.immuneCC.map(cc => (
            <span key={cc} className="text-[9px] px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 font-black shadow-sm">
              {cc} 무효
            </span>
          ))
        ) : (
          <span className="text-[9px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 font-black shadow-sm">
            CC 유효
          </span>
        )}
        {monster.customImmuneNote && (
          <span className="text-[9px] px-2 py-1 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 font-black shadow-sm">
            {monster.customImmuneNote}
          </span>
        )}
      </div>
    </div>
  );
};

export default MonsterCard;