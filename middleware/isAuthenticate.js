const authController = {
    isAuthenticate: (req, res, next) => {

        //1. validation the request 
        const token = req.headers.token;
        console.log(token);
        if (token === "123456") {
            next();
        } else {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }
        res.json('hello from controller');
    }
}

export default authController;