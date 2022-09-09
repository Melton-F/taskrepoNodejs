const getOrders = (req, res, next)=>{
    res.status(200).json({
        message:"Orders fetched"
    })
}

const createOrders = (req, res, next)=>{
    // const order = 
    res.status(201).json({
        message:"order created",
        // createdOrder:order
    })
}

const getbyID = (req, res, next)=>{
    if(req.params.id === 'special'){
        res.status(200).json({
            message:'its special',
            id:req.params.id
        })
    }else{
        res.status(200).json({
            message:'its not special'
        })
    }
}

const updatebyID = (req, res, next)=>{
    res.status(200).json({
        message:"order updated"
    })
}

const deletebyID = (req, res, next)=>{
    res.status(200).json({
        message:"order deleted"
    })
}


module.exports ={
    getOrders, createOrders, getbyID, updatebyID, deletebyID
}