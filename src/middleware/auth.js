const auth = async(req, res, next) =>{
    console.log('auth middleware')
    next()
}

module.exports = auth


// Example of how to use middleware in a another file
// router.get("/users", auth, async (req, res) => {
//   });