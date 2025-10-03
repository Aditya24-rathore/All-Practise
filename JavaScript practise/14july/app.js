// q1
// ternary operator
let age=parseInt(prompt("enter ur age"))
let msg=(age>=18) ? "You are adult":"You are minor"
alert(msg)

// q2
let course=confirm("if you completed a course and if u have certificate")
if(course){
    alert("Congratulations you have completed the course")
}
else{
    alert("Your course is not completed")
}

// q3
let price = parseInt(prompt("enter the total price of your item"))
let coupon=confirm("You have discount coupon")
if(coupon){
    let discount=price*(10/100)
    let discountPrice=price-discount
    alert(`Your original price is ${price} and discount price is ${discountPrice}`)
}
else{
    alert("You have not a valid discount coupon")
}

// q4
let num=parseInt(prompt("enter your number"))
if(num>33){
    alert("Congratulations you have passed")
}
else{
    alert(`Bad luck 'Result is failed'`)
}

// q5
let number=parseInt(prompt("enter number"))
if(number%2==0){
    console.log(`number ${number} is even`);
}
else{
    console.log(`number ${number} is odd`);
}

// q6
let confirmation=confirm("Are you sure to delete the item")
if(confirmation){
    alert("Item deleted")
}
else{
    alert("Cancelled")
}


// q7
let numm=parseInt(prompt("Enter number"))
if(numm>0){
    console.log(`Number ${numm} is positive number`);
}
else if(numm==0){
     console.log(`Number ${numm} is neutral number`);
}
else{
    console.log(`Number ${numm} is negative number`);
}

// q8
let n=1
while(n<=10){
    console.log(n)
    n++
}

// q9
let day=parseInt(prompt("Please enter day"))
switch (day) {
    case 1:
        alert("Today is monday")
        break;

    case 2:
        alert("Today is tuesday")
        break;

    case 3:
        alert("Today is wednesday")
        break;

    case 4:
        alert("Today is thursday")
        break;

    case 5:
        alert("Today is friday")
        break;

    case 6:
        alert("Today is saturday")
        break;

    case 7:
        alert("Today is Sunday")
        break;

    default:
        alert("Invalid day")
        break;
}



