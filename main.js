// remove global variables later, yeye i know
const sections = document.querySelectorAll('.section')
let selectedSection = ''

// section names/id
const sectionNames = ['Nopp', 'Dunder', 'Kitchen', 'Electronics', 'Recreation']
let i = 0
sections.forEach((section) => {
	const nodes = Array.from(section.childNodes).filter(
		(element) => element.nodeName === 'P'
	)
	// set id for section name and count
	nodes.forEach((node) => {
		if (node.classList.contains('sectionName')) {
			node.id = sectionNames[i]
			node.innerHTML = sectionNames[i]
		}
		if (node.classList.contains('peopleCount')) {
			node.id = `${sectionNames[i]}Count`
			node.innerHTML = 0
			i++
		}
	})
})

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
				// entrance will add more people to entry section 'electronics'
				// if other or no section is selected
				if (sensor.id === 'Entrance') {
					if (selectedSection === 'Electronics') {
						sensor.innerHTML = '🔻'
						return
					}
					sensor.innerHTML = '🔺'
					return
				}
				// remove pointer-events and black out unallowed nodes
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

// Sensor codes {from}-{to}
const sensorNames = [
	'Nopp-Dunder',
	'Nopp-Kitchen',
	'Nopp-Electronics',
	'Dunder-Electronics',
	'Dunder-Recreation',
	'Electronics-Recreation',
	'Entrance',
]

const sensors = document.querySelector('.store_sensors')
// assign ids based on sensorNames
Array.from(sensors.childNodes)
	.filter((node) => node.nodeName === 'DIV')
	.forEach((element, index) => {
		element.id = sensorNames[index]
	})

// fetch post on sensor click
Array.from(sensors.childNodes).forEach((element) => {
	element.addEventListener('click', (e) => {
		postLog(e.target.id, selectedSection)
	})
})
