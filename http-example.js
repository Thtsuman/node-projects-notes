const { get } = require('https')
// const { request } = require('https')


get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk ${chunk}`)  
    })

    res.on('end', () => {
        console.log('no more data')
    })
})

// const req = request('https://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk ${chunk}`)
//     })

//     res.on('end', () => {
//         console.log('no more data')
//     })
// })

// req.end()