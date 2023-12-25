<template>
    <div class="search">
        <div style="margin: 0 auto;">
            <div style="float: left;">
                <input v-model="searchQuery" @keyup.enter="search" placeholder="Search..." />

            </div>
            <div style="float: left;">
                <button @click="search">Search</button>
            </div>
        </div>
        <div style="margin:20px; display: block;">

            <ul v-if="searchResults.length">
                <li v-for="(result, index) in searchResults" :key="index">
                    <p style="font-weight:bold">{{ result.BASLIK }}</p> <br />{{ result.
                        HABERMETNI }}<br><a :href="result.URL" target="_blank">{{ result.URL }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            searchQuery: '',
            searchResults: [],
        };
    },
    methods: {
        async search() {
            try {

                axios.get('http://localhost:8080/search/' + this.searchQuery)
                    .then(response => (this.searchResults = response.data))


            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        },
    },
};
</script>

<style>
.search {
    margin: 200px 0 0 0;
    text-align: center;
    display: block;
}

.search button {
    font-size: 40px;
}

.search input {
    font-size: 40px;
}

@media (min-width: 2048px) {
    .search {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}

li {
    font-size: 15px;
    list-style-type: none;
    text-align: left;
    padding: 5px;
}
</style>