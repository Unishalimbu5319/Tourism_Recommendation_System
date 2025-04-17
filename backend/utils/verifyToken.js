import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next)=>{
    const token = req.cookies.accessToken

    if(!token){
        return res.ststus(401).json({success:false, message:"You are not authorized"})
    }


    // if token is exist then verify thet token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user)=>{
        if(err){
            return res.ststus(401).json({success:false, message:"token is invalid"});
        }

        req.user = user
        next() //do not forget to call next 
    });
};

export const verifyUser = (req,res, next)=> {
     verifyToken(req,res,next, ()=>{
       if(req.user.id===req.params.id || req.user.role==="admin") {
        next()
       } else {
           return res
           .status(401)
           .json({success:false, message:"You are not authenticeted"});
       }
     });
    };
   
    export const verifyAdmin = (req,res, next)=> {
        verifyToken(req,res,next, ()=>{
          if( req.user.role==="admin") {
           next()
          } else{
              return res
              .ststus(401)
              .json({success:false, message:"You are not authorized"});
          }
        });
       };