// 이진 트리 모양 초원의 각 노드에 늑대와 양이 한 마리씩 놓여 있습니다.
// 양보다 늑대가 더 많거나 같아지면 양 다 없어짐
// info: 각 노드에 있는 양 또는 늑대에 대한 정보가 담긴 배열, 0은 양, 1은 늑대
// edges: 이진 트리의 각 노드들의 연결 관계를 담은 2차원 배열, [부모 노드 번호, 자식 노드 번호]
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function buildTree(info, edges) {
  const tree = new Array(info.length).fill(0).map((v) => []);
  for (const [from, to] of edges) {
    tree[from].push(to);
  }
  return tree;
}

function solution(info, edges) {
  const tree = buildTree(info, edges);
  let maxSheep = 0;

  const q = new Queue();
  // 큐 초기화, {curLoc:number; sheep:number; wolf:number; visited: Set}
  q.push({ curLoc: 0, sheep: 1, wolf: 0, visited: new Set() });

  while (!q.isEmpty()) {
    const { curLoc, sheep, wolf, visited } = q.pop();
    maxSheep = Math.max(maxSheep, sheep);

    for (const next of tree[curLoc]) {
      visited.add(next);
    }

    for (const next of visited) {
      if (info[next] === 1) {
        if (sheep !== wolf + 1) {
          const newVisited = new Set(visited);
          newVisited.delete(next);
          q.push({ curLoc: next, sheep, wolf: wolf + 1, visited: newVisited });
        }
      } else {
        const newVisited = new Set(visited);
        newVisited.delete(next);
        q.push({ curLoc: next, sheep: sheep + 1, wolf, visited: newVisited });
      }
    }
  }

  // return: 양이 없어지지 않고 최대한 많은 양의 양을 모아서 루트 노드로 돌아올 때 양의 마리 수
  return maxSheep;
}
