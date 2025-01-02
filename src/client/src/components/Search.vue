<template>
    <div class="search">
        <div class="center">
            <div class="search-container">
                <div class="search-input-wrapper">
                    <input v-model="searchQuery" @keyup.enter="search" placeholder="Search..." class="search-input" />
                </div>
                <div class="search-button-wrapper">
                    <button @click="search" class="search-button">Search</button>
                </div>
            </div>
            <div class="results-container">
                <ul v-if="searchResults.length" class="results-list">
                    <li v-for="(result, index) in searchResults" :key="index" class="result-card">
                        <div class="result-header">
                            <div class="product-info">
                                <a :href="result.product_link" target="_blank" class="product-title">
                                    {{ result.product_name }}
                                </a>
                                <div class="product-category">
                                    Category: {{ result.category.replace(/\|/g, ' > ') }}
                                </div>
                            </div>
                            <div class="price-info">
                                <div class="discounted-price">{{ result.discounted_price }}</div>
                                <div class="discount-badge">{{ result.discount_percentage }} off</div>
                            </div>
                        </div>
                        <div class="rating-container">
                            <div class="rating-wrapper">
                                <span class="rating-score">{{ result.rating }}</span>
                                <span class="rating-star">★</span>
                            </div>
                            <div class="rating-count">({{ result.rating_count }} ratings)</div>
                        </div>
                        <div class="product-description">
                            {{ result.about_product.split('|').join(' • ') }}
                        </div>
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
    margin: 0;
    padding: 40px 0;
    min-height: 100vh;
    background-color: #f8f9fa;
}

.center {
    margin: auto;
    width: 90%;
    max-width: 1200px;
    padding: 20px;
}

.search-container {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    background: white;
    padding: 16px;
}

.search-input-wrapper {
    flex: 1;
}

.search-input {
    width: 100%;
    font-size: 18px;
    padding: 12px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.search-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-button-wrapper {
    width: 120px;
}

.search-button {
    width: 100%;
    font-size: 18px;
    padding: 12px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.search-button:hover {
    background-color: #2563eb;
}

.results-container {
    margin-top: 20px;
}

.results-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.result-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.result-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.result-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.product-info {
    flex: 1;
    margin-right: 24px;
}

.product-title {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    text-decoration: none;
    margin-bottom: 8px;
    line-height: 1.4;
}

.product-title:hover {
    color: #3b82f6;
}

.product-category {
    font-size: 14px;
    color: #666;
}

.price-info {
    text-align: right;
    min-width: 100px;
}

.discounted-price {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
}

.discount-badge {
    font-size: 14px;
    color: #22c55e;
    font-weight: 500;
}

.rating-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.rating-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
}

.rating-score {
    font-weight: 600;
    color: #1a1a1a;
}

.rating-star {
    color: #fbbf24;
}

.rating-count {
    color: #666;
    font-size: 14px;
}

.product-description {
    font-size: 14px;
    line-height: 1.6;
    color: #4b5563;
}

@media (max-width: 768px) {
    .center {
        width: 95%;
        padding: 10px;
    }

    .search-container {
        flex-direction: column;
        gap: 12px;
    }

    .search-button-wrapper {
        width: 100%;
    }

    .result-header {
        flex-direction: column;
        gap: 12px;
    }

    .price-info {
        text-align: left;
    }

    .product-info {
        margin-right: 0;
    }
}
</style>