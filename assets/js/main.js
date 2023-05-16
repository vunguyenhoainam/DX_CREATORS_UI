var RUN = {
    // Show Menu
    showMenu: () => {
        $('.wrap-user').click(() => {
            $('.user-list-option').toggle();
        });
    },

    // Show Modal Logout
    showModalLogout: () => {
        $('.btn-show-logout').click(() => {
            $('.user-list-option').toggle();
        });
    },

    // Initial
    init: () => {
        RUN.showMenu();
        RUN.showModalLogout();
    },
};

$(document).ready(() => {
    setTimeout(() => {
        RUN.init();
    }, 100);
});
