<template >
  <div>
    <nav class="navbar navbar-light bg-dark">
     <router-link class="navbar-brand" active-class="active" to="/MainAdmin" style="color: white">
        EnComputer
      </router-link>
    </nav>
    <div class="center ">
      <h2>การนัดใช้บริการติดตั้ง Programs ทั้งหมด</h2>
      <h4 class="text-success">จํานวนนัดใช้บริการทั้งหมด {{ programs.length }} คิว</h4>
      <div v-for="program in programs" v-bind:key="program.id">
        <div class="row">
          <div class="col-sm-12" >
            <div class="card bg-light">
              <div class="card-body">
                <h5 class="card-title">รหัสการนัดหมาย : {{ program.id }}</h5>
                <p>ชื่อ-นามสกุล : {{ program.name }} - {{ program.lastname }}</p>
                <p>เบอร์โทร : {{ program.tel }}</p>
                <p>จำนวนเครื่อง : {{ program.quantity }}</p>
                <p>วันที่นัดใช้บริการ : {{ program.date }}</p>
                <button class="btn btn-warning" v-on:click="navigateTo('/program/edit/' + program.id)">
                  แก้ไขข้อมูล
                </button>
                <button class="btn btn-danger" v-on:click="deleteProgram(program)">ลบข้อมูล</button>
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
import ProgramService from "@/services/ProgramService";

export default {
  data() {
    return {
      programs: [],
    };
  },
  async created() {
    this.programs = (await ProgramService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteProgram(program) {
      let result = confirm("ต้องการลบใช่ไหม ?");
      if (result) {
        try {
          await ProgramService.delete(program);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.programs = (await ProgramService.index()).data;
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