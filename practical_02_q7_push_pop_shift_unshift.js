let list = [20, 30, 40];
console.log("Initial array:", list);

list.push(50);
console.log("After push(50):", list);

list.unshift(10);
console.log("After unshift(10):", list);

let removedLast = list.pop();
console.log("Removed last (pop):", removedLast, "-> Array:", list);

let removedFirst = list.shift();
console.log("Removed first (shift):", removedFirst, "-> Array:", list);
