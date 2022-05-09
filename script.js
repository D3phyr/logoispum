Vue.createApp({
    data() {
        return {
            theme: true,
            notes: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dicta maiores tempora culpa necessitatibus.'],
        }
    },
    methods: {
addNewNote() {
    if (this.inputText != '') {
        this.notes.push(this.inputText);
        this.inputText = '';
    }
},
},
}).mount('#app')