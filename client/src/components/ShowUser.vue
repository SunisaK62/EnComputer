<template>
  <div>
  <nav class="navbar navbar-light bg-dark">
      <router-link class="navbar-brand" active-class="active" to="/MainAdmin" style="color: white">
        EnComputer
      </router-link>
    </nav>

    <div class="center bg-light ">
                    <h2>ข้อมูลผู้ใช้งาน</h2>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <p class="left">ID : {{ user.id }}</p>
              <p class="left">Name - Lastname : {{ user.name }} - {{ user.lastname }}</p>
              <p class="left">Email : {{ user.email }}</p>
              <p class="left">Password : {{ user.password }}</p>
              <p class="left">Status : {{ user.status }}</p>
              <p class="left">Type : {{ user.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UserService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}
</style>