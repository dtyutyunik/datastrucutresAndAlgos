/*


Minimum Meeting Rooms (hard) #
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

Example 1:

Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can 
occur in any of the two rooms later.
Example 2:

Meetings: [[6,7], [2,4], [8,12]]
Output: 1
Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
Example 3:

Meetings: [[1,4], [2,3], [3,6]]
Output:2
Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to 
hold all the meetings.
 
Example 4:

Meetings: [[4,5], [2,3], [2,4], [3,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
 
Here is a visual representation of Example 4:


*/

//0(log n) for time, 0(n) for space
let minMeetingRoom=(arr)=>{
    //we have to do [...arr] to create a new array
    var starts = [...arr].sort(function(a, b) {
		return a[0] - b[0];
	});
	var ends = arr.sort(function(a, b) {
		return a[1] - b[1];
    });
    var rooms = 0;
    var end = 0;
    console.log(starts,ends)
	for (var i = 0; i < arr.length; i++) {
        console.log(starts[i][0],ends[end][1])
		if (starts[i][0] < ends[end][1]) {
			rooms++;
		} else {
			end++;
		}
	}
	return rooms;
}
console.log(minMeetingRoom( [[1,4], [2,5], [7,9]]))                 //2
// console.log(minMeetingRoom( [[6,7], [2,4], [8,12]]))                //1
// console.log(minMeetingRoom( [[1,4], [2,3], [3,6]]))                 //2
// console.log(minMeetingRoom( [[4,5], [2,3], [2,4], [3,5]]))          //2

const minMeetingRoomsHeap = (intervals) => {
    const   compareFunc = (a, b) => a - b,
            minHeap = new MinHeap(compareFunc);
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let maxRooms = 0;
    
    intervals.forEach(interval => {
        if(minHeap.size > 0 && minHeap.peek() <= interval[0]) {
            minHeap.extract();
        }
        
        minHeap.insert(interval[1]);
        
        maxRooms = Math.max(maxRooms, minHeap.size);
    });
    
    return maxRooms;
};

// since JS does not have a native heap, 
// for an interview you can quickly code-up something like this
// letting interviewer know what you are doing
class MinHeap {
    constructor(compareFunc) {
        this.compareFunc = compareFunc;
        this.heap = [];
    }
    
    insert(val) {
        this.heap.unshift(val);
        this.heap.sort(this.compareFunc);
    }
    
    extract() {
        if (this.size === 0) return null;
        return this.heap.shift();
    }
    
    peek() {
        if(this.size === 0) return null;
        return this.heap[0];
    }
    
    get size() {
        return this.heap.length;
    }
}


// console.log(minMeetingRoomsHeap( [[1,4], [2,5], [7,9]]))                 //2
// console.log(minMeetingRoomsHeap( [[6,7], [2,4], [8,12]]))                //1
// console.log(minMeetingRoomsHeap( [[1,4], [2,3], [3,6]]))                 //2
// console.log(minMeetingRoomsHeap( [[4,5], [2,3], [2,4], [3,5]]))          //2

