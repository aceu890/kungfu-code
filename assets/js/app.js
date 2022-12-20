//LOADER 
window.addEventListener('load', () => {
	const contenedor_loader = document.querySelector('.contenedor_loader')
	contenedor_loader.style.opacity = 0
	contenedor_loader.style.visibility = 'hidden'
})

// Activar y desactivar Menu
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items');
            menu_items.classList.toggle('show')
        })
    }
})


