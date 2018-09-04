<template>

	<div class="navbar_B" v-bind:style="getNavbarBHeight">

		<div class="navbar-desktop" v-bind:class="[section.data.anim.type, navbarDesktopActive ? 'active' : '']">
			<wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background">
			</wwObject>

			<div class="content">
			</div>
		</div>

		<div class="navbar-mobile">
			<wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background">
			</wwObject>

			<div class="content">
			</div>
		</div>

	</div>

</template>

<script>
export default {
	name: "navbar_B",
	props: {
		section: Object
	},
	data() {
		return {
			navbarDesktopHeight: 70,
			navbarDesktopActive: false
		}
	},
	computed: {
		getNavbarBHeight() {
			return { height: this.section.data.anim.type == 'fixed' ? this.navbarDesktopHeight + 'px' : '' };
		}
	},
	methods: {
		init() {
			this.loadAnim();
		},
		loadAnim() {

			let navbarDesktop = this.$el.querySelector('.navbar-desktop');

			//Clean dropdown anim
			window.removeEventListener('scroll', this.onScrollDropDown);
			navbarDesktop.classList.remove('dropdown');

			//Init dropdown anim
			if (this.section.data.anim.type == 'dropdown') {
				window.addEventListener('scroll', this.onScrollDropDown);
				navbarDesktop.classList.add('dropdown');
			}
		},

		onScrollDropDown(event) {
			let targetSection = document.body.querySelector('[section-index="' + this.section.data.anim.index + '"]');

			//Calculate section top relative to screen view
			const top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);

			this.navbarDesktopActive = targetSection.offsetTop - top - this.navbarDesktopHeight - 20 <= 0;
		}
	},
	beforeDestroy: function () {
		//window.removeEventListener('scroll', this.wwOnScroll);
	},
	created() {
		//To be changed
		this.section.data.anim = {
			type: "fixed",
			index: 2,
			active: false
		}
	},
	mounted: function () {



		this.init();
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar_B {
}

/*=============================================m_ÔÔ_m=============================================\
  NAVBAR-DESKTOP
\================================================================================================*/
.navbar-desktop {
  display: none;
  height: 70px;
  width: 100%;
  z-index: 100;
  background-color: red;
}

.navbar-desktop.dropdown {
  position: fixed;
  transform: translateY(-100%);
  transition: transform 0.5s ease;
}

.navbar-desktop.dropdown.active {
  transform: translateY(0);
}

.navbar-desktop.fixed {
  position: fixed;
}

/*=============================================m_ÔÔ_m=============================================\
  NAVBAR-MOBILE
\================================================================================================*/
.navbar-mobile {
}

/* 992 : desktop and beyond */
@media (min-width: 992px) {
  .navbar-desktop {
    display: block;
  }

  .navbar-mobile {
    display: none;
  }
}
</style>
