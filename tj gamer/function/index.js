const gallery = document.querySelectorAll('.ButtonGallery');
const modalsContainer = document.querySelector('.Modals');

gallery.forEach((button) => {
    button.addEventListener('click', () => {
        const div = document.createElement('div');
        div.className = 'Modal';
        div.textContent = button.textContent; // optional: show which button was clicked

        // When the modal itself is clicked, remove it
        div.addEventListener('click', () => {
            div.remove();
        });

        modalsContainer.appendChild(div);
    });
});