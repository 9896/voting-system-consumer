 import Vue from 'vue';
 import VueRouter from 'vue-router';
 Vue.use(VueRouter)

import Users from '../components/Users';
import Venues from '../components/Venues'

import Home from '../components/pages/Home'
import Login from '../components/pages/Login'
import CreateElection from '../components/pages/CreateElection'
import PreActiveElections from '../components/pages/PreActiveElections'
import ActiveElections from '../components/pages/ActiveElections'
import PostActiveElections from '../components/pages/PostActiveElections'
import Participants from '../components/pages/Participants'
import Participant from '../components/pages/Participant'
import ParticipationRequests from '../components/pages/ParticipationRequests'
import ParticipationRequest from '../components/pages/ParticipationRequest'

// Vue.use(VueRouter);

const routes = [
    {path:'/', name:'Home', component:Home, children:
    [
        {path:'/users', name:'Users', component:Users},
        {path:'/venues', component:Venues},
        {path: '/createElection', name: 'CreateElection', component:CreateElection},
        {path: '/preActiveElections', name: 'PreActiveElections', component:PreActiveElections},
        {path: '/activeElections', name:'ActiveElections', component:ActiveElections},
        {path: '/participants', name:'Participants', component:Participants},
        {path: '/postActiveElections', name:'PostActiveElections', component:PostActiveElections},       
        {path: '/participant/:id', name:'Participant', component:Participant},
        {path: '/participationRequests', name:'ParticipationRequests', component:ParticipationRequests},
        {path: '/participationRequest/:id', name:'ParticipationRequest', component:ParticipationRequest},
    ]},
    
    {path: '/login', name:'Login', component:Login}

];


const router = new VueRouter({
   // mode: 'history',
    routes
})

export default router;