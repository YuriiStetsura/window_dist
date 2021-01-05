function images() {
    const imageFilde = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imageFilde.classList.add('popup');
    workSection.append(imageFilde);

    imageFilde.style.justifyContent = 'center';
    imageFilde.style.alignItems = 'center';
    imageFilde.style.display = 'none';

    imageFilde.append(bigImg);

    workSection.addEventListener('click' , (e) => {
        e.preventDefault();
        const target = e.target;
        if(target && target.classList.contains('preview')) {
            document.body.style.overflow = 'hidden';
            imageFilde.style.display = 'flex';
            const href = target.parentNode.getAttribute('href');
            bigImg.src = href;
        }

        if(target == imageFilde) {
            document.body.style.overflow = '';
            imageFilde.style.display = 'none';
        }
    });
    
    workSection.addEventListener('keydown', (e) => {
        if(e.code == 'Escape') {
            document.body.style.overflow = '';
            imageFilde.style.display = 'none'; 
        }
    }); 
}

export default images;