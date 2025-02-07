<script setup>
import {computed} from "vue";

let modalInformation = defineModel();
const reset = () => {
    modalInformation.value.user = null;
    modalInformation.value.editing = false;
};
const editedUser = computed(() => ({...modalInformation.value.user}));
</script>

<template>
    <Dialog v-model:visible="modalInformation.editing" @close="editedUser=null" modal header="Edit User Information"
            :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Update the information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="name" class="font-semibold w-24">Name</label>
            <InputText v-model="editedUser.name" id="name" class="flex-auto" autocomplete="off"/>
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <InputText v-model="editedUser.email" id="email" class="flex-auto" autocomplete="off"/>
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="reset"></Button>
            <Button type="button" label="Save" @click="$emit(`saveUser`, editedUser)"></Button>
        </div>
    </Dialog>
</template>
