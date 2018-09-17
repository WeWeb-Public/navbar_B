<template>

	<div class="navbar_B" v-bind:style="getNavbarBHeight">

		<div class="navbar-desktop" v-bind:class="[section.data.style.anim.type, navbarDesktopActive ? 'active' : '', section.data.style.shadow]" v-bind:style="getNavbarBorders">
			<wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background">
			</wwObject>

			<div class="content">
				<div class="left-items">
					<div class="link-container" v-for='link in section.data.links' v-bind:key='link.uniqueId'>
						<wwObject class="link" v-bind:ww-object="link">
						</wwObject>
						<div class="sublinks-container" v-if="link.data.isMenu">
							<wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background">
							</wwObject>
							<div class="sublink-container" v-for='sublink in link.data.links' v-bind:key='sublink.uniqueId'>
								<wwObject class="sublink" v-bind:ww-object="sublink">
								</wwObject>
							</div>
						</div>
					</div>
				</div>
				<div class="center-items">
					<wwObject class="logo" v-bind:ww-object="section.data.logo" ww-fixed-ratio="50">
					</wwObject>
				</div>
				<div class="right-items">
					<wwObject class="text" v-bind:ww-object="section.data.text">
					</wwObject>
				</div>
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
			return {
				height: this.section.data.style.anim.type == 'fixed' ? this.navbarDesktopHeight + 'px' : ''
			};
		},
		getNavbarBorders() {
			const borders = this.section.data.style.borders;
			if (!borders.length) {
				return {};
			}
			return {
				'border-top': borders[0].width + 'px ' + borders[0].style + ' ' + borders[0].color,
				'border-right': borders[1].width + 'px ' + borders[1].style + ' ' + borders[1].color,
				'border-bottom': borders[2].width + 'px ' + borders[2].style + ' ' + borders[2].color,
				'border-left': borders[3].width + 'px ' + borders[3].style + ' ' + borders[3].color,
			}
		}
	},
	methods: {
		init() {
			this.section.data.dataMigrated = true;
			console.log(this.section.data)
			this.loadAnim();
		},
		migrateOldData() {
			if (this.section.data.dataMigrated) {
				return;
			}

			this.section.data.style = this.section.data.style || {};

			//Migrate animation
			this.section.data.style.anim = {
				type: this.section.data.navbarAnim == 'ww-dropdown' ? 'dropdown' : 'fixed',
				index: this.section.data.navbarAnimSectionIndex || 0
			}

			//Migrate Shadow 
			this.section.data.style.shadow = this.section.data.navbarShadow || "";

			//Migrate Borders 
			this.section.data.style.borders = this.section.data.borders || null;

			if (wwLib.$store.state.design.info.navbar) {
				//Migrate Links
				//(Keep only links that are not hidden)
				this.section.data.links = wwLib.$store.state.design.info.navbar.links.filter(link => { return !link.hidden; });
				this.section.data.links = this.section.data.links.filter(link => { return !this.section.data.hiddenLinks[link.uniqueId]; });

				//Do the same for sublinks in menus
				for (let link of this.section.data.links) {
					if (link.data.isMenu) {
						link.data.links = link.data.links.filter(link => { return !link.hidden; });
						link.data.links = link.data.links.filter(link => { return !this.section.data.hiddenLinks[link.uniqueId]; });
					}
				}

				//Migrate Right Text
				this.section.data.text = wwLib.$store.state.design.info.navbar.data.text;

				//Migrate Logo
				this.section.data.logo = wwLib.$store.state.design.info.navbar.logo;
			}

			//Delete unused keys
			delete this.section.data.hiddenLinks;
			delete this.section.data.isNew;
			delete this.section.data.logoSmall;
			delete this.section.data.menus;
			delete this.section.data.navbarAnim;
			delete this.section.data.navbarAnimSectionIndex;
			delete this.section.data.borders;
			delete this.section.data.navbarShadow;
			delete this.section.data.textColor;
			delete this.section.data.textSize;
		},
		loadAnim() {
			this.clearAnims();

			let navbarDesktop = this.$el.querySelector('.navbar-desktop');

			//Init dropdown anim
			if (this.section.data.style.anim.type == 'dropdown') {
				window.addEventListener('scroll', this.onScrollDropDown);
				navbarDesktop.classList.add('dropdown');

				//Force one scroll event to be sure that navbar will show when page does not load on top
				this.onScrollDropDown();
			}
			else {
				wwLib.wwNavbar.updateHeight(this.navbarDesktopHeight);
			}
		},
		clearAnims() {
			let navbarDesktop = this.$el.querySelector('.navbar-desktop');

			//Clean dropdown anim
			window.removeEventListener('scroll', this.onScrollDropDown);
			navbarDesktop.classList.remove('dropdown');
		},
		onScrollDropDown() {
			let targetSection = document.body.querySelector('[section-index="' + this.section.data.style.anim.index + '"]');

			//Calculate section top relative to screen view
			const top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);

			const isPageTop = (window.pageYOffset || document.documentElement.scrollTop) == 0;
			const isAboveSection = targetSection.offsetTop - top - this.navbarDesktopHeight - 20 <= 0;

			this.navbarDesktopActive = !isPageTop && isAboveSection;

			wwLib.wwNavbar.updateHeight(this.navbarDesktopActive ? this.navbarDesktopHeight : 0);
		}
	},
	beforeDestroy: function () {
		this.clearAnims();
	},
	created() {
		this.migrateOldData();
	},
	mounted: function () {

		wwLib.$on('wwNavbar:height', function (newHeight) {
			console.log("NEW HEIGHT : ", newHeight)
		});

		this.init();

	}
};
</script>

