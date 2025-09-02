
1. All objects in JavaScript have a prototype:
    You can check the object’s prototype by using the Object.getPrototypeOf() function on the object, like Object.getPrototypeOf(player1).
    The return value (result) of this function refers to the .prototype property of the Object Constructor (i.e., Player(name, marker)) - Object.getPrototypeOf(player1) === Player.prototype.
2. The prototype is another object…
    The value of the Object Constructor’s .prototype property (i.e., Player.prototype) contains the prototype object.
    The reference to this value of Player.prototype is stored in every Player object, every time a Player object is created.
    Hence, you get a true value returned when you check the Objects prototype - Object.getPrototypeOf(player1) === Player.prototype.
3. …that the original object inherits from, and has access to all of its prototype’s methods and properties:
    As said in the earlier point, every Player object has a value which refers to Player.prototype. So: Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2) (returns true).
    So, any properties or methods defined on Player.prototype will be available to the created Player objects!

* `Prototypal inheritance:` is when the `object`'s `prototype` because every `object has a prototype` has a series of methods/properties that the `derived object` inherited from. This is good, because it shares memory and it saves memory usage.   

* `Functions in JavaScript:` Every function in javascript can be treated as a `constructor` meaning that you should add `safe guards` to it if it is not supposed to allocate memory on the heap. This can cause hard to track errors. You can do this by `if (!new.target) new throw("Not supposed to insitiate!\n";)`

- How do you write an object constructor and instantiate the object?
    * There are three ways of making a object and instantiating it:
        1. Use the `object literal syntax`, then you can use the `dot notation` to access its' `properties/methods`.
        2. `defining a class`, Which then you create a `new object` like so: `let foo = new class(...arg);` it will allocate memory on the heap.
        3. `Declare and define` an function with or without parameters, because functions are object constructors in JavaScript.
            - Depending on the function and how it is defined, you will or will not require the `assignment operator`.

- How can you prevent that an object constructor is called without using the keyword new?
    * You will use `control flow statements` with the following expression: `!new.target`

- What is a prototype and how can it be used?
    * Prototype in JavaScript is a built in `property` that every object has in JavaScript. You can use the `Object` which is a built in type to do:
        - Type checking (Checking to see if the object's instance is a certain type)
        - You can set the prototypes of the object with a different object using the proper `setter` method which `Object` offers.
        - You can also get specific data back from the object using the `getter` methods that `Object` offers.
        - `====================================================================================================`
        - `[[Prototype]]` is a hidden property that references an object’s prototype.
        - An object's prototype is the object that an object descends or inherits from.
        - `Arrow Functions` do not have `.prototype` because it is a `lambda function`.
        - `.prototype` allows access to all the functions of the hidden property.

- What is prototypal inheritance?
    * It is when an object inherits from another object and can access the other object's methods 

- What are the basic do’s and don’t’s of prototypal inheritance?
    - If you want to modify an objects `prototype` or view it's data, you would use the `Object` `setter/getter` methods to do so.
    - You should not perform any kind of `explicit` conversions and should perform only `implicit` conversions. 
    - When you do use `Object`'s setters and getters, make sure you define the the object first then set the prototypes before you do anything else to it.

- How does this behave in different situations?
    - the `this` keyword in JavaScript you don't need to define and declare a property or method to access a property, because it can function globally and locally. As long as it is in the field and is known, you can use `this` to operate on it if needed. 


- How does scope work in JavaScript?
- What are closures and how do they help in creating private variables?
- What common issues can you face when working with constructors?
- What are private variables in factory functions and how can they be useful?
- How can we implement prototypal inheritance with factory functions?
- How does the module pattern work?
- What does IIFE stand for and what are they?
- What is the concept of namespacing and how do factory functions help with encapsulation?


