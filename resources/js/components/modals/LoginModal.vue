<script setup>
import {ref} from "vue";
import {userLoginRequest} from "@/Lib/fetch/authentication/Authentication.js";

const visible = defineModel();
const credentials = ref({
    email: '',
    password: ''
});

async function logIn() {
    const [response,errors] = await userLoginRequest(credentials.value);
    if(response.status < 300){
        window.location.reload();
    }
}
</script>

<template>
    <Dialog v-model:visible="visible">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Login</span>
        <div class="flex flex-col items-center gap-4 mb-8">
            <FloatLabel variant="in" class="w-full">
                <InputText class="w-full" id="email" v-model="credentials.email"/>
                <label for="email">email</label>
            </FloatLabel>
            <FloatLabel variant="in">
                <Password toggleMask :feedback="false" id="password" v-model="credentials.password"/>
                <label for="password">password</label>
            </FloatLabel>
            <Button @click="async () => await logIn()" class="w-full" size="large" label="Log in"></Button>
        </div>
    </Dialog>
</template>
