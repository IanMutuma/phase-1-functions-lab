function distanceFromHqInBlocks(num1, num2 = 42){
    let distance = num1 - num2;

    return Math.abs(distance);

}
console.log (distanceFromHqInBlocks (43))

function distanceFromHqInFeet (num1){
     let distanceF = distanceFromHqInBlocks(num1) * 264 ;
     return Math.abs(distanceF );
}
console. log (distanceFromHqInFeet(50))

function distanceTravelledInFeet (num1,num2){
    let travFeet = (num1-num2) * 264 ;
    return Math.abs(travFeet);

}
console.log (distanceTravelledInFeet(34, 50)) 

function calculatesFarePrice (D){
    if (D < 400){
        return "free" ;
    }
    if (400 < D < 2000){
        return "2 cent per foot";
    }
    if (2000 < D < 2500){
        return "25 $ ";
    }
    if (D > 2500){
        return "cannot travel that far"
    }
}
console.log (calculatesFarePrice(2112))