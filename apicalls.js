async function postLog(sensorId, selectedSection) {
	// entrance will have unique post
	if (sensorId === 'Entrance') {
		// Entrance-Exit
		// Entrance-Enter
		var direction = sensorId.split('-')[1]
		// var response = await fetch(
		// 	`https://localhost:42069/api/sensorlog/post?input=${sensorId}.${direction}`
		// )
		// console.log(response)
		return
	}
	// calculate which section is getting entered by removing selected section from sensor id
	const enteredSection = sensorId.replace(selectedSection, '').replace('-', '')

	// console.log(enteredSection)
	// console.log(exitedSection)

	// var response = await fetch(
	// 	`https://localhost:42069/api/sensorlog/post?input=${enteredSection}.${exitedSection}`
	// )
	// console.log(response)
	updateCounts(enteredSection, selectedSection)
}

async function updateCounts(enteredSection, selectedSection) {
	// Get affected sections and update their count
	// const response
	// const json
	sections.forEach((section) => {
		const nodes = Array.from(section.childNodes).filter(
			(element) => element.nodeName === 'P'
		)
		nodes.forEach((node) => {
			if (node.id === `${selectedSection}Count`) {
				node.innerHTML = parseInt(node.innerHTML) - 1
			}
			if (node.id === `${enteredSection}Count`) {
				node.innerHTML = parseInt(node.innerHTML) + 1
			}
		})
	})
}
