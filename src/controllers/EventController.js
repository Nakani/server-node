module.exports = {
    async index(req, res) {
        const { city } = req.body.queryResult.parameters;
       // const hub = await Hub.find({ nameHub: nameHub });

       let data=''
       switch (city) {
           case "Porto Alegre":
               data = city
               break;
               case "São Paulo":
                data = city
                break;
       
       }
        return res.json(data);
    },
}