const checkMillionDollarIdea = (req,res,next) => {
    var numWeeks = req.body.numWeeks
    var weeklyRevenue = req.body.weeklyRevenue

    if (!numWeeks || !weeklyRevenue)
    return res
      .status(400)
      .send("numWeeks and weeklyRevenue properties are required");


    var totalValue = Number(numWeeks) * Number(weeklyRevenue)

    if(totalValue < 1000000 || isNaN(totalValue)){
        return res.status(400).send("Idea must be worth at least $1M");
    }
    next();
};


// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
