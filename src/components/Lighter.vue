<template>
  <div class="lighter" id="lighter">
    <div class="red" :class="[color!='red' ? 'opacity' : 'noOpacity']"></div>
    <div class="yellow" :class="[color!='yellow' ? 'opacity' : 'noOpacity']">
      <span class="timer">{{ time }}</span>
    </div>
    <div class="green" :class="[color!='green' ? 'opacity' : 'noOpacity']"></div>
  </div>
</template>

<script>
export default {
  name: "Lighter",
  props: {
    color: String,
  },
  data() {
    return { 
      time: 0,
      next: "", 
      curColor: "",
    }
  },
  mounted(){
    if(localStorage.time){
      this.time = localStorage.time;
      this.next = localStorage.next;
      this.curColor = localStorage.curColor;
    }
  },
  watch:{
    time(newTime){
      localStorage.time = newTime;
    },
    next(newNext){
      localStorage.next = newNext;
    },
    curColor(newColor){
      localStorage.curColor = newColor;
    }
  },
  created(){
    setInterval(()=>{
      if(this.curColor == this.$route.params.color){
        if(this.time < 2){
          if(this.next=='red'){
            this.time=11;
            this.next='yellowG';
            this.$router.push('/red')
          } else if(this.next=='green'){
              this.time=16;
              this.next='yellowR';
              this.$router.push('/green')
          } else if(this.next=='yellowR'){
                this.time=4;
                this.next='red';
                this.$router.push('/yellow')
          } else {
            this.time=4;
            this.next = 'green';
            this.$router.push('/yellow')
          }
          this.curColor = this.$route.params.color;
        }
        this.time--;
        }
      else{
        this.curColor = this.$route.params.color;
        var temp = new String(this.curColor);
        if(temp[0]=='r'){
          this.next = 'yellowG';
          this.time = 10;
        } else if(temp[0]=='g'){
          this.next = 'yellowR';
          this.time = 15;
        } else{
          this.next = 'green';
          this.time = 3;
        }
      } 
    }, 1000) 
  }
};
</script>

<style scoped>
.timer {
  position: absolute;
  top: 40%;
  left: 45%;
  font-size: 2em;
}
.lighter {
  display: flex;
  flex-direction: row;
}
.red,
.yellow,
.green {
  width: 200px;
  height: 200px;
  margin: auto;
}
.red {
  background: red;
}
.yellow {
  background: yellow;
  position: relative;
}
.green {
  background: green;
}
.opacity {
  opacity: 0.5;
  transition: opacity 0.5s;
}
.noOpacity{
  transition: opacity 0.5s;
}
</style>
