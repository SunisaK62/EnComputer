<template>
  <div>
    <h1>ข้อมูลการนัดใช้บริการติดตั้ง Programs</h1>
      <p>รหัสการนัดหมาย : {{ program.id }}</p>
      <p>ชื่อ-นามสกุล : {{ program.name }} - {{ program.lastname }}</p>
      <p>เบอร์โทร : {{ program.tel }}</p>
      <p>จำนวนเครื่อง : {{ program.quantity }}</p>
      <p>วันที่นัดใช้บริการ : {{ program.date }}</p>
  </div>
</template>
<script>
import ProgramService from "@/services/ProgramService";
export default {
  data() {
    return {
      program: null,
    };
  },
  async created() {
    try {
      let programId = this.$route.params.programId;
      this.program = (await ProgramService.show(programId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>