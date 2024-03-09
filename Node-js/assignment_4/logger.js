const logger = (req, res, next) => {
    console.log('URL', req.url)
    console.log('METHOD', req.method)
    console.log('TIME', new Date())

    next();
}

module.exports = logger