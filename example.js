// Temporary container example module
// Copyright (C) 2019 Yevhen Stohniienko <yeuhen.stohniyenko@ukr.net>

const {TemporaryContainer} = require("./temporaryContainer");

let collect = new TemporaryContainer(5*1000); //5 seconds
setInterval( () => {
  let dataItem = new Date().toString();
  let timestamp = new Date().getTime();
  collect.put(dataItem, timestamp);
  console.log(collect.toArray());
}, 1000);
