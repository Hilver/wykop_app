import timestampToDays from './timestampToDays'

const currentDateDiff = date => {
	const timestampDiff = Date.now() - Date.parse(date)
	return timestampToDays(timestampDiff)
}

export default currentDateDiff
