const { createApp } = Vue

createApp({

    data() {

        return {

            message: '',
            messaggio: '',

        };

    },

        created() {
  
            // richiesta API

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                console.log(res.data.response);

                this.message = res.data.response;
            })

            // axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=10').then((res) => {
            //     console.log(res);
        
            //     // lo assegno alla mia proprietà
            //     this.message = res.data.response;
        
            // });
        
        },

}).mount('#app')