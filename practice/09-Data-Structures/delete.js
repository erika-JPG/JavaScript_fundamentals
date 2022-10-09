if (prodName) {
  // Add item to order summary by dynamically creating the HTML and adding it to the OS
  $(
    '<div class="sf-os-prod-row t-row"><div class="t-cell">' +
      prodName +
      '</div><div class="t-cell">$' +
      parseFloat(price).toFixed(2) +
      '</div></div>'
  ).prependTo('.sf-dynamic-cart-summary');
}
p_1;
p_2;
