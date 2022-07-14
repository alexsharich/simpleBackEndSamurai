import express from 'express'
const app = express()
const port = 3000

/* const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)
 */
const HTTP_STATUSES = {
    OK200: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 400
}

const db = {
    courses: [
        { id: 1, title: 'front-end' },
        { id: 2, title: 'back-end' },
        { id: 3, title: 'automation qa' },
        { id: 4, title: 'devops' }
    ]
}

app.get('/courses', (req, res) => {
    let foundCoursesQuery = db.courses
    if (req.query.title) {
        foundCoursesQuery = foundCoursesQuery.filter(c => c.title.indexOf(req.query.title) > -1)
    }
    res.json(foundCoursesQuery)
})
app.get('/courses/:id', (req, res) => {
    const foundCourse = db.courses.find(c => c.id === +req.params.id)
    if (!foundCourse) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
        return
    }
    res.json(foundCourse)
});
app.delete('/courses/:id', (req, res) => {
    db.courses = db.courses.filter(c => c.id !== +req.params.id)

    res.sendStatus(HTTP_STATUSES.NO_CONTENT)

});
app.get('/courses/:id', (req, res) => {
    if (!req.body.title) {
        res.sendStatus(HTTP_STATUSES.BAD_REQUEST)
        return
    }
    const foundCourse = db.courses.find(c => c.id === +req.params.id)
    if (!foundCourse) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
        return
    }
    foundCourse.title = req.body.title
    res.sendStatus(HTTP_STATUSES.NO_CONTENT)
});
/* app.post('/courses', (req, res) => {
    if(!req.body.title){
        res.sendStatus(HTTP_STATUSES.BAD_CONTENT)
        return
    }
    const createdCourse = {
        id: +(new Date()),
        title: req.body.title
    }
    db.courses.push(createdCourse)
    res.status(HTTP_STATUSES.CREATED).json(createdCourse)
}) */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});