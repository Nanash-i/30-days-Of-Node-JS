const cache={};

function cachingMiddleware(req,res,next){
    const cacheKey=req.originalUrl

    if(cache[cacheKey]){
        const cacheResponse=cache[cacheKey];

        if(cacheResponse.expirationTime >Date.now()){
            return res.send(cacheResponse.data)
        }
        else{
            delete cache[cacheKey]
        }
    }
    res.locals.cacheResponse=function(data,expirationTime){
        cache[cacheKey]={
            data:data,
            expirationTime:expirationTime
        }
    }
    next()
}

module.exports=cachingMiddleware;