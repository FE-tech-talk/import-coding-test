function solution(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playObj = {};

  for (let i = 0; i < genres.length; i++) {
    let genre = genres[i];
    let play = plays[i];

    // 장르가 genresObj 객체에 아직 추가되지 않았다면,
    if (!(genre in genresObj)) {
      // 각 장르의 [ 고유번호, 재생횟수 ] 객체에 추가 => Ex. genresObj: { classic: [] }
      genresObj[genre] = [];

      // 총 재생 횟수 객체에 추가 => Ex. playObj: { classic: 0 }
      playObj[genre] = 0;
    }

    // 추가된 장르에 [ 고유번호, 재생횟수 ] 형태로 추가 => Ex. genresObj: { classic: [[ 0, 500 ], [ 2, 150 ]], pop: [[ 1, 600 ], [ 4, 2500 ]] }
    genresObj[genre].push([i, play]);

    // 동일 장르에 총 재생 횟수 누적해서 더하기 => Ex. playObj: { classic: 500, pop: 600 }, { classic: 650, pop: 600}, { classic: 1450, pop: 3100 } ...
    playObj[genre] += play;
  }

  // 총 재생 횟수가 많은 장르순으로 정렬 => Object.keys(객체의 key를 순회하여 배열로 변환 => Ex. [ 'classic', 'pop' ])
  // sort 통해서 playObj: { classic: 1450, pop: 3100 } 중에
  let sortedGenres = Object.keys(playObj).sort((a, b) => {
    // 총 재생 횟수가 높은 순으로 정렬 [b], [a]는 playObj의 각 value에 접근 => Ex. playObj[pop] - playObj[classic];
    return playObj[b] - playObj[a];
  });

  // 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡까지 선택
  // genre는 이미 총 재생 횟수 높은 순으로 정렬된 상태 [ 'pop', 'classic' ] 따라서 of 문을 통해 'pop', 'classic' 순으로 순회함
  for (const genre of sortedGenres) {
    // genresObj 객체의 장르에 접근 => Ex. genresObj['pop'] => [[ 1, 600 ], [ 4, 2500 ]]
    let sortedSongs = genresObj[genre].sort((a, b) => {
      // 접근한 2차원 배열의 1번 index 가 같다면 => 즉, true(재생 횟수가 같을때)면 고유 번호를 오름차순 정렬, false면 재생횟수가 높은 고유번호가 앞으로 오도록 정렬 => Ex. 첫번째 순회: [ [4, 2500], [1, 600] ], 두번째 순회: [ [ 3, 800 ], [ 0, 500 ], [ 2, 150 ] ]
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    });

    // sortedSongs.slice(0, 2).map((song) => song[0])를 한 결과 => Ex. 첫번째 순회: [4, 1], 두번째 순회: [3, 0] 형태.

    // 반환 타입은 배열이여야 하므로 ...을 통해 펼쳐서(4, 0 / 3, 0) push한 결과를 반환.
    answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
  }

  // [ 4, 1, 3, 0 ]
  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
