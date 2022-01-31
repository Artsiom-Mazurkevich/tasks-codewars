        //Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.




         function isPangram(string){
            let arr = string.toUpperCase().split(' ').join().split('')
            let alf = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            let count = 0;
            for (let i = 0; i < alf.length; i++) {
                arr.includes(alf[i]) ? count++ : false;
            }
            return count === 26 ? true : false;
        }


        console.log (isPangram("The quick brown fox jumps over the lazy dog."));