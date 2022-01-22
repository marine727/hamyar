
const { Op, literal } = require("sequelize");
let fulltextSearch = async(args) => {
   
    let json = null;

    options = {
        page, 
        paginate: limit,
        attributes: { 
            include:[
                [literal(`MATCH (text, subText) AGAINST(:name)`), 'score']
            ] 
        },
        distinct: true,
        where: {
        [Op.and]:[
            literal(`MATCH (text, subText) AGAINST(:name) `),
        ],
        },
        replacements: {
            name: [args.txt]
        },
        order: [
            [literal('score'), 'DESC']
        ],
    }

    json = await models.Searche.paginate(options);

    return {
        ok: true,
        json: json.docs,
        paginate: {
            total: json.total,
            pages: json.pages,
            page: page,
            limit: limit
        }
    };
}
module.exports = fulltextSearch;