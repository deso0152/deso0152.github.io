// image selector

const imageSelectorItems = document.querySelectorAll('.image-selector-item')

const homeImages = [
    { id: 'still', path: './images/home/01-beer.jpg' },
    { id: 'food', path: './images/home/02-milkshake.jpg' },
    { id: 'retouching', path: './images/home/03-before_after.png' },
]

const changeSelectedItem = (element) => {
    imageSelectorItems.forEach(item => {
        item.classList.remove('selected')
    })
    element.classList.add('selected')
}

const changeHomeBackground = ({ target }) => {
    const homeSelector = document.querySelector('#home')
    const [ selectedImage ] = homeImages.filter(image => image.id === target.id)

    homeSelector.style.backgroundImage = `url(${selectedImage.path})`
    changeSelectedItem(target)
}

imageSelectorItems.forEach(item => {
    item.addEventListener('mouseover', changeHomeBackground)
})

// menu toggle

const menuSelector = document.querySelector('.menu-icons')
const headerSelector = document.querySelector('.header')

const toggleMenu = () => {
    headerSelector.classList.toggle('open')
}

menuSelector.addEventListener('click', toggleMenu) 

// home redirector

const homeRedirector = ({ target }) => {
    window.location.href = `${target.id}.html`
}

imageSelectorItems.forEach(item => {
    item.addEventListener('click', homeRedirector)
})

// gotop

const goTopSelector = document.querySelector('.arrow-top')

goTopSelector.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

