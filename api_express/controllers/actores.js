const axios = require('axios')
const { request, response } = require('express')

const getActores = (req = request, res = response) => {
    axios.get('https://66dc80f347d749b72acbbe4e.mockapi.io/api/v1/actores')
        .then((response) => {
            const { data } = response;
            console.log(data)
            res.status(200).json({
                msg: 'Ok',
                data
            })
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json({
                msg: 'Error',
                error
            })
        })
}

module.exports = {
    getActores
}