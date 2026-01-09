
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMonsterStrategy = async (monsterName: string, dungeonName: string, floorRange: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Final Fantasy XIV ${dungeonName}의 ${floorRange}층에 등장하는 몬스터 '${monsterName}'에 대한 상세 공략을 작성해줘. 
      다음 내용을 포함해줘:
      1. 주요 기술 명칭과 효과
      2. 회피 방법 (전방 AOE, 시선 기믹 등)
      3. 상태이상(기절, 침묵, 수면 등)이 유효한지 여부
      4. 주의해야 할 점 (순찰 여부, 폭발 공격 등)
      한국어로 답변해주고, 마크다운 형식을 사용해줘.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "공략 정보를 가져오는 데 실패했습니다. 다시 시도해주세요.";
  }
};
