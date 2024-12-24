<template>
    <div class="search">
        <div class="center">
        <div style="margin: 0 auto;">
            <div style="float: left; width:80%;">
                <input v-model="searchQuery" @keyup.enter="search" placeholder="Search..." />

            </div>
            <div style="float: left; width:20%;">
                <button @click="search">Search</button>
            </div>
        </div>
        <div style="margin: 0 auto; padding-top: 100px;">

            <ul v-if="searchResults.length">
                <li v-for="(result, index) in searchResults" :key="index">
                    <a :href="result.product_link" target="_blank">{{ result.product_name }}</a>
                    <br />{{ result.about_product }}                    
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';

const baseURL = "http://localhost:8080/search/";
if (typeof import.meta.env.API_BASE_URL !== 'undefined') {
  this.baseURL = import.meta.env.API_BASE_URL;
}

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

                axios.get(baseURL + this.searchQuery)
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

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.search button {
    font-size: 40px;
    width: 100%;
    min-width: 150px;
}

.search input {
    font-size: 40px;
    width: 100%;
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
    margin-bottom: 20px;
}

li a{
    font-weight: bold;
}


ul{
    margin: 0;
    padding: 0;
}
</style>