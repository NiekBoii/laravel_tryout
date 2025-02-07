<script setup>
import {ref} from "vue";
import {createUser} from "@/Lib/fetch/users/UserRequests.js";

const visible = defineModel();
const user = ref({
    name: '',
    email: '',
    password: ''
});
const registerUser = async () => {
    const [response] = await createUser(user.value);
    if (response.ok) {
        window.location.reload();
    }
};
</script>

<template>
    <Dialog v-model:visible="visible">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Register</span>
        <div class="flex flex-col items-center gap-4 mb-8">
            <FloatLabel variant="in" class="w-full">
                <InputText class="w-full" id="name" v-model="user.name"/>
                <label for="name">name</label>
            </FloatLabel>
            <FloatLabel variant="in" class="w-full">
                <InputText class="w-full" id="email" v-model="user.email"/>
                <label for="email">email</label>
            </FloatLabel>
            <FloatLabel variant="in">
                <Password toggleMask :feedback="false" id="password" v-model="user.password"/>
                <label for="password">password</label>
            </FloatLabel>
            <Button @click="async () => await registerUser()" class="w-full" size="large" label="Register"></Button>
        </div>
    </Dialog>
</template>
