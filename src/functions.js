module.exports.Functions = {
    calculatePriceDelta: function(lastRecordedPrice, currentPrice){
        return (currentPrice - lastRecordedPrice) / lastRecordedPrice * 100 + '%';
    }
};