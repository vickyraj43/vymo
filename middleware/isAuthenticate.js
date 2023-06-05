const authController = {
    isAuthenticate: (req, res, next) => {
        //CHECKLIST
        //[] validate the request
        //[] Authorise the request
        //[] check if user is in the database already 
        //[] prepare model
        //[] store in database
        //[] generate jwt token
        //[] send response

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