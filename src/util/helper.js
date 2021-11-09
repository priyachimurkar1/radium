function date()
{
    console.log('the cureent date is: 08-11-2021')
}
function month()
{
    console.log('the current month is: November')
}
function BatchInfo(){
    console.log('This Batch is  Radium ,The week number is 3,the day is 08-11-2021,The Topic is Node.js')
    
}
module.exports.getDate=date
module.exports.getMonth=month
module.exports.getBatchInfo=BatchInfo
