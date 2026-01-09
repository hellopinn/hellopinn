
import React from 'react';
import { Monster, DetectionType } from '../types';

interface MonsterDetailProps {
  monster: Monster;
  dungeonName: string;
  floorRange: string;
  onClose: () => void;
}

const MonsterDetail: React.FC<MonsterDetailProps> = ({ monster, dungeonName, floorRange, onClose }) => {
  const isPatrol = monster.type === 'patrol';
  const isDangerous = monster.isDangerous;

  const getHeaderGradient = () => {
    if (isPatrol) return 'bg-amber-50';
    if (isDangerous) return 'bg-red-50';
    return 'bg-indigo-50';
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
      <span className="flex items-center gap-2">
        {type} <span className="text-3xl">{icon}</span>
      </span>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/60 backdrop-blur-xl animate-in fade-in duration-300 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-10 border-b border-slate-100 flex justify-between items-start ${getHeaderGradient()}`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">{dungeonName}</span>
              <span className="bg-slate-200 text-slate-600 text-[10px] font-black px-3 py-1 rounded-full">{floorRange}F</span>
              {isDangerous && <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full">⭐ 위험 주의</span>}
              {isPatrol && <span className="bg-amber-600 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">로머 주의 👻</span>}
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-slate-900 leading-none">{monster.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl transition-all shadow-sm text-slate-400 hover:text-slate-900 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Info Content Area */}
        <div className="p-10 overflow-y-auto space-y-10 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">감지 종류</p>
              <p className={`text-xl font-black ${isPatrol ? 'text-amber-600' : (isDangerous ? 'text-red-600' : 'text-indigo-600')}`}>{renderDetectionType(monster.detectionType)}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">등장 상세 층</p>
              <p className="text-xl font-black text-slate-900">{monster.appearanceRange}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">장판 모양</p>
              {/* break-keep을 사용하여 단어가 잘리지 않게 강제 줄바꿈 처리 */}
              <p className="text-xl font-black text-emerald-600 break-keep">{monster.aoeShape}</p>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                특징 및 면역 상태
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {monster.features?.map(feature => (
                  <div key={feature} className="px-4 py-2 bg-sky-50 border border-sky-100 text-sky-600 rounded-xl font-black text-xs shadow-sm">
                    {feature}
                  </div>
                ))}
                {monster.immuneCC.length > 0 ? (
                  monster.immuneCC.map(cc => (
                    <div key={cc} className="px-4 py-2 bg-red-50 border border-red-100 text-red-600 rounded-xl font-black text-xs shadow-sm">
                      {cc} 무효
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl font-black text-xs shadow-sm">
                    모든 상태이상 유효
                  </div>
                )}
                {monster.customImmuneNote && (
                   <div className="px-4 py-2 bg-purple-50 border border-purple-100 text-purple-600 rounded-xl font-black text-xs shadow-sm">
                     ⚠️ {monster.customImmuneNote}
                   </div>
                )}
              </div>
            </section>

            <section>
              <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-3 ${isPatrol ? 'text-amber-600' : (isDangerous ? 'text-red-600' : 'text-indigo-600')}`}>
                <span className={`w-2 h-2 rounded-full ${isPatrol ? 'bg-amber-600' : (isDangerous ? 'bg-red-600' : 'bg-indigo-600')}`}></span>
                파훼법 가이드
              </h3>
              <div className="bg-slate-50 p-8 rounded-[2rem] text-slate-800 leading-relaxed border border-slate-100 shadow-inner">
                <p className="whitespace-pre-line font-bold text-lg leading-relaxed">{monster.avoidance}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsterDetail;
