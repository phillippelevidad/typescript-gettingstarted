# TypeScript: Getting-Started

This is my follow-along project for the [*TypeScript: Getting Started*](https://app.pluralsight.com/library/courses/typescript-getting-started/table-of-contents) by [Brice Wilson](https://app.pluralsight.com/profile/author/brice-wilson) on PluralSight.

I've been fiddling with JavaScript since my early developer days, back when I was about 14 years old, and I kept upping my game until after a few years jQuery was launched.

But then I leaned torwards back-end development with a strong focus in C#, and front-end development got side-tracked for me.

I've recently picked up an interest in Node and React though, and so I wanted to take a look in the JavaScript world back again, but now taking advantage of every concept I honed as a backend developer.

This is a great course!

This is a screenshot of my finished project:

![image](https://user-images.githubusercontent.com/4335855/113956395-c4d3e400-97f3-11eb-8a99-6a1dc603084c.png)

And the following are some of my notes.

----------

Install node and npm:
https://nodejs.org/en/download/

Install typescript:
`npm i -g typescript`

## TypeScript project files

- Simple JSON text file named tsconfig.json
- Stores compiler options used with the project
- Specifies files to be included or excluded in compilation
- Supports configuration inheritance
- Use command tsc --init to create a boilerplate tsconfig.json file

The default ts.config file was edited to end up like the one below. Commented settings have been removed for brevity.

```
{ 
  "compilerOptions": { 
    /* Basic Options */ 
    "target": "es5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */ 
    "sourceMap": true,                              /* Generates corresponding '.map' file. */ 
    "outDir": "js",                                 /* Redirect output structure to the directory. */ 
    /* Strict Type-Checking Options */ 
    "strict": true,                                 /* Enable all strict type-checking options. */ 
    /* Advanced Options */ 
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */ 
    "forceConsistentCasingInFileNames": true,       /* Disallow inconsistently-cased references to the same file. */ 
    "watch": true 
  } 
}
```

Check out /tsconfig.base.json and /app/tsconfig.json for the end result of the compiler options.

## Union + using the --strictNullChecks compiler option

``` typescript
let basicString: string;
basicString = null;          /* Error */
basicString = undefied;      /* Error */

let nullableString: string | null;
nullableString = null;       /* OK */
nullableString = undefied;   /* Error */

let mysteryString: string | null | undefined;
mysteryString = null;        /* OK */
mysteryString = undefined;   /* OK */

let mysteryType: string | number;
mysteryType = null;          /* Error */
mysteryType = "hello";       /* OK */
mysteryType = 10;            /* OK */
mysteryType = false;         /* Error */
```

## Function types

Like delegates in C#, a way to pass functions as parameters, do lambdas, etc.

``` typescript
// Define a function that accepts a string and returns void.
const logMessage = (message: string) => console.log(message);

// Define another function exactly like the one before; just using a different syntax.
function logError(err: string): void {
    console.error(err);
}

// Now define a variable that can be assigned a function that accepts a string and returns void.
// This is effectively the same as delegates in C#.
let logger: (value: string) => void;

// Lastly, the logger variable can be assigned any of the previously declared functions:
logger = logMessage;
logger = logError;
logger("Something to log");
```

## Continue with...

Advanced TypeScript
https://app.pluralsight.com/library/courses/typescript-advanced/table-of-contents
TypeScript is a modern language with many advanced features. This course will teach you those features that build on the fundamentals you already know and allow you to harness its full power to write better code with fewer errors.

TypeScript In-depth
https://app.pluralsight.com/library/courses/typescript-in-depth/table-of-contents
This course will help you learn all of the major language features in the latest versions of TypeScript
