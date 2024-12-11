
function checkGender(){
    let gender =prompt("What is your gender?");
    gender = gender.toLowerCase();

    if (gender =="female"){
    alert(`You are a ${gender}👩🏼`);
    } 
    else if (gender =="male"){
        alert(`You are a ${gender}👨🏼`);
    } 
    else {
        alert(`invalid input`);
    }
}
checkGender();

// function checkGender() {
//     let gender = prompt("What is your gender? (male, female)").trim().toLowerCase();
//     if (gender === "female") {
//         alert(`You are a ${gender} 👩🏼`);
//     } else if (gender === "male") {
//         alert(`You are a ${gender} 👨🏼`);
//     } else if (gender) {
//         alert(`"${gender}" is not a recognized gender. Please try again.`);
//     } else {
//         alert("You didn't enter any input. Please try again.");
//     }
// }