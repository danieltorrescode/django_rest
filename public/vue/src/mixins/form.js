export default {
    props:{
        formResource:{
            type: String,
            required: true
        },
        formSelected:{
            type: Object,
            required: false
        },
    },
    data() {
        return{
            formCalendar: false,
            formValid: true,
            formLoading: true,
            form:{
                name:null,
                status:null
            },
        }
    },
    watch:{
        formSelected(){
            this.form = { ...this.formSelected }
            delete this.form.id
        }, 
    },
    computed:{
        isAdding(){
            return JSON.stringify(this.formSelected) == "{}" 
        }
    },
    methods:
    {
        formReset () {
            this.$refs.form.reset()
            this.$emit('closeModal')
        },
        validate () {
            if (this.$refs.form.validate()) {
                this.afterValidate()
            }
        },
        afterValidate:function(){
            if(this.isAdding){
                this.addTask()
            }else{
                this.editTask()
            }
        },
    } 
}