<style scoped>
.navbar_B {
  color: white;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/*=============================================m_ÔÔ_m=============================================\
  NAVBAR-DESKTOP
\================================================================================================*/
.navbar-desktop {
  display: none;
  height: 70px;
  width: 100%;
  z-index: 100;
}

.navbar-desktop.dropdown {
  position: fixed;
  transform: translateY(calc(-100% - 20px));
  transition: transform 0.5s ease;
}

.navbar-desktop.dropdown.active {
  transform: translateY(0);
}

.navbar-desktop.fixed {
  position: fixed;
}

.navbar-desktop .content {
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.navbar-desktop .left-items {
  height: 100%;
  flex-basis: calc(50% - 70px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.navbar-desktop .center-items {
  flex-grow: 0;
  flex-basis: 140px;
  height: 100%;
  text-align: center;
}

.navbar-desktop .right-items {
  height: 100%;
  flex-basis: calc(50% - 70px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.navbar-desktop .logo {
  width: 100%;
  height: 100%;
  display: inline-block;
}

.navbar-desktop .link-container {
  position: relative;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar-desktop .link {
  height: 100%;
}

.navbar-desktop .link-container:hover {
  background-color: rgba(175, 175, 175, 0.1);
}

.navbar-desktop .sublinks-container {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 50%;
  min-width: 100%;
  transform: translate(-50%, -2em);
  transition: transform 0.3s ease, opacity 0.3s ease;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  white-space: nowrap;
}

.navbar-desktop .link-container:hover .sublinks-container {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
  z-index: 1;
}

.navbar-desktop .sublink-container {
  position: relative;
}

.navbar-desktop .sublink-container:hover {
  background-color: rgba(175, 175, 175, 0.1);
}

.navbar-desktop .sublink {
  padding: 10px 15px;
}

/*=============================================m_ÔÔ_m=============================================\
  NAVBAR-MOBILE
\================================================================================================*/
.navbar-mobile {
}

/*=============================================m_ÔÔ_m=============================================\
  SHADOWS
\================================================================================================*/
.ww-class-navbar-shadow-box-none {
}

.ww-class-navbar-shadow-box-small {
  -moz-box-shadow: 0px 3px 5px -3px rgba(50, 50, 50, 0.75);
  -webkit-box-shadow: 0px 3px 5px -3px rgba(50, 50, 50, 0.75);
  -o-box-shadow: 0px 3px 5px -3px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 3px 5px -3px rgba(50, 50, 50, 0.75);
}

.ww-class-navbar-shadow-box-medium {
  -webkit-box-shadow: 0px 4px 10px -3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 4px 10px -3px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 4px 10px -3px rgba(50, 50, 50, 0.75);
}

.ww-class-navbar-shadow-box-big {
  -webkit-box-shadow: 0px 2px 15px -3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 2px 15px -3px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 2px 15px -3px rgba(50, 50, 50, 0.75);
}

/*=============================================m_ÔÔ_m=============================================\
  MEDIA QUERIES
\================================================================================================*/
@media (min-width: 768px) {
  .navbar-desktop .content {
    width: 750px;
  }
}

/* 992 : desktop and beyond */
@media (min-width: 992px) {
  .navbar-desktop {
    display: block;
  }

  .navbar-mobile {
    display: none;
  }

  .navbar-desktop .content {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .navbar-desktop .content {
    width: 1170px;
  }
}
</style>
