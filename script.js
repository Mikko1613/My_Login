// Definiujemy użytkowników i hasła z odpowiadającymi im linkami
const users = [
    { username: "testuser", password: "1234", redirect: "https://www.youtube.com/watch?v=lKduL67IulI" },
    { username: "user2", password: "abcd", redirect: "https://www.google.com" },
    { username: "admin", password: "admin", redirect: "https://www.wikipedia.org" }
];

// Pobranie formularza
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // zatrzymuje domyślne wysyłanie formularza

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Szukamy dopasowanego użytkownika
    const user = users.find(u => u.username === username && u.password === password);

    if(user) {
        // Przekierowanie na stronę zależną od hasła
        window.location.href = user.redirect;
    } else {
        alert("Niepoprawny login lub hasło!");
    }
});
