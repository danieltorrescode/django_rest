export default {
    data() 
    {
        return{
            selectedItem:{},
            addedItem:{},
            updatedItem: {},
            showModal:false
        }
    },
    methods:{
        listSelected(item){
            this.selectedItem = {...item}
            this.showModal = !this.showModal
        },
        updateList(item){
            this.selectedItem = {}
            if("id" in item){
                this.updatedItem = {...item}
            }else{
                this.addedItem = {...item}
            }
        },
    }
}
