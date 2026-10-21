// OBJECTS NEED JSON

// Save data to local storage
function saveData(key, value) {
  const text = JSON.stringify(value);

  localStorage.setItem(key, text);
}

saveData("student", {
  name: "Donald",
  age: 20
});



// Incase there is an error, we can use try catch to handle it
function saveData(key, value) {
  try {
    const text = JSON.stringify(value);

    localStorage.setItem(key, text);
  } catch (error) {
    console.log("Could not save the data.");
  }
}

// Load data from local storage
function loadData(key, fallback) {
  try {
    const text = localStorage.getItem(key);

    if (text === null) {
      return fallback;
    }

    return JSON.parse(text);
  } catch (error) {
    return fallback;
  }
}