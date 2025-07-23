// 링크 https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const genreTotalMap = {};
  const genreSongsMap = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    genreTotalMap[genre] = (genreTotalMap[genre] || 0) + play;

    if (!genreSongsMap[genre]) genreSongsMap[genre] = [];
    genreSongsMap[genre].push({ index: i, play });
  }

  const sortedGenres = Object.entries(genreTotalMap)
    .sort((a, b) => b[1] - a[1])
    .map(([genre]) => genre);

  const result = [];

  for (const genre of sortedGenres) {
    const songs = genreSongsMap[genre];

    songs.sort((a, b) => {
      if (b.play !== a.play) return b.play - a.play;
      return a.index - b.index;
    });

    result.push(songs[0].index);
    if (songs.length > 1) result.push(songs[1].index);
  }

  return result;
}