<template >
  <div>
    <nav class="navbar navbar-light bg-dark">
     <router-link class="navbar-brand" active-class="active" to="/MainAdmin" style="color: white">
        EnComputer
      </router-link>
    </nav>
    <div class="center ">
      <h2>การนัดใช้บริการลงระบบปฏิบัติการ Windows ทั้งหมด</h2>
      <h4 class="text-success">จํานวนนัดใช้บริการทั้งหมด {{ wins.length }} คิว</h4>
      <div v-for="win in wins" v-bind:key="win.id">
        <div class="row">
          <div class="col-sm-12" >
            <div class="card bg-light">
              <div class="card-body">
                <h5 class="card-title">รหัสการนัดหมาย : {{ win.id }}</h5>
                <p>ชื่อ-นามสกุล : {{ win.name }} - {{ win.lastname }}</p>
                <p>เบอร์โทร : {{ win.tel }}</p>
                <p>จำนวนเครื่อง : {{ win.quantity }}</p>
                <p>วันที่นัดใช้บริการ : {{ win.date }}</p>
                <button class="btn btn-warning" v-on:click="navigateTo('/win/edit/' + win.id)">
                  แก้ไขข้อมูล
                </button>
                <button class="btn btn-danger" v-on:click="deleteWin(win)">ลบข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
import WinService from "@/services/WinsService";

export default {
  data() {
    return {
      wins: [],
    };
  },
  async created() {
    this.wins = (await WinService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteWin(win) {
      let result = confirm("ต้องการลบใช่ไหม ?");
      if (result) {
        try {
          await WinService.delete(win);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.wins = (await WinService.index()).data;
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
  padding: 3% 20%;
}
</style>