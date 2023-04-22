// first class fx
// developer.mozilla.org/en-US/docs/Glossary/First-class_Function?retiredLocale=it

https: function square(n) {
  return n * n;
}

const display = function (fx) {
  console.log("display", fx(5));
};
