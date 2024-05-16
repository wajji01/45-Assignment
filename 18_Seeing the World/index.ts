let FavCountry: string[] = ["Pakistan", "Saudi Arab", "America", "China"];

// • Print your array in its original order.
console.log("Original Order :",FavCountry);

// Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order :",[...FavCountry].sort());

// Show that your array is still in its original order by printing it.
console.log("still in its original order :",FavCountry);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order :",[...FavCountry].reverse());

// how that your array is still in its original order by printing it again.
console.log("still in its original order :",FavCountry);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original Arry Reverse :",FavCountry.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back To original Order :",FavCountry.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in alphabetical order :",FavCountry.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("BOriginal Arry reverse again :",FavCountry.reverse());
