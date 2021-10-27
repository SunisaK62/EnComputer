<template>
  <div class="bg-light">
    <div class="center">
      <h1>นัดใช้บริการติดตั้ง Program</h1>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="createProgram">
                <p class="left">
                  ชื่อ:
                  <input
                    class="form-control"
                    type="text"
                    v-model="program.name"
                  />
                </p>
                <p class="left">
                  นามสกุล:
                  <input
                    class="form-control"
                    type="text"
                    v-model="program.lastname"
                  />
                </p>
                <p class="left">
                  เบอร์โทร:
                  <input
                    class="form-control"
                    type="text"
                    v-model="program.tel"
                  />
                </p>
                <p class="left">
                  จำนวนเครื่อง:
                  <input
                    class="form-control"
                    type="text"
                    v-model="program.quantity"
                  />
                </p>
                <p class="left">
                  วันที่นัดใช้บริการ:
                  <input
                    class="form-control"
                    type="date"
                    v-model="program.date"
                  />
                </p>
                <p>
                  <button class="btn btn-info" type="submit">
                    นัดหมาย
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgramService from "@/services/ProgramService";
export default {
  data() {
    return {
      program: {
        name: "",
        lastname: "",
        tel: "",
        quantity: "",
        date: "",
      },
    };
  },
  methods: {
    async createProgram() {
      try {
        await ProgramService.post(this.program);
        this.$router.push({
          name: "MainUser",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}
.left {
  text-align: left;
}
</style>