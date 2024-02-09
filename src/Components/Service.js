import axios from 'axios'

const getData = (input, addData) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=82f3961c55a872515c85d287083bbba1`)
        .then((res) => {
            console.log(res.data)
            addData(res.data)
        })
        .catch(() => {
            alert('Failed to Load')
        })
}

export default getData