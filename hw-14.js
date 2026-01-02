

// ЗАВДАННЯ 1 

function delayedPromise(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  

  const promisesAll = [
    delayedPromise('Promise 1', 2000),
    delayedPromise('Promise 2', 1000),
    delayedPromise('Promise 3', 3000),
    delayedPromise('Promise 4', 1500),
    delayedPromise('Promise 5', 2500),
  ];
  

  Promise.all(promisesAll)
    .then(results => {
      console.log('Всі проміси виконані (Promise.all):');
      console.log(results);
    })
    .catch(error => {
      console.log('Помилка Promise.all:', error);
    });
  
  

  // ЗАВДАННЯ 2 

  
  function randomDelay(value) {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Значення: ${value}, затримка: ${delay}мс`);
      }, delay);
    });
  }
  

  const promisesRace = [
    randomDelay('A'),
    randomDelay('B'),
    randomDelay('C'),
    randomDelay('D'),
    randomDelay('E'),
  ];
  

  Promise.race(promisesRace)
    .then(result => {
      console.log('Найшвидший проміс (Promise.race):');
      console.log(result);
    })
    .catch(error => {
      console.log('Помилка Promise.race:', error);
    });