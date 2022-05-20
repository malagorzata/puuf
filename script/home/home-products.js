import { getData } from "../modules/api.js";

getData();

function showData(data) {
  console.log("data", data);
  data.forEach(product);
}
