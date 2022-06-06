function solution(roman) {
    let count = 0;
    for (let i = 0; i < roman.length; i++) {
        switch (roman[i]) {
            case 'I': {
              count += 1;
                break;
            }
            case 'V': {
                count += 5;
                break;
            }
            case 'X': {
                count += 10;
                break;
            }
            case 'L': {
                count += 50;
                break;
            }
            case 'C': {
                count += 100;
                break;
            }
            case 'D': {
                count += 500;
                break;
            }
            case 'M': {
                count += 1000;
                break;
            }
        }

    }
    return count
}

console.log(solution('IV'));




