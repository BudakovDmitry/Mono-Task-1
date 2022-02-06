let sum = "3123123.00";

function addThousandsSeparators(sum) {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

console.log(addThousandsSeparators(sum))


