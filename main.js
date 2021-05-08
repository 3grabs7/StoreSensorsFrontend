// remoce global variables later, yeye i know
const sections = document.querySelectorAll('.section')
let selectedSection = ''

// update selected section
// update which nodes are allowed from current section
sections.forEach((element) => {
	element.addEventListener('click', (e) => {
		// clear selection
		sections.forEach((element) => {
			element.classList.remove('active')
		})
		// update selected section
		if (!e.target.classList.contains('active')) {
			e.target.classList.add('active')
			selectedSection = e.target.childNodes[1].innerHTML
		}
		// update allowed nodes
		Array.from(sensors.childNodes)
			.filter((node) => node.nodeName === 'DIV')
			.forEach((sensor) => {
				if (sensor.id === 'Entrance') {
					if (selectedSection === 'Electronics') {
						sensor.innerHTML = '🔻'
						return
					}
					sensor.innerHTML = '🔺'
					return
				}
				if (sensor.id.includes(selectedSection)) {
					sensor.classList.add('allowedNode')
					sensor.classList.remove('unallowedNode')
					sensor.innerHTML = '🟣'
				} else {
					sensor.classList.add('unallowedNode')
					sensor.classList.remove('allowedNode')
					sensor.innerHTML = '⚫'
				}
			})
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
		element.id = sensorNames[index]
	})

Array.from(sensors.childNodes).forEach((element) => {
	element.addEventListener('click', (e) => {
		postLog(e.target.id, selectedSection)
	})
})
