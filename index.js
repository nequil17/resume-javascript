var name = 'nequil hill';
console.log(name.toUpperCase());

console.log('Career: Junior Web Developer');

console.log('Description: I like playing World of Warcraft.');

var interests = ["My Interests:", "* Football", "* Video Games", "* Women"];
for(i = 0; i < interests.length; i++) {
    console.log(interests[i]);
}
var job = 'My Previous Experience:';
console.log(job);

function displayPosition(title, company, description) {
    console.log(title + ' at ' + company + ' and ' + description);
}
displayPosition('* Customer service associate', 'Walgreens', 'I provided excellent customer service.');
displayPosition('* Customer service specialist', 'Best Buy', 'I provided even excellenter customer service.');
displayPosition('* Crew Member', 'Chipotle', 'I did not provide customer service but I made some bomb food.');

console.log('My Skills:');

function displaySkill(talent, isCool)  {
     if(isCool == true){
         console.log('Check It: ' + talent);
     } else{
         console.log('* ' + talent);
     }
 }
 displaySkill('Coder', true)
 displaySkill('Master Baiter', false)





