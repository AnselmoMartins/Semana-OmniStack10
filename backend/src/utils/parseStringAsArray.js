module.exports = {
    stringToArray(string){
        const ArrayString = string.split(',').map(word => word.trim());
        return ArrayString;
    }
};