const jwt = require('jsonwebtoken');
module.exports = function (req,res,next) {
    const token =req.header("auth-token");
    if (!token)return res.json("access denied")
    console.log(token);
    try {
        const verif = jwt.verify(token,"fghfghrtfjyuuikyufiy");
       req.user = verif ;
       next();
    }catch (error){
        res.send('invalid token')
    }
}