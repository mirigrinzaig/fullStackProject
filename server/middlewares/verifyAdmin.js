const verifyAdmin = (req, res, next) => {
    //if user not exist
    if (!req.user)
        return res.status(401).json({ message: "Unauthorized" })
    //if user is not admmin- he not forbiden!
    if (req.user.roles !=='admin')
        return res.status(403).json({ message: "Forbiden admin"+req.user.roles})
    next()

}
module.exports = verifyAdmin