<template>
  <div class="all">
    <div class="info">
      <div class="items-display">
        <div class="name">{{ thing.title }}
          <span class="line">.................</span>
          <div class="price">{{ thing.quantity * thing.price }} kr</div>
        </div>
      </div>

      <div class="modify">
        <a  @click="$emit('increase', thing.id)">
          <img src="@/assets/graphics/arrow-up.svg" alt="up" />
        </a>
        <div >{{ thing.quantity }}</div>
        <a  @click="$emit('minimize', thing.id)">
          <img src="@/assets/graphics/arrow-down.svg" alt="down" />
        </a>
      </div>
      <a  class="close" @click="$emit('delete', thing.id)">
        <img src="@/assets/graphics/close.svg" alt="close"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thing: Object,
  },
};
</script>

<style scoped>
.all{width: 100%;
  height: 300px;
}

.info{
  margin: 20px;
}
.items-display{
  font-size: 1.3rem;
  font-weight: bold;
}
.name{
  margin-left: -10%;
  margin-top: 4%;
}
.price {
  text-align: left;
  margin-left: 62%;
  margin-top: -4%;
  padding-top: 0%;
}

.line{
  margin-top: 50%;
  margin-right: 30%;
  margin-left: 3%;
  color: rgba(20, 19, 21, 0.85);
  font-size: 1.8rem;
}

img[alt="up"] {
  height: 13px;
}
img[alt="down"] {
  height: 13px;

}
img[alt="close"] {
  height: 30px;
  cursor: pointer;
  margin-top: 3px;
  margin-left: 50%;
}
.modify {
  display: flex;
  flex-direction: column;

  margin-left: 55%;
  cursor: pointer;
  font-size: 1rem;
  height: 12px;
  margin-top: -8%;
}
.close{
  margin-left: 155px;
}


</style>
