<template>
    <h1>{{title}}</h1>
    <input type="text" class="form-control" v-model="searchQuery">
    <table class="table table-hover">
        <tr>
            <th v-for="(index,column) in columns " v-on:click="sortBy(index)">
                {{column}} {{index}}
            </th>
            <th>操作</th>
        </tr>
        <tr v-for="item in data | orderBy sortKey sortOrders |filterBy searchQuery">
            <td v-for="(index,column) in columns">
                {{item[index]}}
            </td>
            <td>
                <span v-for="button in handle">
                    <a class="{{button.class}}" href="{{button.url}}">{{button.title}}</a>
                </span>
            </td>
        </tr>
    </table>
    <pre>{{$data|json}}</pre>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return {
                sortKey: "",
                sortOrders: 1,
                searchQuery:""
            }
        },
        components: {},
        props: {
            data: Array,
            handle: Array,
            columns: Object
        },
        methods: {
            sortBy: function (key) {
                this.sortKey = key;
                this.sortOrders = this.sortOrders * -1;
            }
        }
    }
</script>