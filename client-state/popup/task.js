const modal = document.querySelector('.modal');
const modalClose = document.querySelectorAll(".modal__close");
modal.classList.toggle('modal_active');

    function setCookie(name, value) {
    
        value = encodeURIComponent(value)
        var updatedCookie = name + "=" + value
        document.cookie = updatedCookie
    } 

    function getCookie(name) {

        var matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

     
    modalClose.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const parentModal = this.closest('.modal');
        parentModal.classList.remove('modal_active');

        if (parentModal.classList != 'modal_active') {
         setCookie('state', 'modal_close')
        } 

    });
 
 
}); 
    function ready() {
        if (getCookie('state') != undefined) {
            modal.classList.remove('modal_active');
        }
      }
document.addEventListener("DOMContentLoaded", ready);