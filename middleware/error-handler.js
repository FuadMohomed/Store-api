const errorHandlerMiddleware = async (err, req, res, next) => {
 return res.status(500).json({ msg:`there was an ${err}` })
}

module.exports = errorHandlerMiddleware
