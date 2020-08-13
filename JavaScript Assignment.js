function secConverter(min)
{
  return min*60;
}

var min = window.prompt("Enter Minutes: ");
console.log(secConverter(min));


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



let Jackpot = (list) => list.every(item => list.indexOf(item) === 0);
var arr=[];
for(var i=0;i<4;i++)
  {
    arr[i]=window.prompt("enter elment of array")
  }
console.log(check(arr));



function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};
let arr =[1,0,1,0];
console.log(removeDuplicates(arr))






