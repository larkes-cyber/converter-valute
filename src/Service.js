class Service{
    _apiUrl = "https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new";

    request = async(url) => {
        const response = await fetch(url);
        if(response.ok){
            return await response.json();
        }
    }
    
    getRandomNum = async () => {
        return await this.request(this._apiUrl)
    }

}

export default Service;

// _apiUrl = "https://www.cbr-xml-daily.ru/daily_json.js"

// request = async (url) => {
//     const Data = await fetch(url);
//     if(!Data.ok){
//         throw new Error(`Could not fetch ${url}`);
//     }
//     return await Data.json();
// }

// getCurrencyCourse = async () => {
//     return await this.request(this._apiUrl).then(data=>({
//         'USD':data.Valute.USD.Value,
//         'EUR':data.Valute.EUR.Value,
//         'UAH':data.Valute.UAH.Value
//     }));
// }
