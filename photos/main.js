
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const popupOverlay = document.getElementById('popup-overlay')

openPopupButtons.forEach(button => {
	button.addEventListener('click', () =>{
		const popup = document.querySelector(button.dataset.popupTarget)
		openPopup(popup)
	})
})

closePopupButtons.forEach(button => {
	button.addEventListener('click', () =>{
		const popup = button.closest('.service-popup')
		closePopup(popup)
	})
})


function openPopup(popup){
	if (popup == null) return
	popup.classList.add('active')
	popupOverlay.classList.add('active')
}

function closePopup(popup){
	if (popup == null) return
	popup.classList.remove('active')
	popupOverlay.classList.remove('active')
}