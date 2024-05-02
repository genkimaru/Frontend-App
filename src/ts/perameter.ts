class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);
    return maxDiameter;
}


let node1: TreeNode = new TreeNode(1);
let node2: TreeNode = new TreeNode(2);
let node3: TreeNode = new TreeNode(3);
let node4: TreeNode = new TreeNode(4);
let node5: TreeNode = new TreeNode(5);
let node6: TreeNode = new TreeNode(6);
let node7: TreeNode = new TreeNode(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
console.log(diameterOfBinaryTree(node1))


