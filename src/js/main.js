import forms from './modules/forms';
import modal from './modules/modal';
import tabs from './modules/tabs';
import getCalcForm from './modules/getCalcForm';
import timer from './modules/timer';
import images from './modules/images';
import './slider';

window.addEventListener('DOMContentLoaded' , () => {
    
    let statusForm = {};

    getCalcForm(statusForm);
    forms(statusForm);
    modal();
    tabs({
        headerSelector: '.glazing_slider',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeClass: 'active'
    });
    tabs({
        headerSelector: '.decoration_slider',
        tabSelector: '.no_click',
        contentSelector: '.decoration_content > div > div',
        activeClass: 'after_click'
    });
    tabs({
        headerSelector: '.balcon_icons',
        tabSelector: '.balcon_icons_img',
        contentSelector: '.big_img > img',
        activeClass: 'do_image_more',
        display: 'inline-block'
    });
    timer('.timer1', '2021-01-31');
    images();
});