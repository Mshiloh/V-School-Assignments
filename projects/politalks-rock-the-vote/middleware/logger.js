module.exports = (req, res, next) => {
    const time = new Date().toLocaleTimeString();
    req.infoStamp = `Request type: ${req.method}; at ${time} h`;
    next();
}