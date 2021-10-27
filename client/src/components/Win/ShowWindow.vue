<template>
  <div>
    <h1>ข้อมูลการนัดใช้บริการลงระบบปฏิบัติการ Windows</h1>
      <p>รหัสการนัดหมาย : {{ win.id }}</p>
      <p>ชื่อ-นามสกุล : {{ win.name }} - {{ win.lastname }}</p>
      <p>เบอร์โทร : {{ win.tel }}</p>
      <p>จำนวนเครื่อง : {{ win.quantity }}</p>
      <p>วันที่นัดใช้บริการ : {{ win.date }}</p>
  </div>
</template>
<script>
import WinService from "@/services/WinsService";
export default {
  data() {
    return {
      win: null,
    };
  },
  async created() {
    try {
      let winId = this.$route.params.winId;
      this.win = (await WinService.show(winId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>