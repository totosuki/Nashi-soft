// UI周りのコード

function nashisohuto_anime() {
    // アニメーションに使用する数値の配列を定義
    const animationValues = [
      { id: "anime_nashi", dashArray: '1091 1093', dashOffset: 1092, animationDelay: 0, animation: "anime_draw" },
      { id: "anime_so", dashArray: '282 284', dashOffset: 283, animationDelay: 166, animation: "anime_draw" },
      { id: "anime_hu", dashArray: '327 329', dashOffset: 328, animationDelay: 333, animation: "anime_draw" },
      { id: "anime_to", dashArray: '268 270', dashOffset: 269, animationDelay: 500, animation: "anime_draw" },
      { id: "anime_dou", dashArray: '906 908', dashOffset: 907, animationDelay: 666, animation: "anime_draw" },
      { id: "anime_kou", dashArray: '874 876', dashOffset: 875, animationDelay: 833, animation: "anime_draw" },
      { id: "anime_kai", dashArray: '811 813', dashOffset: 812, animationDelay: 1000, animation: "anime_draw" }
    ];
  
    // CSSルールを数値配列を使用して作成
    animationValues.forEach((value) => {
      // アニメーションスタイルを設定
      $(`#${value.id}`).css({
        'stroke-dasharray': value.dashArray,
        'stroke-dashoffset': value.dashOffset,
        'animation': `${value.animation} 2000ms linear ${value.animationDelay}ms forwards`
      });
    });
  }
  
  // 関数を呼び出してアニメーションを適用
nashisohuto_anime();