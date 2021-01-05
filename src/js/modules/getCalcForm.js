import checkNum from './checkNum';

function getCalcForm(statusForm) {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNum('#width');
    checkNum('#height');

    function bindActionToElem(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        statusForm[prop] = i;
                        break;
                    case "INPUT":
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? statusForm[prop] = 'Cold' : statusForm[prop] = 'Warm';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            statusForm[prop] = item.value;
                        }
                        break;
                    case "SELECT":
                        statusForm[prop] = item.value;
                        break;
                }
                //button unlock for calc
                if(Object.keys(statusForm).length == 3) {
                    document.querySelector('.popup_calc_button').removeAttribute('disabled');
                }
                if(Object.keys(statusForm).length == 5) {
                    document.querySelector('.popup_calc_profile_button').removeAttribute('disabled');
                }
                
                console.log(statusForm);
            });
        });
        
    }

    bindActionToElem('click', windowForm, 'form');
    bindActionToElem('input', windowWidth, 'width');
    bindActionToElem('input', windowHeight, 'height');
    bindActionToElem('change', windowType, 'type');
    bindActionToElem('change', windowProfile, 'profile');

    
}

export default getCalcForm;