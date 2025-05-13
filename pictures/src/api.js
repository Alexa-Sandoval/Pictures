import axios from "axion";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=R80nbJlPVE46qRCvznuLfEPuyqZVHhEp4PQIHHrpqgY'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages