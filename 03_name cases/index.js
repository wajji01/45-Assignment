var perName = "Wajahat mustafa";
console.log(perName.toLowerCase());
console.log(perName.toUpperCase());
console.log(perName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
