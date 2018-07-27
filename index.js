// Code your solution here:
function driversWithRevenueOver(list, revenue){
  return list.filter( (ele) => { return ele['revenue'] > revenue})
}
function driverNamesWithRevenueOver(list, revenue){
  return driversWithRevenueOver(list, revenue).map( (ele) => { return ele['name']} )
}
function exactMatch(list, attribute){
  return list.filter( (ele) => { console.log(ele['name'], attribute['name']); return ele ? ele['name'] === attribute['name'] : ele['revenue'] == attribute['revenue']})
}
/*
undefined 'sally'
'sally' 'sally' ||
'sally' undefined
undefined undefined
*/
function exactMatchToList(){

}
