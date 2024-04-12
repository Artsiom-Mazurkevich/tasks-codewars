function arithmetic(a, b, operator){
    switch(operator) {
        case ("add"): {
            return a + b
        }
        case ('subtract'): {
            return a - b
        }
        case ('multiply'): {
            return a * b
        }
        case ('divide'): {
            return a / b
        }
    }
}

arithmetic(2,3,"add")
