<template>
	<div class="main">
		<div class="timer">
		</div>
		<div class="frame">
			<div class="light-common red">
			</div>
		</div>
		<div class="frame central-frame">
			<div class="light-common yellow">
			</div>
		</div>
		<div class="frame">
			<div class="light-common green">
			</div>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
@import './styles/app.scss'
</style>