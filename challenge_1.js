// Challenge 1
function double(nums) {
    let new_array = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            new_array.push(nums[i]*2)
        }
    }
    return new_array
}
let challenge1 = [1, -2, 3, -4, 5]
console.log(double(challenge1))