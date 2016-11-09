/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let tail = head;
    let carry = 0;
    let sum = 0;
    while (l1 || l2) {
       let val1 = l1 ? l1.val : 0;
       let val2 = l2 ? l2.val : 0;
       sum = val1 + val2 + carry;
       carry = ~~(sum / 10);
       let node = new ListNode( sum % 10 );
       if(!head) {
         head = node;
         tail = head;
       }else {
           tail.next = node;
           tail = node;
       }
       if(carry) {
         let node = new ListNode( carry );
         tail.next = node;
       }
       l1 = (l1 || {}).next;
       l2 = (l2 || {}).next;
    }
    return head;
};
