const superagent = require("superagent"); //发送网络请求获取DOM
const cheerio = require("cheerio"); //能够像Jquery一样方便获取DOM节点

const getOneData = async () => {
  const oneUrl = "http://wufazhuce.com/";
  let p = new Promise(function(resolve,reject){
    superagent.get(oneUrl).end(function(err, res) {
        if (err) {
            reject(err);
        }
        let $ = cheerio.load(res.text);
      let selectItem = $("#carousel-one .carousel-inner .item");
      
      const one = [];
      for (let i = 0; i < selectItem.length; i++) {
        let thisOne = selectItem[i];
        const text = $(thisOne)
          .find(".fp-one-cita")
          .text()
          .replace(/(^\s*)|(\s*$)/g, "");

        const path = $(thisOne)
          .find(".fp-one-imagen")
          .attr("src");
        one.push({path, text})
      }
      resolve(one);
      });
    })
  return p;
};

(async () => {
  data = await getOneData();
  console.log(data);
})();
