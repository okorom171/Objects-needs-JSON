// MAKING THE BROWSER REMEMBER


const profileForm = document.getElementById("profile-form");

// To stop the page from reloading
profileForm.addEventListener("submit", function (x) {
  x.preventDefault();

  const name = document.getElementById("name").value;
  const favoriteColor = document.getElementById("favoriteColor");
  const submit = document.getElementById("submit").value;

  // Creating a user object
  const profileCard = {
    name: name,
    favoriteColor: favoriteColor,
  };

  // saving to localStorage, JSON.stringify
  localStorage.setItem("profile", JSON.stringify(profileCard));

  alert("Registration successful");
  profileForm.reset();
});
