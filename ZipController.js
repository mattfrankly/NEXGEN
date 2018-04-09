
var affiliateAlreadySet = false;
var affiliate = 'kotv';

function getAffiliate(){
  console.log("*** ZipController getAffiliate()");
  console.log("*** ZipController getAffiliate() affiliate ", affiliate);
  return affiliate
}
function defaultZip(){
  return affiliate == 'kotv' ? "74120" : "73179";
}

function setAffiliate(a){
  if(!affiliateAlreadySet){
    affiliate = a
    affiliateAlreadySet = true
    return true
  }
  return false
}

function clear(){
  localStorage.removeItem('weatherZipCode')
  set(defaultZip())
}

function get(){
  console.log("*** ZipController get()");
  if(typeof window !== 'object')
    return defaultZip()
  //only on browser
  var currentZip = localStorage.getItem('weatherZipCode')
  if(currentZip){
    set(currentZip)
    return currentZip
  }

  else{
    set(defaultZip())
    return defaultZip()
  }

}

function set(zip){

  var maxAge = 90*24*60*60
  document.cookie = `weatherZipCode=${zip}; max-age=${maxAge};`;
  try{
    localStorage.setItem('weatherZipCode', zip);
  } catch(e){
  }
}

function refresh(){
    localStorage.setItem('almanacDataTimestamp', 0);
    localStorage.setItem('forecastDataTimestamp', 0);

    location.reload()
}

if(typeof window === 'object')
  window.ZipController ={ get,set,setAffiliate,getAffiliate}

export default {get,set,setAffiliate,affiliate,getAffiliate,refresh,clear}
