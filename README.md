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

### 2026-11-23
- **처음 하는 친구를 위한 안내**: 1스테이지를 처음 하면 손가락 그림이 움직이기 → 점프 → 코인과 Shop 순서로 알려 줍니다. 한 번 깨고 나면 다시 나오지 않습니다. 안내가 나오는 동안은 조이스틱이 원래 자리에 고정됩니다.
- **친구에게 보내기**: 첫 화면의 "Share this game"과 클리어 화면의 "Send to a friend"로 게임 주소를 보냅니다.
- **링크 미리보기**: 주소를 메신저나 SNS에 붙이면 게임 그림과 한 줄 소개가 같이 보입니다.
- **별명 쓰기**: 이름 입력 화면이 "Pick a nickname!"으로 바뀌었고, 실명 대신 별명을 쓰라는 안내가 붙었습니다.
- 첫 화면에 한 줄 소개(Free · No ads · Plays in your browser)가 생겼습니다.
- **Keyboard World 키캡 모양**: 실제 키캡처럼 윗면이 작고 옆면이 기울어진 사다리꼴이 됐습니다. 키캡이 스위치 위에 떠 있고, 누르면 깊이 들어갔다가 살짝 튀며 올라옵니다.
- **Keyboard World** (Squish World를 바꿈): 말랑이 28종이 전부 키캡 장식이 달린 미니 키보드가 됐습니다. 키를 누르면 키가 들어가고, 타건 소리가 나고, 그 키에 불빛이 들어옵니다. 손가락을 미끄러뜨리거나 여러 손가락으로 칠 수 있습니다. 타건 소리 7가지(Thocky, Clicky, Creamy, Clacky, Bubbly, Typewriter, Marble). 희귀도, 캡슐, 친구 교환은 그대로이고 이미 모은 것은 같은 등급의 키보드로 남습니다.
- **Pet World**: 첫 화면의 세 번째 카드. Shop에서 산 펫들이 마당에 나와 있고, 한 마리를 골라 밥 주기, 공놀이, 목욕(손으로 문질러 거품 내기), 쓰다듬기를 합니다. 배부름·즐거움·깨끗함이 시간이 지나면 천천히 줄고, 셋 다 가득 채우면 하루 한 번 선물(코인, 가끔 보석)을 받습니다.
- **Squish World**: 첫 화면에서 Tippy Tap Escape와 Squish World 중 고릅니다.
  - 말랑이 28종, 희귀도 7단계(Common → Mythic). 보석으로 미스터리 캡슐(Mini 2 / Super 5 / Mega 10)을 열면 랜덤으로 나오고, 비싼 캡슐일수록 희귀한 것이 잘 나옵니다. 처음 한 번은 무료 캡슐.
  - 내 말랑이를 3D로 360도 돌려 보고, 누르면 납작해지고 당기면 늘어납니다. 종류마다 다른 ASMR 소리가 납니다(젤, 젤리, 물구슬, 끈적임, 고운 모래, 비즈, 눈, 폼, 고무 9가지).
  - 가상 친구 5명과 교환: Add로 올리고 Accept / Decline. 친구가 먼저 교환을 청하기도 합니다.
- **보석을 쓸 수 있어요** (Shop의 새 **Gems** 탭). 써도 이미 열린 캐릭터는 그대로입니다.
  - Stage Magic: 지금 스테이지를 Moon Jump(2), Night Lights(2), Coin Rush(3), Golden Stage(5)로 바꾸기
  - Bonus Room Key(3): 어느 스테이지에서나 보너스 방에 들어가기
  - Baby Dragon(15): 새 발판마다 코인 +3인 펫 · Shiny Halo(6) · Super Cape(10)
  - Coin Bag: 보석 1개 → 코인 500 · One Gem: 코인 2500 → 보석 1개
- **Lucky Egg** (Boosts 탭, 600코인): 알을 깨면 코인, Armor, 보석 중 하나가 나옵니다.
- **가격 인상**: Shop의 모든 가격이 약 1.5배가 됐습니다(예: Armor 1500, Instant Revive 2200, 펫 1000~3000). 이미 산 것은 그대로입니다.

### 2026-11-20
- **새 펫 5종**: Tiny Hamster(700), Little Turtle(700), Fluffy Kitten(900), Happy Puppy(900), Magic Unicorn(2000). 병아리처럼 뒤따라오며 새 발판마다 코인 +1(유니콘은 +2). 펫은 한 번에 한 마리만 데리고 다닙니다.
- **Shop 정리**: Boosts / Trails / Gear / Pets 탭 4개로 나눴습니다. 가진 것은 노란 바탕, 쓰는 중인 것은 주황 테두리로 보입니다.
- **새 주소**: https://tippytap-beta.vercel.app 에서도 할 수 있습니다.
- **Move my game**: 시작 화면 버튼으로 기록을 코드로 복사해 다른 주소나 기기로 옮길 수 있습니다.
- **스테이지 트위스트** (13스테이지부터): Coin Rush(코인 가득), Moon Jump(높이 뛰기), Night Lights(어두운 길을 밟아서 밝히기), Slippy Slide(미끄러운 바닥), Windy Day(옆바람). 10스테이지마다 **Golden Stage**: 금색 길, King Grumbles, 보너스 3배.
- **숨은 보석**: 스테이지마다 높이 떠 있는 보석 하나. 모으면 새 캐릭터 **Foxy**(5개), **Uni**(15개), **Robo**(30개)를 고를 수 있습니다. 이미 깬 스테이지 4개마다 보석 1개를 선물로 받습니다.
- **클리어 별**: 클리어, 안 죽고 클리어, 보석 찾기로 별 3개.
- 기존 스테이지와 체크포인트, 코인, 아이템은 모두 그대로입니다.
- **보너스 게임 조정**: 방 바닥을 어두운 색으로 바꿔 노란 코인이 잘 보입니다. 보너스 방 안에서도 Magnet Trail과 Star Power가 됩니다(잠깐 껐다가 다시 켬).

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
