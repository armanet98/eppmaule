<template lang="html">
  <div class="optionbox">
           <select v-model="current"> 
              <option v-for="talla in tallas">{{talla.text}}</option>
           </select>
          
       </div>
</template>

<script>
export default {
  name: 'DropdownExample',
  data() {
    return {
      current: null,
    };
  },
};
</script>
<style lang="css" scoped>
.optionbox{

  position: absolute;
  top: 50%;
  left: 73.5%;
  transform: translate(-50%,-50%);
}

.optionbox select {
    background: #E91E63;
    color: #fff;
    padding: 10px;
    width: 250px;
    height: 50px;
    border: none;
    font-size: 20px;
    box-shadow: 0 5px 48px rgb(93, 15, 9);
    -webkit-appearance: button;
    outline: none;
}

.optionbox:before{
  content: '🔻';
  font-family: "Font Awesome 5 free";
  position: absolute;

  top: 0;
  right: 0;

  height: 50px;
  width: 50px;
  background: #ecebeb;
  text-align: center;
  line-height: 50px;
  color:#fff;
  font-size: 30px;
  pointer-events: none;


}

.optionbox:hover:before{
   
    background: #c72059;


  }
</style>