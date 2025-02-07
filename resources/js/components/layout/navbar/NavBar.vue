<script setup>
import DarkModeToggle from "@/components/layout/navbar/DarkModeToggle.vue";
import LoginModal from "@/components/modals/LoginModal.vue";
import {ref} from "vue";
import RegisterUserModal from "@/components/modals/RegisterUserModal.vue";
import {userLogoutRequest} from "@/Lib/fetch/authentication/Authentication.js";

const {user, routes} = defineProps({
    user: Object,
    routes: Array
});
const loginModalVisible = ref(false);
const registerModalVisible = ref(false);
const logout = async () => {
    const [response] = await userLogoutRequest();
    if (response.status < 300) {
        window.location.reload();
    }
};
</script>

<template>
    <Menubar :model="routes">
        <template #item="{ item, props}">
            <a :href="route(item.route)" v-ripple class="flex items-center" v-bind="props.action">
                {{ item.label }}
            </a>
        </template>
        <template #end>
            <div class="flex items-center gap-2">
                <DarkModeToggle></DarkModeToggle>
                <template v-if="user">
                    <Button @click="async () => await logout()" size="small" class="max-h-fit" icon="pi pi-user"
                            label="Logout"></Button>
                    <Avatar v-if="user?.avatar" shape="circle" icon="pi pi-user" size="large"/>
                    <Avatar v-else :label="user.name.charAt(0).toUpperCase()" shape="circle" icon="pi pi-user"
                            size="large"/>
                </template>
                <template v-else>
                    <Button @click="loginModalVisible=true" size="small" class="max-h-fit" icon="pi pi-user"
                            label="Login"></Button>
                    <Button @click="registerModalVisible=true" size="small" class="max-h-fit" icon="pi pi-user-plus"
                            label="Register"></Button>
                </template>
            </div>
        </template>
    </Menubar>
    <LoginModal v-model="loginModalVisible"></LoginModal>
    <RegisterUserModal v-model="registerModalVisible"></RegisterUserModal>
</template>
