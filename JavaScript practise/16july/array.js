// Sum of an element of an array
let arr=[2,4,6,8,10]
let sum=0
for(let i of arr){
    sum=sum+i
}
console.log(sum);

// Find maximum number in array
let arr1=[3,7,2,9,5,90]
let greatest=arr1[0]
for(let i=1;i<arr1.length;i++){
    if(arr1[i]>greatest){
        greatest=arr1[i]
    }
}
console.log(greatest)