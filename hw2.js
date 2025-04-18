//task1
function generateBadge(name,role){
    console.log(`Name:${name}, Role:${role}`);

}
generateBadge("Karen", "CEO");
//task2

/*function isDiscount(person,cost){
    let total = person*cost 
    if (person>= 100) {
        return total*0.1;

    }
} else {
    console.log(total);
}
}
isDiscount(150,25);
*/
//task3

function validEmail(email){
    return email.includes("@")&& email.includes(".");
}

console.log(validEmail("hi@hi.com"));
console.log(validEmail("anderson"));
