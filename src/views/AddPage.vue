<template>
  <div>
    <h2>Add Page</h2>
    <form @submit.prevent="submitForm">
      <label for="sortId">Sort ID:</label>
      <input v-model="sortId" type="number" required />

      <label for="title">Title:</label>
      <input v-model="title" type="text" required />

      <label for="description">Description:</label>
      <textarea v-model="description" required></textarea>

      <label for="url">URL:</label>
      <input v-model="url" type="text" required />

      <label for="icon">Icon:</label>
      <input v-model="icon" type="text" required />

      <label for="color">Color:</label>
      <input v-model="color" type="text" required />

      <button type="submit">Add Page</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import useAxios from '../components/useAxios'; // 自定义组合式 API
import axios from "axios";
const sortId = ref(null);
const title = ref("");
const description = ref("");
const url = ref("");
const icon = ref("");
const color = ref("");

//const { postRequest } = useAxios(); // 使用自定义组合式 API

const submitForm = async () => {
  const pageData = {
    SortId: sortId,
    Title: title,
    Description: description,
    Url: url,
    Icon: icon,
    Color: color,
  };

  try {
    const response = await axios.post(
      "http://localhost:8080/api/website-items",
      pageData
    );
    console.log(response.data);
    // 处理成功，例如显示成功消息
  } catch (error) {
    console.error(error);
    // 处理错误，例如显示错误消息
  }
};
</script>

<style scoped>
/* 添加你的组件样式 */
</style>
