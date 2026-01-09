
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
      {/* 반응형 헤더 섹션: 높이를 고정 수치 대신 clamp와 vh를 조합하여 유연하게 조정 */}
      <div className="relative h-[clamp(400px,55vh,650px)] w-full overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700"
          style={{ 
            backgroundImage: `url('https://i.postimg.cc/VN3vBrvB/illeoseuteu3-waifu2x-art-noise3-scale.png')`,
            backgroundPosition: 'center 15%'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>

        <header className="absolute inset-0 flex flex-col justify-end px-6 pb-12 md:pb-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10">
            <div className="flex items-center gap-4 md:gap-6 group">
              {/* 아이콘 크기도 화면비에 따라 조절 */}
              <div className="w-12 h-12 md:w-16 lg:w-20 lg:h-20 bg-indigo-600 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-[0_25px_60px_rgba(79,70,229,0.5)] group-hover:rotate-3 transition-transform shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div>
                {/* 텍스트 크기에 clamp를 적용하여 해상도에 따라 부드럽게 가변 */}
                <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] font-black text-slate-900 tracking-tighter leading-none drop-shadow-2xl">
                  딥던전 커닝페이퍼
                </h1>
                <div className="mt-2 md:mt-3 h-1.5 md:h-2 w-1/2 md:w-48 bg-indigo-600 rounded-full shadow-lg"></div>
              </div>
            </div>

            <div className="flex items-center bg-white/95 backdrop-blur-3xl rounded-2xl md:rounded-[2rem] px-5 py-3 md:px-8 md:py-5 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-8 focus-within:ring-indigo-500/10 transition-all shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] w-full lg:w-[480px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                placeholder="어떤 몬스터가 궁금하신가요?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none focus:outline-none ml-3 md:ml-4 text-base md:text-xl w-full text-slate-900 placeholder:text-slate-400 font-bold"
              />
            </div>
          </div>
        </header>
      </div>

      <main className="max-w-7xl mx-auto px-6 -mt-8 md:-mt-10 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-16 bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-xl gap-4 md:gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
            {DUNGEONS.map(d => (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedDungeonId(d.id);
                  setSearchQuery(''); 
                }}
                className={`px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-lg font-black transition-all transform active:scale-95 ${
                  selectedDungeonId === d.id 
                  ? 'bg-indigo-600 text-white shadow-[0_15px_30px_rgba(79,70,229,0.3)] ring-4 ring-indigo-50' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <aside className="lg:w-60 shrink-0">
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-1 gap-3 md:gap-4 sticky top-10">
              {availableRanges.map(range => {
                const cat = getFloorCategory(range);
                const isSelected = selectedRange === range && !searchQuery;
                const activeStyles = cat.color === 'red' ? 'border-red-500 text-red-600 bg-red-50 shadow-red-50' : 
                                    cat.color === 'amber' ? 'border-amber-500 text-amber-600 bg-amber-50 shadow-amber-50' : 
                                    'border-indigo-500 text-indigo-600 bg-indigo-50 shadow-indigo-50';
                
                return (
                  <button
                    key={range}
                    onClick={() => {
                      setSelectedRange(range);
                      setSearchQuery(''); 
                    }}
                    className={`px-4 py-3 md:px-6 md:py-5 rounded-xl md:rounded-2xl text-left transition-all border-2 group relative overflow-hidden font-black text-sm md:text-lg ${
                      isSelected ? `${activeStyles} shadow-lg scale-[1.02]` : 'bg-slate-50 border-slate-50 text-slate-400 hover:border-slate-300 hover:text-slate-600 hover:bg-white'
                    }`}
                  >
                    <span className="relative z-10">{range}F</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="flex-1">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter flex items-center gap-4">
                {searchQuery ? '검색 결과' : `${selectedRange}층 가이드`}
              </h2>
              {searchQuery && (
                <p className="text-sm md:text-slate-400 mt-2 font-bold">'{searchQuery}'에 대한 검색 결과입니다.</p>
              )}
            </div>

            {filteredMonsters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {filteredMonsters.map(monster => (
                  <MonsterCard 
                    key={monster.id} 
                    monster={monster} 
                    onClick={() => setSelectedMonster(monster)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 md:py-40 bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] border-2 border-dashed border-slate-200">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 text-slate-200 shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <h3 className="text-xl md:text-3xl font-black text-slate-800 tracking-tight">
                  {searchQuery ? '검색 결과가 없습니다' : '정보를 수집 중입니다'}
                </h3>
                <p className="text-sm md:text-lg text-slate-400 mt-2 md:mt-4 font-bold text-center px-6">
                  {searchQuery ? '다른 검색어를 입력해 보세요.' : '선택하신 층의 상세 데이터가 아직 준비되지 않았습니다.'}
                </p>
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
