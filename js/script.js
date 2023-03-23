const { createApp } = Vue

createApp({

    data() {

        return {

            email: [],
            counter: 0,
            maxEmailAllowed: 10,

        };

    },

    created() {

        for (let i = 0; i < this.maxEmailAllowed; i++) {
  
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {

                console.log(res.data.response);
                console.log(res);
                
                this.email.push(res.data.response);
                this.counter++;

            })

        }

    },

}).mount('#app')