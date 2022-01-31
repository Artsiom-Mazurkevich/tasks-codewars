// ("Hello", "o")  ==>  1
    // ("Hello", "l")  ==>  2
    // ("", "z")       ==>  0




     function strCount(str, letter){
        let count = 0;
        let arr = str.split('');
        for (let item of arr) {
            if (item === letter) {
                count++
            }
        }
        return count
    }


    console.log (strCount ('Hellooooooooo', 'o'));