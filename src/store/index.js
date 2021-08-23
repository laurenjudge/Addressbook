import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import database from "../firebase/firebaseConfig";
import "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    placeholderContacts: [
      { name: 'name', address: '1 test rd, test', phone: '032793275' },
      { name: 'name', address: '1 test rd, test', phone: '032793275' },
      { name: 'name', address: '1 test rd, test', phone: '032793275' },
      { name: 'name', address: '1 test rd, test', phone: '032793275' }
    ],
    editContact: null,
    isLoggedIn: null,
    userFirstname: null,
    userToken: null
  },
  mutations: {
    toggleEditContact(state, payload) {
      state.editContact = payload;
    },
    setUserID(state, payload) {
      state.userToken = payload.id;
      console.log(state.userToken)
    },
    setUserName(state, name) {
      state.userFirstname = name;
      console.log(state.userFirstname);
    },
    updateIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    }
  },
  actions: {
    async getUser({commit}) {
      const db = await database.collection('users').doc(firebase.auth().currentUser.uid);
      const results = await db.get();
      commit("setUserID", results);
      commit("setUserName", results.data().firstname);
    }
  },
  modules: {
  }
})
