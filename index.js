// Code your solution here:
function driversWithRevenueOver(list, revenue){
  list.filter( (ele) => { return ele['revenue'] > revenue})
}
function driverNamesWithRevenueOver(list, revenue){
  driversWithRevenueOver(list, revenue).map( (ele) => { return ele['name']} )
}
function exactMatch(list, attribute){
  list.filter( (ele) => { return ele ? ele['name'] === attribute : ele['revenue'] == attribute })
}

function exactMatchToList(){

}
