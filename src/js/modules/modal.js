import clearInput from './clearInput';

function modal() {
    function bindModal(triggerSelector, modalSelector, closeSelector, block = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              allModal = document.querySelectorAll('[data-modal]');
            
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
					e.preventDefault();
                }

                hideModal();
                showModal();
                
                function hideModal() {
                    allModal.forEach(item => {
                        item.style.display = 'none';
                    });
                }
                
                function showModal() {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });   
        });

        close.addEventListener('click', () => {
            document.body.style.overflow = '';
            modal.style.display = 'none';
            clearInput();
        });

        modal.addEventListener('click', (e) => {
            if(e.target == modal && block) {
                document.body.style.overflow = '';
                modal.style.display = 'none';
                clearInput();
            }
        });
   
    }

    const timerId = setTimeout(() => {
        document.querySelector('#modal_timer').style.display = 'block';
    }, 5000);

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modal;