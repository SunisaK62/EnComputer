import Api from '@/services/Api'

export default {
    index() {
        return Api().get('wins')
    },
    show(winId){
        return Api().get('win/'+winId)
    },
    post(win){
        return Api().post('win', win)
    },
    put(win){
        return Api().put('win/'+win.id, win)
    },
    delete(win){
        return Api().delete('win/'+win.id, win)
    },
}