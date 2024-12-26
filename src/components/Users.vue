<script setup>
import { USERS_API } from '@/common';
import { onMounted, ref } from 'vue';

const users = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(USERS_API);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    console.log(data);
    users.value = data;
  } catch (error) {
    console.log('Error fetching', error);

  }
})

const emit = defineEmits(['deleteCard']);
const deleteCard = (position) => {
  emit('deleteCard', position);
  users.value.splice(position, 1)
}

defineProps({
  msg: {
    type: String,
    default: "Users Receive from json api -"
  }
})

</script>

<template>
  <div class="container">
    <h1> {{ msg }} {{ users.length }}</h1>
  </div>
  <div class="container">
    <div v-for="(user, index) of users" :key="index" class="card p-2 mb-3">

      <div class="card-body">
        <h5 class="card-title fs-2">{{ user.name }}</h5>
        <div class="fs-5">{{ user.phone }}</div>
        <div class="card-text mb-4">
          <p class="mb-2 text-muted">
            {{ user.address }}
          </p>
          <p class="mb-2 text-muted">
            {{ user.company }}
          </p>
        </div>
        <div class="d-flex gap-2">
          <a href="#" class="btn btn-primary">{{ user.website }}</a>
          <button class="btn btn-danger" @click="deleteCard(index)">Delete Card</button>
        </div>

      </div>
    </div>
  </div>
</template>