# Tippy Tap Escape

A cozy 3D ASMR obstacle game for kids. One HTML file, no dependencies, works offline once installed.

## Install on iPad / iPhone
1. Open the game's GitHub Pages address in **Safari**.
2. Tap **Share** → **Add to Home Screen**.
3. Open it once from the Home Screen while online. After that it runs without internet.

## Install on Android
Open the address in Chrome → menu → **Install app** / **Add to Home screen**.

## Updating
After changing any file, bump `VERSION` in `sw.js` so installed copies pick up the new version.

## 업데이트 내역

자세한 규칙과 숫자는 [`CLAUDE.md`](CLAUDE.md)에 있습니다.

### 2026-11-15
- **Armor**: 스테이지 단위가 아니라 개수로 셉니다. 1000코인에 3개를 받고, 하나가 충돌 한 번을 막습니다. 깨지면 남은 것이 같은 스테이지 안에서 바로 이어서 켜지고, 안 쓴 것은 다음 스테이지로 넘어갑니다.
- **스피드 음료수**: 5스테이지부터 스테이지마다 5개가 길 위에 나옵니다. 마시면 5초 동안 속도 +30%, 마실 때 효과음이 납니다.
- **장애물 디자인**: 박스, 도는 막대, 굴러오는 공이 테마 8개마다 다른 색과 모양으로 나옵니다. 부딪히는 범위는 그대로입니다.
- **보너스 게임**: 3, 6, 9… 스테이지의 첫 체크포인트 옆에 금색 문이 있습니다. 들어가서 25초 안에 코인 12개를 다 모으면 Armor 3개를 받습니다. 스테이지마다 한 번입니다.
- **Shop 새 아이템**
  - Royal Crown (500): 금색 왕관
  - Baby Chick (700): 병아리가 따라오고 새 발판마다 코인 +1
  - Floaty Balloon (800): 3스테이지 동안 천천히 떨어져서 점프가 멀리 감
  - Butterfly Wings (1000): 3스테이지 동안 공중에서 한 번 더 점프
- **최고 스테이지로 돌아가기**: 시작 화면과 일시정지 메뉴에 "Go to Stage N (my best)" 버튼이 나옵니다.
- **실수 방지**: New Game과 Start Over를 누르면 확인 화면이 먼저 뜹니다.
- **환호 동작**: 스테이지를 깨면 캐릭터가 한 바퀴 빙글 돌며 점프합니다.

### 2026-11-14 이전
- 기본 게임과 홈 화면 설치(PWA), 테마 8개
- 줌 레인, 캐릭터 7종, 추격자 Grumbles, Shop과 트레일
- 테마별 배경 풍경과 길 옆 소품
- 플레이어 이름과 플레이어별 저장, 구글 시트 리더보드
- Armor, 골드·블랙 트레드밀, Instant Revive
