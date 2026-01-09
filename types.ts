export enum CrowdControl {
  STUN = '기절',
  SILENCE = '침묵',
  SLEEP = '수면',
  SLOW = '둔화',
  BIND = '속박',
  UNDRAWABLE = '끌어당기기',
  HEAVY = '과중력'
}

export type DetectionType = '시선 감지' | '소리 감지' | '근접 감지' | '마법 감지';

export interface Monster {
  id: string;
  name: string;
  type: 'patrol' | 'static'; // 순찰(로머) vs 일반
  isDangerous?: boolean; // 위험 몬스터 여부
  appearanceRange: string; // 예: "1~2층"
  detectionType: DetectionType;
  aoeShape: string; // 예: "플레이어 대상 원형"
  immuneCC: CrowdControl[]; // 무효가 되는 디버프 목록
  customImmuneNote?: string; // 예: "두쫀쿠 불가"
  features?: string[]; // 돌진, 강공격 등 추가 특징
  skills: string[];
  avoidance: string; // 기타 특징 및 파훼법
  threatLevel: 1 | 2 | 3 | 4 | 5;
}

export interface FloorRange {
  range: string; // "1-10" 등
  monsters: Monster[];
}

export interface DeepDungeon {
  id: string;
  name: string;
  floors: FloorRange[];
}