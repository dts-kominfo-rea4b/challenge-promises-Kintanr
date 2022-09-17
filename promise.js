const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (item) => {
    try{
      const theaterIXX = await promiseTheaterIXX()
      const theaterVGC = await promiseTheaterVGC()
      const allData = [...theaterIXX,...theaterVGC]
      const filterData = allData.filter((x) => x.hasil == item)
      return filterData.length
    }catch(e){
      return console.log(e)
    } 
}

module.exports = {
  promiseOutput,
};
