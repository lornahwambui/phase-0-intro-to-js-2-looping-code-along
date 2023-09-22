// Code your solutions in this file
function writeCards(namesArray, eventName) {
    const thankYouMessages = [];
 for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
     thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  const names = ["Alice", "Bob", "Charlie"];
  const event = "birthday";
  
  const messages = writeCards(names, event);
  for (const message of messages) {
    console.log(message);
  }

  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--; 
    }
  }
  countDown(10);
  
