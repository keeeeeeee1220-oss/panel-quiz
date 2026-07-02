// =============================================================
//   パネルクイズ 問題データ
//   
//   このファイルだけ編集すれば問題を差し替えられます。
//   保存後、プレイヤーがページをリロードすれば反映されます。
//   （キャッシュが残る場合は panel-quiz.html の ?v= 数字を上げる）
//   
//   【フィールド】
//   title           : 表示名（例：'第1問'）
//   isExample       : true にすると結果集計から除外（例題用）
//   image           : 問題画像のパス（1280×1280）
//   panel           : パネル画像のパス（1280×1280、透過PNG）
//   answers         : 正解の配列（複数登録可）
//                     ※ 全角半角・カタカナひらがな・スペースは自動で吸収
//   explanation     : 解説文（空文字OK）
//   canSkipPanels   : ※廃止（全問題で0枚解答可能になりました）
//   noPanelBonus    : true にすると0枚正解時に特別演出発動（NO PANEL CLEAR!）
// =============================================================

window.QUESTIONS = [
  {
    title: '例題',
    isExample: true,
    image: 'images/q0_question.png',
    panel: 'images/q0_panel.png',
    answers: ['むかしばなし', 'ムカシバナシ', '昔話', '昔ばなし', 'むかし話', 'ﾑｶｼﾊﾞﾅｼ'],
    explanation: 'これは例題です。操作に慣れてください！'
  },
  {
    title: '第1問',
    image: 'images/q1_question.png',
    panel: 'images/q1_panel.png',
    answers: ['してんのう', 'シテンノウ', '四天王', 'ｼﾃﾝﾉｳ'],
    explanation: '解説をここに書きます。'
  },
  {
    // ★ 第2問は毎日更新用 — ここを編集して保存するだけでOK
    title: '第2問',
    image: 'images/q2_question.png',
    panel: 'images/q2_panel.png',
    answers: ['うみのひ', 'ウミノヒ', '海の日', '海のひ', 'うみの日', 'ｳﾐﾉﾋ'],
    explanation: ''
  },
  {
    title: '第3問',
    image: 'images/q3_question.png',
    panel: 'images/q3_panel.png',
    answers: ['ひつじ', 'ヒツジ', '羊', 'ﾋﾂｼﾞ'],
    explanation: ''
  },
  {
    title: '第4問',
    image: 'images/q4_question.png',
    panel: 'images/q4_panel.png',
    answers: ['じむ', 'ジム', '事務', 'ｼﾞﾑ', '寺務'],
    explanation: ''
  },
  {
    // ★ 最終問題 — 0枚正解で特別演出（NO PANEL CLEAR!）
    title: '第5問',
    image: 'images/q5_question.png',
    panel: 'images/q5_panel.png',
    answers: ['む', 'ム'],
    explanation: '',
    noPanelBonus: true
  }
];
