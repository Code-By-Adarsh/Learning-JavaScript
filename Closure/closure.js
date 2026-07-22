//------------------------------------------------------
/*
--> Closure
Closure tab hota hai jab ek function apne outer function ke variables ko yaad rakh leta hai, chahe outer function execute hokar khatam ho gaya ho.
*/

//-----------------------------------------------------------
//practice 1:
function outer() {
  let count = 0; // ye variable hai

  function inner() {
    count++; // inner function isko "yaad" rakhta hai
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer() run ho chuka, khatam
counter(); // 1
counter(); // 2
counter(); // 3

/*
Yahan outer() already return ho chuka hai — normally uska count variable delete ho jaana chahiye tha. Lekin inner function usko apne saath "close" karke rakh leta hai. Isiliye naam hai closure — function ne apne surrounding scope ko band (close) karke pack kar liya.

Ek line mein yaad rakhne ke liye:
Function + uska surrounding scope (jahan wo bana tha) = closure
*/

//------------------------------------------------------
//Playwright mein ye kaha kaam aata hai:
function createUserGenerator() {
  let id = 0;
  return function() {
    id++;
    return `testuser_${id}`;
  };
}

const getNextUser = createUserGenerator();
console.log(getNextUser()); // testuser_1
console.log(getNextUser()); // testuser_2

/*
1.Test data ya counters banane mein, jaise unique username generate karna har test run pe
2.Page Object Model mein — jab tu kisi function ke andar page object ko capture karta hai aur use ek helper return karta hai jo baad mein call hota hai, wo bhi closure hi hai.
3.Retry ya wait helper functions jaha ek config variable outer scope mein set hota hai aur inner function use use karta hai.
*/

//-------------------------------------------------------
//practice 2:
function makeMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));

/*
double(5) → 10
triple(5) → 15

Kyun aisa hua — yahi closure ka asli maza hai:

Jab tu makeMultiplier(2) call karta hai, ek naya closure environment banta hai jisme x = 2 hamesha ke liye lock ho jaata hai us returned function ke saath.

Phir jab tu makeMultiplier(3) call karta hai, ek bilkul alag, fresh closure banta hai jisme x = 3 lock hota hai.

Dono double aur triple alag-alag functions hain, apna-apna separate x yaad rakhte hain — ek dusre se koi lena dena nahi:

double → remembers x = 2
triple → remembers x = 3

Isiliye double(5) matlab 2 * 5 = 10 aur triple(5) matlab 3 * 5 = 15.

Ye important insight hai: har baar jab outer function call hota hai, ek naya independent closure banta hai — purana wala overwrite nahi hota. Isiliye pehle wale counter example mein bhi agar tu outer() do baar call karta:
*/

const counter1 = outer();
const counter2 = outer();
counter1(); // 1
counter1(); // 2
counter2(); // 1  ← ye apna fresh count rakhta hai, counter1 se independent