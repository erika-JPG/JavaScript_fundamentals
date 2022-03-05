const tokenstst = {
  mainColor: '#FFF',
};
console.log(JSON.stringify(tokenstst));

const string =
  'Brand Name: Best Home Comfort Gadgets Now Corp Name: Little Light LLC Corp Address: xxxxxxxxxxxx Return Address: 44875-G Industrial Dr Fremont, CA 94538 CS Phone: +1 (888) 888-8888 CS Email: support@besthomecomfortgadgetsnow.com CS Hours: 9am - 5pm EST Billing Descriptor: besthomecomfortgadgetsnow.com Site URL: https://besthomecomfortgadgetsnow.com';

const textArea = document.querySelector('#textInfo');
const textBtn = document.querySelector('#corpInfo');
let data;

textBtn.addEventListener('click', function () {
  const data = textArea.value;
  let dataSplit = data.split(/\n/);
  let aa = [];
  dataSplit.forEach(el => {
    let x = el.split(': ');
    console.log(x);
    x.forEach(element => {
      element.trim();
      console.log(element);
    });
    aa.push(x);
  });

  console.log(aa);
  return data;
});

/*const splitData = function (data) {
  let ret = data.replace('Brand Name: ', '').replace('Corp Name: ', '');
  console.log(ret);
  const split = data.split(': ');
  console.log(split);
};

 x.forEach(e => {
      e.replace(' ', '');
    });

splitData(string);*/
