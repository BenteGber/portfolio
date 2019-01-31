const log = console.log;


$(function () {
    log("Connected")
    // log(db.ref().val)
});



$('.open-modal').on('mouseover', (function (event) {

    let target = this.textContent.toLowerCase();
    switch (target) {
        case 'view my work':
            document.querySelector('.open-modal').addEventListener('mouseover', function () {
                modal.classList.toggle('modal-open');
            });
            document.querySelector('.modal-inner').addEventListener('click', function () {
                modal.classList.toggle('modal-open');
            });
            // prevent modal inner from closing parent when clicked
            document.querySelector('.modal-content').addEventListener('click', function (e) {
                e.stopPropagation();
            });
            break;
        case 'contact me':
            log('Create form')
            break;
        case 'linkedin':
            log('LinkedIn Preview')
            break;
        case 'github':
            log('Github Preview')
            break;
    }

}));


