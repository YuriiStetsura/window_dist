import postData from '../services/server';
import checkNum from './checkNum';
import closeModalByTimer from './closeModalByTimer';
import clearInput from './clearInput';

function forms(statusForm) {
    const form = document.querySelectorAll('form');
          
    
    checkNum('input[name="user_phone"]');

    form.forEach(item => {
        bindPostData(item);
    });

    const message = {
        loading: 'loading...',
        success: "Перезвоним в течение 10 минут",
        failure: 'Error'
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const formData = new FormData(form);
            if(form.getAttribute('data-calc') === 'end') {
                for(let key in statusForm) {
                    formData.append(key, statusForm[key]);
                }
            }
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/posts', json)
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                form.reset();
                clearInput();
                
                // delete obj
                for(let key in statusForm) {
                    delete statusForm[key];
                }

                closeModalByTimer();

                setTimeout(() => {
                    statusMessage.remove();
                }, 4000);
            });
        });
        
    }
}

export default forms;