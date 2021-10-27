import Api from '@/services/Api'
export default {
    index() {
        return Api().get('programs')
    },
    show(programId) {
        return Api().get('program/' + programId)
    },
    post(program) {
        return Api().post('program', program)
    },
    put(program) {
        return Api().put('program/' + program.id, program)
    },
    delete(program) {
        return Api().delete('program/' + program.id, program)
    },
}