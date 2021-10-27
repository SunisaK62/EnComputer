<template>
    <div>
        <div class="center bg-light">
        <h2> แก้ไขข้อมูล</h2>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form v-on:submit.prevent = "editWin">
                            <p class="left">ชื่อ <input class="form-control" type="text" v-model="win.name"></p>
                            <p class="left">นามสกุล <input class="form-control" type="text" v-model="win.lastname"></p>
                            <p class="left">เบอร์โทร <input class="form-control" type="text" v-model="win.tel"></p>
                            <p class="left">จำนวนเครื่อง <input class="form-control" type="text" v-model=" win.quantity"></p>
                            <p class="left">วันที่นัดใช้บริการ <input class="form-control" type="date" v-model="win.date"></p>
                            <p><button class="btn btn-outline-success" type="submit">บันทึก</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>import WinService from "@/services/WinsService";

export default {
    data(){
        return{
            win:{
                name: '',
                lastname: '',
                tel: '',
                quantity: '',
                date: ''
            }
        }
    },
    methods:{
        async editWin(){
            try{
                await WinService.put(this.win)
                this.$router.push({
                    name: 'wins'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let winId = this.$route.params.winId
            this.win = (await WinService.show(winId)).data
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