const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for (const sleep of hours) {
    if (sleep >= 7) {
        happyHours.push(sleep)
    }
    else {
        grumpyHours.push(sleep)
    }
}
console.log(`I was grumpy on ${grumpyHours.length} days.`)
console.log(`I was happy on ${happyHours.length} days.`)


/*Run Your Code
In your terminal, run your code with the following command.

node main.js
When you run the code, it should display the following.

I was grumpy on 6 days.
I was happy on 11 days.*/

/*const wines = [ "red", "white", "white", "white", "red", "white", "red" ]
const wineCellar = []
const wineRefrigerator = []

for (const wine of wines) {
	if (wine === "red") {
		wineCellar.push(wine)
	}
	else {
		wineRefrigerator.push(wine)
	}
}

console.log(`
Contents of wine cellar: ${wineCellar}
Contents of wine refrigerator: ${wineRefrigerator}
`)*/
