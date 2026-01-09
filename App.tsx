
import React, { useState, useMemo } from 'react';
import { DUNGEONS } from './constants';
import { DeepDungeon, Monster, FloorRange } from './types';
import MonsterCard from './components/MonsterCard';
import MonsterDetail from './components/MonsterDetail';

// 딥던전 커닝페이퍼 Vercel 배포 준비 버전
const App: React.FC = () => {
  const [selectedDungeonId, setSelectedDungeonId] = useState(DUNGEONS[3].id); // 기본값 노르브란트 순례길
  const [selectedRange, setSelectedRange] = useState('1-10');
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentDungeon = useMemo(() => 
    DUNGEONS.find(d => d.id === selectedDungeonId) || DUNGEONS[0],
  [selectedDungeonId]);

  const availableRanges = useMemo(() => 
    currentDungeon.floors.map(f => f.range),
  [currentDungeon]);

  const filteredMonsters = useMemo(() => {
    let sourceMonsters: Monster[] = [];

    if (searchQuery.trim()) {
      sourceMonsters = currentDungeon.floors.flatMap(f => f.monsters);
      
      const seenIds = new Set();
      sourceMonsters = sourceMonsters.filter(m => {
        if (seenIds.has(m.id)) return false;
        
        const matchesName = m.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSkills = m.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
        
        if (matchesName || matchesSkills) {
          seenIds.add(m.id);
          return true;
        }
        return false;
      });
    } else {
      const floor = currentDungeon.floors.find(f => f.range === selectedRange);
      sourceMonsters = floor ? [...floor.monsters] : [];
    }

    return sourceMonsters.sort((a, b) => {
      const getStartFloor = (range: string) => {
        const match = range.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
      };
      return getStartFloor(a.appearanceRange) - getStartFloor(b.appearanceRange);
    });
  }, [currentDungeon, selectedRange, searchQuery]);

  React.useEffect(() => {
    if (!availableRanges.includes(selectedRange)) {
      setSelectedRange(availableRanges[0]);
    }
  }, [availableRanges, selectedRange]);

  const getFloorCategory = (range: string) => {
    const floorNum = parseInt(range.split('-')[0]);
    if (floorNum <= 41) return { color: 'indigo' };
    if (floorNum <= 61) return { color: 'amber' };
    return { color: 'red' };
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 헤더 섹션: 높이 비율을 더 컴팩트하게 조절하여 이미지를 더 잘 보이게 함 */}
      <div className="relative w-full overflow-hidden bg-slate-900 h-[30vh] sm:h-[40vh] lg:h-[50vh] min-h-[360px] max-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700"
          style={{ 
            backgroundImage: `url('https://i.postimg.cc/VN3vBrvB/illeoseuteu3-waifu2x-art-noise3-scale.png')`,
            backgroundPosition: 'center 32%'
          }}
        ></div>
        
        {/* 오버레이: 상단은 투명하게, 하단 글씨 부분만 가독성을 위해 그라데이션 */}
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>

        {/* 헤더 내용: pb-9 md:pb-14 (이전 간격의 70%) */}
        <header className="absolute inset-0 flex flex-col justify-end px-6 pb-9 md:pb-14 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-3 md:gap-5 group">
              <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(79,70,229,0.4)] group-hover:rotate-3 transition-transform shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div className="overflow-hidden">
                {/* 텍스트 크기를 80%로 축소, 하단이 잘리지 않도록 leading-tight 및 pb-1 추가 */}
                <h1 className="text-[clamp(1.2rem,3.6vw,3.2rem)] font-black text-slate-900 tracking-tighter leading-tight drop-shadow-sm whitespace-nowrap pb-1">
                  딥던전 커닝페이퍼
                </h1>
              </div>
            </div>

            {/* 검색창 플레이스홀더: 어떤 놈인지 알아보기 */}
            <div className="flex items-center bg-white/95 backdrop-blur-3xl rounded-xl md:rounded-[1.5rem] px-4 py-2.5 md:px-6 md:py-4 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all shadow-xl w-full lg:w-[420px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                placeholder="어떤 놈인지 알아보기" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none focus:outline-none ml-2 md:ml-3 text-sm md:text-lg w-full text-slate-900 placeholder:text-slate-400 font-bold"
              />
            </div>
          </div>
        </header>
      </div>

      <main className="max-w-7xl mx-auto px-6 -mt-6 md:-mt-8 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 bg-white/80 backdrop-blur-md p-3 md:p-5 rounded-xl md:rounded-[2rem] border border-slate-100 shadow-[0_10px_6px_-5px_rgba(0,0,0,0.1),0_4px_2px_-3px_rgba(0,0,0,0.1)] gap-3 md:gap-5">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
            {DUNGEONS.map(d => (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedDungeonId(d.id);
                  setSearchQuery(''); 
                }}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-base font-black transition-all transform active:scale-95 ${
                  selectedDungeonId === d.id 
                  ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-50' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <aside className="lg:w-56 shrink-0">
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-1 gap-2 md:gap-3 sticky top-6">
              {availableRanges.map(range => {
                const cat = getFloorCategory(range);
                const isSelected = selectedRange === range && !searchQuery;
                const activeStyles = cat.color === 'red' ? 'border-red-500 text-red-600 bg-red-50' : 
                                    cat.color === 'amber' ? 'border-amber-500 text-amber-600 bg-amber-50' : 
                                    'border-indigo-500 text-indigo-600 bg-indigo-50';
                
                return (
                  <button
                    key={range}
                    onClick={() => {
                      setSelectedRange(range);
                      setSearchQuery(''); 
                    }}
                    className={`px-3 py-2.5 md:px-5 md:py-4 rounded-lg md:rounded-xl text-left transition-all border-2 font-black text-xs md:text-base ${
                      isSelected ? `${activeStyles} shadow-md scale-[1.02]` : 'bg-slate-50 border-slate-50 text-slate-400 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    {range}F
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="flex-1">
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter">
                {searchQuery ? '검색 결과' : `${selectedRange}층 가이드`}
              </h2>
            </div>

            {filteredMonsters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                {filteredMonsters.map(monster => (
                  <MonsterCard 
                    key={monster.id} 
                    monster={monster} 
                    onClick={() => setSelectedMonster(monster)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 md:py-32 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-slate-200">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-8 text-slate-200 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <h3 className="text-lg md:text-2xl font-black text-slate-800 tracking-tight">
                  정보가 없습니다
                </h3>
              </div>
            )}
          </section>
        </div>
      </main>

      {selectedMonster && (
        <MonsterDetail 
          monster={selectedMonster}
          dungeonName={currentDungeon.name}
          floorRange={selectedRange}
          onClose={() => setSelectedMonster(null)}
        />
      )}
    </div>
  );
};

export default App;
