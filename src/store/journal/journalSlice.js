import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
   name: 'journal',
    initialState: {
        isSaving: false,
        messageSave: '',
        notes: [],
        activeNote: null,
        // activeNote:{
        //      id:'ABC123',
        //      title:'',
        //      body:'' 
        //      date:12345,
        //      imagesUrls:[], https//:foto1.jpg https//      :foto2.jpg,etc....
        // }
        
   },
    reducers: {
        isSavingNote: (state) => {
            state.isSaving = true;   
       },
       addNewEmpyNote: (state,action) => {
           state.notes.push(action.payload);
           state.isSaving = false;
       },
       setActiveNote: (state, action) => {
           state.activeNote = action.payload;
       },
       setNotes: (state, action) => {
           state.notes = action.payload;
       },
       setSavingNotes: (state) => {
           state.isSaving = true;
           state.messageSave = '';
       },
       updateNote: (state, action) => {
           state.isSaving = false;
           state.notes = state.notes.map(note => {
               if (note.id === action.payload.id) {
                   return action.payload;
               }
               
               return note
           });
           //mostrar mensaje de actualizacion//
           
           state.messageSave = `${action.payload.title} , correctly updated`
        },
        setPhotosToActiveNote: (state,action) => {
            state.activeNote.imagesUrls = [...state.activeNote.imagesUrls, ...action.payload];
            state.isSaving = false;
        },

        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSave = '';
            state.notes = [];
            state.activeNote = null;
        },
        
       deleteNoteById: (state, action) => {
           state.activeNote = null;
           state.notes = state.notes.filter(note => 
               note.id !== action.payload );
       }
   }
});


// Action creators are generated for each case reducer function
export const { addNewEmpyNote, setActiveNote, setNotes, setSavingNotes, updateNote, clearNotesLogout, deleteNoteById, isSavingNote, setPhotosToActiveNote } = journalSlice.actions;