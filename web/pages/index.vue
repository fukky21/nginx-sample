<template>
  <el-container>
    <el-main>
      <el-table :data="users" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface IUser {
  id: number;
  name: string;
  email: string;
}

@Component
export default class IndexPage extends Vue {
  users: IUser[] = [];

  async created(): Promise<void> {
    const data = await this.$axios.$get('/api/users');
    this.users = data.users;
  }
}
</script>
