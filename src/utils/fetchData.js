
const encodedParams = new URLSearchParams();
encodedParams.append("language", "en_US");
encodedParams.append("limit", "30");
encodedParams.append("location_id", "297704");
encodedParams.append("currency", "USD");

export const options = {
  method: 'POST',
  url: 'https://worldwide-restaurants.p.rapidapi.com/search',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '649bd606b3mshf4fd33ab64dfa64p16531djsn75d89b1d377d',
    'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
  },
  data: encodedParams
};
export const optionsYTP = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
  headers: {
    'X-RapidAPI-Key': '649bd606b3mshf4fd33ab64dfa64p16531djsn75d89b1d377d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData =async (url,options)=>{
    const response =await fetch(url,options)
    // const data = await response.json();
    return response
}