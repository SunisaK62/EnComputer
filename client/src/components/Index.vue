<template>
  <div>
    <nav class="navbar navbar-light bg-dark">
      <router-link class="navbar-brand" active-class="active" to="/MainAdmin" style="color: white">
        EnComputer
      </router-link>
    </nav>
    <div class="center">
      <h2>ข้อมูลผู้ดูแลทั้งหมด</h2>
        <div v-if="users.length">
        <h4>จำนวนผู้ดูแล {{ users.length }} คน
      <button
            class="btn btn-outline-info"
            v-on:click="navigateTo('/user/create')"
          >
            เพิ่มผู้ดูแล
          </button>
      </h4>
      
      <div v-for="user in users" v-bind:key="user.id">
        <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">ID : {{ user.id }}</h5>
                  <p>Name-Lastname: {{ user.name }} - {{ user.lastname }}</p>
                  <p>
                    <button class="btn btn-outline-warning" v-on:click="navigateTo('/user/' + user.id)">
                      ดูข้อมูลผู้ใช้
                    </button>
                    <button class="btn btn-outline-success" v-on:click="navigateTo('/user/edit/' + user.id)">
                      แก้ไขข้อมูล
                    </button>
                    <button class="btn btn-outline-danger" v-on:click="deleteUser(user)">
                      ลบข้อมูล
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user){
      let result = confirm("Want to delete ?")
      if(result){
        try{
          await UsersService.delete(user)
          this.refreshData()
        }catch(error){
          console.log(error)
        }
      }
    },
    async refreshData(){
      this.users = (await UsersService.index()).data
    },
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'login',
      });
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}
</style>