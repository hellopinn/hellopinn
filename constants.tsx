
import { DeepDungeon, CrowdControl } from './types';

const emptyFloors = () => [
  { range: '1-10', monsters: [] },
  { range: '11-20', monsters: [] },
  { range: '21-30', monsters: [] },
  { range: '31-40', monsters: [] },
  { range: '41-50', monsters: [] },
  { range: '51-60', monsters: [] },
  { range: '61-70', monsters: [] },
  { range: '71-80', monsters: [] },
  { range: '81-90', monsters: [] },
  { range: '91-99', monsters: [] },
];

export const DUNGEONS: DeepDungeon[] = [
  { id: 'potd', name: '망자의 궁전', floors: emptyFloors() },
  { 
    id: 'hoh', 
    name: '천궁탑', 
    floors: [
      { range: '1-10', monsters: [] },
      { range: '11-20', monsters: [] },
      {
        range: '21-30',
        monsters: [
          { id: 'hoh-21-1', name: '천궁 가다라', type: 'patrol', appearanceRange: '21~24층', detectionType: '시선 감지', aoeShape: '매우 큰 원형 장판', immuneCC: [CrowdControl.BIND], skills: ['원형 장판'], avoidance: '주변에 매우 넓은 원형 장판을 시전하므로 멀리 떨어져야 합니다. / 로머', threatLevel: 4 },
          { id: 'hoh-21-2', name: '천궁 오니스', type: 'static', appearanceRange: '21~23층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [], skills: ['부채꼴'], avoidance: '정면 부채꼴 장판을 피하면 됩니다.', threatLevel: 2 },
          { id: 'hoh-21-3', name: '천궁 미노타우로스', type: 'patrol', appearanceRange: '25~28층', detectionType: '시선 감지', aoeShape: '매우 큰 부채꼴 장판 (노란 장판 없음)', immuneCC: [CrowdControl.BIND, CrowdControl.STUN], skills: ['111톤 휘두르기'], avoidance: '캐스팅 바만 올라오고 장판 범위가 보이지 않는 360도 원형 공격 또는 부채꼴 공격을 합니다. 모션(무기를 들거나 휘두름)을 보고 멀리 피하거나 뒤로 가야 합니다. / 로머', threatLevel: 5 },
          { id: 'hoh-21-4', name: '천궁 잇탄바시', type: 'static', appearanceRange: '24~26층', detectionType: '소리 감지', aoeShape: '플레이어 대상 넉백', immuneCC: [], skills: ['넉백'], avoidance: '플레이어를 구석으로 밀어냅니다. 낙사에 주의하세요.', threatLevel: 3 }
        ]
      },
      { range: '31-40', monsters: [] },
      { range: '41-50', monsters: [] },
      { range: '51-60', monsters: [] },
      { range: '61-70', monsters: [] },
      { range: '71-80', monsters: [] },
      { range: '81-90', monsters: [] },
      { range: '91-99', monsters: [] },
    ] 
  },
  { id: 'eo', name: '에우레카 오르토스', floors: emptyFloors() },
  {
    id: 'norvrandt',
    name: '노르브란트 순례길',
    floors: [
      {
        range: '1-10',
        monsters: [
          { id: 'nv-1-1', name: '순례길 보라 모르포', type: 'static', appearanceRange: '1~2층', detectionType: '시선 감지', aoeShape: '플레이어 대상 원형장판', immuneCC: [CrowdControl.BIND], skills: ['원형장판'], avoidance: '플레이어 대상 원형장판', threatLevel: 2 },
          { id: 'nv-1-2', name: '순례길 에케보어', type: 'static', appearanceRange: '1~3층', detectionType: '시선 감지', aoeShape: '직선 장판', immuneCC: [], skills: ['직선 장판'], avoidance: '직선 장판', threatLevel: 1 },
          { id: 'nv-1-3', name: '순례길 왕잠자리', type: 'static', appearanceRange: '3~5층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [CrowdControl.BIND], skills: ['독침'], avoidance: '몹 정면 부채꼴 장판. 피격 대상에게 해제 가능한 독 디버프', threatLevel: 2 },
          { id: 'nv-1-4', name: '순례길 오색청해', type: 'patrol', appearanceRange: '4~6층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [CrowdControl.BIND], skills: ['둔화의 숨결'], avoidance: '몹 정면 부채꼴 장판, 피격 대상에게 해제 불가능한 둔화 디버프 / 로머', threatLevel: 3 },
          { id: 'nv-1-5', name: '순례길 클레마티스', type: 'static', appearanceRange: '6~9층', detectionType: '소리 감지', aoeShape: '직선 장판', immuneCC: [CrowdControl.BIND], skills: ['돌진'], avoidance: '직선 장판 / 돌진하며 장판 생성, 피격 시 넉백.', threatLevel: 2 },
          { id: 'nv-1-6', name: '순례길 바구니', type: 'static', appearanceRange: '8~9층', detectionType: '소리 감지', aoeShape: '몹 주변 원형 장판', immuneCC: [], skills: ['폭발'], avoidance: '몹 주변 원형 장판', threatLevel: 2 },
          { id: 'nv-1-7', name: '순례길 장미곰', type: 'patrol', appearanceRange: '7~9층', detectionType: '소리 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [], skills: ['강공격'], avoidance: '강공격 후 몹 정면 부채꼴 장판 / 로머', threatLevel: 4 },
          { id: 'nv-1-8', name: '순례길 소관목', type: 'patrol', appearanceRange: '1~3층', detectionType: '시선 감지', aoeShape: '직선 장판', immuneCC: [], skills: ['직선 장판'], avoidance: '직선 장판 / 로머', threatLevel: 2 },
          { id: 'nv-1-9', name: '순례길 푸카', type: 'static', appearanceRange: '1~4층', detectionType: '시선 감지', aoeShape: '플레이어 대상 원형장판', immuneCC: [], skills: ['원형장판'], avoidance: '플레이어 대상 원형장판.', threatLevel: 1 },
          { id: 'nv-1-10', name: '순례길 이끼버섯', type: 'static', appearanceRange: '4~5층', detectionType: '소리 감지', aoeShape: '강한 공격', immuneCC: [], skills: ['강타'], avoidance: '강한 공격', threatLevel: 2 },
          { id: 'nv-1-11', name: '순례길 마가목', type: 'static', appearanceRange: '5~7층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-1-12', name: '순례길 살인벌', type: 'static', appearanceRange: '6~7층', detectionType: '시선 감지', aoeShape: '직선 장판', immuneCC: [CrowdControl.BIND], skills: ['직선 장판'], avoidance: '직선 장판', threatLevel: 2 },
          { id: 'nv-1-13', name: '순례길 에다인나방', type: 'static', appearanceRange: '8~9층', detectionType: '시선 감지', aoeShape: '정면 부채꼴 장판', immuneCC: [CrowdControl.BIND], skills: ['수면 가루'], avoidance: '정면 부채꼴 장판 / 피격 시 수면 디버프', threatLevel: 3 }
        ]
      },
      {
        range: '11-20',
        monsters: [
          { id: 'nv-2-1', name: '면죄된 신봉', type: 'static', appearanceRange: '11~13층', detectionType: '시선 감지', aoeShape: '강공격', immuneCC: [], skills: ['강공격'], avoidance: '강공격', threatLevel: 2 },
          { id: 'nv-2-2', name: '순례길 나무요정', type: 'static', appearanceRange: '11~12층', detectionType: '소리 감지', aoeShape: '직선 장판', immuneCC: [], skills: ['직선 장판'], avoidance: '직선 장판', threatLevel: 1 },
          { id: 'nv-2-3', name: '순례길 어린 에이비스', type: 'patrol', appearanceRange: '11~13층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [CrowdControl.BIND], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판 / 로머', threatLevel: 3 },
          { id: 'nv-2-4', name: '면죄된 무지', type: 'static', appearanceRange: '11~14층', detectionType: '시선 감지', aoeShape: '직선 장판', immuneCC: [CrowdControl.BIND], skills: ['직선 장판'], avoidance: '직선 장판', threatLevel: 2 },
          { id: 'nv-2-5', name: '순례길 콩나무', type: 'static', appearanceRange: '13~15층', detectionType: '시선 감지', aoeShape: '원형 장판', immuneCC: [], skills: ['원형 장판'], avoidance: '원형 장판', threatLevel: 1 },
          { id: 'nv-2-6', name: '면죄된 우둔함', type: 'static', appearanceRange: '14~15층', detectionType: '시선 감지', aoeShape: '강공격', immuneCC: [], skills: ['강공격'], avoidance: '강공격', threatLevel: 2 },
          { id: 'nv-2-7', name: '면죄된 기만', type: 'patrol', appearanceRange: '14~16층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [CrowdControl.BIND], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판 / 로머', threatLevel: 3 },
          { id: 'nv-2-8', name: '순례길 정원수', type: 'static', appearanceRange: '15~17층', detectionType: '시선 감지', aoeShape: '강공격', immuneCC: [], skills: ['강공격'], avoidance: '강공격', threatLevel: 2 },
          { id: 'nv-2-9', name: '면죄된 안일', type: 'static', appearanceRange: '16~19층', detectionType: '시선 감지', aoeShape: '강공격 후 플레이어 대상 원형장판', immuneCC: [], skills: ['원형장판'], avoidance: '강공격 후 플레이어 대상 원형장판', threatLevel: 3 },
          { id: 'nv-2-10', name: '면죄된 반항', type: 'static', appearanceRange: '16~17층', detectionType: '시선 감지', aoeShape: '직선장판', immuneCC: [], skills: ['돌진'], avoidance: '직선장판 / 돌진', threatLevel: 2 },
          { id: 'nv-2-11', name: '면죄된 폭력', type: 'static', appearanceRange: '18~19층', detectionType: '시선 감지', aoeShape: '강공격/플레이어 대상 원형 장판', immuneCC: [], skills: ['원형 장판'], avoidance: '강공격 / 플레이어 대상 원형 장판', threatLevel: 3 },
          { id: 'nv-2-12', name: '면죄된 자만', type: 'static', appearanceRange: '18~19층', detectionType: '시선 감지', aoeShape: '몹정면 부채꼴장판', immuneCC: [], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴장판', threatLevel: 2 },
          { id: 'nv-2-13', name: '면죄된 경멸', type: 'patrol', appearanceRange: '17~19층', detectionType: '시선 감지', aoeShape: '몹정면부채꼴', immuneCC: [CrowdControl.BIND], skills: ['부채꼴'], avoidance: '몹정면부채꼴 / 로머', threatLevel: 4 }
        ]
      },
      {
        range: '21-30',
        monsters: [
          { id: 'nv-3-1', name: '순례길 트라고판', type: 'static', appearanceRange: '21~22층', detectionType: '시선 감지', aoeShape: '몹정면 부채꼴', immuneCC: [CrowdControl.BIND], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴', threatLevel: 2 },
          { id: 'nv-3-2', name: '순례길 모르고우르', type: 'static', appearanceRange: '21~23층', detectionType: '시선 감지', aoeShape: '플레이어 대상 원형', immuneCC: [CrowdControl.BIND], skills: ['원형'], avoidance: '플레이어 대상 원형', threatLevel: 2 },
          { id: 'nv-3-3', name: '면죄된 모욕', type: 'static', appearanceRange: '21~24층', detectionType: '시선 감지', aoeShape: '몹기준원형장판', immuneCC: [], skills: ['기절'], avoidance: '몹기준원형장판 / 피격 시 해제 불가능한 5초 기절', threatLevel: 4 },
          { id: 'nv-3-4', name: '면죄된 비리', type: 'patrol', appearanceRange: '21~24층', detectionType: '근접 감지', aoeShape: '직선장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLOW], skills: ['직선장판'], avoidance: '직선장판 / 로머', threatLevel: 3 },
          { id: 'nv-3-5', name: '면죄된 망설임', type: 'static', appearanceRange: '23~25층', detectionType: '시선 감지', aoeShape: '몹정면 부채꼴', immuneCC: [], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴', threatLevel: 2 },
          { id: 'nv-3-6', name: '순례길 클리오니드', type: 'static', appearanceRange: '24~25층', detectionType: '시선 감지', aoeShape: '플레이어대상원형', immuneCC: [CrowdControl.BIND], skills: ['포식'], avoidance: '플레이어 대상 원형 / 포식 행동 - hp 25% 미만이 되면 즉사 공격', threatLevel: 5 },
          { id: 'nv-3-7', name: '면죄된 질투', type: 'patrol', appearanceRange: '24~26층', detectionType: '시선 감지', aoeShape: '플레이어대상 원형', immuneCC: [CrowdControl.BIND], skills: ['원형'], avoidance: '플레이어 대상 원형 / 로머', threatLevel: 3 },
          { id: 'nv-3-8', name: '면죄된 정욕', type: 'static', appearanceRange: '25~27층', detectionType: '시선 감지', aoeShape: '플레이어 대상 원형 장판', immuneCC: [CrowdControl.BIND], skills: ['원형'], avoidance: '플레이어 대상 원형 장판 / 특징 - 비전투 때 플레이어를 향해 원형 장판', threatLevel: 4 },
          { id: 'nv-3-9', name: '면죄된 야망', type: 'static', appearanceRange: '26~27층', detectionType: '시선 감지', aoeShape: '몹정면부채꼴장판', immuneCC: [], skills: ['발톱 난도질'], avoidance: '발톱 난도질: 몹 정면 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-3-10', name: '면죄된 잔혹', type: 'static', appearanceRange: '26~29층', detectionType: '시선 감지', aoeShape: '강공격, 매우 긴 직선 장판', immuneCC: [], skills: ['강공격'], avoidance: '강공격, 매우 긴 직선 장판', threatLevel: 3 },
          { id: 'nv-3-11', name: '순례길 조각상', type: 'static', appearanceRange: '28~29층', detectionType: '시선 감지', aoeShape: '원형 장판 후 긴 직선장판', immuneCC: [], skills: ['점프'], avoidance: '플레이어 위치로 뛰어드는 원형 장판, 그 후 긴 직선 장판', threatLevel: 4 },
          { id: 'nv-3-12', name: '면죄된 편협', type: 'static', appearanceRange: '28~29층', detectionType: '시선 감지', aoeShape: '매우 긴 직선장판, 몹 주변 큰 원형장판', immuneCC: [], skills: ['징벌'], avoidance: '매우 긴 직선 장판, 징벌-몹 주변 큰 원형 장판', threatLevel: 4 },
          { id: 'nv-3-13', name: '면죄된 불화', type: 'patrol', appearanceRange: '27~29층', detectionType: '시선 감지', aoeShape: '강공격 후 몹 정면 부채꼴 장판', immuneCC: [CrowdControl.BIND], skills: ['부채꼴'], avoidance: '강공격 후 몹 정면 부채꼴 장판 / 로머', threatLevel: 4 }
        ]
      },
      {
        range: '31-40',
        monsters: [
          { id: 'nv-4-1', name: '면죄된 조롱', type: 'static', appearanceRange: '31~32층', detectionType: '시선 감지', aoeShape: '플레이어 대상 원형 장판', immuneCC: [CrowdControl.SLOW, CrowdControl.BIND], skills: ['원형'], avoidance: '플레이어 대상 원형 장판 / 비전투 때 플레이어를 향한 원형 장판', threatLevel: 3 },
          { id: 'nv-4-2', name: '순례길 새', type: 'patrol', appearanceRange: '31~34층', detectionType: '시선 감지', aoeShape: '몹 정면 큰 부채꼴장판, 몹 기준 큰 원형장판', immuneCC: [CrowdControl.BIND], skills: ['부채꼴', '원형'], avoidance: '몹 정면 큰 부채꼴 장판, 몹 기준 큰 원형 장판 / 로머', threatLevel: 4 },
          { id: 'nv-4-3', name: '순례길 페가수스', type: 'static', appearanceRange: '31~33층', detectionType: '시선 감지', aoeShape: '돌진, 몹 주변 큰 원형장판', immuneCC: [], skills: ['천마의 울부짖음'], avoidance: '랜덤 대상자를 향해 돌진(벽 뒤에 숨으면 캔슬 가능), 천마의 울부짖음 : 몹 주변 큰 원형 장판', threatLevel: 4 },
          { id: 'nv-4-4', name: '면죄된 강탈', type: 'static', appearanceRange: '31~34층', detectionType: '시선 감지', aoeShape: '강공격', immuneCC: [], skills: ['강공격'], avoidance: '강공격', threatLevel: 2 },
          { id: 'nv-4-5', name: '순례길 야쿨루스', type: 'static', appearanceRange: '32~35층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판, 매우 긴 직선 장판', immuneCC: [], skills: ['부채꼴', '직선'], avoidance: '몹 정면 부채꼴 장판, 매우 긴 직선 장판', threatLevel: 3 },
          { id: 'nv-4-6', name: '면죄된 배덕', type: 'static', appearanceRange: '33~36층', detectionType: '시선 감지', aoeShape: '폭렬 캐스팅(전멸기)', immuneCC: [], skills: ['마나 강화', '폭렬'], avoidance: '마나 강화- 본인에게 20초간 데미지 증가 버프 부여, hp가 30% 미만이 될 경우 폭렬 캐스팅(전멸기)', threatLevel: 5 },
          { id: 'nv-4-7', name: '면죄된 위선', type: 'patrol', appearanceRange: '34~36층', detectionType: '시선 감지', aoeShape: '몹 정면 매우 큰 부채꼴 장판, 몹 기준 원형장판', immuneCC: [CrowdControl.BIND], skills: ['부채꼴', '원형'], avoidance: '몹 정면 매우 큰 부채꼴 장판, 몹 기준 원형 장판 / 로머', threatLevel: 4 },
          { id: 'nv-4-8', name: '손례길 돌사자', type: 'static', appearanceRange: '35~38층', detectionType: '시선 감지', aoeShape: '몹정면 굉장히 큰 부채꼴장판', immuneCC: [], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판, 몹 정면 굉장히 큰 부채꼴 장판', threatLevel: 3 },
          { id: 'nv-4-9', name: '순례길 심문관', type: 'static', appearanceRange: '36~38층', detectionType: '시선 감지', aoeShape: '몹정면부채꼴장판, 얇은직선장판', immuneCC: [], skills: ['장송격'], avoidance: '몹 정면 부채꼴 장판 / 장송격: 얇은 직선 장판 (hp가 일정 이하면 해당 기믹만 사용)', threatLevel: 2 },
          { id: 'nv-4-10', name: '순례길 석병', type: 'static', appearanceRange: '36~39층', detectionType: '시선 감지', aoeShape: '원형 장판, 2배 더 넓은 매우 큰 원형 장판, 직선 장판', immuneCC: [CrowdControl.SLEEP], skills: ['강력 충격권', '주먹질 파도'], avoidance: '강력 충격권 - 약간의 데미지 + 넉백(거리 유지, 견고마 O) 거리가 멀어지면 캔슬, 주먹질 파도 - 플레이어 위치에 내려 찍으면서 원형 장판, 직후 캐스팅 없이 바로 2배 더 넓은 매우 큰 원형 장판, 직선 장판', threatLevel: 4 },
          { id: 'nv-4-11', name: '면죄된 심술', type: 'static', appearanceRange: '37~39층', detectionType: '시선 감지', aoeShape: '오른쪽 혹은 왼쪽 매우 큰 반원 장판', immuneCC: [CrowdControl.BIND], skills: ['촉수'], avoidance: '촉수: 오른쪽 혹은 왼쪽 매우 큰 반원 장판(벽 뒤 회피 가능). 이후 이어서 반대편 반원 장판도 캐스팅 시전', threatLevel: 4 },
          { id: 'nv-4-12', name: '면죄된 편견', type: 'static', appearanceRange: '37~39층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴장판/360도 마안', immuneCC: [], skills: ['마안'], avoidance: '몹 정면 부채꼴 장판 / 360도 마안', threatLevel: 3 },
          { id: 'nv-4-13', name: '면죄된 역병', type: 'patrol', appearanceRange: '36~39층', detectionType: '시선 감지', aoeShape: '연속 독성 꽃가루, 부채꼴 장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLEEP], skills: ['꽃가루'], avoidance: '연속 독성 꽃가루, 몹 정면 부채꼴 장판 후 몹 뒷면 부채꼴 장판 / 로머', threatLevel: 4 }
        ]
      },
      {
        range: '41-50',
        monsters: [
          { id: 'nv-5-1', name: '순례길 도마뱀', type: 'static', appearanceRange: '41~42층', detectionType: '시선 감지', aoeShape: '원형장판', immuneCC: [], skills: ['원형'], avoidance: '랜덤 대상자를 향한 원형 장판', threatLevel: 1 },
          { id: 'nv-5-2', name: '순례길 사마귀', type: 'static', appearanceRange: '41~43층', detectionType: '시선 감지', aoeShape: '몹주변원형장판', immuneCC: [], skills: ['원형'], avoidance: '몹 주변 원형 장판', threatLevel: 1 },
          { id: 'nv-5-3', name: '순례길 아나콘다', type: 'static', appearanceRange: '41~44층', detectionType: '시선 감지', aoeShape: '원형장판', immuneCC: [], skills: ['독송곳니'], avoidance: '독송곳니 : 1어글자에게 해제가능한 독 디버프, 랜덤 대상자를 향한 원형 장판', threatLevel: 2 },
          { id: 'nv-5-4', name: '순례길 흰개미', type: 'patrol', appearanceRange: '41~44층', detectionType: '시선 감지', aoeShape: '몹정면부채꼴장판', immuneCC: [], skills: ['헤이스트'], avoidance: '몹 정면 부채꼴 장판, 전투 시작 후 30초가 지나면 헤이스트 부여 / 로머', threatLevel: 3 },
          { id: 'nv-5-5', name: '순례길 무기마', type: 'static', appearanceRange: '42~45층', detectionType: '시선 감지', aoeShape: '직선장판, 몹기준원형장판', immuneCC: [], skills: ['일격', '선풍'], avoidance: '일격: 직선 장판, 선풍: 몹 기준 원형 장판 / 피격될 경우 5초 기절', threatLevel: 4 },
          { id: 'nv-5-6', name: '순례길 톨바', type: 'static', appearanceRange: '43~46층', detectionType: '시선 감지', aoeShape: '몹 주변 작은 원형장판', immuneCC: [], skills: ['자동공격'], avoidance: '이동 속도가 굉장히 느림, 가까이 가면 자동 공격 및 피증 / 몹 주변 작은 원형 장판', threatLevel: 2 },
          { id: 'nv-5-7', name: '순례길 절벽날개', type: 'patrol', appearanceRange: '44~46층', detectionType: '시선 감지', aoeShape: '직선장판, 강공격', immuneCC: [CrowdControl.BIND], skills: ['직선'], avoidance: '직선 장판, 강공격 / 로머', threatLevel: 3 },
          { id: 'nv-5-8', name: '순례길 집게부리', type: 'static', appearanceRange: '45~47층', detectionType: '시선 감지', aoeShape: '원형장판, 몹 주변 매우 큰 원형장판', immuneCC: [], skills: ['원형'], avoidance: '머리 떨어져 있을 경우 플레이어를 향한 원형 장판, 가까이 붙어 있을 경우 몹 주변 매우 큰 원형 장판', threatLevel: 3 },
          { id: 'nv-5-9', name: '순례길 싹넝쿨', type: 'static', appearanceRange: '46~49층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-5-10', name: '순례길 돌인형', type: 'static', appearanceRange: '46~49층', detectionType: '시선 감지', aoeShape: '매우큰원형장판, 강공격', immuneCC: [], skills: ['흡입진동', '대지균열'], avoidance: '흡입 진동: 몹 주변 끌어당기기(거리 유지, 견고마 가능), 대지 균열 : 몹 기준 매우 큰 원형 장판, 강공격', threatLevel: 4 },
          { id: 'nv-5-11', name: '순례길 아가베', type: 'static', appearanceRange: '47~49층', detectionType: '시선 감지', aoeShape: '플레이어를향한원형장판', immuneCC: [], skills: ['원형'], avoidance: '플레이어를 향한 원형 장판', threatLevel: 1 },
          { id: 'nv-5-12', name: '순례길 개미귀신', type: 'static', appearanceRange: '47~49층', detectionType: '시선 감지', aoeShape: '돌진형 직선 장판 2회', immuneCC: [CrowdControl.STUN, CrowdControl.BIND, CrowdControl.SLEEP], skills: ['하나 둘 행진'], avoidance: '하나 둘 행진 : 돌진형 직선 장판 2회, 피격 시 데미지와 넉백.', threatLevel: 4 },
          { id: 'nv-5-13', name: '순례길 트리피드', type: 'patrol', appearanceRange: '46~49층', detectionType: '시선 감지', aoeShape: '부채꼴 장판 2회', immuneCC: [CrowdControl.STUN, CrowdControl.SLEEP], skills: ['이중 가지뻗기'], avoidance: '이중 가지뻗기: 몹 정면 부채꼴 장판 후 뒤돌아서 반대편 부채꼴 장판. 정면 부채꼴 장판 나온 후 앞에 있으면 자동 공격으로 때림. / 로머', threatLevel: 4 }
        ]
      },
      {
        range: '51-60',
        monsters: [
          { id: 'nv-6-1', name: '순례길 딱정벌레', type: 'static', appearanceRange: '51~52층', detectionType: '시선 감지', aoeShape: '강공격', immuneCC: [CrowdControl.BIND], skills: ['코뿔소 방어'], avoidance: '강공격 / 코뿔소 방어: 회피율 상승', threatLevel: 2 },
          { id: 'nv-6-2', name: '순례길 포루스라코스', type: 'patrol', appearanceRange: '51~53층', detectionType: '시선 감지', aoeShape: '거대 부채꼴, 거대 원형, 도넛장판 중 랜덤', immuneCC: [], skills: ['랜덤 장판'], avoidance: '매우 큰 몹 정면 부채꼴 장판, 매우 큰 원형 장판, 몹 기준 도넛 장판 중 랜덤 사용 / 로머', threatLevel: 4 },
          { id: 'nv-6-3', name: '순례길 히솝', type: 'static', appearanceRange: '51~52층', detectionType: '소리 감지', aoeShape: '몹 정면 부채꼴장판', immuneCC: [CrowdControl.BIND], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-6-4', name: '순례길 갈색발톱', type: 'static', appearanceRange: '51~53층', detectionType: '시선 감지', aoeShape: '강공격, 원형장판', immuneCC: [], skills: ['꼬리후려치기'], avoidance: '강공격, 꼬리후려치기 : 랜덤 대상자를 향한 원형 장판', threatLevel: 2 },
          { id: 'nv-6-5', name: '순례길 파차마마', type: 'static', appearanceRange: '52~56층', detectionType: '시선 감지', aoeShape: '몹정면부채꼴장판', immuneCC: [], skills: ['강공격'], avoidance: '강공격, 몹 정면 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-6-6', name: '순례길 감시도마뱀', type: 'static', appearanceRange: '53~55층', detectionType: '시선 감지', aoeShape: '몹정면부채꼴장판', immuneCC: [], skills: ['반사'], avoidance: '몹 정면 부채꼴 장판 / 비전투 중 주기적으로 본인에게 반사 데미지 버프 부여', threatLevel: 3 },
          { id: 'nv-6-7', name: '순례길 악마 에이비스', type: 'patrol', appearanceRange: '54~56층', detectionType: '시선 감지', aoeShape: '원형장판', immuneCC: [CrowdControl.BIND], skills: ['원형'], avoidance: '원형 장판 / 로머', threatLevel: 4 },
          { id: 'nv-6-8', name: '순례길 카라칼', type: 'static', appearanceRange: '55~57층', detectionType: '시선 감지', aoeShape: '몹주변원형장판, 후방 매우큰부채꼴장판', immuneCC: [], skills: ['후방 공격'], avoidance: '몹 주변 원형 장판, 뒤에 플레이어가 있을 경우 몹 뒷면 매우 큰 부채꼴 장판', threatLevel: 3 },
          { id: 'nv-6-9', name: '순례길 수호자', type: 'static', appearanceRange: '56~59층', detectionType: '시선 감지', aoeShape: '자동공격만 함', immuneCC: [CrowdControl.HEAVY, CrowdControl.BIND], skills: ['자동공격'], avoidance: '자동 공격만 함', threatLevel: 1 },
          { id: 'nv-6-10', name: '순례길 거인', type: 'static', appearanceRange: '56~59층', detectionType: '시선 감지', aoeShape: '큰 원형장판, 부채꼴장판', immuneCC: [], skills: ['막강한 후려갈기기'], avoidance: '전투 시작 시 1어글자 위치가 가깝다면 빨아들인 후 몹 주변 큰 원형 장판 / 막강한 후려갈기기: 몹 주변 큰 원형 장판, 몹 정면 부채꼴 장판', threatLevel: 4 },
          { id: 'nv-6-11', name: '순례길 모래구렁이', type: 'patrol', appearanceRange: '56~59층', detectionType: '시선 감지', aoeShape: '약 300도 장판', immuneCC: [], skills: ['흙송곳'], avoidance: '흙송곳: 약 300도 장판 (몬스터 뒤, 혹은 벽 뒤로 회피) / 로머', threatLevel: 3 },
          { id: 'nv-6-12', name: '순례길 사이카니아', type: 'static', appearanceRange: '57~59층', detectionType: '시선 감지', aoeShape: '몹 주변 원형 장판, 강제이동', immuneCC: [], skills: ['혼란 꽃가루'], avoidance: '몹 주변 원형 장판 / 혼란 꽃가루 살포: 플레이어에게 강제 이동 디버프 부여', threatLevel: 4 },
          { id: 'nv-6-13', name: '순례길 절규자', type: 'static', appearanceRange: '57~59층', detectionType: '시선 감지', aoeShape: '직선, 원형, 도넛 장판', immuneCC: [], skills: ['낫 꼬리', '외곽 번개'], avoidance: '직선 장판, 낫 꼬리: 몹 주변 원형 장판, 외곽 번개: 몹 주변 도넛 장판.', threatLevel: 4 }
        ]
      },
      {
        range: '61-70',
        monsters: [
          { id: 'nv-7-1', name: '순례길 노움', type: 'static', appearanceRange: '61~63층', detectionType: '시선 감지', aoeShape: '몹 기준 원형장판', immuneCC: [], skills: ['원형'], avoidance: '몹 기준 원형 장판', threatLevel: 2 },
          { id: 'nv-7-2', name: '순례길 절벽두더지', type: 'static', appearanceRange: '61~63층', detectionType: '시선 감지', aoeShape: '몹정면 부채꼴장판', immuneCC: [], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-7-3', name: '면죄된 말썽', type: 'patrol', appearanceRange: '61~63층', detectionType: '시선 감지', aoeShape: '원형장판', immuneCC: [], skills: ['원형'], avoidance: '원형 장판 / 로머', threatLevel: 3 },
          { id: 'nv-7-4', name: '면죄된 의심', type: 'static', appearanceRange: '61~64층', detectionType: '시선 감지', aoeShape: '몹 기준 원형장판, 점프 원형', immuneCC: [], skills: ['점프'], avoidance: '몹 기준 원형 장판, 이후 주기적으로 랜덤 대상자를 향해 점프 후 원형 장판 / 숨어있는 몬스터. 가까이 가야 보임', threatLevel: 3 },
          { id: 'nv-7-5', name: '순례길 탈로스', type: 'patrol', appearanceRange: '61~69층', detectionType: '시선 감지', aoeShape: '점프 장판, 도넛장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLEEP], skills: ['도약'], avoidance: '랜덤 대상자를 향해 점프 장판, 직후 몹 기준 도넛 장판 / 로머', threatLevel: 4 },
          { id: 'nv-7-6', name: '면죄된 난동', type: 'static', appearanceRange: '62~64층', detectionType: '시선 감지', aoeShape: '오른쪽 혹은 왼쪽 매우 큰 반원 장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLEEP], skills: ['반원'], avoidance: '오른쪽 혹은 왼쪽 매우 큰 반원 장판. / 벽 뒤에 있어도 피격됨.', threatLevel: 4 },
          { id: 'nv-7-7', name: '면죄된 원한', type: 'patrol', appearanceRange: '64~66층', detectionType: '시선 감지', aoeShape: '직선 장판, 매우 큰 원형장판', immuneCC: [], skills: ['원형'], avoidance: '직선 장판, hp 25%가 되면 매우 큰 원형 장판 / 로머', threatLevel: 4 },
          { id: 'nv-7-8', name: '면죄된 불평등', type: 'static', appearanceRange: '64~66층', detectionType: '소리 감지', aoeShape: '원형장판, 매우 큰 십자 장판', immuneCC: [], skills: ['낙석'], avoidance: '원형 장판, 낙석: 몹 기준 매우 큰 십자 장판', threatLevel: 4 },
          { id: 'nv-7-9', name: '순례길 여왕벌', type: 'static', appearanceRange: '65~68층', detectionType: '시선 감지', aoeShape: '직선 장판, 전멸기', immuneCC: [CrowdControl.BIND], skills: ['직선'], avoidance: '직선 장판, hp 15%가 되면 전멸기 시전', threatLevel: 5 },
          { id: 'nv-7-10', name: '면죄된 애착', type: 'static', appearanceRange: '65~67층', detectionType: '소리 감지', aoeShape: '큰 반원 장판', immuneCC: [], skills: ['반원'], avoidance: '랜덤 대상자를 향해 몹 앞쪽 혹은 뒷쪽을 향해 큰 반원 장판. 파티의 경우 한 방향에 모여 있기를 권장', threatLevel: 4 },
          { id: 'nv-7-11', name: '면죄된 격론', type: 'static', appearanceRange: '66~69층', detectionType: '시선 감지', aoeShape: '넓은 직선장판', immuneCC: [], skills: ['직선'], avoidance: '넓은 직선 장판', threatLevel: 2 },
          { id: 'nv-7-12', name: '면죄된 식탐', type: 'static', appearanceRange: '67~69층', detectionType: '시선 감지', aoeShape: '부채꼴장판, 몹 주변 원형장판', immuneCC: [], skills: ['석화의 눈빛', '몸통 박기'], avoidance: '석화의 눈빛: 몹 정면 부채꼴 장판, 몸통 박기: 몹 주변 원형 장판', threatLevel: 4 },
          { id: 'nv-7-13', name: '순례길 응고지', type: 'static', appearanceRange: '67~69층', detectionType: '시선 감지', aoeShape: '원형장판, 전방 부채꼴장판', immuneCC: [], skills: ['토석류'], avoidance: '원형 장판, 토석류: 몹 전방 부채꼴 장판', threatLevel: 3 }
        ]
      },
      {
        range: '71-80',
        monsters: [
          { id: 'nv-8-1', name: '순례길 커스터드 크림', type: 'static', appearanceRange: '71~73층', detectionType: '시선 감지', aoeShape: '원형 장판', immuneCC: [CrowdControl.SLOW], skills: ['원형'], avoidance: '랜덤 대상자를 향한 원형 장판', threatLevel: 2 },
          { id: 'nv-8-2', name: '순례길 훌두', type: 'patrol', appearanceRange: '71~73층', detectionType: '시선 감지', aoeShape: '몹 주변 원형 장판, 자폭', immuneCC: [CrowdControl.SLOW], skills: ['자폭'], avoidance: '몹 주변 원형 장판 / 0이 되면 거리 비례 대미지 자폭 시전 / 죽기 전 [수면] 넣을 경우 자폭 없이 완전히 사망 / 로머', threatLevel: 4 },
          { id: 'nv-8-3', name: '면죄된 불신', type: 'static', appearanceRange: '71~74층', detectionType: '시선 감지', aoeShape: '직선 장판', immuneCC: [], skills: ['직선'], avoidance: '직선 장판', threatLevel: 2 },
          { id: 'nv-8-4', name: '순례길 가위턱', type: 'static', appearanceRange: '71~73층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-8-5', name: '면죄된 앙심', type: 'static', appearanceRange: '72~74층', detectionType: '시선 감지', aoeShape: '도넛, 원형 복합 장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLOW, CrowdControl.SLEEP], skills: ['도넛/원형'], avoidance: '외내측: 도넛 > 원형 장판, 내외측 > 원형, 도넛 장판 / 벽 뒤에 숨기 가능.', threatLevel: 4 },
          { id: 'nv-8-6', name: '면죄된 오만', type: 'patrol', appearanceRange: '73~75층', detectionType: '시선 감지', aoeShape: '몹 정면 작은 반원 장판 4회', immuneCC: [CrowdControl.STUN, CrowdControl.SLOW, CrowdControl.SLEEP], skills: ['반원'], avoidance: '몹 정면 작은 반원 장판 4회 / 로머', threatLevel: 4 },
          { id: 'nv-8-7', name: '순례길 지렁이', type: 'static', appearanceRange: '74~76층', detectionType: '소리 감지', aoeShape: '몹 기준 큰 원형장판', immuneCC: [CrowdControl.SLOW], skills: ['원형'], avoidance: '몹 기준 큰 원형 장판', threatLevel: 3 },
          { id: 'nv-8-8', name: '순례길 아메메트', type: 'static', appearanceRange: '75~77층', detectionType: '시선 감지', aoeShape: '몹 주변 원형장판', immuneCC: [], skills: ['원형'], avoidance: '몹 주변 원형 장판', threatLevel: 2 },
          { id: 'nv-8-9', name: '면죄된 분쟁', type: 'static', appearanceRange: '75~78층', detectionType: '시선 감지', aoeShape: '큰 부채꼴, 큰 원형 장판', immuneCC: [CrowdControl.SLOW], skills: ['호령', '강력한 회전'], avoidance: '호령: 몹 정면 큰 부채꼴 장판, 강력한 회전: 몹 기준 큰 원형 장판', threatLevel: 3 },
          { id: 'nv-8-10', name: '면죄된 부패', type: 'static', appearanceRange: '76~78층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판, 비전투 원형장판', immuneCC: [CrowdControl.BIND], skills: ['부채꼴'], avoidance: '몹 정면 부채꼴 장판 / 비전투 상태 시 주기적으로 아주 큰 원형 장판', threatLevel: 4 },
          { id: 'nv-8-11', name: '순례길 바위먹보', type: 'patrol', appearanceRange: '71~79층', detectionType: '시선 감지', aoeShape: '돌진, 넉백, 독 (장판 없음)', immuneCC: [CrowdControl.SLOW], skills: ['돌진'], avoidance: '장판 없음 / 돌진, 넉백, 독 디버프 / 로머', threatLevel: 4 },
          { id: 'nv-8-12', name: '면죄된 폄회', type: 'static', appearanceRange: '77~79층', detectionType: '근접 감지', aoeShape: '원형 장판, 정면 부채꼴 장판', immuneCC: [CrowdControl.SLOW], skills: ['조산 폭풍', '변성 폭발'], avoidance: '조산 폭풍: 랜덤 대상자 원형 장판, 변성 폭발: 몹 정면 부채꼴 장판', threatLevel: 3 },
          { id: 'nv-8-13', name: '면죄된 허영심', type: 'static', appearanceRange: '77~79층', detectionType: '근접 감지', aoeShape: '말리카 우물 막넴 장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLOW], skills: ['말리카 우물'], avoidance: '아주 큰 말리카 우물 막넴 장판', threatLevel: 5 }
        ]
      },
      {
        range: '81-90',
        monsters: [
          { id: 'nv-9-1', name: '순례길 놀', type: 'static', appearanceRange: '81~83층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판, 즉사기', immuneCC: [CrowdControl.SLOW], skills: ['물어 죽이기'], avoidance: '몹 정면 부채꼴 장판 / 물어 죽이기: 즉사기', threatLevel: 5 },
          { id: 'nv-9-2', name: '순례길 기수', type: 'patrol', appearanceRange: '81~84층', detectionType: '근접 감지', aoeShape: '정면 부채꼴 장판, 넉백 4연속 돌진', immuneCC: [CrowdControl.SLEEP], skills: ['넉백 돌진'], avoidance: '정면 부채꼴 장판 / 랜덤 대상자에게 넉백 4연속 돌진. 기절시켜도 기절 끝난 후 다시 넉백 진행 / 로머', threatLevel: 4 },
          { id: 'nv-9-3', name: '부름받은 그렘린', type: 'static', appearanceRange: '81~83층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판', immuneCC: [CrowdControl.SLOW], skills: ['둔화 디버프'], avoidance: '몹 정면 부채꼴 장판 / 랜덤 대상자를 향해 해제 가능 둔화 디버프', threatLevel: 3 },
          { id: 'nv-9-4', name: '순례길 컵푸딩', type: 'static', appearanceRange: '81~84층', detectionType: '시선 감지', aoeShape: '매우 큰 부채꼴장판, 원형장판', immuneCC: [CrowdControl.SLOW, CrowdControl.HEAVY, CrowdControl.SLEEP], skills: ['다라', '다크'], avoidance: '다라: 매우 큰 부채꼴 장판, 다크: 랜덤 대상자에게 원형 장판 / 다라는 범위가 보이지 않는 무서운 장판', threatLevel: 4 },
          { id: 'nv-9-5', name: '부름받은 소악마', type: 'static', appearanceRange: '83~85층', detectionType: '시선 감지', aoeShape: '원형장판, 몹 주변 원형장판', immuneCC: [CrowdControl.SLOW, CrowdControl.SLEEP], skills: ['원형장판', '블리자드 함정'], avoidance: '랜덤 대상자를 향한 원형 장판, 블리자드 함정: 몹 주변 원형 장판', threatLevel: 3 },
          { id: 'nv-9-6', name: '부름받은 아크데몬', type: 'static', appearanceRange: '84~86층', detectionType: '시선 감지', aoeShape: '몹 정면 부채꼴 장판, 마비 디버프', immuneCC: [CrowdControl.SLOW, CrowdControl.SLEEP], skills: ['심연의 공격', '심연의 관통'], avoidance: '심연의 공격: 몹 정면 부채꼴 장판 / 심연의 관통: 마비 디버프', threatLevel: 3 },
          { id: 'nv-9-7', name: '순례길 카마', type: 'static', appearanceRange: '84~87층', detectionType: '시선 감지', aoeShape: '직선 장판, 후방 반원 장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLOW, CrowdControl.SLEEP], skills: ['발길질 꼬리치기'], avoidance: '발길질 꼬리치기: 직선 장판 후 몹 뒷면 반원 장판', threatLevel: 4 },
          { id: 'nv-9-8', name: '부름받은 서큐버스', type: 'patrol', appearanceRange: '84~86층', detectionType: '시선 감지', aoeShape: '원형 장판, 즉사 기믹', immuneCC: [CrowdControl.SLOW, CrowdControl.SLEEP], skills: ['심장 열병'], avoidance: '심장 열병: 랜덤 대상자를 향한 원형 장판 / 심장 열병 디버프가 있을 때 움직이면 즉사, 벽 뒤에 숨어 캔슬 가능. / 로머', threatLevel: 5 },
          { id: 'nv-9-9', name: '부름받은 카임', type: 'static', appearanceRange: '85~89층', detectionType: '시선 감지', aoeShape: '360 마안, 원형장판', immuneCC: [CrowdControl.SLOW], skills: ['마안', '원형장판'], avoidance: '360 마안 후 랜덤 대상자를 향한 원형 장판', threatLevel: 3 },
          { id: 'nv-9-10', name: '부름받은 훔바바', type: 'patrol', appearanceRange: '81~89층', detectionType: '시선 감지', aoeShape: '큰 부채꼴 장판', immuneCC: [CrowdControl.STUN, CrowdControl.BIND, CrowdControl.SLEEP], skills: ['삼중/사중 강타'], avoidance: '강공격인 삼중 or 사중 강타 후 해당 방향 그대로 120도 큰 부채꼴 장판 시전 / 로머', threatLevel: 5 },
          { id: 'nv-9-11', name: '부름받은 케르베로스', type: 'static', appearanceRange: '86~89층', detectionType: '시선 감지', aoeShape: '원형 장판, 전후방 부채꼴 장판', immuneCC: [CrowdControl.SLOW], skills: ['번개 발생', '지옥 발톱', '꼬리강타'], avoidance: '번개 발생: 피격자를 향한 원형 장판, 지옥 발톱: 몹 정면 부채꼴 장판, 꼬리강타: 몹 뒷면 부채꼴 장판', threatLevel: 4 },
          { id: 'nv-9-12', name: '부름받은 바엘', type: 'static', appearanceRange: '86~89층', detectionType: '시선 감지', aoeShape: '넓은 직선 장판, 큰 원형장판', immuneCC: [CrowdControl.SLEEP], skills: ['직선 장판', '원형장판'], avoidance: '벽을 관통하는 매우 넓은 직선 장판 / 비전투 상태에서 주기적으로 굉장히 큰 원형 장판', threatLevel: 4 },
          { id: 'nv-9-13', name: '부름받은 방랑음악가', type: 'static', appearanceRange: '86~89층', detectionType: '근접 감지', aoeShape: '큰 부채꼴 장판, 원형 장판', immuneCC: [CrowdControl.SLOW, CrowdControl.SLEEP], skills: ['다라', '내면의 악마'], avoidance: '다라: 몹 정면 큰 부채꼴 장판, 내면의 악마: 몹 기준 원형 장판', threatLevel: 4 }
        ]
      },
      {
        range: '91-99',
        monsters: [
          { id: 'nv-10-1', name: '부름받은 몽마', type: 'static', isDangerous: true, appearanceRange: '91~98층', detectionType: '시선 감지', aoeShape: '직선 장판, 자폭', immuneCC: [CrowdControl.STUN, CrowdControl.SLOW], customImmuneNote: '두쫀쿠 불가', skills: ['몽마의 시선'], avoidance: '몽마의 시선: 직선 장판 / hp 0이 되면 자폭 후 사망. 벽 뒤에서 회피 가능. 수면 넣을 시 자폭 캔슬. 넉백 면역이라 두쫀쿠로 즉사 불가', threatLevel: 5 },
          { id: 'nv-10-2', name: '부름받은 꼭두각시', type: 'patrol', appearanceRange: '91~94층', detectionType: '시선 감지', aoeShape: '몹 주변 원형 장판', immuneCC: [], skills: ['원형'], avoidance: '몹 주변 원형 장판 / 로머', threatLevel: 3 },
          { id: 'nv-10-3', name: '순례길보라 트리피드', type: 'static', appearanceRange: '91~93층', detectionType: '소리 감지', aoeShape: '원형장판, 부채꼴 장판', immuneCC: [CrowdControl.SLOW], skills: ['기어드는 덩굴'], avoidance: '랜덤 대상자를 향한 원형 장판, 기어드는 덩굴: 랜덤 대상자를 향해 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-10-4', name: '순례길 야테베오', type: 'static', appearanceRange: '91~93층', detectionType: '소리 감지', aoeShape: '넓은 직선 장판, 원형 장판', immuneCC: [CrowdControl.SLOW], skills: ['썩은 냄새'], avoidance: '썩은 냄새: 랜덤 대상자를 향해 넓은 직선 장판, 랜덤 대상자를 향한 원형 장판', threatLevel: 3 },
          { id: 'nv-10-5', name: '부름받은 톱날이빨', type: 'patrol', isDangerous: true, appearanceRange: '93~98층', detectionType: '소리 감지', aoeShape: '정면/좌우측 부채꼴 장판', immuneCC: [CrowdControl.SLOW], skills: ['꿀 뿌리기'], avoidance: '정면 꿀 뿌리기 - 측면에서 회피 / 좌, 우측 꿀 뿌리기 - 정면에서 회피 / 로머', threatLevel: 5 },
          { id: 'nv-10-6', name: '순례길 바르그', type: 'static', isDangerous: true, appearanceRange: '93~95층', detectionType: '시선 감지', aoeShape: '몹 주변 원형 즉발 장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLOW, CrowdControl.BIND, CrowdControl.SLEEP], skills: ['즉발 원형'], avoidance: '3~4회 강공격 후 몹 주변 원형 즉발 장판', threatLevel: 4 },
          { id: 'nv-10-7', name: '부름받은 다히카', type: 'static', isDangerous: true, appearanceRange: '93~96층', detectionType: '시선 감지', aoeShape: '부채꼴 장판, 후방 즉발 즉사 부채꼴', immuneCC: [CrowdControl.SLOW], skills: ['부채꼴'], avoidance: '랜덤 대상자를 향한 부채꼴 장판, 몹 뒤에 있으면 뒷면을 향해 논캐스팅 즉발 즉사 부채꼴 장판 사용', threatLevel: 5 },
          { id: 'nv-10-8', name: '부름받은 총각거미', type: 'static', appearanceRange: '94~96층', detectionType: '시선 감지', aoeShape: '과중력 장판, 즉사 연계 장판', immuneCC: [CrowdControl.SLEEP], skills: ['즉사 연계'], avoidance: '랜덤 대상자에게 과중력 장판, 이후 즉사 연계 장판 사용 / 벽 뒤에서 캔슬 가능', threatLevel: 4 },
          { id: 'nv-10-9', name: '순례길 악의', type: 'static', appearanceRange: '95~97층', detectionType: '시선 감지', aoeShape: '부채꼴 장판', immuneCC: [CrowdControl.SLOW], skills: ['부채꼴'], avoidance: '랜덤 대상자를 향한 부채꼴 장판', threatLevel: 2 },
          { id: 'nv-10-10', name: '부름받은 원시 악마', type: 'patrol', appearanceRange: '95~98층', detectionType: '시선 감지', aoeShape: '큰 원형 장판, 큰 부채꼴 장판', immuneCC: [CrowdControl.SLOW, CrowdControl.SLEEP], skills: ['다크 홀리', '생명 파괴'], avoidance: '다크 홀리: 랜덤 대상자를 향한 큰 원형 장판, 생명 파괴: 몹 전방 매우 큰 부채꼴 장판 / 로머', threatLevel: 4 },
          { id: 'nv-10-11', name: '부름받은 데스트루도', type: 'static', appearanceRange: '96~98층', detectionType: '시선 감지', aoeShape: '360도 마안, 넓은 직선 장판', immuneCC: [CrowdControl.SLOW, CrowdControl.BIND], skills: ['마안', '직선'], avoidance: '360도 마안, 랜덤 대상자를 향한 넓은 직선 장판', threatLevel: 4 },
          { id: 'nv-10-12', name: '부름받은 구시온', type: 'static', isDangerous: true, appearanceRange: '96~98층', detectionType: '시선 감지', aoeShape: '연속 큰 반원 장판', immuneCC: [CrowdControl.STUN, CrowdControl.SLEEP], skills: ['반원 장판'], avoidance: '오른쪽 혹은 왼쪽 큰 반원 장판. 이후 별도의 캐스팅 없이 시전하지 않은 반대쪽 반원 장판', threatLevel: 5 },
          { id: 'nv-10-13', name: '부름받은 아케론', type: 'static', isDangerous: true, appearanceRange: '96~98층', detectionType: '시선 감지', aoeShape: '매우 큰 반원 장판, 즉사', immuneCC: [CrowdControl.SLOW], skills: ['반원'], avoidance: '무기 쥔 방향으로 매우 큰 반원 장판. / 벽 뒤에 있어도 범위 내에 있으면 즉사', threatLevel: 5 }
        ]
      }
    ],
  }
];
