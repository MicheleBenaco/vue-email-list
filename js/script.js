const {createApp} = Vue;


const app = createApp ({
    data() {
      return {
        arrayemail: [],
      }
    },
    methods:{

    },
    created(){
      for(let i = 0; i<10; i++){

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((respnose)=>{
        console.log(respnose.data.response);
        this.arrayemail.push(respnose.data.response);
        })
      }

  
    },
  })
  
  app.mount('#app');



  // https://flynn.boolean.careers/exercises/api/random/mail