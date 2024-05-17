/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let hasPath = false;

  const findPath = (root, currentSum) => {
    if (!root) return;

    currentSum += root.val;
    if (currentSum === targetSum && !root.left && !root.right) {
      hasPath = true;
    }
    findPath(root.left, currentSum);
    findPath(root.right, currentSum);
  };
  findPath(root, 0);

  return hasPath;
};
