document.querySelector('form[name="contact"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    // Save to Local Storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    // Optionally clear the form
    this.reset();
});
