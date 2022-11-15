const fetchData = async () => {
    try {
        const response = await fetch('https://cat-fact.herokuapp.com/facts')
        const result = response.json()
        console.log(result)
        return result
    } catch (e) {
        console.log('err: ', e)
    }
}
export default fetchData