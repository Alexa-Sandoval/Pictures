import axios from "axion";

const searchImages = async(term) => {
    const url = 'R80nbJlPVE46qRCvznuLfEPuyqZVHhEp4PQIHHrpqgY'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages