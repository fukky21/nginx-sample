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

@Component
export default class IndexPage extends Vue {
  users = [
    {
      id: 1,
      name: 'Tom',
      email: 'tom@example.com'
    },
    {
      id: 2,
      name: 'Aki',
      email: 'aki@example.com'
    },
    {
      id: 3,
      name: 'Keiko',
      email: 'keiko@example.com'
    }
  ];
}
</script>
