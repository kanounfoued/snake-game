module.exports = {
  removeNode: (nodeId): void => {
    const node: HTMLElement = document.getElementById(nodeId);
    if (node) node.remove();
  },
};
