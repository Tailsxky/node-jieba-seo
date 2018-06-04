var nodejieba = require("nodejieba");

var fs = require("fs");

fs.readFile('test.txt','utf-8',(err,data)=>{
    if (err) throw err;
    var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]\\n\\t.<>《》/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]", 'g')
    data = data.replace(reg,"");  

    var result = nodejieba.cut(data)

    var arr = [];
     result.forEach(element => {
       arr.push(element)
       
   });

  // gets(arr);
  console.log(uniqueCount(arr))
})

function uniqueCount(arr){
    var result = [],
        count = {};
    for(var i = 0, len = arr.length; i < len; i++){
        var temp = arr[i];
        if (!count[temp]) {
            result.push(temp);
            count[temp] = 1;
        }else {
            count[temp]++;
        }
    }
    return count;
}




