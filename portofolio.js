// Efek Scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 200) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Modal
var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modal-title');
var modalDescription = document.getElementById('modal-description');
var closeModal = document.querySelector('.close');

document.querySelectorAll('.project-title').forEach(function(title) {
    title.addEventListener('click', function() {
        var modalId = title.getAttribute('data-modal');
        var modalContent = document.getElementById(modalId);
        modalTitle.textContent = title.textContent;
        modalDescription.textContent = modalContent.querySelector('p').textContent;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});