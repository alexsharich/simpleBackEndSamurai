const http = require('http')

const server = http.createServer((request, response) => {

    switch (request.url) {
        case '/students':
            response.write('STUDENTS')
            break;
        case '/':
        case '/courses':
            response.write('FRONT + BACK')
            break;
        default:
            response.write('404 PAGE NOT FOUND')
    }

    response.end()
})

server.listen(3003)