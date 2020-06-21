<p align="center"> 
 <img align="center" src="logo/brand.png">
</p>


 # Nw.js (Next Wagon.js) is A Lightweight Javascript Library for Form Validation

--------------------------------------------

<p align="center">
 <a href="https://github.com/fauzan121002/nwjs/LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
 </a>

 <a href="https://github.com/fauzan121002/nwjs">
  <img src="https://img.shields.io/github/forks/fauzan121002/nwjs?style=flat-square" alt="MIT License">
 </a>
</p>

<p align="center">
 <a href="https://github.com/fauzan121002/nwjs/issues">
  <img src="https://img.shields.io/github/issues/fauzan121002/nwjs?style=flat-square" alt="Open Collective">
 </a>

 <a href="https://github.com/fauzan121002/nwjs">
  <img src="https://img.shields.io/github/stars/fauzan121002/nwjs?style=flat-square" alt="Open Collective">
 </a>

 <a href="https://github.com/fauzan121002/nwjs">
  <img src="http://hits.dwyl.com/fauzan121002/https://github.com/fauzan121002/nwjs.svg" alt="Open Collective">
 </a>
</p>

--------------------------------------------
## Table of Contents

* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Usage
You can see the example usage <a href="https://github.com/fauzan121002/nwjs/blob/master/examples/index.html">here</a>

### How to use
You can import the script inside the body tag.
```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nwjs</title>
</head>
<body>
    <form action="" method="post">
        <input error="wkwkw" id="testInput" type="text" placeholder="text">
        <span error="testInput"></span>

        <button type="submit">Login</button>
    </form>    
    <script src="https://rawcdn.githack.com/fauzan121002/nwjs/1ed86edaf5ade72454d03dae3fad3d38baf44130/nw.js"></script>
</body>
</html>
```

Then just add "validate" attribute in your form tag
```html
    <form action="" method="post" validate>
```

supported input type :
 * email
 * text
 * password
 * checkbox
 * file
 * radio
 * number
and also textarea.

## Contributing
You can create new pull requests <a href="https://github.com/fauzan121002/nwjs/pulls">here</a>

## License
This javascript library is published under <a href="https://github.com/fauzan121002/nwjs/blob/master/LICENSE">MIT License</a>
