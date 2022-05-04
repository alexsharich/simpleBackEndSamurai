const http = require('http')

const server = http.createServer((request, response) => {

    switch (request.url) {
        case '/students':
            counter++
            response.write('STUDENTS')
            response.end()
            break;
        case '/':
        case '/courses':
            counter++
            response.write('FRONT + BACK')
            response.end()
            break;
        default:
            response.write('404 PAGE NOT FOUND')
            response.end()
    }

    response.end()
})

server.listen(3003)