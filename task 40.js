/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

    If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.*/


// assert.strictEqual(bonusTime(10000, true), '£100000');
// assert.strictEqual(bonusTime(25000, true), '£250000');
// assert.strictEqual(bonusTime(10000, false), '£10000');
// assert.strictEqual(bonusTime(60000, false), '£60000');


function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}