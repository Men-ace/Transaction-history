export const buildSuccessResponse = (res, data, message='') =>{
    res.json({
        status : 'sucess',
        data,
        message 

    })
}

export const buildErrorResponse = (res, message='') =>{
    res.json({
        status: 'error'
        
    })
}