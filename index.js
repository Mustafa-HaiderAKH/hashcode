const fs = require('fs')
fs.readFile('./a_an.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    var contNo=data.split("\n")[0].split(" ")[0];
    var project=data.split("\n")[0].split(" ")[1],role=[];
    var contribures=data.split("\n")
    console.log(data.split("\n"))
for(let i=1;i<data.split("\n").length;i++){
role.push({
    name:
})
}
  })