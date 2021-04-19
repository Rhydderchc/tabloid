export const name = 'tabloid'


export const ps = '20'
export const available_Headlines = `${NAME}/HEADLINES_AVAILABLE`;

export const available_Categories = `${NAME}/CATEGORY_HEADLINES_AVAILABLE`;



export const token = `98bdd11f762a4334bb67f5ca00ce2c1d`;
export const url = 'https://newsapi.org/v2';
export const params = `&pageSize=${ps}`;

/*
Endpoints
*/

export const headlines =`${url}/top-headlines??apiKey=${token}${params}`

export const search = `${url}/everything?apiKey=${token}${params}&sortBy=relevancy`
export const Categories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];