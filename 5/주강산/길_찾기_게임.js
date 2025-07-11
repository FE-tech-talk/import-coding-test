function solution(nodeinfo) {
  const nodes = nodeinfo.map(([x, y], idx) => ({
    id: idx + 1,
    coordinate: [x, y],
  }));

  nodes.sort(
    (a, b) =>
      b.coordinate[1] - a.coordinate[1] || a.coordinate[0] - b.coordinate[0]
  );

  function insertNode(parent, child) {
    if (child.coordinate[0] < parent.coordinate[0]) {
      if (!parent.left) parent.left = child;
      else insertNode(parent.left, child);
    } else {
      if (!parent.right) parent.right = child;
      else insertNode(parent.right, child);
    }
  }

  const root = nodes[0];
  for (let i = 1; i < nodes.length; i++) {
    insertNode(root, nodes[i]);
  }

  const preOrder = [];
  function preOrderTraverse(node) {
    if (!node) return;
    preOrder.push(node.id);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
  }

  const portOrder = [];
  function portOrderTraverse(node) {
    if (!node) return;
    portOrderTraverse(node.left);
    portOrderTraverse(node.right);
    portOrder.push(node.id);
  }

  preOrderTraverse(root);
  portOrderTraverse(root);

  return [preOrder, portOrder];
}
