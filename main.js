const sections = document.querySelectorAll('.section')
let selectedSection = ''

sections.forEach((element) => {
	element.addEventListener('click', (e) => {
		sections.forEach((element) => {
			element.classList.remove('active')
		})
		if (!e.target.classList.contains('active')) {
			e.target.classList.add('active')
			selectedSection = e.target.childNodes[1].innerHTML
			console.log(selectedSection)
			return
		}
	})
})

const sensors = document.querySelector('.store_sensors')
console.log(sensors.childNodes)
const sensorNames = [
	'Nopp-Dunder',
	'Nopp-Kitchen',
	'Nopp-Electronics',
	'Dunder-Electronics',
	'Dunder-Recreation',
	'Electronics-Recreation',
	'Entrance',
]
Array.from(sensors.childNodes)
	.filter((node) => node.nodeName === 'DIV')
	.forEach((element, index) => {
		element.innerHTML += `<br>${sensorNames[index]}`
		element.id = sensorNames[index]
	})
