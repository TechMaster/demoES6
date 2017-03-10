/**
 * Created by techmaster on 12/28/16.
 */
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}


console.log(getFood(false)); // undefined