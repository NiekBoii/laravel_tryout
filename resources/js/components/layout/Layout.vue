<script setup>
import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import NavBar from "@/components/layout/navbar/NavBar.vue";

const routes = [{
    label: "users",
    route: "users"
}];
const page = usePage();
const user = computed(() => page.props?.auth?.user);
</script>

<template>
    <NavBar :routes="routes" :user="user"></NavBar>
    <slot>

    </slot>
</template>
