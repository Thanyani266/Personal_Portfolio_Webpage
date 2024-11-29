const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        const resumeDetails = document.querySelectorAll('.resume-details');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        })
        resumeDetails[idx].classList.add('active');
    })
})