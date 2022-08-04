


// var number = [75,85,94,12,56,48];
// function avarage(num){
// var sum = 0;
// for(let i =0; i < num.length; i++ ){
//     sum = sum+num[i];
// }
// var total = sum / num.length;
// // total = parseInt(total)

// return total;
// }
// var ava = avarage(number);
// console.log(ava);


var avarageNumber = [85,75,96,23,45,78,14];
function avarageBox (box){
    var item = 0;
    for(let i =0; i<box.length; i++ ){
        console.log(item)
       item = item+box[i];
    }
    console.log(item);
    var totalMark = item / box.length;
    console.log(totalMark);
    var decimal = totalMark.toFixed(2);
    // console.log(decimal);
    
            // return decimal;
            // console.log(totalMark);
}
console.log(avarageBox(avarageNumber));




////////////////

// const numbers = [20, 50, 40, 60, 70, 80];
// function make_avg2(num) {
//     // console.log(num);
//     var sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         // console.log(num[i]);
//         sum = sum + num[i];
//     }
//     var average2 = sum / num.length;
//     average2 = parseInt(average2)
//     return average2;
//     // console.log(sum);
// }
// var total = make_avg2(numbers)
// console.log(total);