const asyncHandler = (requestHandler) => {
    // console.log("hi");
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}



// const asyncHandler = (fn) => async(req, res, next) => {
//     try{
//         return await fn(req, res, next)
//     }
//     catch(error){
//         return res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// };

// export {asyncHandler};