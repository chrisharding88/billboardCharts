import axios from 'axios'

const URL = 'https://billboard-charts.p.rapidapi.com/billboard/v1/showchart'

const API_KEY = '4195d16db2msh6f2905f0a0f95cbp11c06ajsn2a2e672d6c67'

export default {
    getChart: function(){
        return axios.get(`${URL}`, {
            headers:{
                "x-rapidapi-key": `${API_KEY}`,
                "x-rapidapi-host": "billboard-charts.p.rapidapi.com",
                "useQueryString": true
            }
        })
    }
}
