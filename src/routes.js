import About from './components/About.vue'
import Landing from './components/HelloWorld.vue'
import Registration from './components/Register.vue'
import LogIn from './components/LogIn.vue'
import Profile from './components/Profile.vue'
import AddItem from './components/AddItem.vue'
import Community from './components/Community.vue'
import AddItem2 from './components/AddItem2.vue'
import Wishlist from './components/Wishlist.vue'
import Marketplace from './components/Marketplace.vue'
import Item from './components/Item.vue'
import EditItem from './components/EditItem.vue'
import EditProfile from './components/EditProfile.vue'
import UserProfile from './components/UserProfile.vue'
import ChatList from './components/ChatList.vue'
import Chat from './components/Chat.vue'
import DashBoard from './components/DashBoard.vue'


export default[
    { path: '/', name: 'landing', component: Landing},
    { path: '/about', name: 'about', component: About},
    { path: '/register', name: 'register', component: Registration},
    { path: '/login', name: 'login', component: LogIn},
    { path: '/profile', name: 'profile', component: Profile},
    { path: '/community', name: 'community', component: Community},
    { path: '/additem', name: 'additem', component: AddItem},
    { path: '/additem2', name: 'additem2', component: AddItem2},
    { path: '/wishlist', name: 'wishlist', component: Wishlist},
    { path: '/marketplace', name: 'marketplace', component: Marketplace},
    { path: '/item', name: 'item', component: Item},
    { path: '/edititem', name: 'edititem', component: EditItem},
    { path: '/editprofile', name: 'editprofile', component: EditProfile},
    { path: '/userprofile', name: 'userprofile', component: UserProfile},
    { path: '/chat', name: 'chat', component: Chat},
    { path: '/chatlist', name: 'chatlist', component: ChatList},
    { path: '/dashboard', name: 'dashboard', component: DashBoard}    
]