function closeModalByTimer() {
    const allModal = document.querySelectorAll('[data-modal]');

    allModal.forEach(item => {
        setTimeout(() => {
            item.style.display = 'none';
            document.body.style.overflow = '';
        }, 4000);
    });
}

export default closeModalByTimer;