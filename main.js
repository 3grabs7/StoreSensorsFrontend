// remoce global variables later, yeye i know
const sections = document.querySelectorAll('.section')
let selectedSection = ''

// update selected section
// update which nodes are allowed from current section
sections.forEach((element) => {
	element.addEventListener('click', (e) => {
		// add this section after elected section been set
		// to prevent having to itterate through nodes twice
		sections.forEach((element) => {
			// clear selection
			element.classList.remove('active')
		})
		// update selected section here
		if (!e.target.classList.contains('active')) {
			e.target.classList.add('active')
			selectedSection = e.target.childNodes[1].innerHTML
		}
		// update allowed nodes
		Array.from(sensors.childNodes)
			.filter((node) => node.nodeName === 'DIV')
			.forEach((sensor) => {
				if (sensor.id.includes(selectedSection)) {
					console.log(selectedSection)
					console.log(sensor.id)
					sensor.classList.add('allowedNode')
					sensor.classList.remove('unallowedNode')
				} else {
					sensor.classList.add('unallowedNode')
					sensor.classList.remove('allowedNode')
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
