async function postLog(sensor, exitedSection) {
	if (['Entrance', 'Exit'].includes(sensor)) {
		var direction = ''
		// Entrance-Exit
		// Entrance-Enter
		// check wether exitedsection exists
		// var response = await fetch(
		// 	`https://localhost:42069/api/sensorlog/post?input=${sensor}.${direction}`
		// )
		// console.log(response)
		return
	}

	const enteredSection = sensor.replace(exitedSection, '').replace('-', '')

	// console.log(enteredSection)
	// console.log(exitedSection)

	// var response = await fetch(
	// 	`https://localhost:42069/api/sensorlog/post?input=${enteredSection}.${exitedSection}`
	// )
	// console.log(response)
}
