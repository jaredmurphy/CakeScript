
$(document).ready(function() {
  //CODE
  console.log('GravyScript loaded');
  var define_library = function(){
    var Library = {};
    var name = "GravyScript";
    Library.greet = function(){
      alert("Hello from the " + name + " library.");
    }
    return Library;
  }
  //define globally if it doesn't already exist
  if(typeof(Library) === 'undefined'){
    window.Library = define_library();
  }
  else{
    console.log("Library already defined.");
  }


 // ARRAY METHODS


  // array.list();
  Array.prototype.last = function() {
    var length = this.length;
    return this[length -1];
  }
 

  // array.sample();
  Array.prototype.sample = function() { 
    var length = this.length;
    var randomIndex = Math.floor(Math.random() * length + 0);
    return this[randomIndex];
  }

  // array.shuffle();
  Array.prototype.shuffle = function() {
    for (var i = this.length-1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
    return this;
  }

  // array.zip();
  Array.prototype.zip = function(values) {
    hashName = {};
    if (this.length !== values.length) {
      console.log("Error! ARRAYS ARE NOT EQUAL LENGTHS");
    } else {
      for (var i = 0; i < this.length; i++) {
        hashName[this[i]] = values[i];
      }
      return hashName;
    }
  }

 // OBJECT METHODS

 // object.size();
 Object.prototype.size = function() {
   var size = 0;
   for (var key in this) {
     if (this.hasOwnProperty(key)) {
       size++;
      }
    }
    return size;
 };


 // object.sortingHat();
 Object.prototype.sortingHat = function(key) {
   var arr = [];
   for (var i in this) {
     if (this.hasOwnProperty(i)) {
       for (var j in this[i]) {
         if (this[i].hasOwnProperty(j)) {
           if (j === key) {
             arr.push(this[i]);
           }
         }
       }
     }
   }
   return arr.sort(function(a,b){ 
     if (a[key] < b[key]) return -1;
     if (a[key] > b[key]) return 1;
     return 0;
   });
 };


 // object.unZip();
 Object.prototype.unZip = function() {
   var keysArray = [];
   var valuesArray = [];
   for (var key in this) {
     if (key === "unZip") {
       break;
     } else {
       keysArray.push(key);
       valuesArray.push(this[key]);
     }
   }
   return [keysArray, valuesArray];
 }; 
    

  
 // STRING METHODS

  // string.reverse();
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  }
});
