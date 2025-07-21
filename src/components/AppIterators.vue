<template>
    <div>
        <ul>

            <li v-for="item in arr" :key="item">{{ item }}</li>
        </ul>

        <ul>
            <li v-for="(fruit, index) in arr" :key="index">
                {{ index }} - {{ fruit }}
            </li>
        </ul>

        <div v-for="(category, i) in categories" :key="i">
            <h3>{{ category.name }}</h3>
            <ul>
                <li v-for="(item, j) in category.items" :key="j">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    Name: 'AppIterators',

    data() {
        return {
            arr: ['Apple', 'Banana', 'Mango'],
            categories: [
                { name: 'Fruits', items: ['Apple', 'Banana'] },
                { name: 'Vegetables', items: ['Carrot', 'Peas'] }
            ]
        }
    }
}
</script>