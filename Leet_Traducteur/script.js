const leetLetters = [
    "4",
    "8",
    "C",
    "d",
    "3",
    "F",
    "6",
    "h",
    "!",
    "J",
    "k",
    "1",
    "m",
    "n",
    "0",
    "p",
    "Q",
    "r",
    "5",
    "7",
    "u",
    "v",
    "w",
    "x",
    "Y",
    "2"
  ];
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  let tempLeetValue = "";
  let tempValue = "";
  
  function handleInputChange(e) {
    tempLeetValue = [...this.value].map(letter => {
      let i = letters.indexOf(letter.toLowerCase());
      return i > -1 ? leetLetters[i] : letter;
    });
    tempValue = this.value;
    output.value = tempLeetValue.join("");
  }
  
  function handleOutputChange(e) {
    tempValue = [...this.value].map(letter => {
      let i = leetLetters.indexOf(letter.toLowerCase());
      return i > -1 ? letters[i] : letter;
    });
    tempLeetValue = this.value;
    input.value = tempValue.join("");
  }
  
  input.addEventListener("keyup", handleInputChange);
  output.addEventListener("keyup", handleOutputChange);
  
  input.focus();
  