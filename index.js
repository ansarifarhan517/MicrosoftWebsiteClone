let toggle = false
document.getElementById('hamburger').addEventListener('click', () => {
    const msFeatures = document.getElementById('msFeatures')
    if (!toggle) {
        msFeatures.classList.remove('-translate-x-96')
        msFeatures.classList.remove('w-fit')
        toggle = true
    }
    else {
        msFeatures.classList.add('-translate-x-96')
        msFeatures.classList.add('w-full')
        // msFeatures.classList.add('p-4')

        toggle = false

    }
    // msFeatures.classList.add('')
})