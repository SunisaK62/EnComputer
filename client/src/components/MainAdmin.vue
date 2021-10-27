<template>
  <div class="bg-light">
    <nav class="navbar navbar-light bg-dark">
      <router-link class="navbar-brand" active-class="active" to="/MainAdmin" style="color: white">
        EnComputer
      </router-link>
      <form class="form-inline">
        <button v-on:click="logout" class="btn btn-outline-danger">ออกจากระบบ</button>
      </form>
    </nav>
    <div class="center">
      <h1>ยินดีต้อนรับเข้าสู่ระบบ Admin</h1>
      <br />
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">การนัดหมายใช้บริการลงระบบปฏิบัติการ Windows</h5>
              <p class="card-text">
                Appointment for serviceinstall Windows .
              </p>
              <button class="btn btn-success" v-on:click="navigateTo('/wins')">
                ดูทั้งหมด
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">การนัดหมายใช้บริการติดตั้ง Programs</h5>
              <p class="card-text">
                Appointment for serviceinstall Programs .
              </p>
              <button class="btn btn-success" v-on:click="navigateTo('/programs')">
                ดูทั้งหมด
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">ผู้ใช้งานทั้งหมด</h5>
              <p class="card-text">
                Total admins in this system.
              </p>
              <button class="btn btn-success" v-on:click="navigateTo('/users')">
                ดูทั้งหมด
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  padding: 5%;
}
</style>