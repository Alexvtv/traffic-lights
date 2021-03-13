<template>
	<div v-if="isActive" class="light active">
	</div>
	<div v-else class="light inactive">
	</div>

	<div id="timer">
		<p>{{seconds}}</p>
	</div>
</template>

<script>
export default {
  name: 'Green',
  data() {
    return {
      seconds: 15,
      isBlinking: false,
      isActive: true
    }
  },
  methods: {
  	blinking() {
  		this.isBlinking = true
  		setInterval(() => {
  			this.isActive = !this.isActive
  		}, 400)
  	}
  },
 	mounted() {
 		if((sessionStorage.getItem('sec') !== null) && 
 			(sessionStorage.getItem('sec') > 0)) {
 			this.seconds = sessionStorage.getItem('sec')
 		}
 		setInterval(() => {
 			this.seconds -= 1
 			sessionStorage.setItem('sec', this.seconds)
 			if((this.seconds <= 3) && (this.isBlinking === false)) {
 				this.blinking()
 			}
 			if(this.seconds === 0) {
  			this.$router.push('/yellow')
  		}
 		}, 1000)
 		sessionStorage.setItem('page', 'green')
  }
}
</script>

<style lang="scss" scoped>
.light {
	top: 431px;
}
.active {
	background-color: #30e830;
}
.inactive {
	background-color: transparent;
}
</style>