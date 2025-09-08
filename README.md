## 1)What is the difference between var, let, and const?
when we use var for variable Declaration it his hoisted means declaration part moved to to the top of the code during excution for this we can access code before excution this time we do not get any error.

```js
var text =”lahif”
\\here declaration go to the top of the page like 
var text ; /behind sence
```
let and const also hoisted but enter a temporal dead zone for this we get error if want to acces it before declarition. 

using var we can redeclare a variable with same name. but using let and const it is not possible. 

using let we can reassign value but using const it is not possible. We can not change value of const. 

let const maintain block scope function scope.  Var only maintain function scope.

---

## 2) What is the difference between map(), forEach(), and filter()?
These all are array method. By using this we can make operation on array. 

#### Map(): 
when we need to perform any operation in every value of array then we need new array with updated values then map can be use. It returns new array after loop throw every element of array and perform any operation on them. It take a call back function 
Example 
let arr=[1,2,3]
let newArr= arr.map(el => el+1)


#### forEach():
 when need to just loop throw on elements of array we do not need any return value then this can be use. It also take a call back function. 
#### Example : 
```js
arr.forEach(el => console.log(el));
```


#### filter(): 
when we need return some element from array based on a specific condition then filter use. It returns new array containing only the elements from the original array that satisfy the specific condition.
#### Example

```js
Let newFilterdArray = arr.filter(el => el<10);
```
---
## 3) What are arrow functions in ES6?
Arrow function is the new and shorter syntex of declare function.There are no need to use function keyword. We can easily write in one line. In single line we do not need to use return keyword. 
### Example
```js
let myfun = x => x+2;
```

Here it take on element as parameter and then return it with plus 2. It is more cleaner than the regular function. We can also use multiple line in this. But this time we need to use return keyword
```js
let myfun = x =>{
	return x+2;
} 
```

It is very useful for call back function in array method. Arrow functions do not have their own this. They inherit this  from the place where they are written.


## 4) How does destructuring assignment work in ES6?
Destructuring use for unpack the values of array, object or other into separate variable in simpler and easy way. 


#### Array Destructuring : 
we can destruct values from array and store them in separate variable according to their index 
#### Example:
```js
let myArray = [1,2,3]
const [first,second,third] = myArray;
```

#### Object Destructuring :
 we extract the values of the object and store them in separate variable using their key name.
#### Example:
```js
let myObject ={name:”lahif”, age=”21”}
Const {name,age } = myObject
```
---
## 5) Explain template literals in ES6. How are they different from string concatenation?
Template literals is the new syntax to declare string. Here use backticks for string (``) but normal string use quotes (“”). 
By using this we can easily use variable or expression inside the string using ${}
In template literals we can use easily multiline string without \n . Normal string we need to use \n for new line.

#### Examples
#### Normal string for concatenation 
```js
const name = "lahif";
const age = 21;
const msg = "my name is " + name + " and  i am " + age + " years old.";
console.log(msg);

```

#### Template Literals for concatenation
```js
const name = "lahif";
const age = 21;
const msg= `my name is ${name} and i am ${age} years old.`;
console.log(msg);
```
In template string concatenation is much easier and cleaner than old string. There no need use + for use variable and every time use quotes for this separate string. We can easily use this variable using ${}
