function sumArray(arr){
     let sum=0
for(let i of arr){
   sum=sum+i
}
return sum
}
let num=[1,2,3,4,5,6,7,8,9,10]
console.log(sumArray(num))