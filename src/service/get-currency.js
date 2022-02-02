class GetCurrency{
    _apiUrl="https://www.cbr-xml-daily.ru/daily_json.js"
    request= async (url) =>{
        const Data=await fetch(url);
        if(!Data.ok){
            throw new Error(`Could not fetch ${url}`);
        }
        return await Data.json();
    }
    getCurrencyCourse= async ()=>{
        return await this.request(this._apiUrl).then(data=>({
            'USD':data.Valute.USD.Value,
            'EUR':data.Valute.EUR.Value,
            'UAH':data.Valute.UAH.Value
        }));
        
    }
}
export default GetCurrency;
