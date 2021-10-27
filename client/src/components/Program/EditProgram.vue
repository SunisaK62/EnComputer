<template>
    <div>
    <div class="center bg-light">
        <h2> แก้ไขข้อมูล</h2>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form v-on:submit.prevent = "editProgram">
                            <p class="left">ชื่อ<input class="form-control" type="text" v-model="program.name"></p>
                            <p class="left">นามสกุล <input class="form-control" type="text" v-model="program.lastname"></p>
                            <p class="left">เบอร์โทร <input class="form-control" type="text" v-model="program.tel"></p>
                            <p class="left">จำนวนเครื่อง <input class="form-control" type="text" v-model="program.quantity"></p>
                            <p class="left">วันที่นัดใช้บริการ <input class="form-control" type="date" v-model="program.date "></p>
                            <p><button class="btn btn-outline-success" type="submit">บันทึก</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>import ProgramService from "@/services/ProgramService";

export default {
    data(){
        return{
            program:{
                name: '',
                lastname: '',
                tel: '',
                quantity: '',
                date: ''
            }
        }
    },
    methods:{
        async editProgram(){
            try{
                await ProgramService.put(this.program)
                this.$router.push({
                    name: 'programs'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let programId = this.$route.params.programId
            this.program = (await ProgramService.show(programId)).data
        }catch(error){
            console.log(error)
        }
    }
}
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