//Very Easy
//Q1. Convert Minutes into Seconds
function secConverter(min)
{
  return min*60;
}

var min = window.prompt("Enter Minutes: ");
console.log(secConverter(min));

//Q2. Divides Evenly
function divider(a,b)
{
  var c=a/b;
  if(c%2==0)
  {return true}
  else
    {
      return false;
    }
}
var a = window.prompt("Enter 1st no.: ");
var b = window.prompt("Enter 2nd no.: ");
console.log(divider(a,b));

//(Easy)
//Q1. Count Instances of a Character in a String

function char_count(str, letter) 
{
 var Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      Count += 1;
      }
  }
  return Count;
}

var a = window.prompt("Enter a String : ");
var b = window.prompt("Enter a word to count : ");

console.log(char_count(a, b));

//Q2. Add up the Numbers from a Single Number

function addUpto(n)
{
  var sum=0;
  for(var i=1; i<=n; i++)
    {
      sum +=i;
    }
  return sum;
}

var a = window.prompt("Enter a No. : ");
console.log(addUpto(a));


//Q3. Replace Vowel with Another Character

function withoutVowels(string) {

  var newstr = "";
  for (var i = 0; i < string.length; i++) {
      if (string[i]=='a') 
      {
        newstr +='1';
      }
    else if (string[i]=='e') 
      {
        newstr +='2';
      }
   else if (string[i]=='i') 
      {
        newstr +='3';
      }
    else if (string[i]=='o') 
      {
        newstr +='4';
      }
    else if (string[i]=='u') 
      {
        newstr +='1';
      }
    else
    {
      newstr +=string[i]
    }
     }
    
  return newstr;
}

var str = window.prompt("Enter a String : ");
console.log(withoutVowels(str));



//Medium
//Q1. Reverse Words Starting with a Particular Letter


function reverseInPlace(str,a) 
{
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
  var s= "";
  for (var i = 0; i < words.length; i++) {
    s=words[i];
    if(s.charAt(0)==a)
      {
     result += words[i].split('').reverse().join('') + " ";
      }
    else
      {
        result += words[i]+ " ";;
      }
  }
  return result
}
var a = window.prompt("Enter a String : ");
var b = window.prompt("Enter a first letterof word to reverse : ");

console.log(reverseInPlace(a,b))

//Q2. Hitting the Jackpot

let Jackpot = (list) => list.every(item => list.indexOf(item) === 0);
var arr=[];
for(var i=0;i<4;i++)
  {
    arr[i]=window.prompt("enter elment of array")
  }
console.log(check(arr));


//Q3. Remove Duplicates from an Array

function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};
let arr =[1,0,1,0];
console.log(removeDuplicates(arr))

console.log('=====Q1. Get Real Type=====');




//(Hard)
//Q1. Get Real Type

function realType(value) {
  let arr = Object.prototype.toString.call(value);
  let type = arr.split(' ');
  let typeStr = '';

  for (i = 0; i < type[1].length; i++) {
    if (type[1].charAt(i) !== ']') typeStr += type[1].charAt(i);
  }

  return typeStr.toLocaleLowerCase();
}

console.log(realType(1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));

console.log('=======Q2) Numbers in Strings=========');


//Q2. Numbers in Strings

function numInStr(string) {
  let finalArray = [];
  for (i = 0; i < string.length; i++) {
    arr = string[i].split('');

    for (j = 0; j < arr.length; j++) {
      if (
        arr[j] == '1' ||
        arr[j] == '2' ||
        arr[j] == '3' ||
        arr[j] == '4' ||
        arr[j] == '5' ||
        arr[j] == '6' ||
        arr[j] == '7' ||
        arr[j] == '8' ||
        arr[j] == '9' ||
        arr[j] == '0'
      ) {
        finalArray.push(arr.join(''));
        break;
      }
    }
  }
  return finalArray;
}

console.log(numInStr(['1a', 'a', '2b', 'b']));
console.log(numInStr(['abc', 'abc10']));
console.log(numInStr(['abc', 'ab10c', 'ab10c', 'bcd']));
console.log(numInStr(['this is a test', 'test1']));




