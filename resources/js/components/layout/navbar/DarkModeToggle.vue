<script setup lang="ts">
import {Ref, ref} from "vue";

type ThemeMode = Ref<"Dark" | "Light">;
let mode: ThemeMode = ref("Dark");
const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    mode.value = mode.value === "Light" ? "Dark" : "Light"
}
const transition = "transitional-all duration-200"
const outline = "outline-1 outline"
</script>

<template>
    <Avatar :class="`outline-gray-300 ${outline} hover:outline-gray-900 ${transition}`" v-if="mode == `Light`"
            @click="toggleDarkMode" icon="pi pi-sun"></Avatar>
    <Avatar :class="`outline-black ${outline} hover:outline-white ${transition}`" v-else @click="toggleDarkMode"
            icon="pi pi-moon"></Avatar>
</template>
