// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Caml_builtin_exceptions = require("../runtime/caml_builtin_exceptions");

function f(x) {
  return x + 1;
}

function chr(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.Invalid_argument,
          "Char.chr"
        ];
  }
  else {
    return n;
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32;
  }
  else {
    return c;
  }
}

function uppercase(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
    return c - 32;
  }
  else {
    return c;
  }
}

function compare(c1, c2) {
  return c1 - c2;
}

exports.f         = f;
exports.chr       = chr;
exports.lowercase = lowercase;
exports.uppercase = uppercase;
exports.compare   = compare;
/* No side effect */