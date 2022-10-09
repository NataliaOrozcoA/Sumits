// Native modules:
const fs = require ("fs");

//01 copy txt
fs.copyFileSync ("file.txt", "file2.txt");

//02 read txt
fs.readFile ("file2.txt", (err,data) => {
    if (!err){
        console.log("data: "+ data);
    } else {
        console.log(err);
    }
});

//03 weite txt
fs.writeFile ("HelloWorld.txt", "Hello World! :)", err => {
    if (err){
        console.log(err);
    }
    console.log("Hello World >> HelloWorld.txt")
});
/*fs.readFile ("HelloWorld.txt", (err,data) => {
    if (!err){
        console.log("data: "+ data);
    } else {
        console.log(err);
    }
});*/


// External modules:
var sh = require ("superheroes");
var sv = require ("supervillains");

//01 superheroes packege
var hero = sh.random();
//console.log("Fear not! Here is "+ hero);

//02 supervillains packege
var villan = sv.random();
console.log(`- Look it is ${villan},  ready to do its evil deeds!\n- Who could save us?!\n- Fear not! Here is ${hero} to the rescue!`)