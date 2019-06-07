import SignUp from '~/views/auth/SignUp.vue'
import LogIn from '~/views/auth/LogIn.vue'

export default [
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/login',
        name: 'login',
        component: LogIn
    },
]
