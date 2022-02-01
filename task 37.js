    // Kata Task
    // I have a cat and a dog.

    // I got them at the same time as kitten/puppy. That was humanYears years ago.

    // Return their respective ages now as [humanYears,catYears,dogYears]

    // NOTES:

    // humanYears >= 1
    // humanYears are whole numbers only
    // Cat Years
    // 15 cat years for first year
    // +9 cat years for second year
    // +4 cat years for each year after that
    // Dog Years
    // 15 dog years for first year
    // +9 dog years for second year
    // +5 dog years for each year after that


    // humanYearsCatYearsDogYears(1), [1,15,15])
    // humanYearsCatYearsDogYears(2), [2,24,24])
    // humanYearsCatYearsDogYears(10), [10,56,64])







     var humanYearsCatYearsDogYears = function (humanYears) {
         let arr = [];
         arr[0] = humanYears;
         let cat = 0;
         let dog = 0;
         let catYears = [15, 9, 4];
         let dogYears = [15, 9, 5];
         for (let i = 0; i < humanYears; i++) {
             if (humanYears <= 2) {
                 arr[1] = cat += catYears[i];
                 arr[2] = dog += dogYears[i];

             } else {
                 cat += 4;
                 dog += 5;
                 arr[1] = (cat - 8) + 24;
                 arr[2] = (dog - 10) + 24;
             }
         }
         return arr
     }
     console.log(humanYearsCatYearsDogYears(2));