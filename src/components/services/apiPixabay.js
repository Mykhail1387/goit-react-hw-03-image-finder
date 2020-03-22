import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/?q=';
const ApiKey = '15216450-d096caa7dd5d740f777344039';

export default {
    page: 1,

    fetchImages(query) {
        const queryParams = `&page=${this.page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`

        return axios.get(baseUrl + query + queryParams)
            .then(({ data }) => {
                this.incrementPage()
                return data.hits
            })
    },
    incrementPage() {
        this.page += 1;
    },
    resetPage() {
        this.page = 1;
    }
}
