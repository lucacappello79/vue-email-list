const { createApp } = Vue

createApp({

    data() {

        return {

            email: [],

        };

    },

        created() {

            for (let i = 0; i < 10; i++) {
  
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {

                console.log(res.data.response);
                console.log(res);

                this.email.push(res.data.response);
            })
        }

        },

}).mount('#app')