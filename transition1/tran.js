// window.onload = () => {
//     const transition_el = document.querySelector('.transition');

//     setTimeout(() => {
//         transition_el.classList.remove('is-active');
//     }, 500);
// }

window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 250);

// the below is for it tp locate every anchor tag on the page
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', Event  => {
            e.preventDefault();
            // when preventDefault, it means it's not gonna to link to another page. it will do nothing,
            // so, to go to different page(s), we will do below. 
            let target = Event.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                    window.location.href = target;
            }, 250);
            // at this point it will fade, and fade out.
        });
    }
}