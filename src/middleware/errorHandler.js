export default (err, req, res, next) => {
    if (err) {
        const {status, name ,message} = err
        res.status(status||500).send({message})
    }
    next(err)
}