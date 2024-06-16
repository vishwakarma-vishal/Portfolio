import './ScrollUp.css';

export default function ScrollUp() {
    //logic to show scroll up button
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        //when the scroll is higher than 560 viewport height
        if (this.scrollY >= 500) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

    return (
        <a href="#" className='scrollup'>
            <i class="uil uil-arrow-up scrollup-icon"></i>
        </a>
    )
}