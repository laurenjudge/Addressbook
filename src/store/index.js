import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import database from "../firebase/firebaseConfig";
import "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    contactsLoaded: false,
    editContact: null,
    isLoggedIn: null,
    userToken: null,
    contactName: null,
    contactPhone: null,
    contactAddress: null,
    contactNotes: null
  },
  mutations: {
    toggleEditContact(state, payload) {
      state.editContact = payload;
    },
    setUser(state, payload) {
      state.userToken = payload.id;
    },
    setCurrentContact(state, payload) {
      state.contactName = payload.contactName;
      state.contactPhone = payload.contactPhone;
      state.contactAddress = payload.contactAddress;
      state.contactNotes = payload.contactNotes;
    },
    updateIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    updateName(state, payload) {
      state.contactName = payload;
    },
    updatePhone(state, payload) {
      state.contactPhone = payload;
    },
    updateAddress(state, payload) {
      state.contactAddress = payload;
    },
    updateNotes(state, payload) {
      state.contactNotes = payload;
    },
    updateContact(state, payload) {
      state.contacts = state.contacts.filter((contact) => {
        return contact.contactID !== payload
      })
    }
  },
  actions: {
    async getUser({commit}) {
      const db = await database.collection('users').doc(firebase.auth().currentUser.uid);
      const results = await db.get();
      commit("setUser", results);
    },
    async getContacts({ state }) {
      const db = await database.collection('contacts');
      const results = await db.get();
      results.forEach((doc) => {
        // Prevent duplicates
        if(!state.contacts.some((contact) => contact.contactID === doc.id)) {
          const data = {
            contactID: doc.data().contactID,
            contactName: doc.data().contactName,
            contactPhone: doc.data().contactPhone,
            contactAddress: doc.data().contactAddress,
            contactNotes: doc.data().contactNotes
          }
          state.contacts.push(data);
        }
      });
      state.contactsLoaded = true;
    },
    async deleteContact({ commit }, payload) {
      const getContact = await database.collection('contacts').doc(payload);
      await getContact.delete();
      commit('updateContact', payload);
    },
    async updateContactList({ commit, dispatch }, payload) {
      commit('updateContact', payload);
      await dispatch('getContacts');
    }
  },
  modules: {
  }
})
