<script setup lang="js">
import Layout from "@/components/layout/Layout.vue";
import {ref} from "vue";
import EditUserModal from "@/pagecomponents/users/EditUserModal.vue";
import {updateUser} from "@/Lib/fetch/users/UserRequests.js";

const getBaseValuesForModal = () => ({
    user: null,
    editing: false
});
const modalInformation = ref(getBaseValuesForModal());
const props = defineProps({users: Array});
const users = ref(props.users);

const openUserModal = (selectedUser) => {
    modalInformation.value.user = selectedUser;
    modalInformation.value.editing = true;
};
const saveUser = async (updatedUser) => {
    const [response, updatedUserResult] = await updateUser(updatedUser);
    if (response.ok) {
        const index = users.value.findIndex(user => user.id === updatedUserResult.id);
        users.value[index] = updatedUserResult;
        modalInformation.value = getBaseValuesForModal();
    }
};
</script>

<template>
    <Layout>
        <div class="p-3">
            <DataTable key="id" :value="users" tableClass="rounded ">
                <Column field="id" header="Id"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="email" header="Email"></Column>

                <Column field="email_verified_at" header="Email verified at"></Column>
                <Column field="updated_at" header="Latest update"></Column>
                <Column header="Actions" class="w-24 !text-center">
                    <template #body="{ data }">
                        <Button :aria-label="`Edit user information ${data} information`"
                                icon="pi pi-pencil"
                                class="mx-auto"
                                @click="() => openUserModal(data)" severity="secondary" rounded></Button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </Layout>
    <EditUserModal v-model="modalInformation"
                   @saveUser="async(updatedUser) => await saveUser(updatedUser)"></EditUserModal>
</template>
