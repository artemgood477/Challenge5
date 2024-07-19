/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    
    const result = [];
    const stack1 = [root];
    const stack2 = [];
    
    while (stack1.length > 0) {
        const node = stack1.pop();
        stack2.push(node);
        
        if (node.left !== null) {
            stack1.push(node.left);
        }
        if (node.right !== null) {
            stack1.push(node.right);
        }
    }
    
    while (stack2.length > 0) {
        const node = stack2.pop();
        result.push(node.val);
    }
    
    return result;
};
