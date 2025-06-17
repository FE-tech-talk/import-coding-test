// 가장 많이 재생된 노래 두 개씩 모으려고 함.
// 1. 속한 노래가 가장 많이 재생된 장르
// 2. 장르 내에서 많이 재생된 노래
// 3. 고유 번호가 낮은 노래
// 위 순서로 순위를 매긴다.
// genres: 노래의 장르를 나타내는 문자열 배열
// plays: 노래별 재생 횟수를 나타내는 정수 배열
function solution(genres, plays) {
  // 장르별 테이블을 만든다. genres: 횟수합
  const genresLapTable = {};
  plays.forEach((_, i) => {
    genresLapTable[genres[i]] = (genresLapTable[genres[i]] || 0) + plays[i];
  });
  // 객체 배열 생성 {index: number; genres: string, play: number}[]
  const genresObjArr = genres.map((genre, index) => ({
    index,
    genre,
    play: plays[index],
  }));

  // 객체 배열을 sort하는데
  genresObjArr.sort((a, b) => {
    // 장르별 테이블의 합이 제일 크면 앞으로
    if (genresLapTable[a.genre] !== genresLapTable[b.genre]) {
      return genresLapTable[b.genre] - genresLapTable[a.genre];
      // 혹은 genres 중에서 더 크면 앞으로
    } else if (a.play !== b.play) {
      return b.play - a.play;
      // 혹은 index가 작으면 앞으로
    } else {
      return a.index - b.index;
    }
  });

  // result 배열 생성
  const result = [];
  const remainGenreTable = genres.reduce((acc, cur) => {
    acc[cur] = 2;
    return acc;
  }, {});
  // genresObjArr를 순회해서
  for (const { index, genre, play } of genresObjArr) {
    // remain 되어있으면
    if (remainGenreTable[genre]) {
      // result에 넣고
      result.push(index);
      // remain - 1
      remainGenreTable[genre] -= 1;
    }
  }

  // return: 베스트 앨범에 들어갈 노래의 고유 번호
  return result;
}
