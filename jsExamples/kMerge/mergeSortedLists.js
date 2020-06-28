/*

https://leetcode.com/problems/merge-k-sorted-lists/
23. Merge k Sorted Lists
Hard

4583

285

Add to List

Share
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/


//K(log N)->K is amoutn nodes times N the length of input of array

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length<1){return null;}
    
    if(lists.length===1){
        return lists[0]
    }
    
    
    while(lists.length>1){
        let next=[];
        
        for(let i=0;i<lists.length;i+=2){
            next.push(merge2List(lists[i], lists[i+1]))
        }
        //this causes the recurssion
        lists=next
    }
    return lists[0]
};

function merge2List(list1,list2){
    
    let dummy=new ListNode(0);
    let head=dummy;
    
    while(list1 && list2){
        
        if(list1.val<list2.val){
            dummy.next=list1
            list1=list1.next;
        }else{
            dummy.next=list2;
            list2=list2.next;
        }
        dummy=dummy.next
    }
    
    if(list1){
        dummy.next=list1;
    }else{
        dummy.next=list2;
    }
    
    return head.next;
}