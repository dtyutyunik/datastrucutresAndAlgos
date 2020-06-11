/*

EX1:
s: 12, output 3
7-5, 1-9-2, 9-3

            1
         7    9
       6  5  2  3


EX2:


s: 11, output 2
7-4, 1-10

            12
         7    1
       4    10 5

*/


class TreeNode {

    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  function count_paths(root, S) {
    return count_paths_recursive(root, S, []);
  }
  
  function count_paths_recursive(currentNode, S, currentPath) {
    if (currentNode === null) {
      return 0;
    }
  
    // add the current node to the path
    currentPath.push(currentNode.val);
    let pathCount = 0,
      pathSum = 0;
    // find the sums of all sub-paths in the current path list
    for (i = currentPath.length - 1; i >= 0; i--) {
        console.log(currentPath,pathSum)
      pathSum += currentPath[i];
      // if the sum of any sub-path is equal to 'S' we increment our path count.
      if (pathSum === S) {
        pathCount += 1;
      }
    }
    // console.log(currentPath)
    // traverse the left sub-tree
    pathCount += count_paths_recursive(currentNode.left, S, currentPath);
    // traverse the right sub-tree
    pathCount += count_paths_recursive(currentNode.right, S, currentPath);
  
    // remove the current node from the path to backtrack
    // we need to remove the current node while we are going up the recursive call stack
    currentPath.pop();
    return pathCount;
  }

  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
//   console.log(count_paths(root,11))
  console.log(`Tree has paths: ${count_paths(root, 11)}`)
  