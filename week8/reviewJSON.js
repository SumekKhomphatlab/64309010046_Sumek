//let obj = {
  //  key : 'String'
//}

let json = '{"fname":"Sam","lname":"Smith"}';
let Obj = JSON.parse(json);

//console.log(typeof(Obj));

let Obj2 = {
    fname : "JACK",
    lname : "Smith"
};
let json2 = JSON.stringify(Obj2);
console.log(typeof(json2));