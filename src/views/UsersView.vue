<script setup>
import Users from '@/components/Users.vue';


// Create delete item
const handelDeleteCard = (Id) => {
  console.log('Delete item clicked', Id);
}
</script>

<template>
  <Users msg="User from json api - " @deleteCard="handelDeleteCard" />
</template>